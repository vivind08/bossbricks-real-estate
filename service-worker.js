const CACHE_NAME = "bossbricks-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/login.html",
  "/builders.html",
  "/projects.html",
  "/tax.html",
  "/style.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
