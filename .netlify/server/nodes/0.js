

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CM519m2H.js","_app/immutable/chunks/scheduler.BwGzqHo8.js","_app/immutable/chunks/index.BAQYadr3.js","_app/immutable/chunks/each.C3xvo3ds.js","_app/immutable/chunks/axios.C3C4FwlK.js"];
export const stylesheets = ["_app/immutable/assets/0.B5Bd-BP1.css"];
export const fonts = [];
