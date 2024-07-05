import * as universal from '../entries/pages/vendor/_vendorSlug_/_productSlug_/_page.ts.js';
import * as server from '../entries/pages/vendor/_vendorSlug_/_productSlug_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/vendor/_vendorSlug_/_productSlug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/vendor/[vendorSlug]/[productSlug]/+page.ts";
export { server };
export const server_id = "src/routes/vendor/[vendorSlug]/[productSlug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.C7uoXLWe.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.BAQYadr3.js","_app/immutable/chunks/each.C3xvo3ds.js","_app/immutable/chunks/entry.7Z0CLvcL.js","_app/immutable/chunks/index.DQQKAF7E.js"];
export const stylesheets = ["_app/immutable/assets/8.CRTObnVA.css"];
export const fonts = [];
