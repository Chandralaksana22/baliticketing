import * as universal from '../entries/pages/vendor/_vendorSlug_/_page.ts.js';
import * as server from '../entries/pages/vendor/_vendorSlug_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/vendor/_vendorSlug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/vendor/[vendorSlug]/+page.ts";
export { server };
export const server_id = "src/routes/vendor/[vendorSlug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.RdOm_wKj.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.BAQYadr3.js","_app/immutable/chunks/PackageCard.D38IE-D2.js","_app/immutable/chunks/each.C3xvo3ds.js","_app/immutable/chunks/swiper-bundle.Djm0yTtF.js"];
export const stylesheets = ["_app/immutable/assets/6.ClGBSQai.css","_app/immutable/assets/PackageCard.DW696QfZ.css","_app/immutable/assets/swiper-bundle.C22nKsDJ.css"];
export const fonts = [];
