module.exports = {
	globDirectory: 'docs/.vitepress/dist/',
	globPatterns: [
		'**/*.{css,js,ico}'
	],
	swDest: 'docs/.vitepress/dist/sw.js',
	// swSrc: 'dist/sw.js',
	skipWaiting: true,
	clientsClaim: true,
	runtimeCaching: [
		{
			urlPattern: /\.(html)$/i,
			handler: 'NetworkFirst',
			options: {
				cacheName: 'page',
				cacheableResponse: {
					statuses: [200]
				},
				expiration: {
					// maxEntries: 1000,
					maxAgeSeconds: 60 * 30
				}
			}
		},
		{
			urlPattern: /.*\.(css|js|ts|gz|br)$/i,
			handler: 'StaleWhileRevalidate',
			options: {
				cacheName: 'asset',
				cacheableResponse: {
					statuses: [200]
				},
				expiration: {
					// maxEntries: 1000,
					maxAgeSeconds: 60 * 60 * 24 * 30
				}
			}
		},
		{
			urlPattern: /.*\.(jpe?g|gif|png|svg|webp|avif|ico)$/i,
			handler: 'CacheFirst',
			options: {
				cacheName: 'image',
				cacheableResponse: {
					statuses: [200]
				},
				expiration: {
					// maxEntries: 1000,
					maxAgeSeconds: 60 * 60 * 24 * 30
				}
			}
		},
		{
			urlPattern: /.*\.(mp4|webm|avi|flv|mov)$/i,
			handler: 'CacheFirst',
			options: {
				cacheName: 'video',
				cacheableResponse: {
					statuses: [200]
				},
				expiration: {
					// maxEntries: 1000,
					maxAgeSeconds: 60 * 60 * 24 * 30
				}
			}
		},
		{
			urlPattern: /.*\.(ttf|otf|woff2?)$/i,
			handler: 'CacheFirst',
			options: {
				cacheName: 'font',
				cacheableResponse: {
					statuses: [200]
				},
				expiration: {
					// maxEntries: 1000,
					maxAgeSeconds: 60 * 60 * 24 * 30
				}
			}
		},
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};