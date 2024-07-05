import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CMQs_5bF.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.BAQYadr3.js","_app/immutable/chunks/WhatsOnModalHome.DDouBQ-l.js","_app/immutable/chunks/each.C3xvo3ds.js","_app/immutable/chunks/swiper-bundle.Djm0yTtF.js"];
export const stylesheets = ["_app/immutable/assets/WhatsOnModalHome.DAmRUAp7.css","_app/immutable/assets/swiper-bundle.C22nKsDJ.css"];
export const fonts = [];
