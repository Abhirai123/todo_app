(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(7),r=n.n(o),a=(n(12),n.p,n(13),n(3)),s=n(2),l=n(0),u=function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("li",{children:[t.text," ",Object(l.jsx)("button",{onClick:function(){t.onDelete(t.id)},children:"X"})]})})},j=function(){var t=Object(c.useState)(),e=Object(s.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)(function(){var t=localStorage.getItem("todolist");return t?JSON.parse(t):[]}()),r=Object(s.a)(o,2),j=r[0],d=r[1],b=function(t){d((function(e){return e.filter((function(e,n){return n!==t}))}))};return Object(c.useEffect)((function(){localStorage.setItem("todolist",JSON.stringify(j))}),[j]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"ToDo App"}),Object(l.jsx)("input",{type:"text",placeholder:"\ud83d\udcdd add items",onChange:function(t){i(t.target.value)},value:n}),Object(l.jsx)("button",{className:"add_btn",onClick:function(){n?(d([].concat(Object(a.a)(j),[n])),i("")):alert("Blank value not allow....!")},children:"+"}),Object(l.jsx)("ul",{children:j.map((function(t,e){return Object(l.jsx)(u,{id:e,text:t,onDelete:b},e)}))})]})};var d=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(j,{})})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.af89ff9c.chunk.js.map