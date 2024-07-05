export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/background biru - mobile.png","images/background orange - mobile.png","images/background-biru-desktop.png","images/Bali Bird Park - desktop.png","images/Bali Bird Park - mobile.png","images/Bali Farm House - desktop.png","images/Bali Farm House - mobile.png","images/Bali Safari - desktop.png","images/Bali Safari - mobile.png","images/Bali Zoo - mobile.png","images/balibird.png","images/balibirdlogo.png","images/balisafari.png","images/balisafarihero.png","images/balizoo-header.png","images/balizoohero.png","images/balizooherodesktop.png","images/balizoologo.png","images/bfh1.png","images/bfh2.png","images/bfh3.png","images/bfh5.png","images/bfh6.png","images/bfhhero.png","images/bg-card.png","images/bg-desktop-biru.png","images/bg-desktop.png","images/bg-hijau.png","images/bg-home.png","images/bgbfh.png","images/bgdetailticket.jpeg","images/bgfooter.png","images/Booking.com_logo.svg","images/detailticketmobile.png","images/Header.png","images/hero-ticket.png","images/herocontact.jpeg","images/Homepage-mobile.png","images/iata.png","images/image-1.png","images/image-10.png","images/image-11.png","images/image-12.png","images/image-13.png","images/image-14.png","images/image-15.png","images/image-16.png","images/image-2.png","images/image-3.png","images/image-4.png","images/image-5.png","images/image-6.png","images/image-7.png","images/image-8.png","images/image-9.png","images/Intersect.png","images/klook.png","images/logo.png","images/logomob.png","images/Logos.png","images/Logos2.png","images/Logos3.png","images/Logos4.png","images/maps.jpeg","images/mbalibird.png","images/mbalifarm.png","images/mbalisafari.png","images/mbalizoo.png","images/member1.png","images/member2.png","images/plan.png","images/theme-preview.png","images/trip.png","images/varunalogo.png","images/winter.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CXdpvrm5.js","app":"_app/immutable/entry/app.BnednGbl.js","imports":["_app/immutable/entry/start.CXdpvrm5.js","_app/immutable/chunks/entry.7Z0CLvcL.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.DQQKAF7E.js","_app/immutable/entry/app.BnednGbl.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.BAQYadr3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
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
})();
