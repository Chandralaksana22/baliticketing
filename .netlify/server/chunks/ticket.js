import{a as t}from"./axios.js";async function a(a){try{return(await t.get(`/get-all-ticket?keyword=${a}`)).data.data}catch(o){console.log(o)}}async function o(a,o){try{return(await t.get(`/get-detail-product?vendor=${a}&product=${o}`)).data}catch(c){console.log(c)}}async function c(a,o,c,e,n,r){try{return(await t.get(`/get-form-list-ticket?vendor=${a}&product=${o}&children=${c}&adult=${e}&infant=${n}&date=${r}`)).data.data}catch(d){console.log(d)}}export{o as a,c as b,a as g};
//# sourceMappingURL=ticket.js.map