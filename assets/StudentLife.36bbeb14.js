import{c as m,a as f}from"./Camping.cc0395bd.js";import{r as d,b as r,c as p,d as e,t as o,f as _,n as g,g as n,l as i}from"./index.4399996d.js";const h={class:"color-white font-title text-10"},v={class:"color-yellow"},b=e("div",{class:"bg-white rounded-xl p-10"},[e("h2",{class:"m0 mb-5"},"Wow a pop dialog"),e("p",null,"Here is the content")],-1),w=[b],c={__name:"SplashBlock",props:["title","image"],setup(a){const t=a,s=d(!1);return(y,l)=>(r(),p("div",{class:"flex justify-center items-center flex-col h-50% w-full bg-cover",style:g({"background-image":`url(${t.image})`})},[e("h1",h,[e("span",null,o(t.title[0]),1),e("span",v,o(t.title[1]),1),e("span",null,o(t.title.substr(2)),1)]),e("span",{class:"decoration-none color-yellow",onClick:l[0]||(l[0]=u=>s.value=!0)},"\u4E86\u89E3\u66F4\u591A"),e("div",{class:_(["fixed top-0 bg-black bg-op-70 w-full h-screen flex justify-center items-center",{"z-20 op-100":s.value,"z-0 op-0 pointer-events-none":!s.value}]),onClick:l[1]||(l[1]=u=>s.value=!1)},w,2)],4))}},x={class:"w-full h-[calc(100vh-5rem)] mt-20"},z={__name:"StudentLife",setup(a){return(t,s)=>(r(),p("div",x,[n(c,{title:"\u5B66\u751F\u793E\u56E2",image:i(m)},null,8,["image"]),n(c,{title:"\u7279\u8272\u6D3B\u52A8",image:i(f)},null,8,["image"])]))}};export{z as default};
