if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>i(s,l),a={module:{uri:l},exports:o,require:t};e[l]=Promise.all(n.map((s=>a[s]||t(s)))).then((s=>(r(...s),o)))}}define(["./workbox-f3e6b16a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/auth-PrcDRVv8.js",revision:null},{url:"assets/caption-parsing-KgWHY-ZV.js",revision:null},{url:"assets/DeveloperPage-YRL99ov_.js",revision:null},{url:"assets/hls-zqvr_1ex.js",revision:null},{url:"assets/Icons-b9E2CxRo.js",revision:null},{url:"assets/Icons-L9H4Bkh4.css",revision:null},{url:"assets/ietf-language-tags-BPvdlnin.js",revision:null},{url:"assets/index-cX7xNzSj.js",revision:null},{url:"assets/index-xUcYUt-t.css",revision:null},{url:"assets/locales-PAqV36SG.js",revision:null},{url:"assets/PlayerView-AXNsEPcF.js",revision:null},{url:"assets/react-dom-PGDK0Dvr.js",revision:null},{url:"assets/Settings-iHqCgPgs.js",revision:null},{url:"assets/TestView-3xzeKz-G.js",revision:null},{url:"assets/vendor-Se1CAlJD.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"config.js",revision:"2f5b2907a9b62ca64ecbbab5ad5c1a4a"},{url:"index.html",revision:"529055c545328ab2cb85ed690d702324"},{url:"favicon.ico",revision:"de7674bb092bad4dc08dd526e8464697"},{url:"apple-touch-icon.png",revision:"cae0ab92548ba98dd5aeb34235f9617f"},{url:"safari-pinned-tab.svg",revision:"fd363adc5ac206e38c78a8a9d9bbde85"},{url:"android-chrome-192x192.png",revision:"496c321c53778a12b16f31802f6f2bc3"},{url:"android-chrome-512x512.png",revision:"9c2ae7b2713faecc1a99c7918c885934"},{url:"manifest.webmanifest",revision:"31b651545b2cf072f732b7c1609d61c5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
