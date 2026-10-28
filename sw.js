// Garde l'app disponible sans Internet ; changer VERSION à chaque mise à jour.
const VERSION = 'v5';
const FICHIERS = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'favicon.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(FICHIERS))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== VERSION).map(n => caches.delete(n))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
