(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c,i,r,s,a,l,o=n(1),j=n.n(o),h=n(21),d=n.n(h),b=(n(29),n(30),n(7)),x=n(12),f=function(){var e=Object(o.useState)("thing"),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(o.useMemo)((function(){return{thing:n,setThing:c}}),[n,c])},u=n(0),p=Object(o.createContext)(""),O=function(e){var t=e.children,n=f();return Object(u.jsx)(p.Provider,{value:n,children:t})},m=n(2),g=n(10),v=n(8),y=n(11),w=(y.a.nav(c||(c=Object(g.a)(["\n\tbackground: #000;\n\theight: 80px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 0.5rem calc((100vw - 1000px) / 2);\n\tz-index: 10;\n"]))),Object(y.a)(b.b)(i||(i=Object(g.a)(["\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\ttext-decoration: none;\n\tpadding: 0 1rem;\n\theight: 100%;\n\tcursor: pointer;\n\t&.active {\n\t\tcolor: #305fe2;\n\t}\n"]))),Object(y.a)(v.a)(r||(r=Object(g.a)(["\n\tdisplay: none;\n\tcolor: #fff;\n"]))),y.a.div(s||(s=Object(g.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-right: -24px;\n"]))),y.a.nav(a||(a=Object(g.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-right: 24px;\n"]))),Object(y.a)(b.b)(l||(l=Object(g.a)(["\n\tborder-radius: 4px;\n\tbackground: #305fe2;\n\tpadding: 10px 22px;\n\tcolor: #fff;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n\ttext-decoration: none;\n\tmargin-left: 24px;\n\t&:hover {\n\t\ttransition: all 0.2s ease-in-out;\n\t\tbackground: #fff;\n\t\tcolor: #010606;\n\t}\n"]))),n.p+"static/media/icon.265a099d.png"),k=function(){return Object(u.jsx)("div",{style:{display:"flex",padding:10,justifyContent:"center",alignItems:"center"},children:Object(u.jsx)("img",{className:"photo",src:w,alt:"logo"})})},S=(n(42),function(e){var t,n,c=e.title,i=e.pubDate,r=e.link,s=e.description,a=e.thumbnail;function l(e,t,n){return e.length>n?e.slice(t,n):e}return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"blog-card-container",children:[Object(u.jsx)("h1",{style:{fontSize:"20px"},children:l((n=c,n=n.replace("amp;","")),0,60)}),Object(u.jsx)("img",{src:a,alt:"",className:"blog-image-container"}),Object(u.jsx)("h4",{children:function(e){var t=e.slice(0,10).split("-"),n=t.shift();return t.push(n),console.log(e),"".concat(t.join("/"))}(i)}),Object(u.jsxs)("div",{className:"blog-text-container",children:[Object(u.jsx)("p",{className:"blog-text-container",children:l(function(e){var t=document.createElement("div");return t.innerHTML=e,e=t.innerText}((t=s,t.replace("Unsplash","Unsplash. "))),0,300)+"..."}),Object(u.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",style:{color:"#ccc"},children:"Read More"})]})]})})});function N(e){var t=Object(o.useState)([]),n=Object(x.a)(t,2),c=n[0],i=n[1],r="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samuelgschmitt";return Object(o.useEffect)((function(){fetch(r).then((function(e){return e.json()})).then((function(e){i(e.items),console.log(e.items[0])}))}),[r]),Object(u.jsxs)("div",{style:{padding:10,display:"flex",height:"90vh",flexDirection:"column",alignItems:"center"},children:[Object(u.jsx)("h1",{style:{alignSelf:"center"},children:"Blogs"}),Object(u.jsx)("div",{style:{display:"flex",height:"90vh",flexDirection:"column",marginLeft:20},children:c.map((function(e,t){return Object(u.jsx)("div",{className:"noBullet",children:Object(u.jsx)(S,{title:e.title,link:e.link,pubDate:e.pubDate,description:e.description,thumbnail:e.thumbnail})},t)}))})]})}var F=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(m.c,{children:Object(u.jsx)(m.a,{path:"/",children:Object(u.jsx)(N,{})})})})};function _(e){var t={fontSize:20,marginTop:10};return Object(u.jsxs)("div",{style:{padding:10,display:"flex",height:"90vh",alignItems:"center",flexDirection:"column"},children:[Object(u.jsx)("h1",{children:"Contact"}),Object(u.jsx)("a",{style:t,href:"https://www.linkedin.com/in/samuel-schmitt-008805189/",class:"text-white",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Object(u.jsx)("a",{style:t,href:"https://www.instagram.com/sam.schmiitt/",class:"text-white",target:"_blank",rel:"noreferrer",children:"Instagram"}),Object(u.jsx)("a",{style:t,href:"https://www.facebook.com/SamSchmitt703",class:"text-white",target:"_blank",rel:"noreferrer",children:"Facebook"}),Object(u.jsx)("a",{style:t,href:"https://twitter.com/samschmiitt",class:"text-white",target:"_blank",rel:"noreferrer",children:"Twitter"})]})}var D=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(m.c,{children:Object(u.jsx)(m.a,{path:"/",children:Object(u.jsx)(_,{})})})})},C=function(){return Object(u.jsxs)("div",{style:{display:"flex",height:"90vh",flexDirection:"row",padding:10,justifyContent:"center"},children:[Object(u.jsx)("a",{href:"https://twitter.com/samschmiitt",target:"_blank",rel:"noreferrer",color:"#000",children:Object(u.jsx)(v.f,{size:50,color:"#0036af"})}),Object(u.jsx)("a",{href:"https://www.facebook.com/SamSchmitt703",target:"_blank",rel:"noreferrer",color:"#000",children:Object(u.jsx)(v.b,{size:50,color:"#0036af"})}),Object(u.jsx)("a",{href:"https://www.instagram.com/sam.schmiitt/",target:"_blank",rel:"noreferrer",color:"#000",children:Object(u.jsx)(v.d,{size:50,color:"#0036af"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/samuel-schmitt-008805189/",target:"_blank",rel:"noreferrer",color:"#000",children:Object(u.jsx)(v.e,{size:50,color:"#0036af"})}),Object(u.jsx)("a",{href:"https://github.com/sam-schmitt",target:"_blank",rel:"noreferrer",color:"#000",children:Object(u.jsx)(v.c,{size:50,color:"#0036af"})})]})},z=(n(43),function(){return Object(u.jsx)("div",{style:{display:"flex",padding:10,justifyContent:"space-between",maxWidth:"50%",alignSelf:"center"},children:Object(u.jsx)("p",{className:"name",children:"Samuel Schmitt"})})}),I=(n(44),function(){return Object(u.jsxs)("div",{style:{display:"flex",padding:10,justifyContent:"center",alignSelf:"center"},children:[Object(u.jsx)("p",{className:"title",children:"Software"}),Object(u.jsx)("p",{className:"title",children:"Web 3.0"}),Object(u.jsx)("p",{className:"title",children:"Politics"})]})}),T=(n(45),function(e){var t=e.title,n=e.link,c=e.linkName,i=e.description,r=e.image;return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("h1",{style:{fontSize:25},children:t}),Object(u.jsx)("img",{src:r,alt:"",className:"image-container"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:i}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:n,rel:"noreferrer",target:"_blank",children:c})]})}),L=n.p+"static/media/quaeLogo.7d879634.png";function P(e){return Object(u.jsxs)("div",{style:{display:"flex",height:"90vh",flexDirection:"column",padding:10,alignItems:"center"},children:[Object(u.jsx)("h1",{style:{alignSelf:"center"},children:"Projects"}),Object(u.jsx)("div",{children:Object(u.jsx)(T,{link:"https://quae.app",linkName:"quae.app",title:"Quae",description:"The first community driven voting platfrom. Exclusive to the city of Hoboken, NJ. Currently available on the App Store, and PlayStore",image:L})})]})}function E(e){var t=Object(o.useState)({title:"",link:"",pubDate:"",description:"",thumbnail:""}),n=Object(x.a)(t,2),c=(n[0],n[1]),i="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samuelgschmitt";Object(o.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){c(e.items[0])}))}),[i]);return Object(u.jsxs)("div",{style:{display:"flex",height:"90vh",flexDirection:"column",padding:10},children:[Object(u.jsx)(z,{}),Object(u.jsx)(I,{}),Object(u.jsx)(C,{}),Object(u.jsx)(P,{}),Object(u.jsx)(N,{})]})}var B=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(m.c,{children:Object(u.jsx)(m.a,{path:"/",children:Object(u.jsx)(E,{})})})})};var M=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(m.c,{children:Object(u.jsx)(m.a,{path:"/",children:Object(u.jsx)(P,{})})})})};var q=function(){return Object(u.jsxs)("div",{className:"app-container",children:[Object(u.jsx)("div",{className:"navbar",children:Object(u.jsx)(k,{})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.a,{path:"/blog",children:Object(u.jsx)(F,{})}),Object(u.jsx)(m.a,{path:"/contact",children:Object(u.jsx)(D,{})}),Object(u.jsx)(m.a,{path:"/projects",children:Object(u.jsx)(M,{})}),Object(u.jsx)(m.a,{path:"/",children:Object(u.jsx)(B,{})})]})})]})};var A=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(O,{children:Object(u.jsx)(q,{})})})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};d.a.render(Object(u.jsx)(j.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),J()}},[[46,1,2]]]);
//# sourceMappingURL=main.0e700c35.chunk.js.map