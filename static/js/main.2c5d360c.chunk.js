(this.webpackJsonpflist=this.webpackJsonpflist||[]).push([[0],{16:function(e,a,t){e.exports=t(43)},21:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),o=(t(21),t(2)),s=t.n(o),i=t(13),u=t(15),m=(t(23),t(24),function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"/",className:"brand-logo"},"FriendList"))))}),d=(t(25),function(e){var a=e.user;return r.a.createElement("div",{className:"col s12 m7 container"},r.a.createElement("div",{className:"card horizontal"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:a.picture.large,className:"img",alt:"ab"})),r.a.createElement("div",{className:"card-stacked"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h4",null,"".concat(a.name.title,". ").concat(a.name.first," ").concat(a.name.last)),r.a.createElement("h5",null,"Email: ",a.email)))))}),f=t(14),v=t.n(f);var E=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://randomuser.me/api/?results=10");case 2:a=e.sent,c(a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(t),r.a.createElement("div",null,r.a.createElement(m,null),t.map((function(e){return r.a.createElement(d,{key:null===e||void 0===e?void 0:e.id.value,user:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.2c5d360c.chunk.js.map