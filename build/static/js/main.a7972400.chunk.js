(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(17),a=c.n(s),r=(c(23),c(7)),j=(c(24),c(11)),o=c(9),b=function(){var e=Object(n.useState)("thing"),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.useMemo)((function(){return{thing:c,setThing:i}}),[c,i])},l=c(1),d=Object(n.createContext)(""),u=function(e){var t=e.children,c=b();return Object(l.jsx)(d.Provider,{value:c,children:t})},h=c(2),O=c(16);function x(){var e=Object(n.useState)("Home"),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(h.f)();return Object(l.jsxs)("div",{className:"flex-container-row-start admin-navbar-container",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"faded",children:c})}),Object(l.jsxs)("div",{className:"button-container",children:[Object(l.jsxs)("button",{className:"button",onClick:function(){i("Contact"),s.push("/home/contact")},children:[Object(l.jsx)(O.b,{}),Object(l.jsx)("p",{className:"nav-button",children:"Contact"})]}),Object(l.jsxs)("button",{className:"button",onClick:function(){i("Home"),s.push("/home")},children:[Object(l.jsx)(O.a,{}),Object(l.jsx)("p",{className:"nav-button",children:"Home"})]})]})]})}function m(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{children:"Home"})})}function v(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{children:"Contact"})})}var p=function(){var e=Object(h.g)().path;return Object(l.jsx)("div",{className:"home-router",children:Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{path:"".concat(e,"/contact"),children:Object(l.jsx)(v,{})}),Object(l.jsx)(h.a,{path:"/",children:Object(l.jsx)(m,{})})]})})};var f=function(){return Object(l.jsxs)("div",{className:"app-container",children:[Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)(x,{})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(h.c,{children:Object(l.jsx)(h.a,{path:"/",children:Object(l.jsx)(p,{})})})})]})};var g=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=(t[1],Object(n.useState)("laptop")),s=Object(r.a)(i,2),a=s[0],b=s[1],d=Object(o.useMediaQuery)({query:"(min-device-width: 480px)"}),h=Object(o.useMediaQuery)({query:"(min-device-width: 768px)"}),O=Object(o.useMediaQuery)({query:"(min-device-width: 1024px)"}),x=Object(o.useMediaQuery)({query:"(min-device-width: 1200px)"}),m=Object(o.useMediaQuery)({query:"(min-device-width: 1201px)"});return Object(n.useEffect)((function(){d&&(b("mobile"),console.log("mobile")),h&&(b("tablet"),console.log("tablet")),O&&(b("laptop"),console.log("laptop")),x&&(b("desktop"),console.log("desktop")),m&&(b("bigScreen"),console.log("bigScreen"))}),[d,h,O,x,m]),Object(l.jsx)("div",{className:"".concat(a),children:Object(l.jsx)("div",{className:"theme "+(c?"theme--dark":"theme--default"),children:Object(l.jsx)(j.a,{children:Object(l.jsx)(u,{children:Object(l.jsx)(f,{})})})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.a7972400.chunk.js.map