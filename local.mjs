// Minimal HTTP server for trying the built worker without production secrets.
import http from 'node:http';
import worker from './dist/server/index.js';

const host = '127.0.0.1';
const port = 8772;

http.createServer(async (request, response) => {
  try {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const body = Buffer.concat(chunks);
    const workerResponse = await worker.fetch(
      new Request(`http://${host}:${port}${request.url}`, {
        method: request.method,
        headers: request.headers,
        ...(body.length ? { body } : {}),
      }),
      process.env,
    );

    response.writeHead(workerResponse.status, Object.fromEntries(workerResponse.headers));
    response.end(Buffer.from(await workerResponse.arrayBuffer()));
  } catch {
    response.writeHead(500);
    response.end('Server error');
  }
}).listen(port, host, () => {
  console.log(`DS Compass local preview http://${host}:${port}`);
});
