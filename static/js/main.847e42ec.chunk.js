(this.webpackJsonplearnreact3=this.webpackJsonplearnreact3||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(14),l=n.n(i),r=n(13),a=o.a.createContext(),d=n(0);var s=function(){var e,t=Object(c.useContext)(a).addNewTodo;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"todos"}),Object(d.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,value:e,onInput:function(t){e=t.target.value},onKeyDown:t})]})};var u=function(e){var t=e.id,n=Object(c.useContext)(a).todoItemValue,o=Object(c.useContext)(a),i=o.toggleTodo,l=o.removeTodo,r=o.editingTodo,s=o.handleEdit,u=o.editedTodo,j=o.onBlurEditTodo,h=Object(c.useRef)(null);Object(c.useEffect)((function(){h.current.focus()}));var b,m,O,f,x=[];return n.map((function(e){e.id===t&&!0===e.completed&&(x.push("completed"),b=!0),e.id===t&&!0===e.editing&&(O="editing"),e.id===t&&(m=e.title),e.id===t&&(f=e.editingValue)})),Object(d.jsxs)("li",{className:x[0]+" "+O,children:[Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)("input",{className:"toggle",type:"checkbox",onChange:function(){return i(t)},checked:b||""}),Object(d.jsx)("label",{onDoubleClick:function(){return r(t)},children:m}),Object(d.jsx)("button",{className:"destroy",onClick:function(){return l(t)}})]}),Object(d.jsx)("input",{className:"edit",id:t,ref:h,value:f,onInput:s.bind(this,t),onKeyDown:u.bind(this,t),onBlur:function(){return j(t)}})]})};var j=function(){return Object(c.useContext)(a).todoItemValue.map((function(e){return Object(d.jsx)(u,{id:e.id},e.id)}))};var h=function(){return Object(c.useContext)(a).todoItemValue.map((function(e){if(!0===e.completed)return Object(d.jsx)(u,{id:e.id},e.id)}))},b=n(2);var m=function(){var e=Object(c.useContext)(a).todoItemValue;return e.map((function(t){if(!1===t.completed)return Object(d.jsx)(u,{todoItemValue:e,id:t.id},t.id)}))};var O=function(){var e=Object(c.useContext)(a),t=e.toggleAllTodo,n=e.todoItemValue.every((function(e){return e.completed}));return Object(d.jsxs)("section",{className:"main",children:[Object(d.jsx)("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",onChange:function(){return t()},checked:n||""}),Object(d.jsx)("label",{htmlFor:"toggle-all"}),Object(d.jsxs)("ul",{className:"todo-list",children:[Object(d.jsx)(b.a,{exact:!0,path:"/",children:Object(d.jsx)(j,{})}),Object(d.jsx)(b.a,{path:"/active",children:Object(d.jsx)(m,{})}),Object(d.jsx)(b.a,{path:"/completed",children:Object(d.jsx)(h,{})})]})]})},f=n(7);var x=function(){var e=Object(c.useContext)(a),t=e.removeCompleted,n=e.hashValue,o=e.todoItemValue,i=o.filter((function(e){return!1===e.completed}));return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsxs)("span",{className:"todo-count",children:[Object(d.jsx)("strong",{children:i.length})," item",0===i.length||i.length>1?"s":null," left"]}),Object(d.jsxs)("ul",{className:"filters",children:[Object(d.jsx)("li",{children:Object(d.jsx)(f.c,{className:"#/"==n?"selected":null,to:"/",children:"All"})}),Object(d.jsx)("li",{children:Object(d.jsx)(f.c,{className:"#/active"==n?"selected":null,to:"/active",children:"Active"})}),Object(d.jsx)("li",{children:Object(d.jsx)(f.c,{className:"#/completed"==n?"selected":null,to:"/completed",children:"Completed"})})]}),o.length>i.length?Object(d.jsx)("button",{className:"clear-completed",onClick:function(){return t()},children:"Clear completed"}):null]})};var p=function(){return Object(d.jsxs)("footer",{className:"info",children:[Object(d.jsx)("p",{children:"Double-click to edit a todo"}),Object(d.jsxs)("p",{children:["Template by ",Object(d.jsx)("a",{href:"http://sindresorhus.com",children:"Sindre Sorhus"})]}),Object(d.jsxs)("p",{children:["Created by"," ",Object(d.jsx)("a",{href:"https://github.com/vladimirkononovich-main",children:"Vladimir Kononovich"})]}),Object(d.jsxs)("p",{children:["Part of ",Object(d.jsx)("a",{href:"http://todomvc.com",children:"TodoMVC"})]})]})};var g=function(){var e=Object(c.useState)(window.location.hash),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(JSON.parse(localStorage.getItem("value"))||[]),l=Object(r.a)(i,2),u=l[0],j=l[1];return localStorage.setItem("value",JSON.stringify(u)),n!==window.location.hash&&o(window.location.hash),Object(d.jsx)(a.Provider,{value:{todoItemValue:u,addNewTodo:function(e){"Enter"===e.code&&e.target.value.trim()&&(j(u.concat([{title:e.target.value,id:performance.now(),completed:!1,editing:!1,editingValue:e.target.value}])),e.target.value=null)},toggleTodo:function(e){j(u.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},removeTodo:function(e){j(u.filter((function(t){return t.id!==e})))},toggleAllTodo:function(){var e=u.every((function(e){return e.completed}));j(u.map((function(t){return t.completed=!e,t})))},removeCompleted:function(){j(u.filter((function(e){return!0!==e.completed})))},editingTodo:function(e){j(u.map((function(t){return t.id===e&&(t.editing=!t.editing),t})))},handleEdit:function(e,t){j(u.map((function(n){return n.id===e&&(n.editingValue=t.target.value),n})))},editedTodo:function(e,t){j(u.map((function(n){return n.id===e&&"Enter"===t.code&&(n.title=n.editingValue,n.editing=!1),n.id===e&&"Escape"===t.code&&(n.editing=!1),n})))},onBlurEditTodo:function(e){j(u.map((function(t){return t.id===e&&(t.editing=!1),t})))},hashValue:n},children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("section",{className:"todoapp",children:[Object(d.jsx)(s,{}),u.length>0?Object(d.jsx)(O,{todoItemValue:u}):null,u.length>0?Object(d.jsx)(x,{todoItemValue:u}):null]}),Object(d.jsx)(p,{})]})})};n(30);l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(f.a,{children:Object(d.jsx)(f.b,{children:Object(d.jsx)(b.c,{children:Object(d.jsx)(g,{})})})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.847e42ec.chunk.js.map