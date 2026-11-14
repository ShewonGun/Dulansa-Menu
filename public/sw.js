// Service worker: lets the menu open without a connection once it has loaded.
// Bump CACHE when you change this file's strategy so old caches are cleared.
const CACHE = 'menu-v5'

// Files that aren't referenced directly in index.html but are needed offline.
const EXTRA = ['/images/logo-light.png', '/images/logo-dark.png']

// On install, cache the page plus the JS/CSS/font stylesheet it references.
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE)
      const res = await fetch('/', { cache: 'reload' })
      const html = await res.clone().text()
      await cache.put('/', res)
      const urls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
        .map((m) => m[1])
        .filter((u) => u.startsWith('/') || u.startsWith('https://fonts.googleapis.com'))
      await Promise.allSettled([...urls, ...EXTRA].map((u) => cache.add(u)))
      await self.skipWaiting()
    })(),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

const allowed = (url) =>
  url.origin === self.location.origin ||
  url.hostname === 'fonts.googleapis.com' ||
  url.hostname === 'fonts.gstatic.com'

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (!allowed(url)) return

  // Page loads: use the network when available (so updates show), else the cached copy.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((c) => c.put('/', copy))
          return res
        })
        .catch(() => caches.match('/')),
    )
    return
  }

  // Everything else: serve the cached copy instantly, refresh it in the background.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res.ok || res.type === 'opaque') {
            const copy = res.clone()
            caches.open(CACHE).then((c) => c.put(req, copy))
          }
          return res
        })
        .catch(() => cached)
      return cached || network
    }),
  )
})
