const e=new URL("sveltekit-internal://");function n(n,t){if("/"===t[0]&&"/"===t[1])return t;let r=new URL(n,e);return r=new URL(t,r),r.protocol===e.protocol?r.pathname+r.search+r.hash:r.href}function t(e,n){return"/"===e||"ignore"===n?e:"never"===n?e.endsWith("/")?e.slice(0,-1):e:"always"!==n||e.endsWith("/")?e:e+"/"}function r(e){return e.split("%25").map(decodeURI).join("%25")}function s(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const o=["href","pathname","search","toString","toJSON"];function a(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(e,r){if("get"===r||"getAll"===r||"has"===r)return n=>(t(n),e[r](n));n();const s=Reflect.get(e,r);return"function"==typeof s?s.bind(e):s}}),enumerable:!0,configurable:!0});for(const s of o)Object.defineProperty(r,s,{get:()=>(n(),e[s]),enumerable:!0,configurable:!0});return r[Symbol.for("nodejs.util.inspect.custom")]=(n,t,r)=>r(e,t),function(e){c(e),Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}(r),r}function i(e){c(e);for(const n of["search","searchParams"])Object.defineProperty(e,n,{get(){throw new Error(`Cannot access url.${n} on a page with prerendering enabled`)}})}function c(e){e[Symbol.for("nodejs.util.inspect.custom")]=(n,t,r)=>r(new URL(e),t)}const h="/__data.json",l=".html__data.json";function u(e){return e.endsWith(h)||e.endsWith(l)}function f(e){return e.endsWith(".html")?e.replace(/\.html$/,l):e.replace(/\/$/,"")+h}function p(e){return e.endsWith(l)?e.slice(0,-16)+".html":e.slice(0,-12)}function d(e){return function(n,t){if(n)for(const r in n){if("_"===r[0]||e.has(r))continue;const n=[...e.values()],s=g(r,t?.slice(t.lastIndexOf(".")))??`valid exports are ${n.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${r}'${t?` in ${t}`:""} (${s})`)}}}function g(e,n=".js"){const t=[];if(w.has(e)&&t.push(`+layout${n}`),m.has(e)&&t.push(`+page${n}`),$.has(e)&&t.push(`+layout.server${n}`),b.has(e)&&t.push(`+page.server${n}`),S.has(e)&&t.push(`+server${n}`),t.length>0)return`'${e}' is a valid export in ${t.slice(0,-1).join(", ")}${t.length>1?" or ":""}${t.at(-1)}`}const w=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),m=new Set([...w,"entries"]),$=new Set([...w]),b=new Set([...$,"actions","entries"]),S=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","fallback","prerender","trailingSlash","config","entries"]),j=d(w),v=d(m),y=d($),P=d(b),O=d(S);export{f as a,r as b,s as c,i as d,j as e,P as f,v as g,u as h,O as i,a as m,t as n,n as r,p as s,y as v};
//# sourceMappingURL=exports.js.map