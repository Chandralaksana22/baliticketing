import{c as t,s as e,v as n,m as i}from"./ssr.js";let o="",a=o;const s={base:o,assets:a};function r(t){o=t.base,a=t.assets}function l(){o=s.base,a=s.assets}function p(t){a=s.assets=t}let c={},d={};function m(t){}function h(t){c=t}function f(t){d=t}let g=!1;function u(){}function v(){g=!0}function x(t){}function y(t){}const k={app_dir:"_app",app_template_contains_nonce:!1,csp:{mode:"auto",directives:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf_check_origin:!0,embedded:!1,env_public_prefix:"PUBLIC_",env_private_prefix:"",hooks:null,preload_strategy:"modulepreload",root:t(((t,o,a,s)=>{let r,l,{stores:p}=o,{page:c}=o,{constructors:d}=o,{components:m=[]}=o,{form:h}=o,{data_0:f=null}=o,{data_1:g=null}=o;e("__svelte__",p),p.page.notify,void 0===o.stores&&a.stores&&void 0!==p&&a.stores(p),void 0===o.page&&a.page&&void 0!==c&&a.page(c),void 0===o.constructors&&a.constructors&&void 0!==d&&a.constructors(d),void 0===o.components&&a.components&&void 0!==m&&a.components(m),void 0===o.form&&a.form&&void 0!==h&&a.form(h),void 0===o.data_0&&a.data_0&&void 0!==f&&a.data_0(f),void 0===o.data_1&&a.data_1&&void 0!==g&&a.data_1(g);let u=t.head;do{r=!0,t.head=u,p.page.set(c),l=`  ${d[1]?`${n(d[0]||i,"svelte:component").$$render(t,{data:f,this:m[0]},{this:t=>{m[0]=t,r=!1}},{default:()=>`${n(d[1]||i,"svelte:component").$$render(t,{data:g,form:h,this:m[1]},{this:t=>{m[1]=t,r=!1}},{})}`})}`:`${n(d[0]||i,"svelte:component").$$render(t,{data:f,form:h,this:m[0]},{this:t=>{m[0]=t,r=!1}},{})}`} `}while(!r);return l})),service_worker:!1,templates:{app:({head:t,body:e,assets:n,nonce:i,env:o})=>'<!doctype html>\n<html lang="en">\n\n<head>\n\t<meta charset="utf-8" />\n\t<link rel="icon" href="'+n+'/favicon.png" />\n\t<title>TiketXplorer</title>\n\t<link rel="canonical" href="https://tiketxplorer.netlify.app/" />\n\t<link rel="shortlink" href="https://tiketxplorer.netlify.app/" />\n\t<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">\n\t<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">\n\t<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">\n\t<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">\n\t<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">\n\t<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">\n\t<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">\n\t<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">\n\t<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">\n\t<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">\n\t<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n\t<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">\n\t<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t<meta name="msapplication-TileColor" content="#ffffff">\n\t<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">\n\t<link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />\n\t<meta name="MobileOptimized" content="width" />\n\t<meta name="HandheldFriendly" content="true" />\n\t<meta property="image:alt_text" content="TiketXplorer" />\n\t<meta property="og:site_name" content="TiketXplorer" />\n\t<meta property="og:type" content="website" />\n\t<meta property="og:url" content="https://tiketxplorer.netlify.app/" />\n\t<meta property="og:title" content="TiketXplorer" />\n\t<meta name="description"\n\t\tcontent="TiketXplorer" />\n\t<meta name="keywords"\n\t\tcontent="TiketXplorer" />\n\t'+t+'\n</head>\n\n<body data-sveltekit-preload-data="hover">\n\t<div style="display: contents">'+e+'</div>\n\t<script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"><\/script>\n</body>\n\n</html>',error:({status:t,message:e})=>'<!doctype html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<title>'+e+"</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">"+t+'</span>\n\t\t\t<div class="message">\n\t\t\t\t<h1>'+e+"</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"},version_hash:"16a5v7e"};async function _(){return{}}export{a,o as b,k as c,m as d,g as e,h as f,_ as g,f as h,p as i,u as j,y as k,v as l,x as m,r as o,c as p,l as r,d as s};
//# sourceMappingURL=internal.js.map
