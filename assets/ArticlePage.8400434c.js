import{v,z as y,r as d,E as g,w,b as l,c as r,g as _,k as f,T as $,f as k,d as a,t as h}from"./index.794f2dc6.js";/* empty css                */import{C as x}from"./CarouselHorizontal.5876f4b5.js";const T={key:0,class:"w-full h-[calc(100vh-4.25rem)] flex items-center justify-center font-sans"},C=a("h1",{class:"font-sans"},"Loading...",-1),j=[C],z={key:1},B={class:"text-16 color-white font-sans"},H={class:"section"},L={class:"font-sans"},M=a("p",null,null,-1),b=["innerHTML"],A={__name:"ArticlePage",setup(E){const e=v(),p=y(()=>e.params.lang&&e.params.year&&e.params.month&&e.params.day&&e.params.title?`/${e.params.lang}/articles/${e.params.year}/${e.params.month}/${e.params.day}/${e.params.title}.json`:!1),s=d(null),t=d(!0);return g(async()=>{w(p,async n=>{if(!n)return;t.value=!0;const o=await fetch(n);setTimeout(()=>t.value=!1,1e3),o.status===200?s.value=await o.json():location.href=`/${e.params.lang}/404`},{immediate:!0})}),(n,o)=>(l(),r("div",{class:k({"overflow-hidden w-full h-[calc(100vh-4.25rem)]":t.value})},[_($,{name:"fade",mode:"out-in"},{default:f(()=>{var c,i,u;return[t.value?(l(),r("div",T,j)):(l(),r("div",z,[a("section",null,[_(x,{images:[(c=s.value)==null?void 0:c.cover]},{default:f(()=>{var m;return[a("h1",B,h((m=s.value)==null?void 0:m.title),1)]}),_:1},8,["images"])]),a("section",H,[a("article",null,[a("h1",L,h((i=s.value)==null?void 0:i.title),1),M]),a("article",{innerHTML:(u=s.value)==null?void 0:u.body},null,8,b)])]))]}),_:1})],2))}};export{A as default};
