(this["webpackJsonpnasa-apod"]=this["webpackJsonpnasa-apod"]||[]).push([[0],{140:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),r=a(19),o=a.n(r),l=(a(63),a(40)),i=a(54),u=a.n(i);a(64);var s=function(e){var t=e.changeDate,a=e.date;return c.a.createElement("div",{className:"date"},"Select a Date:",c.a.createElement("br",null),c.a.createElement(u.a,{selected:a,onChange:t,className:"datepicker"}))},m=a(57),d=a.n(m);var h=function(e){var t=e.photo,a=t.media_type;return c.a.createElement("div",null,c.a.createElement("h1",null,t.title),"image"===a&&c.a.createElement("div",null,c.a.createElement("img",{src:t.url,alt:t.title})),"video"===a&&c.a.createElement("div",{className:"player-wrapper"},c.a.createElement(d.a,{url:t.url,width:"100%",height:"100%"})),c.a.createElement("p",null,t.explanation))};var p=function(){var e="lA3fCfWj2W2sBScUgXdhLPc7kqKTeT4LjElij5UF",t="https://api.nasa.gov/planetary/apod",a=new Date,r=Object(n.useState)(a),o=Object(l.a)(r,2),i=o[0],u=o[1],m=Object(n.useState)(""),d=Object(l.a)(m,2),p=d[0],f=d[1];return Object(n.useEffect)((function(){fetch("".concat(t,"?&api_key=").concat(e)).then((function(e){return e.json()})).catch((function(e){return alert(e)})).then((function(e){void 0!==e.media_type?f(e):alert(e.msg)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"NASA's Astronomy Picture Of The Day"),c.a.createElement(s,{changeDate:function(a){u(a),function(a){fetch("".concat(t,"?&date=").concat(a,"&api_key=").concat(e)).then((function(e){return e.json()})).catch((function(e){return alert(e)})).then((function(e){void 0!==e.media_type?f(e):(alert(e.msg),f("https://coolbackgrounds.io/images/backgrounds/black/black-contour-f41038db.svg"))}))}(function(e){return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}(a))},date:i}),c.a.createElement(h,{photo:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(140);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){e.exports=a(142)},63:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.9a812cb1.chunk.js.map