"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[669],{669:(e,t,s)=>{s.r(t),s.d(t,{default:()=>F});var i=s(5043);const n={location:{name:"Kolbacz",region:"",country:"Poland",lat:53.3,lon:14.81,tz_id:"Europe/Warsaw",localtime_epoch:1641590350,localtime:"2022-01-07 22:19"},astronomy:{astro:{sunrise:"08:14 AM",sunset:"04:01 PM",moonrise:"11:10 AM",moonset:"10:08 PM",moon_phase:"Waxing Crescent",moon_illumination:"30"}}},o={location:{name:"Kolbacz",region:"",country:"Poland",lat:53.3,lon:14.81,tz_id:"Europe/Warsaw",localtime_epoch:1641590350,localtime:"2022-01-07 22:19"},current:{last_updated_epoch:1641590100,last_updated:"2022-01-07 22:15",temp_c:1,temp_f:33.8,is_day:0,condition:{text:"Overcast",icon:"//cdn.weatherapi.com/weather/64x64/night/122.png",code:1009},wind_mph:3.8,wind_kph:6.1,wind_degree:190,wind_dir:"S",pressure_mb:1010,pressure_in:29.83,precip_mm:.1,precip_in:0,humidity:100,cloud:100,feelslike_c:-3.2,feelslike_f:26.2,vis_km:10,vis_miles:6,uv:1,gust_mph:13.9,gust_kph:22.3}};var r=s(7154);class a{}a.getWeather=async(e,t)=>{const s={method:"GET",url:"https://weatherapi-com.p.rapidapi.com/current.json",params:{q:e[1]+","+e[0]},headers:{"x-rapidapi-host":"weatherapi-com.p.rapidapi.com","x-rapidapi-key":"0bedbfb065msh4d74772935f4250p1f5b5cjsn0208d1ba7eb7"}};try{const e=t?o:(await r.A.request(s)).data,i={temp:e.current.temp_c,temp_f:e.current.temp_f,feels_like:e.current.feelslike_c,feels_like_f:e.current.feelslike_f,pressure:e.current.pressure_mb,humidity:e.current.humidity,clouds:e.current.cloud,weather:{description:e.current.condition.text,icon:e.current.condition.icon},wind:{speed:e.current.wind_kph,speed_mph:e.current.wind_mph,deg:e.current.wind_degree,gust:e.current.gust_kph,gust_mph:e.current.gust_mph}};return{weather:i,location:{name:e.location.name,country:e.location.country,lat:e.location.lat,lon:e.location.lon}}}catch(i){return i.response?i.response.data.error.message:"Something went wrong"}};const l=a;var d=s(579);const c=e=>{let{temp:t,feels_like:s,units:i}=e;return(0,d.jsxs)("div",{id:"temp",className:"mainBoxes",children:[(0,d.jsxs)("p",{children:["Temperature: ",t,"\xb0","F"===i?"F":"C"]}),(0,d.jsxs)("p",{children:["Feels like: ",s,"\xb0","F"===i?"F":"C"]})]})},h=e=>{let{type:t}=e;const[s,n]=i.useState("https:"+t.icon);return(0,i.useEffect)((()=>{let e=null;const t=()=>{e&&clearTimeout(e);const t=document.getElementById("icon").width>64?"128x128":"64x64";e=setTimeout((()=>n(s.slice(0,35)+t+s.slice(40))),100)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]),(0,d.jsxs)("div",{id:"type",className:"mainBoxes",children:[(0,d.jsx)("h3",{children:t.description}),(0,d.jsx)("img",{id:"icon",width:128,height:128,src:s,alt:t.description})]})},p=(0,i.lazy)((()=>s.e(455).then(s.bind(s,455)))),m=e=>Math.floor(Date.parse((new Date).toDateString()+" "+e)/1e3),u=e=>{let{coordinates:t}=e;const s=t[1]+","+t[0],[o,a]=i.useState(null),l={method:"GET",url:"https://weatherapi-com.p.rapidapi.com/astronomy.json",params:{q:s},headers:{"x-rapidapi-host":"weatherapi-com.p.rapidapi.com","x-rapidapi-key":"0bedbfb065msh4d74772935f4250p1f5b5cjsn0208d1ba7eb7"}};if((0,i.useEffect)((()=>{(async e=>{if(e)return n;let t=n;return await r.A.request(l).then((e=>{t=e.data})).catch((e=>{console.log(e)})),t})(!1).then((e=>{a({moon_illumination:parseInt(e.astronomy.astro.moon_illumination),moon_phase:e.astronomy.astro.moon_phase,moonrise:m(e.astronomy.astro.moonrise),moonset:m(e.astronomy.astro.moonset),sunrise:m(e.astronomy.astro.sunrise),sunset:m(e.astronomy.astro.sunset),localtime_epoch:e.location.localtime_epoch,localtime:e.location.localtime})}))}),[s]),null===o)return(0,d.jsx)("div",{children:"Loading..."});const c=Math.floor(Date.parse(o.localtime)/1e3)-o.localtime_epoch;return(0,d.jsx)(p,{sunrise:o.sunrise,sunset:o.sunset,localtime_epoch:Math.floor(Date.parse(o.localtime)/1e3),timeDifference:c,moonPhase:o.moon_phase,moonIllumination:o.moon_illumination})};var x=s(12),w=s(5843);const _=()=>(0,d.jsxs)("svg",{width:"53",height:"53",viewBox:"0 0 53 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M13.76 16.518L36.663 39.421L39.491 36.593L16.126 13.397L14.326 14.256L13.76 16.518Z",fill:"#715C3A"}),(0,d.jsx)("path",{d:"M35.637 37.566L36.737 46.366L53 52.73L46.636 36.466L37.836 35.366L35.637 37.566Z",fill:"#8F8F8F"}),(0,d.jsx)("path",{d:"M6 16.27V18.27H8V20.306L18 20.27V18.27L20 17.27V9.27H18V7.27H16V4.27H14V2.27H12V0.269997H8V8.27H0V12.27H2V14.27H4V16.27H6Z",fill:"#7D7D7D"})]}),f={type:"spring",stiffness:500,damping:40,mass:20},j=e=>{let{deg:t}=e;const{ref:s,inView:n}=(0,w.Wx)({threshold:.8}),[o,r]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{n&&!o&&setTimeout((()=>{n&&!o&&r(!0)}),1e3)}),[n,o]),(0,d.jsxs)("div",{id:"compass",children:[(0,d.jsxs)("svg",{width:"150",height:"150",viewBox:"0 0 508 508",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M254 508C394.28 508 508 394.28 508 254C508 113.72 394.28 0 254 0C113.72 0 0 113.72 0 254C0 394.28 113.72 508 254 508Z",fill:"#324A5E"}),(0,d.jsx)("path",{d:"M254 447.2C360.701 447.2 447.2 360.701 447.2 254C447.2 147.299 360.701 60.8 254 60.8C147.299 60.8 60.8 147.299 60.8 254C60.8 360.701 147.299 447.2 254 447.2Z",fill:"#84DBFF"}),(0,d.jsx)("path",{d:"M254 420.4C345.9 420.4 420.4 345.9 420.4 254C420.4 162.1 345.9 87.6 254 87.6C162.1 87.6 87.6 162.1 87.6 254C87.6 345.9 162.1 420.4 254 420.4Z",fill:"white"}),(0,d.jsx)("path",{d:"M250.8 134.4C258.09 134.4 264 128.49 264 121.2C264 113.91 258.09 108 250.8 108C243.51 108 237.6 113.91 237.6 121.2C237.6 128.49 243.51 134.4 250.8 134.4Z",fill:"#2C9984"}),(0,d.jsx)("path",{d:"M250.8 395.2C258.09 395.2 264 389.29 264 382C264 374.71 258.09 368.8 250.8 368.8C243.51 368.8 237.6 374.71 237.6 382C237.6 389.29 243.51 395.2 250.8 395.2Z",fill:"#2C9984"}),(0,d.jsx)("path",{d:"M381.6 264.8C388.89 264.8 394.8 258.89 394.8 251.6C394.8 244.31 388.89 238.4 381.6 238.4C374.31 238.4 368.4 244.31 368.4 251.6C368.4 258.89 374.31 264.8 381.6 264.8Z",fill:"#2C9984"}),(0,d.jsx)("path",{d:"M120.4 264.8C127.69 264.8 133.6 258.89 133.6 251.6C133.6 244.31 127.69 238.4 120.4 238.4C113.11 238.4 107.2 244.31 107.2 251.6C107.2 258.89 113.11 264.8 120.4 264.8Z",fill:"#2C9984"})]}),(0,d.jsx)(x.P.div,{ref:s,id:"arrow",transition:f,initial:"hidden",animate:n&&!o?"visible":"",variants:{visible:{rotate:t},hidden:{rotate:t-90}},children:(0,d.jsx)(_,{})})]})},g=e=>{let{speed:t,speed_mph:s,gust:i,gust_mph:n,deg:o,units:r}=e;return(0,d.jsx)("div",{id:"wind",className:"mainBoxes",children:(0,d.jsxs)("div",{className:"wrapper",children:[(0,d.jsxs)("div",{id:"values",children:[(0,d.jsx)("h3",{children:"Wind"}),(0,d.jsxs)("p",{children:["Speed: ","F"===r?s+" mph":t+" km/h"]}),(0,d.jsxs)("p",{children:["Gust: ","F"===r?n+" mph":i+" km/h"]}),(0,d.jsxs)("p",{children:[o,"\xb0"]})]}),(0,d.jsx)(j,{deg:o-135})]})})},v=e=>{let{humidity:t,pressure:s,clouds:i}=e;return(0,d.jsxs)("div",{id:"details",className:"mainBoxes",children:[(0,d.jsx)("h3",{children:"Details"}),(0,d.jsxs)("p",{children:["Humidity: ",t,"%"]}),(0,d.jsxs)("p",{children:["Pressure: ",s," hPa"]}),(0,d.jsxs)("p",{children:["Clouds: ",i,"%"]})]})},y=e=>{let{weather:t,location:s,coordinates:i,units:n}=e;return console.info("WeatherDetails rendered"),(0,d.jsxs)("div",{id:"weather",children:[(0,d.jsxs)("div",{className:"mainBoxes",children:[(0,d.jsxs)("h1",{children:["Location: ",s.name]}),(0,d.jsxs)("h2",{children:["Country: ",s.country]})]}),(0,d.jsx)(c,{temp:"F"===n?t.temp_f:t.temp,feels_like:"F"===n?t.feels_like_f:t.feels_like,units:n}),(0,d.jsx)(g,{speed:t.wind.speed,speed_mph:t.wind.speed_mph,deg:t.wind.deg,gust:t.wind.gust,gust_mph:t.wind.gust_mph,units:n}),(0,d.jsx)(h,{type:t.weather}),(0,d.jsx)(v,{humidity:t.humidity,pressure:t.pressure,clouds:t.clouds}),(0,d.jsx)(u,{coordinates:i})]})};var C=s(6938);const b={visible:{opacity:1},hidden:{opacity:0}},k={hidden:{y:"-100vh",opacity:0},visible:{y:"200px",opacity:1,transition:{delay:.5}}},M=e=>{let{showModal:t,setShowModal:s,buttonText:i,promptText:n,buttonAction:o}=e;return(0,d.jsx)(C.N,{children:t&&(0,d.jsx)(x.P.div,{className:"backdrop",variants:b,initial:"hidden",animate:"visible",exit:"hidden",onClick:()=>s(!1),children:(0,d.jsxs)(x.P.div,{className:"modal",variants:k,children:[(0,d.jsx)("p",{children:n}),(0,d.jsx)("button",{onClick:()=>s(!1),children:i})]})})})},L=e=>{let{coordinates:t,units:s,setLoading:n}=e;const[o,r]=i.useState(null),[a,c]=i.useState(null),[h,p]=(0,i.useState)(!1),[m,u]=(0,i.useState)("");return(0,i.useEffect)((()=>{console.log("trigger",o,a,h,m),n(!0),l.getWeather(t,!1).then((e=>{"string"===typeof e?(u(e),p(!0)):(r(e.weather),c(e.location)),n(!1)}))}),[t]),(0,i.useEffect)((()=>{const e=document.getElementById("weather");console.log(e),e&&(console.log("scrolling"),e.scrollIntoView({behavior:"smooth"}))}),[o]),o&&a&&t?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(M,{showModal:h,setShowModal:p,buttonText:"Ok",promptText:m}),(0,d.jsx)(y,{weather:o,location:a,coordinates:t,units:s})]}):null},F=(0,i.memo)(L,((e,t)=>e.coordinates[0]===t.coordinates[0]&&e.coordinates[1]===t.coordinates[1]&&e.units===t.units))}}]);
//# sourceMappingURL=669.d12a6639.chunk.js.map