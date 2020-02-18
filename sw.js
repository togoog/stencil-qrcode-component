/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/favicon.png",
    "revision": "786ac537ab37ad6e8662dd2549b6817b"
  },
  {
    "url": "assets/icon-192.png",
    "revision": "f2a6b449d9ad1adbe5fcd82eeaa25dc4"
  },
  {
    "url": "assets/icon-512.png",
    "revision": "167497489a9d3f751fbabcd8239d4872"
  },
  {
    "url": "assets/icon-719.png",
    "revision": "4bebfa0959bc92f9ba36051768392c0d"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-1826e5f0.js"
  },
  {
    "url": "build/p-3b66a627.js"
  },
  {
    "url": "build/p-93e23355.js"
  },
  {
    "url": "build/p-fa2fe2d1.js"
  },
  {
    "url": "build/p-tgb0angx.entry.js"
  },
  {
    "url": "index.html",
    "revision": "e9e78b7d55a8943e7b49385d5eca18b7"
  },
  {
    "url": "manifest.json",
    "revision": "4f1693cee61aeb94422d419cfc88d54a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
