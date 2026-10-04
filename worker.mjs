// Hosted API boundary. Keeps the model key on the server and delegates
// classification, retrieval and English rules to engine.mjs.
import { validate, nbPredict, recommend, classify } from './engine.mjs';

const CATALOGUE = /*CATALOGUE*/ null;
const TRAIN = /*TRAIN*/ null;
const METRICS = /*METRICS*/ null;
const PAGE = /*PAGE*/ null;
const requestCounts = new Map();

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

function setDirectionGoal(profile) {
  if (!profile.direction || profile.direction === 'other') return profile;

  const directionNames = {
    ai: 'artificial intelligence',
    data: 'data science',
    systems: 'information systems',
    conversion: 'computing conversion',
    business: 'business analytics',
    education: 'learning sciences',
  };

  profile.goals = directionNames[profile.direction] || profile.direction;
  return profile;
}

function rateLimitExceeded(request, now = Date.now()) {
  const clientId = request.headers.get('CF-Connecting-IP') || 'local';
  const minute = Math.floor(now / 60000);
  const record = requestCounts.get(clientId);

  if (record?.minute === minute && record.count >= 8) return true;

  if (requestCounts.size > 2000) requestCounts.clear();
  requestCounts.set(clientId, {
    minute,
    count: record?.minute === minute ? record.count + 1 : 1,
  });
  return false;
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/') {
      return new Response(PAGE, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-store',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'no-referrer',
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'",
        },
      });
    }

    if (request.method === 'GET' && url.pathname === '/api/catalogue') {
      return json(CATALOGUE);
    }
    if (request.method === 'GET' && url.pathname === '/api/metrics') {
      return json(METRICS);
    }
    if (request.method === 'GET' && url.pathname === '/api/health') {
      return json({
        ok: true,
        modelConfigured: Boolean(env.OPENROUTER_API_KEY),
        programmes: CATALOGUE.length,
      });
    }
    if (request.method !== 'POST' || url.pathname !== '/api/recommend') {
      return json({ error: 'Not found' }, 404);
    }

    const origin = request.headers.get('Origin');
    if (origin && origin !== url.origin) return json({ error: 'Origin rejected' }, 403);

    const bodyText = await request.text();
    if (bodyText.length > 6000) return json({ error: 'Input too large' }, 413);

    let profile;
    try {
      profile = setDirectionGoal(JSON.parse(bodyText));
      profile = validate(profile);
    } catch (error) {
      return json({ error: error.message }, 400);
    }

    let label = profile.direction || null;
    let mode = profile.direction ? 'selected-direction' : 'local-baseline';
    let warning = null;

    if (profile.use_ai !== false && env.OPENROUTER_API_KEY) {
      if (rateLimitExceeded(request)) {
        return json({ error: 'Too many requests. Please wait one minute.' }, 429);
      }

      try {
        const classification = await classify(
          profile.goals,
          env.OPENROUTER_API_KEY,
          env.OPENROUTER_MODEL,
        );
        label = classification.label;
        mode = 'llm-intent';
      } catch {
        warning = 'Model unavailable; local English baseline used.';
      }
    }

    if (!label) {
      label = nbPredict(profile.goals, TRAIN).label;
      if (profile.use_ai !== false && !env.OPENROUTER_API_KEY) {
        warning = 'AI not configured; English baseline used.';
      }
    }

    return json({
      ...recommend(profile, label, CATALOGUE),
      mode,
      warning,
    });
  },
};
