// soma — guarda os arquivos do app para abrir rápido e sem internet.
// Os dados ficam no Firebase (com cópia offline própria), não aqui.
const CACHE = 'soma-v1';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // Rede primeiro (pega sempre a versão nova); sem internet, usa a cópia guardada
  e.respondWith(fetch(req).then(res => {
    const copia = res.clone();
    caches.open(CACHE).then(c => c.put(req, copia));
    return res;
  }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
});
