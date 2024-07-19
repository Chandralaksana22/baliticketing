import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.webp","images/background biru - mobile.webp","images/background orange - mobile.webp","images/background-biru-desktop.webp","images/Bali Bird Park - desktop.webp","images/Bali Bird Park - mobile.webp","images/Bali Farm House - desktop.webp","images/Bali Farm House - mobile.webp","images/Bali Safari - desktop.webp","images/Bali Safari - mobile.webp","images/Bali Zoo - mobile.webp","images/balibird.webp","images/balibirdlogo.webp","images/balisafari.webp","images/balisafarihero.webp","images/balizoo-header.webp","images/balizoohero.webp","images/balizooherodesktop.webp","images/balizoologo.webp","images/bfh1.webp","images/bfh2.webp","images/bfh3.webp","images/bfh5.webp","images/bfh6.webp","images/bfhhero.webp","images/bg-card.webp","images/bg-desktop-biru.webp","images/bg-desktop.webp","images/bg-hijau.webp","images/bg-home.webp","images/bgbfh.webp","images/bgdetailticket.webp","images/bgfooter.webp","images/Booking.com_logo.svg","images/detailticketmobile.webp","images/Header.webp","images/hero-ticket.webp","images/herocontact.webp","images/Homepage-mobile.webp","images/iata.webp","images/image-1.webp","images/image-10.webp","images/image-11.webp","images/image-12.webp","images/image-13.webp","images/image-14.webp","images/image-15.webp","images/image-16.webp","images/image-2.webp","images/image-3.webp","images/image-4.webp","images/image-5.webp","images/image-6.webp","images/image-7.webp","images/image-8.webp","images/image-9.webp","images/Intersect.webp","images/klook.webp","images/logo.webp","images/logomob.webp","images/Logos.webp","images/Logos2.webp","images/Logos3.webp","images/Logos4.webp","images/maps.webp","images/mbalibird.webp","images/mbalifarm.webp","images/mbalisafari.webp","images/mbalizoo.webp","images/member1.webp","images/member2.webp","images/plan.webp","images/theme-preview.webp","images/trip.webp","images/varunalogo.webp","images/winter.webp","robots.txt"]),
	mimeTypes: {".webp":"image/png",".webp":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CXdpvrm5.js","app":"_app/immutable/entry/app.BnednGbl.js","imports":["_app/immutable/entry/start.CXdpvrm5.js","_app/immutable/chunks/entry.7Z0CLvcL.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.DQQKAF7E.js","_app/immutable/entry/app.BnednGbl.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.BAQYadr3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/detailcostumer",
				pattern: /^\/detailcostumer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/placetogo",
				pattern: /^\/placetogo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/ticket",
				pattern: /^\/ticket\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/vendor/[vendorSlug]",
				pattern: /^\/vendor\/([^/]+?)\/?$/,
				params: [{"name":"vendorSlug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/vendor/[vendorSlug]/[productSlug]",
				pattern: /^\/vendor\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"vendorSlug","optional":false,"rest":false,"chained":false},{"name":"productSlug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
