"use strict";(self["webpackChunkestela_auth"]=self["webpackChunkestela_auth"]||[]).push([[298],{4298:function(t,a,s){s.r(a),s.d(a,{default:function(){return p}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"body"}},[a("div",{staticClass:"wrapper"},[a("form",{attrs:{action:""}},[a("h1",[t._v("Войти")]),a("div",{staticClass:"input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.authInput.txtEmail,expression:"authInput.txtEmail"}],attrs:{type:"text",placeholder:"Имя пользователя",required:""},domProps:{value:t.authInput.txtEmail},on:{input:function(a){a.target.composing||t.$set(t.authInput,"txtEmail",a.target.value)}}}),a("i",{staticClass:"bx bx-user"})]),a("div",{staticClass:"input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.authInput.txtPassword,expression:"authInput.txtPassword"}],attrs:{type:"password",placeholder:"Введите пароль",required:""},domProps:{value:t.authInput.txtPassword},on:{input:function(a){a.target.composing||t.$set(t.authInput,"txtPassword",a.target.value)}}}),a("i",{staticClass:"bx bxs-lock-alt"})]),a("button",{staticClass:"btn",on:{click:function(a){return t.login()}}},[t._v("Войти")])])])])},u=[],i=(s(4114),s(5479)),n={name:"login",data(){return{authInput:{txtEmail:"",txtPassword:""}}},computed:{user(){return i.M.state.user}},methods:{async login(){try{await i.M.dispatch("login",{email:this.authInput.txtEmail,password:this.authInput.txtPassword}),null!=this.user&&(await this.$router.push("/"),this.$message({type:"success",message:"Вход выполнен!"}))}catch(t){this.$message({message:"Неверный логин или пароль!",type:"warning"})}}}},r=n,l=s(1656),o=(0,l.A)(r,e,u,!1,null,null,null),p=o.exports}}]);
//# sourceMappingURL=298.3dccf7dd.js.map