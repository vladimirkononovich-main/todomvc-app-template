(this.webpackJsonplearnreact3=this.webpackJsonplearnreact3||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),l=c(17),i=c.n(l),r=c(4),a=c(20),s=c(12),d=o.a.createContext(),u=c(1);var j=function(){var e=Object(n.useContext)(d).newTodo,t=Object(n.useState)(""),c=Object(s.a)(t,2),o=c[0],l=c[1],i=function(t){l(t.target.value),"Enter"===t.code&&o.trim()&&(e(o),l(""))};return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:"todos"}),Object(u.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,value:o,onInput:i,onKeyDown:i})]})};var b=function(e){var t=e.id,c=Object(n.useContext)(d),o=c.toggleTodo,l=c.removeTodo,i=c.editingTodo,r=c.handleEdit,a=c.editedTodo,s=c.onBlurEditTodo,j=c.todosItemsValue,b=Object(n.useRef)(null);Object(n.useEffect)((function(){b.current.focus()}));var h,O,m,f=[];return j.forEach((function(e){e.id===t&&(!0===e.completed&&f.push("completed"),!0===e.editing&&f.push("editing"),h=e.completed,O=e.title,m=e.editingValue)})),Object(u.jsxs)("li",{className:f.join(" "),children:[Object(u.jsxs)("div",{className:"view",children:[Object(u.jsx)("input",{className:"toggle",type:"checkbox",onChange:function(){return o(t)},checked:h}),Object(u.jsx)("label",{onDoubleClick:function(){return i(t)},children:O}),Object(u.jsx)("button",{className:"destroy",onClick:function(){return l(t)}})]}),Object(u.jsx)("input",{className:"edit",id:t,ref:b,value:m,onInput:function(e){return r(t,e)},onKeyDown:function(e){return a(t,e)},onBlur:function(){return s(t)}})]})};var h=function(){var e=Object(n.useContext)(d),t=e.toggleAllTodo,c=e.todosItemsValue,o=e.hashValue,l=c.every((function(e){return e.completed}));return Object(u.jsxs)("section",{className:"main",children:[Object(u.jsx)("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",onChange:function(){return t()},checked:l}),Object(u.jsx)("label",{htmlFor:"toggle-all"}),Object(u.jsx)("ul",{className:"todo-list",children:c.map((function(e){return!0===e.completed&&"#/completed"===o||"#/"===o||!1===e.completed&&"#/active"===o?Object(u.jsx)(b,{id:e.id},e.id):void 0}))})]})},O=c(8);var m=function(){var e=Object(n.useContext)(d),t=e.removeCompleted,c=e.hashValue,o=e.todosItemsValue,l=o.filter((function(e){return!1===e.completed}));return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsxs)("span",{className:"todo-count",children:[Object(u.jsx)("strong",{children:l.length})," item",0===l.length||l.length>1?"s":null," left"]}),Object(u.jsxs)("ul",{className:"filters",children:[Object(u.jsx)("li",{children:Object(u.jsx)(O.c,{className:"#/"==c?"selected":null,to:"/",children:"All"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.c,{className:"#/active"==c?"selected":null,to:"/active",children:"Active"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.c,{className:"#/completed"==c?"selected":null,to:"/completed",children:"Completed"})})]}),o.length>l.length?Object(u.jsx)("button",{className:"clear-completed",onClick:function(){return t()},children:"Clear completed"}):null]})};var f=function(){return Object(u.jsxs)("footer",{className:"info",children:[Object(u.jsx)("p",{children:"Double-click to edit a todo"}),Object(u.jsxs)("p",{children:["Template by ",Object(u.jsx)("a",{href:"http://sindresorhus.com",children:"Sindre Sorhus"})]}),Object(u.jsxs)("p",{children:["Created by"," ",Object(u.jsx)("a",{href:"https://github.com/vladimirkononovich-main",children:"Vladimir Kononovich"})]}),Object(u.jsxs)("p",{children:["Part of ",Object(u.jsx)("a",{href:"http://todomvc.com",children:"TodoMVC"})]})]})};var p=function(){var e=Object(n.useState)(window.location.hash),t=Object(s.a)(e,2),c=t[0],o=t[1],l=Object(n.useState)(JSON.parse(localStorage.getItem("value"))||[]),i=Object(s.a)(l,2),b=i[0],O=i[1];return Object(n.useEffect)((function(){localStorage.setItem("value",JSON.stringify(b))})),c!==window.location.hash&&o(window.location.hash),Object(u.jsx)(d.Provider,{value:{todosItemsValue:b,newTodo:function(e){O([].concat(Object(a.a)(b),[{title:e,id:performance.now(),completed:!1,editing:!1,editingValue:e}]))},toggleTodo:function(e){O(b.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},removeTodo:function(e){O(b.filter((function(t){return t.id!==e})))},toggleAllTodo:function(){O(b.map((function(e){return b.every((function(e){return e.completed}))?Object(r.a)(Object(r.a)({},e),{},{completed:!1}):Object(r.a)(Object(r.a)({},e),{},{completed:!0})})))},removeCompleted:function(){O(b.filter((function(e){return!0!==e.completed})))},editingTodo:function(e){O(b.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{editing:!0}):t})))},handleEdit:function(e,t){O(b.map((function(c){return c.id===e?Object(r.a)(Object(r.a)({},c),{},{editingValue:t.target.value}):c})))},editedTodo:function(e,t){O(b.map((function(c){if(c.id===e){if("Enter"===t.code&&c.editingValue.trim())return Object(r.a)(Object(r.a)({},c),{},{title:c.editingValue,editing:!1});if("Escape"===t.code)return Object(r.a)(Object(r.a)({},c),{},{editing:!1})}return c})))},onBlurEditTodo:function(e){O(b.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{editing:!1}):t})))},hashValue:c},children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"todoapp",children:[Object(u.jsx)(j,{}),b.length>0?Object(u.jsx)(h,{}):null,b.length>0?Object(u.jsx)(m,{}):null]}),Object(u.jsx)(f,{})]})})},x=(c(34),c(2));i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(O.b,{children:Object(u.jsx)(x.b,{children:Object(u.jsx)(p,{})})})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.599ae029.chunk.js.map