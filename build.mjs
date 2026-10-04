// Build step: bundle versioned catalogue data and the browser page into one deployable worker.
import fs from 'node:fs';
fs.mkdirSync('dist/server',{recursive:true});
let worker=fs.readFileSync('worker.mjs','utf8');
for(const [name,file] of [['CATALOGUE','data/programmes.json'],['TRAIN','data/train_intents.json'],['METRICS','data/metrics.json']])worker=worker.replace('/*'+name+'*/ null',fs.readFileSync(file,'utf8'));
worker=worker.replace('/*PAGE*/ null',JSON.stringify(fs.readFileSync('index.html','utf8')));
worker=worker.replace("import {validate,nbPredict,recommend,classify} from './engine.mjs';",fs.readFileSync('engine.mjs','utf8').replaceAll('export ',''));
fs.writeFileSync('dist/server/index.js',worker);
console.log('Worker built: '+fs.statSync('dist/server/index.js').size+' bytes');
