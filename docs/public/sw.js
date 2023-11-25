self.skipWaiting();
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);
workbox.setConfig({
    // modulePathPrefix: '/third_party/workbox-vX.Y.Z/',
    debug: false
});


const { registerRoute } = workbox.routing;
const { precacheAndRoute } = workbox.precaching;
const { CacheFirst } = workbox.strategies;
const { CacheOnly } = workbox.strategies;
const { NetworkFirst } = workbox.strategies;
const { NetworkOnly } = workbox.strategies;
const { StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponsePlugin } = workbox.cacheableResponse;
const { ExpirationPlugin } = workbox.expiration;

//页面缓存  策略:网络优先 NetworkFirst
registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({
        cacheName: 'pages',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 30,
            }),
        ],
    }),
);

//css,js,worker缓存  策略:缓存+网络 StaleWhileRevalidate
registerRoute(
    ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
    new StaleWhileRevalidate({
        cacheName: 'assets',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 14,
            }),
        ],
    }),
);

//图片缓存  策略:缓存优先 CacheFirst
registerRoute(
    ({ request }) =>
    request.destination === 'image',
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            }),
            new ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 14,
            }),
        ],
    }),
);

//字体缓存  策略:缓存优先 CacheFirst
registerRoute(
    ({ request }) =>
    request.destination === 'font',
    new CacheFirst({
        cacheName: 'fonts',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            }),
            new ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 14,
            }),
        ],
    }),
);