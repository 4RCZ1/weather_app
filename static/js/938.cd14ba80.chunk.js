"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[938],{5938:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(885),i=n(2791),o=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};var r=function(){var e=(0,i.useState)(o()),t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,i.useEffect)((function(){var e=null,t=function(){e&&clearTimeout(e),e=setTimeout((function(){return r(o())}),10)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),n},l=n(184);var s=function(e){null!==e&&null!==e.getContext("2d")&&e.getContext("2d").clearRect(0,0,e.width,e.height)},c=function(e){var t=e.sunrise,n=e.sunset,o=e.localtime_epoch,c=e.timeDifference,d=e.moonPhase,u=e.moonIllumination,f=(0,i.useState)(0),h=(0,a.Z)(f,2),m=(h[0],h[1]),v=0,g=90,p=n-t,w=p/86400,x=1e3*o,y=1e3*n,M=1e3*t,C=(x-Math.floor(new Date((new Date).getTime()+1e3*c).setHours(0,0,0,0)))/1e3,I=new Date(M).toLocaleTimeString().slice(0,-3),S=new Date(y).toLocaleTimeString().slice(0,-3),j=new Date(x).toLocaleTimeString().slice(0,-3),E=r(),k=E>768?.9*(E-60):.98*(E-60),T=null,P=function(e){null===T&&(T=Math.floor(e))},b=function e(t,n,a,i,o){for(var r=Math.abs(Math.ceil(n/g*1.5*Math.sin(n/g*v/n*Math.PI))),l=i,c=0;c<r;c++){var d=a/2,u=++l/n*Math.PI*2,f=d+a/3*Math.cos(u);if(t&&(t.beginPath(),t.moveTo(l-1,o),t.lineTo(l,f),t.stroke()),l<=T){var h=document.getElementById("canvas2");if(h){var m=h.getContext("2d");if(m){s(h);var p=f<=o?"#ffe100":"#525d5d";m.strokeStyle=p,m.fillStyle=p,m.beginPath(),m.arc(l,f,n/40,0,2*Math.PI),m.fill(),m.stroke()}}}}++v<=g&&requestAnimationFrame((function(){return e(t,n,a,l,o)}))};return(0,i.useEffect)((function(){var e=null,t=null,n=function(){t&&clearTimeout(t),t=setTimeout((function(){return function(){T=null;var e=document.getElementById("canvas1");if(e){var t=e.getContext("2d"),n=e.width,a=e.height,i=a/6*4*w+a/6;if(P(n/24/60/60*C),t){s(e);var o=t.createLinearGradient(0,i-a/15,0,i+a/20);o.addColorStop(0,"#487aff"),o.addColorStop(1,"#111f69"),o.addColorStop(i/a+1/6,"#ff9116"),t.strokeStyle=o;var r=0;for(v=0;v<=g;v++)for(var l=Math.abs(Math.ceil(n/g*1.5*Math.sin(n/g*v/n*Math.PI))),c=0;c<l;c++){var d=a/2,u=++r/n*Math.PI*2,f=d+a/3*Math.cos(u);if(t&&(t.beginPath(),t.moveTo(r-1,i),t.lineTo(r,f),t.stroke()),r<=T){var h=document.getElementById("canvas2");if(h){var m=h.getContext("2d");if(m){s(h);var p=f<=i?"#ffe100":"#525d5d";m.strokeStyle=p,m.fillStyle=p,m.beginPath(),m.arc(r,f,n/40,0,2*Math.PI),m.fill(),m.stroke()}}}}}}}()}),10)};return m((function(e){return e+1})),e=setInterval((function(){var t;null!==(t=document.getElementById("canvas1"))&&t.getBoundingClientRect().top>=t.clientHeight/2&&(e&&clearInterval(e),s(document.getElementById("canvas1")),s(document.getElementById("canvas2")),function(){var e=document.getElementById("canvas1");if(e){var t=e.getContext("2d"),n=e.width,a=e.height,i=a/6*4*w+a/6;if(console.log(i),P(n/24/60/60*C),t){var o=t.createLinearGradient(0,i-a/15,0,i+a/20);o.addColorStop(0,"#487aff"),o.addColorStop(1,"#111f69"),o.addColorStop(i/a+1/6,"#ff9116"),t.strokeStyle=o,requestAnimationFrame((function(){return b(t,n,a,0,i)}))}}}(),window.addEventListener("resize",n))}),100),function(){e&&(clearInterval(e),window.removeEventListener("resize",n))}}),[t,n]),(0,l.jsxs)("div",{id:"dayNightCycle",className:"mainBoxes",children:[(0,l.jsx)("h3",{children:"Day/night cycle"}),(0,l.jsxs)("div",{className:"wrapper",children:[(0,l.jsxs)("p",{children:["sunrise: ",I]}),(0,l.jsx)("span",{className:"line"}),(0,l.jsxs)("p",{className:"center",children:["sunset: ",S]}),(0,l.jsx)("span",{className:"line"}),(0,l.jsxs)("p",{className:"center",children:["current time: ",j]}),(0,l.jsx)("span",{className:"line"}),(0,l.jsxs)("p",{children:["day length:",Math.floor(p/60/60),":",Math.floor((p-60*Math.floor(p/60/60)*60)/60)]})]}),(0,l.jsxs)("div",{id:"dayNightCycleContainer",children:[(0,l.jsx)("canvas",{id:"canvas1",width:k,height:.3*k}),(0,l.jsx)("canvas",{id:"canvas2",width:k,height:.3*k})]}),(0,l.jsxs)("p",{id:"moon",children:["Moon phase: ",d,", Moon illumination: ",u,"%"]})]})}}}]);
//# sourceMappingURL=938.cd14ba80.chunk.js.map