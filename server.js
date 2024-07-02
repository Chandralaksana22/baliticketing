const express = require('express');
const compression = require('compression');
const { createServer: createViteServer } = require('vite');

async function startServer() {
	const app = express();

	// Terapkan kompresi gzip
	app.use(compression());

	// Tambahkan middleware caching kustom
	app.use((req, res, next) => {
		if (/\.(js|css|png|gif|webp)$/.test(req.url)) {
			res.setHeader('Cache-Control', 'public, max-age=31536000');
		}
		next();
	});

	// Buat server Vite dalam mode middleware
	const vite = await createViteServer({
		server: { middlewareMode: 'html' },
	});

	// Gunakan instance connect Vite sebagai middleware
	app.use(vite.middlewares);
}

startServer();
