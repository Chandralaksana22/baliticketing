import * as server from '../entries/pages/placetogo/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/placetogo/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/placetogo/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CFusCjoT.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.BAQYadr3.js","_app/immutable/chunks/WhatsOnModalHome.DDouBQ-l.js","_app/immutable/chunks/each.C3xvo3ds.js","_app/immutable/chunks/swiper-bundle.Djm0yTtF.js"];
export const stylesheets = ["_app/immutable/assets/WhatsOnModalHome.DAmRUAp7.css","_app/immutable/assets/swiper-bundle.C22nKsDJ.css"];
export const fonts = [];
