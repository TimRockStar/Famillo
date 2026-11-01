// Garde l'app disponible sans Internet ; changer VERSION à chaque mise à jour.
const VERSION = 'v15';
const FICHIERS = ['./', 'index.html', 'confidentialite.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'favicon.png', 'nunito.woff2'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(VERSION).then(c => c.addAll(FICHIERS))); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== VERSION).map(n => caches.delete(n)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  // La page passe d'abord par le réseau pour recevoir les mises à jour tout de suite ; le cache sert hors ligne.
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then(r => { const copie = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copie)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
