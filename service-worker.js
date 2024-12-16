self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('dts-cache').then(cache => {
            return cache.addAll([
                '/',
                '/manifest.json',
                '/styles.css',
                '/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
