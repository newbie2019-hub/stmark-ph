(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(t,a,e){var s=e(170);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(8)(s,i);s.locals&&(t.exports=s.locals)},169:function(t,a,e){"use strict";var s=e(11);e.n(s).a},170:function(t,a,e){(t.exports=e(7)(!1)).push([t.i,".form-control.is-invalid,.wasvalidated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}",""])},226:function(t,a,e){"use strict";e.r(a);var s=e(1),i=e.n(s);function n(t,a,e,s,i,n,r){try{var o=t[n](r),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(s,i)}function r(t){return function(){var a=this,e=arguments;return new Promise((function(s,i){var r=t.apply(a,e);function o(t){n(r,s,i,o,l,"next",t)}function l(t){n(r,s,i,o,l,"throw",t)}o(void 0)}))}}var o={props:["user"],data:function(){return{isLoading:!1,isSignUp:!1,data:{fullName:"",email:"",password:""},isValidated:!1}},mounted:function(){},methods:{login:function(){var t=this;return r(i.a.mark((function a(){var e;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.isValidated=!0,""!=t.data.email.trim()){a.next=3;break}return a.abrupt("return",t.err("Email Address is required"));case 3:if(""!=t.data.password.trim()){a.next=5;break}return a.abrupt("return",t.err("Password is required"));case 5:return t.isLoading=!0,a.next=8,t.callApi("POST","/userlogin",t.data);case 8:if(200!=(e=a.sent).status&&201!=e.status){a.next=14;break}t.isLoading=!1,window.location="/manage",a.next=18;break;case 14:return t.data.email="",t.data.password="",t.isLoading=!1,a.abrupt("return",t.err("Email or Password is incorrect"));case 18:case"end":return a.stop()}}),a)})))()},SignUp:function(){var t=this;return r(i.a.mark((function a(){var e,s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!=t.data.fullName.trim()){a.next=2;break}return a.abrupt("return",t.err("Full name is required"));case 2:if(""!=t.data.email.trim()){a.next=4;break}return a.abrupt("return",t.err("Email is required"));case 4:if(""!=t.data.password.trim()){a.next=6;break}return a.abrupt("return",t.err("Password is required"));case 6:return t.isAdding=!0,a.next=9,t.callApi("post","/sign-up",t.data);case 9:if(200==(e=a.sent).status||201==e.status)t.success("User has been added successfully!"),t.addingUser=!1,t.isAdding=!1,t.data.fullName="",t.data.email="",t.data.password="",window.location="/manage";else if(422==e.status)for(s in e.data.errors)t.err(e.data.errors[s][0]),t.isAdding=!1;else t.swr();case 11:case"end":return a.stop()}}),a)})))()}}},l=(e(169),e(2)),d=Object(l.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero",staticStyle:{height:"100vh"}},[e("div",{staticClass:"container-fluid h-100"},[e("div",{staticClass:"row d-flex h-100 justify-content-center align-items-center"},[t.isSignUp?t._e():e("div",{staticClass:"col-sm-10 col-md-6 col-lg-6 text-light"},[e("h4",{staticClass:"mx-auto text-center pt-3 pb-4 font-weight-bold"},[t._v("LOG-IN")]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-7 col-md-7 col-lg-7"},[e("form",{staticClass:"needs-validation",class:{wasvalidated:t.isValidated},attrs:{novalidate:""}},[e("div",{staticClass:"form-group"},[t._v("\n                Email Address\n                "),e("div",{staticClass:"d-flex align-items-center"},[e("li",{staticClass:"fas fa-envelope position-absolute ml-2 text-dark"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"form-control",staticStyle:{"padding-left":"30px"},attrs:{type:"email",id:"user_email",placeholder:"sampleemail@gmail.com","aria-describedby":"Email Address",required:""},domProps:{value:t.data.email},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.login(a)},input:function(a){a.target.composing||t.$set(t.data,"email",a.target.value)}}}),t._v(" "),e("div",{staticClass:"valid-feedback"},[t._v("Email address valid!")]),t._v(" "),e("div",{staticClass:"invalid-feedback"},[t._v("\n                    Email address should be valid\n                  ")])])]),t._v(" "),e("div",{staticClass:"form-group"},[t._v("\n                Password\n                "),e("div",{staticClass:"d-flex align-items-center"},[e("i",{staticClass:"fas fa-key position-absolute ml-2 text-dark"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],staticClass:"form-control",staticStyle:{"padding-left":"30px"},attrs:{type:"password",id:"user_password",placeholder:"******",required:""},domProps:{value:t.data.password},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.login(a)},input:function(a){a.target.composing||t.$set(t.data,"password",a.target.value)}}}),t._v(" "),e("div",{staticClass:"invalid-feedback"},[t._v("Password is required")])])]),t._v(" "),e("p",{},[t._v("\n                Dont have an account?\n                "),e("a",{staticClass:"text-center mx-auto text-warning",attrs:{type:"button"},on:{click:function(a){t.isSignUp=!t.isSignUp}}},[t._v("Sign-Up")])]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("a",{staticClass:"btn btn-info mt-4 mr-2",attrs:{type:"button",href:"/"}},[t._v("Visit Site")]),t._v(" "),e("a",{staticClass:"btn btn-info mt-4",attrs:{type:"button"},on:{click:t.login}},[t._v(t._s(t.isLoading?"Logging in...":"Log-in"))])])])])])]),t._v(" "),t.isSignUp?e("div",{staticClass:"col-sm-10 col-md-6 col-lg-6 text-light"},[e("h3",{staticClass:"mx-auto text-center pt-3 pb-3"},[t._v("SIGN-UP")]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-7 col-md-7 col-lg-7"},[e("div",{staticClass:"form-group"},[t._v("\n              Full Name\n              "),e("div",{staticClass:"d-flex align-items-center"},[e("li",{staticClass:"fas fa-user-circle position-absolute ml-2 text-dark"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.fullName,expression:"data.fullName"}],staticClass:"form-control",staticStyle:{"padding-left":"30px"},attrs:{type:"text",placeholder:"Juan Dela Cruz"},domProps:{value:t.data.fullName},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.SignUp(a)},input:function(a){a.target.composing||t.$set(t.data,"fullName",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[t._v("\n              Email Address\n              "),e("div",{staticClass:"d-flex align-items-center"},[e("li",{staticClass:"fas fa-envelope position-absolute ml-2 text-dark"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"form-control",staticStyle:{"padding-left":"30px"},attrs:{type:"email",id:"user_email",placeholder:"sampleemail@gmail.com","aria-describedby":"Email Address"},domProps:{value:t.data.email},on:{input:function(a){a.target.composing||t.$set(t.data,"email",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[t._v("\n              Password\n              "),e("div",{staticClass:"d-flex align-items-center"},[e("i",{staticClass:"fas fa-key position-absolute ml-2 text-dark"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],staticClass:"form-control",staticStyle:{"padding-left":"30px"},attrs:{type:"password",id:"user_password",placeholder:"******"},domProps:{value:t.data.password},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.SignUp(a)},input:function(a){a.target.composing||t.$set(t.data,"password",a.target.value)}}})])]),t._v(" "),e("p",{},[t._v("\n              Already have an account?\n              "),e("a",{staticClass:"text-center mx-auto text-warning mt-1",attrs:{type:"button"},on:{click:function(a){t.isSignUp=!t.isSignUp}}},[t._v("Sign-In")])]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("a",{staticClass:"btn btn-info mt-4",attrs:{type:"button"},on:{click:t.SignUp}},[e("i",{staticClass:"fas fa-user-plus"}),t._v("\n                "+t._s(t.isLoading?"Signing Up...":"Sign-Up"))])])])])]):t._e()])])])}),[],!1,null,null,null);a.default=d.exports}}]);