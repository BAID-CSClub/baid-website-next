import{r as s,y as c,o as i,b as d,c as u,d as n,x as p,n as f}from"./index.b0ca5e3f.js";const m={class:"w-full relative z-0 h-260px overflow-hidden"},w={class:"color-white text-12 font-sans"},_={__name:"MobileHead",props:["img"],setup(l){const r=l,e=s(260),o=s(0);function t(){e.value=260-window.scrollY,o.value=window.scrollY}return c(()=>{window.addEventListener("scroll",t)}),i(()=>{window.removeEventListener("scroll",t)}),(a,h)=>(d(),u("section",m,[n("div",{class:"absolute w-full h-full flex items-center justify-center bg-cover bg-center",style:f({"background-image":`url(${r.img})`,height:e.value+"px",top:o.value+"px"})},[n("h1",w,[p(a.$slots,"default")])],4)]))}};export{_};