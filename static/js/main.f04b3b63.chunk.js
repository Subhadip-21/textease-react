(this["webpackJsonptext-ease"]=this["webpackJsonptext-ease"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(8),r=n.n(s),l=(n(13),n(14),n(5)),i=n(1);function d(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark ",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(l.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"})]})})})})}var o=n(4);n(16);function b(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],s=n[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"main",children:Object(i.jsxs)("div",{className:"container my-5",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-header",children:Object(i.jsx)("h5",{children:e.heading})}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},id:"myBox",rows:"7"})}),Object(i.jsxs)("div",{className:"card-footer",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Text Summary: "})," ",c.split(/\s+/).filter((function(e){return 0!==e.length})).length," ","Words and ",c.length," Characters"," "]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Reading Time: "}),.008*c.split(" ").filter((function(e){return 0!==e.length})).length," ","Minutes To Read !"]})]})]})})}),Object(i.jsxs)("div",{className:"col",children:[" ",Object(i.jsx)("button",{disabled:0===c.length,type:"button",className:"btn btn-success btn-sm my-3 ",onClick:function(){var e=c.toUpperCase();s(e)},children:"Convert To Uppercase"}),Object(i.jsx)("button",{disabled:0===c.length,type:"button",className:"btn btn-warning btn-sm my-3 mx-2",onClick:function(){var e=c.toLowerCase();s(e)},children:"Convert To Lowercase"}),Object(i.jsx)("button",{disabled:0===c.length,type:"button",className:"btn btn-info btn-sm my-1",onClick:function(){var e=c.split(/[ ]+/);s(e.join(" "))},children:"Remove Extra Space"}),Object(i.jsx)("button",{disabled:0===c.length,type:"button",className:"btn btn-danger btn-sm my-1 mx-2",onClick:function(){s("")},children:"Clear Text"})]}),Object(i.jsxs)("div",{className:"card my-3",children:[Object(i.jsx)("h5",{className:"card-header",children:"Analyzed Text:"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("p",{className:"card-text",children:c.length>0?c:"Nothing To Preview: Please Enter Text To Get Preview!"}),Object(i.jsx)("button",{disabled:0===c.length,type:"button",className:"btn btn-secondary btn-sm my-3 mx-1",onClick:function(){var e=document.getElementById("myBox");navigator.clipboard.writeText(e.value)},children:"Copy Text"})]})]})]})})})}var j=n(2);var x=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(d,{title:"Text Ease"}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(j.c,{children:Object(i.jsx)(j.a,{path:"/",element:Object(i.jsx)(b,{heading:"Enter Text To Analyze:"})})})})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.f04b3b63.chunk.js.map