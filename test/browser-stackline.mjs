import assert from 'node:assert/strict';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
const executablePath=process.env.CHROME_BIN||'/usr/bin/google-chrome';
const browser=await puppeteer.launch({executablePath,headless:true,args:['--no-sandbox']});
try {
 const page=await browser.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addScriptTag({path:path.resolve(process.env.STACKLINE_TEST_PACKAGE||'.','setImmediate.js')});
 const result=await page.evaluate(()=>new Promise((resolve,reject)=>{
  const seen=[];
  setImmediate((a,b)=>seen.push(a+b),'browser','-ok');
  clearImmediate(setImmediate(()=>seen.push('cancelled')));
  if(seen.length)reject(new Error('callback executed synchronously'));
  setTimeout(()=>resolve({seen,types:[typeof setImmediate,typeof clearImmediate]}),100);
 }));
 assert.deepEqual(result,{seen:['browser-ok'],types:['function','function']});
 assert.deepEqual(errors,[]);
 console.log('Real Chromium shim scheduling, argument forwarding and cancellation passed.');
} finally {await browser.close();}
