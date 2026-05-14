const CACHE_NAME = 'fitlife-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/directions.html',
  '/signup.html',
  '/css/style.css',
  '/js/main.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
