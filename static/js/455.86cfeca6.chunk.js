"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[455],{455:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(5043);const s=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;const l=function(){let[e,t]=(0,o.useState)(s());return(0,o.useEffect)((()=>{let e=null;const n=()=>{e&&clearTimeout(e),e=setTimeout((()=>t(s())),10)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]),e};var a=n(579);const i=e=>{if(null!==e){const t=e.getContext("2d");null!==t&&t.clearRect(0,0,e.width,e.height)}},c=e=>{let{sunrise:t,sunset:n,localtime_epoch:s,timeDifference:c,moonPhase:r,moonIllumination:d}=e;const[,h]=(0,o.useState)(0);let m=0;const u=90,f=n-t,g=f/86400,v=1e3*s,p=1e3*n,w=1e3*t,y=(v-Math.floor(new Date((new Date).getTime()+1e3*c).setHours(0,0,0,0)))/1e3,x=new Date(w).toLocaleTimeString().slice(0,-3),M=new Date(p).toLocaleTimeString().slice(0,-3),S=new Date(v).toLocaleTimeString().slice(0,-3),C=l(),I=C>768?.9*(C-50):.98*(C-50);let j=null;const k=e=>{null===j&&(j=Math.floor(e))},E=e=>(console.log(e),e*e*(3-2*e));let T=0;const P=(e,t,n,o,s)=>{const l=Math.ceil(t/u*(.958-.5*Math.cos(Math.PI*m/u)));console.log(E(m/u)-E(m-1/u)),T+=E(m/u)-E(m-1/u),console.log(T);let a=o;for(let c=0;c<l;c++){const o=n/2;a++;const l=a/t*Math.PI*2,c=o+n/3*Math.cos(l);if(e&&(e.beginPath(),e.moveTo(a-1,s),e.lineTo(a,c),e.stroke()),a<=j){const e=document.getElementById("canvas2");if(e){const n=e.getContext("2d");if(n){i(e);const o=c<=s?"#ffe100":"#525d5d";n.strokeStyle=o,n.fillStyle=o,n.beginPath(),n.arc(a,c,t/140,0,2*Math.PI),n.fill(),n.stroke()}}}}m++,m<=u&&requestAnimationFrame((()=>P(e,t,n,a,s)))};return(0,o.useEffect)((()=>{let e=null,t=null;const n=()=>{t&&clearTimeout(t),t=setTimeout((()=>(()=>{j=null;const e=document.getElementById("canvas1");if(e){const t=e.getContext("2d"),n=e.width,o=e.height,s=o/6*4*g+o/6;if(k(n/24/60/60*y),t){i(e);const l=t.createLinearGradient(0,s-o/15,0,s+o/20);l.addColorStop(0,"#487aff"),l.addColorStop(1,"#111f69"),l.addColorStop(s/o+1/6,"#ff9116"),t.strokeStyle=l;let a=0;for(m=0;m<=u;m++){const e=Math.abs(Math.ceil(n/u*1.5*Math.sin(n/u*m/n*Math.PI)));for(let l=0;l<e;l++){const e=o/2;a++;const l=a/n*Math.PI*2,c=e+o/3*Math.cos(l);if(t&&(t.beginPath(),t.moveTo(a-1,s),t.lineTo(a,c),t.stroke()),a<=j){const e=document.getElementById("canvas2");if(e){const t=e.getContext("2d");if(t){i(e);const o=c<=s?"#ffe100":"#525d5d";t.strokeStyle=o,t.fillStyle=o,t.beginPath(),t.arc(a,c,n/40,0,2*Math.PI),t.fill(),t.stroke()}}}}}}}})()),10)};return h((e=>e+1)),e=setInterval((()=>{var t;null!==(t=document.getElementById("canvas1"))&&t.getBoundingClientRect().top>=t.clientHeight/2&&(e&&clearInterval(e),i(document.getElementById("canvas1")),i(document.getElementById("canvas2")),(()=>{const e=document.getElementById("canvas1");if(e){const t=e.getContext("2d"),n=e.width,o=e.height,s=o/6*4*g+o/6;if(console.log(n),t&&(t.beginPath(),t.moveTo(n/2,o),t.lineTo(n/2,0),t.strokeStyle="#000000",t.stroke()),k(n/24/60/60*86400),t){const e=t.createLinearGradient(0,s-o/15,0,s+o/20);e.addColorStop(0,"#487aff"),e.addColorStop(1,"#111f69"),e.addColorStop(s/o+1/6,"#ff9116"),t.strokeStyle=e,requestAnimationFrame((()=>P(t,n,o,0,s)))}}})(),window.addEventListener("resize",n))}),200),()=>{e&&(clearInterval(e),window.removeEventListener("resize",n))}}),[t,n]),(0,a.jsxs)("div",{id:"dayNightCycle",className:"mainBoxes",children:[(0,a.jsx)("h3",{children:"Day/night cycle"}),(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsxs)("p",{children:["sunrise: ",x]}),(0,a.jsx)("span",{className:"line"}),(0,a.jsxs)("p",{className:"center",children:["sunset: ",M]}),(0,a.jsx)("span",{className:"line"}),(0,a.jsxs)("p",{className:"center",children:["current time: ",S]}),(0,a.jsx)("span",{className:"line"}),(0,a.jsxs)("p",{children:["day length:",Math.floor(f/60/60),":",Math.floor((f-60*Math.floor(f/60/60)*60)/60)]})]}),(0,a.jsxs)("div",{id:"dayNightCycleContainer",children:[(0,a.jsx)("canvas",{id:"canvas1",width:I,height:.3*I}),(0,a.jsx)("canvas",{id:"canvas2",width:I,height:.3*I})]}),(0,a.jsxs)("p",{id:"moon",children:["Moon phase: ",r,", Moon illumination: ",d,"%"]})]})}}}]);
//# sourceMappingURL=455.86cfeca6.chunk.js.map