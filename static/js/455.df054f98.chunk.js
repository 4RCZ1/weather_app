"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[455],{455:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(5043);const s=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;const a=function(){let[e,t]=(0,o.useState)(s());return(0,o.useEffect)((()=>{let e=null;const n=()=>{e&&clearTimeout(e),e=setTimeout((()=>t(s())),10)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[]),e};var i=n(579);const l=e=>{if(null!==e){const t=e.getContext("2d");null!==t&&t.clearRect(0,0,e.width,e.height)}},c=e=>{let{sunrise:t,sunset:n,localtime_epoch:s,timeDifference:c,moonPhase:r,moonIllumination:d}=e;const[,h]=(0,o.useState)(0);let m=0;const u=90,f=n-t,g=f/86400,v=1e3*s,p=1e3*n,w=1e3*t,y=(v-Math.floor(new Date((new Date).getTime()+1e3*c).setHours(0,0,0,0)))/1e3,x=new Date(w).toLocaleTimeString().slice(0,-3),C=new Date(p).toLocaleTimeString().slice(0,-3),M=new Date(v).toLocaleTimeString().slice(0,-3),S=a(),I=S>768?.9*(S-50):.98*(S-50);let j=null;const E=e=>{null===j&&(j=Math.floor(e))},k=e=>e*e*(3-2*e),T=(e,t,n,o,s)=>{const a=(k(m/u)-k((m-1)/u))*t;let i=o;for(let c=0;c<a;c++){const o=n/2;i++;const a=i/t*Math.PI*2,c=o+n/3*Math.cos(a);if(e&&(e.beginPath(),e.moveTo(i-1,s),e.lineTo(i,c),e.stroke()),i<=j){const e=document.getElementById("canvas2");if(e){const n=e.getContext("2d");if(n){l(e);const o=c<=s?"#ffe100":"#525d5d";n.strokeStyle=o,n.fillStyle=o,n.beginPath(),n.arc(i,c,t/40,0,2*Math.PI),n.fill(),n.stroke()}}}}m++,m<=u&&requestAnimationFrame((()=>T(e,t,n,i,s)))};return(0,o.useEffect)((()=>{let e=null,t=null;const n=()=>{t&&clearTimeout(t),t=setTimeout((()=>(()=>{j=null;const e=document.getElementById("canvas1");if(e){const t=e.getContext("2d"),n=e.width,o=e.height,s=o/6*4*g+o/6;if(E(n/24/60/60*y),t){l(e);const a=t.createLinearGradient(0,s-o/15,0,s+o/20);a.addColorStop(0,"#487aff"),a.addColorStop(1,"#111f69"),a.addColorStop(s/o+1/6,"#ff9116"),t.strokeStyle=a;let i=0;for(m=0;m<=u;m++){const e=Math.abs(Math.ceil(n/u*1.5*Math.sin(n/u*m/n*Math.PI)));for(let a=0;a<e;a++){const e=o/2;i++;const a=i/n*Math.PI*2,c=e+o/3*Math.cos(a);if(t&&(t.beginPath(),t.moveTo(i-1,s),t.lineTo(i,c),t.stroke()),i<=j){const e=document.getElementById("canvas2");if(e){const t=e.getContext("2d");if(t){l(e);const o=c<=s?"#ffe100":"#525d5d";t.strokeStyle=o,t.fillStyle=o,t.beginPath(),t.arc(i,c,n/40,0,2*Math.PI),t.fill(),t.stroke()}}}}}}}})()),10)};return h((e=>e+1)),e=setInterval((()=>{var t;null!==(t=document.getElementById("canvas1"))&&t.getBoundingClientRect().top>=t.clientHeight/2&&(e&&clearInterval(e),l(document.getElementById("canvas1")),l(document.getElementById("canvas2")),(()=>{const e=document.getElementById("canvas1");if(e){const t=e.getContext("2d"),n=e.width,o=e.height,s=o/6*4*g+o/6;if(E(n/24/60/60*y),t){const e=t.createLinearGradient(0,s-o/15,0,s+o/20);e.addColorStop(0,"#487aff"),e.addColorStop(1,"#111f69"),e.addColorStop(s/o+1/6,"#ff9116"),t.strokeStyle=e,requestAnimationFrame((()=>T(t,n,o,0,s)))}}})(),window.addEventListener("resize",n))}),200),()=>{e&&(clearInterval(e),window.removeEventListener("resize",n))}}),[t,n]),(0,i.jsxs)("div",{id:"dayNightCycle",className:"mainBoxes",children:[(0,i.jsx)("h3",{children:"Day/night cycle"}),(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsxs)("p",{children:["sunrise: ",x]}),(0,i.jsx)("span",{className:"line"}),(0,i.jsxs)("p",{className:"center",children:["sunset: ",C]}),(0,i.jsx)("span",{className:"line"}),(0,i.jsxs)("p",{className:"center",children:["current time: ",M]}),(0,i.jsx)("span",{className:"line"}),(0,i.jsxs)("p",{children:["day length:",Math.floor(f/60/60),":",Math.floor((f-60*Math.floor(f/60/60)*60)/60)]})]}),(0,i.jsxs)("div",{id:"dayNightCycleContainer",children:[(0,i.jsx)("canvas",{id:"canvas1",width:I,height:.3*I}),(0,i.jsx)("canvas",{id:"canvas2",width:I,height:.3*I})]}),(0,i.jsxs)("p",{id:"moon",children:["Moon phase: ",r,", Moon illumination: ",d,"%"]})]})}}}]);
//# sourceMappingURL=455.df054f98.chunk.js.map