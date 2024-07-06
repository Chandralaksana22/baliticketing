const express = require('express');
const compression = require('compression');
const { createServer: createViteServer } = require('vite');

async function startServer() {
	const app = express();

	
	app.use(compression());
	app.use((req, res, next) => {
		if (/\.(js|css|png|gif|webp)$/.test(req.url)) {
			res.setHeader('Cache-Control', 'public, max-age=31536000');
		}
		next();
	});
	const vite = await createViteServer({
		server: { middlewareMode: 'html' },
	});

	app.use(vite.middlewares);
}

startServer();