webpackJsonp([1],{KwzC:function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("mvHQ"),i=e.n(n),d=e("KwzC"),c=(e.n(d),{all:function(t){return t},active:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}}),s=new(e("7+uW").a)({el:".todoapp",data:{msg:"Welcome to Your Vue.js App",title:"TodoMVC ",newTodo:"",todos:JSON.parse(localStorage.getItem("todos")||"[]"),editedTodo:null,visibility:"all"},watch:{todos:{handler:function(t,o){localStorage.setItem("todos",i()(t))},deep:!0}},computed:{filteredTodos:function(){return c[this.visibility](this.todos)},remain:function(){return c.active(this.todos).length},allDone:{get:function(){return 0===this.remain},set:function(t){return this.todos.forEach(function(o){o.completed=t})}}},methods:{addTodo:function(t){this.newTodo&&(this.todos.push({content:this.newTodo,completed:!1}),this.newTodo="")},removeTodo:function(t){this.todos.splice(t,1)},editTodo:function(t){this.editCache=t.content,t.content&&(this.editedTodo=t)},doneEdit:function(t,o){this.editedTodo=null,t.content||this.removeTodo(o)},cancelEdit:function(t){this.editedTodo=null,t.content=this.editCache},clear:function(){this.todos=c.active(this.todos)}},directives:{focus:function(t,o){o&&t.focus()}}});window.addEventListener("hashchange",function(){var t=location.hash.replace(/#\/?/,"");c[t]?s.visibility=t:(location.hash="",s.visibility="all")})}},["NHnr"]);
//# sourceMappingURL=app.5e23aaf735268cc494a1.js.map