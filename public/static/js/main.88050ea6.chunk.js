(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],{24:function(e,c,t){},26:function(e,c,t){},46:function(e,c,t){"use strict";t.r(c);var n=t(2),s=t(16),a=t.n(s),r=(t(24),t(6)),i=t.n(r),o=t(7),j=t(17),l=t(19),d=(t(26),t(18)),b=t.n(d),u=t(0);var h=function(){var e=Object(n.useState)({joke:""}),c=Object(l.a)(e,2),t=c[0],s=c[1];Object(n.useEffect)((function(){a()}),[]);var a=function(){var e=Object(j.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.chucknorris.io/jokes/random");case 2:c=e.sent,console.log(c.data.value),s(Object(o.a)(Object(o.a)({},t),{},{joke:c.data.value}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h1",{className:"title",children:"CHUCK NORRIS API"})}),Object(u.jsxs)("div",{className:"col-6 searchJokeCol",children:[Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header",children:"Search for a word"}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)("input",{type:"text"})})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn btn-warning btn-lg",children:"Generate Joke"})})]})]}),Object(u.jsx)("h2",{className:"subTitle",children:"HERE IS JOKE"}),Object(u.jsx)("h4",{children:t.joke})]})};a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.88050ea6.chunk.js.map