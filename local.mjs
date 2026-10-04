// Minimal local server for exercising the built worker without production secrets.
import http from 'node:http';
import worker from './dist/server/index.js';
http.createServer(async(req,res)=>{try{const chunks=[];for await(const c of req)chunks.push(c);const body=Buffer.concat(chunks);const r=await worker.fetch(new Request('http://127.0.0.1:8772'+req.url,{method:req.method,headers:req.headers,...(body.length?{body}: {})}),process.env);res.writeHead(r.status,Object.fromEntries(r.headers));res.end(Buffer.from(await r.arrayBuffer()));}catch{res.writeHead(500);res.end('Server error')}}).listen(8772,'127.0.0.1',()=>console.log('DS Compass local preview http://127.0.0.1:8772'));
