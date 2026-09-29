import {validate,nbPredict,recommend,classify} from './engine.mjs';
const CATALOGUE=/*CATALOGUE*/ null,TRAIN=/*TRAIN*/ null,METRICS=/*METRICS*/ null,PAGE=/*PAGE*/ null;
const counts=new Map();
function json(data,status=200){return Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}})}
export default {async fetch(request,env={}){
 const url=new URL(request.url);
 if(request.method==='GET'&&url.pathname==='/')return new Response(PAGE,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'"}});
 if(request.method==='GET'&&url.pathname==='/api/catalogue')return json(CATALOGUE);
 if(request.method==='GET'&&url.pathname==='/api/metrics')return json(METRICS);
 if(request.method==='GET'&&url.pathname==='/api/health')return json({ok:true,modelConfigured:!!env.OPENROUTER_API_KEY,programmes:CATALOGUE.length});
 if(request.method==='POST'&&url.pathname==='/api/recommend'){
  if(request.headers.get('Origin')&&request.headers.get('Origin')!==url.origin)return json({error:'Origin rejected'},403);
  const text=await request.text();if(text.length>6000)return json({error:'Input too large'},413);
  let p;try{p=JSON.parse(text);if(p.direction&&p.direction!=='other'){const names={ai:'artificial intelligence',data:'data science',systems:'information systems',conversion:'computing conversion',business:'business analytics',education:'learning sciences'};p.goals=names[p.direction]||p.direction}p=validate(p)}catch(e){return json({error:e.message},400)}
  let label=p.direction||null,mode=p.direction?'selected-direction':'local-baseline',warning=null;
  if(p.use_ai!==false&&env.OPENROUTER_API_KEY){
   const id=request.headers.get('CF-Connecting-IP')||'local',minute=Math.floor(Date.now()/60000),rec=counts.get(id);
   if(rec?.minute===minute&&rec.count>=8)return json({error:'请求较多，请一分钟后重试。Please wait one minute.'},429);
   if(counts.size>2000)counts.clear();counts.set(id,{minute,count:rec?.minute===minute?rec.count+1:1});
   try{label=(await classify(p.goals,env.OPENROUTER_API_KEY,env.OPENROUTER_MODEL)).label;mode='llm-intent'}catch{warning='模型服务暂时不可用，已切换本地英文基线。Model unavailable; local English baseline used.';}
  }
  if(!label){label=nbPredict(p.goals,TRAIN).label;if(p.use_ai!==false&&!env.OPENROUTER_API_KEY)warning='AI 尚未配置，正在使用英文基线。AI not configured; English baseline used.';}
  return json({...recommend(p,label,CATALOGUE),mode,warning});
 }
 return json({error:'Not found'},404);
}};
