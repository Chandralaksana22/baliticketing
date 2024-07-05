import * as universal from '../entries/pages/ticket/_page.ts.js';
import * as server from '../entries/pages/ticket/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ticket/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/ticket/+page.ts";
export { server };
export const server_id = "src/routes/ticket/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.DKmYhbic.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.BAQYadr3.js","_app/immutable/chunks/PackageCard.D38IE-D2.js","_app/immutable/chunks/each.C3xvo3ds.js","_app/immutable/chunks/swiper-bundle.Djm0yTtF.js"];
export const stylesheets = ["_app/immutable/assets/6.ClGBSQai.css","_app/immutable/assets/PackageCard.DW696QfZ.css","_app/immutable/assets/swiper-bundle.C22nKsDJ.css"];
export const fonts = [];
