/* ==========================================================================
   FILM BEYNİ — sw.js (Service Worker)
   Uygulamayı önbelleğe alır ve yeni bir sürüm yayınlandığında (bu dosya veya
   CACHE_VERSION değiştiğinde) sayfaya haber verir, böylece kullanıcıya
   "yeni güncelleme var" bildirimi gösterilebilir.

   ÖNEMLİ: Her yeni yayında CACHE_VERSION değerini değiştirin (örn. "v3").
   Aksi halde tarayıcı eski dosyaları önbellekten sunmaya devam edebilir.
   ========================================================================== */
const CACHE_VERSION = "v2";
const CACHE_NAME = `filmbeyni-${CACHE_VERSION}`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./favicon-32.png",
  "./favicon-16.png",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-1024.png",
];

/* Kurulum: dosyaları önbelleğe al */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => {}) // eksik/erişilemeyen bir dosya tüm kurulumu bozmasın
  );
  // Not: skipWaiting burada ÇAĞRILMIYOR — kullanıcı "Yenile"ye basana kadar
  // yeni sürüm bekletiliyor (SKIP_WAITING mesajıyla tetiklenir).
});

/* Etkinleştirme: eski sürüm önbelleklerini temizle */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k.startsWith("filmbeyni-") && k !== CACHE_NAME)
            .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

/* İstekler: önce ağ, olmazsa önbellek (app shell dosyaları için) */
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});

/* Sayfadan "hemen etkinleş" komutu gelirse yeni sürümü devreye al */
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
