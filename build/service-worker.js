"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","b6da6a753073d259689cc7db130f4f5d"],["/static/css/main.d18f596f.css","723dcaba66d0d27b8d21b7aefdc54bef"],["/static/media/arrow-bottom.43fbde4f.svg","43fbde4fbcc4ab9509978643dc5628a6"],["/static/media/arrow-left.36408ca4.svg","36408ca4930b9b402b4b5cccd52b6668"],["/static/media/close.8a93096a.svg","8a93096a4880875e640b24d288fb10a1"],["/static/media/logo.86060fac.svg","86060fac9b3557d031560ab82548f126"],["/static/media/pin-type-1-active.a9ae9b78.svg","a9ae9b78a134f3d7a2a7d4ad91e2664a"],["/static/media/pin-type-1.cc65fe7e.svg","cc65fe7e6859e01df8ef449d6f9ea125"],["/static/media/pin-type-2-active.bc025eea.svg","bc025eea572697742061b2854160b320"],["/static/media/pin-type-2.d931c8d8.svg","d931c8d8cb3604c032f7baa1a788ad38"],["/static/media/pin-type-3-active.0c92b627.svg","0c92b6271bd158ac48f83c29bc24a656"],["/static/media/pin-type-3.bbaf4f9d.svg","bbaf4f9d4667a314fb66bacbc38749c0"],["/static/media/pin-type-4-active.02834418.svg","02834418e492c4c274d85c82fb5508e4"],["/static/media/pin-type-4.fb385245.svg","fb385245320eafa0cea1d2f1de987a41"],["/static/media/pin-type-5-active.3ba56b70.svg","3ba56b70fc2cff4b98a73d0d26a40eb0"],["/static/media/pin-type-5.9c7a29af.svg","9c7a29af050f7473ad8dba69151728a3"],["/static/media/pin-type-6-active.bb692d31.svg","bb692d3196db2f2058ec3e6fa02f771d"],["/static/media/pin-type-6.71acad6f.svg","71acad6fad3a80a22b8ca9556dec99de"],["/static/media/pin-type-7-active.7a90a515.svg","7a90a5152584975a8520a0fa389abaef"],["/static/media/pin-type-7.eb34e53d.svg","eb34e53dc16ef89648933c7d193703c2"],["/static/media/type-1.0e39211d.svg","0e39211dd0243940b7fca770bfcaa904"],["/static/media/type-2.bbfd5771.svg","bbfd5771f2af44f1db2a2cbac80d4603"],["/static/media/type-3.ba77160f.svg","ba77160f23790fb2d18ead13f425dd94"],["/static/media/type-4.f0373c3c.svg","f0373c3cd9e698193a98374885db07bf"],["/static/media/type-5.264f99cf.svg","264f99cf5748dfd4ba275ef29fe652a6"],["/static/media/type-6.c4acb548.svg","c4acb5486f56c2dcbcdb2d19918ed230"],["/static/media/type-7.8fd7c4ae.svg","8fd7c4aeeed51f1066c650a5b8d520cc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});