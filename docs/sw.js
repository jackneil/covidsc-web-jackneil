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

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

self.addEventListener('message', event => {
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
    url: '404.html',
    revision: '12a3983c9a553685a6753b7ccfd7b63d',
  },
  {
    url: 'covid-sc-app-b0d68a78.js',
    revision: 'a812804c75d490d53d26014a72fd08dc',
  },
  {
    url: 'index.html',
    revision: 'c1535e55e841c9ee74ff53a97a093efe',
  },
  {
    url: 'legacy/covid-sc-app-0827f511.js',
    revision: 'f89cfd9761b4765ebd513e72ee7d4a71',
  },
  {
    url: 'polyfills/core-js.577a5602a7262d6256830802d4aaab43.js',
    revision: 'ccf205728fe514f8276191669b5ea48d',
  },
  {
    url: 'polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js',
    revision: 'cff507bc95ad1d6bf1a415cc9c8852b0',
  },
  {
    url: 'polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js',
    revision: 'ed55766050be285197b8f511eacedb62',
  },
  {
    url: 'polyfills/fetch.191258a74d74243758f52065f3d0962a.js',
    revision: 'fcdc4efda1fe1b52f814e36273ff745d',
  },
  {
    url: 'polyfills/regenerator-runtime.9090ed1c23690e3072c21a7873cad285.js',
    revision: '9af9d9e480dfccc420d30729e319b821',
  },
  {
    url: 'polyfills/systemjs.6dfbfd8f2c3e558918ed74d133a6757a.js',
    revision: '683aabfb9b006607885b83e45e9a1768',
  },
  {
    url: 'polyfills/webcomponents.6954abecfe8b165751e6bc9b0af6c639.js',
    revision: '894a294495257c3d389efa3e1bd9bde7',
  },
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/index.html'));
