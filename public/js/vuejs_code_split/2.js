(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{12:function(t,a,e){var s=e(171);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(8)(s,n);s.locals&&(t.exports=s.locals)},16:function(t,a,e){"use strict";var s=e(21),n={components:{GoTop:e.n(s).a}},i=e(2),r=Object(i.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("go-top",{attrs:{bottom:30,size:60,weight:"bold","bg-color":"#2d8cf0","has-outline":!1}})],1)}),[],!1,null,null,null);a.a=r.exports},170:function(t,a,e){"use strict";var s=e(12);e.n(s).a},171:function(t,a,e){(t.exports=e(6)(!1)).push([t.i,".card[data-v-344bf7c5]{border-left-color:#f1a02f;border-left-width:.4rem!important;outline:none;box-shadow:0 2px .4rem rgba(0,0,0,.123)}",""])},226:function(t,a,e){"use strict";e.r(a);var s=e(1),n=e.n(s),i=e(16),r=e(0),c=e.n(r);function o(t,a,e,s,n,i,r){try{var c=t[i](r),o=c.value}catch(t){return void e(t)}c.done?a(o):Promise.resolve(o).then(s,n)}function l(t){return function(){var a=this,e=arguments;return new Promise((function(s,n){var i=t.apply(a,e);function r(t){o(i,s,n,r,c,"next",t)}function c(t){o(i,s,n,r,c,"throw",t)}r(void 0)}))}}var d={data:function(){return{scheduleData:"",currentSchedule:[]}},components:{gotop:i.a},methods:{getSchedule:function(){var t=this;return l(n.a.mark((function a(){var e,s,i;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.callApi("get","/getSchedule");case 2:200!=(e=a.sent).status&&201!=e.status||(s=e.data,i=[],setTimeout((function(){s.forEach((function(t){c()(c()(String(t.start)).format("L")).isSameOrAfter(c()().format("L"))&&i.push(t)})),t.scheduleData=i}),200));case 4:case"end":return a.stop()}}),a)})))()}},created:function(){var t=this;return l(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.getSchedule();case 1:case"end":return a.stop()}}),a)})))()}},u=(e(170),e(2)),m=Object(u.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"container mt-4 mb-4",attrs:{id:"sched-section"}},[e("div",{staticClass:"container mt-4 mb-3 pl-3 pr-3"},[t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"row justify-content-center mt-4 mb-2",staticStyle:{"max-height":"1000px","overflow-y":"auto"}},[0==t.scheduleData.length?e("div",{staticClass:"col-sm-8 col-md-8 col-lg-10"},[e("p",{staticClass:"mx-auto text-center sub-header-primary text-dark"},[t._v("No Schedules Added")])]):t._e(),t._v(" "),t._l(t.scheduleData,(function(a,s){return e("div",{key:s,staticClass:"col-9 col-sm-9 col-md-7 col-lg-5 mb-1"},[e("div",{staticClass:"card p-3 mb-1",staticStyle:{height:"100%"}},[e("h5",{staticClass:"text-dark text-uppercase font-weight-bold"},[t._v("\n              "+t._s(a.title)+"\n            ")]),t._v(" "),e("p",{staticClass:"text-dark text-uppercase font-weight-bold"},[e("small",[t._v("STARTS: \n                "+t._s(t._f("formatDate")(a.start)))])]),t._v(" "),e("p",{staticClass:"text-dark text-uppercase font-weight-bold"},[e("small",[t._v("END: \n                "+t._s(t._f("formatDate")(a.end)))])]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"text-dark text-uppercase",staticStyle:{"font-size":"1.2rem"}},[t._v("\n              "+t._s(a.description)+"\n            ")])])])}))],2)])]),t._v(" "),e("div",{staticClass:"container mt-3 mb-3",attrs:{id:"clergy"}},[e("div",{staticClass:"container mt-4 mb-3 pl-3 pr-3"},[t._m(3),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"row justify-content-center align-items-center"},[e("div",{staticClass:"col-sm-10 col-md-5 col-lg-4 justify-content-center align-items-center"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"clergy-container"},[e("img",{staticClass:"img-fluid",staticStyle:{"max-width":"350px","max-height":"300px","object-fit":"cover"},attrs:{src:"/images/frmaurice.jpg",loading:"lazy"}}),t._v(" "),t._m(5)])])]),t._v(" "),e("div",{staticClass:"col-sm-10 col-md-5 col-lg-4 justify-content-center align-items-center"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"clergy-container justify-content-center"},[e("img",{staticClass:"img-fluid",staticStyle:{"max-width":"350px","max-height":"300px","object-fit":"cover"},attrs:{src:"/images/abounamina.jpg",loading:"lazy"}}),t._v(" "),t._m(6)])])])])])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"resources"},[e("div",{staticClass:"container d-flex h-100 justify-content-center align-items-center"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-10 col-sm-8 col-md-8 col-lg-10"},[e("div",{staticClass:"text-lg-left"},[e("div",[e("h3",{staticClass:"text-white",attrs:{"data-aos":"fade-right","data-aos-duration":"1200"}},[e("span",{staticClass:"header-schedule"},[t._v("EVENTS SCHEDULE")])])])]),t._v(" "),e("div",{staticClass:"text-lg-left"},[e("p",{staticClass:"text-white",attrs:{"data-aos":"fade-right","data-aos-duration":"1200","data-aos-delay":"200"}},[t._v("\n              Please be guided by the schedules and announcements of the\n              upcoming events. Stay tuned for more updates!\n            ")])]),t._v(" "),e("div",{staticClass:"col-10 col-sm-10 col-md-10 col-lg-6",staticStyle:{"margin-left":"-13px","margin-top":"6px","margin-bottom":"5px"}},[e("a",{staticClass:"button button--secondary",attrs:{href:"#sched-section",role:"button","data-aos":"fade-up","data-aos-offset":"0","data-aos-duration":"1100"}},[t._v("Schedules")]),t._v(" "),e("a",{staticClass:"button button--secondary",attrs:{href:"/updates",role:"button","data-aos":"fade-up","data-aos-offset":"0","data-aos-duration":"1100"}},[t._v("Updates   "),e("i",{staticClass:"fas fa-clipboard"})])])])]),t._v(" "),e("div",{staticClass:"icon-scroll"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row align-items-center pt-4"},[a("h3",{staticClass:"text-center mx-auto text-uppercase",attrs:{"data-aos":"fade-up","data-aos-duration":"1400"}},[a("span",{staticClass:"header-secondary text-secondary font-weight-bold"},[this._v("UPDATES")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row align-items-center"},[a("h3",{staticClass:"text-center mx-auto",attrs:{"data-aos":"fade-up","data-aos-duration":"1400","data-aos-delay":"200"}},[a("span",{staticClass:"sub-header-primary text-dark"},[this._v("SCHEDULES")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row align-items-center pt-4"},[a("h3",{staticClass:"text-center mx-auto text-uppercase",attrs:{"data-aos":"fade-up","data-aos-duration":"1400"}},[a("span",{staticClass:"header-secondary text-secondary font-weight-bold"},[this._v("PHILIPPINES")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row align-items-center"},[a("h3",{staticClass:"text-center mx-auto",attrs:{"data-aos":"fade-up","data-aos-duration":"1400","data-aos-delay":"200"}},[a("span",{staticClass:"sub-header-primary text-dark"},[this._v("SERVING CLERGY")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"clergy-container--content"},[a("h3",{staticClass:"header-secondary font-weight-bold mt-2 text-dark text-uppercase"},[this._v("\n                  Fr. Mina Maurice\n                ")]),this._v(" "),a("p",[this._v("\n                  Contact Information:\n                  "),a("br"),this._v("Phone: (+63) 912-345-6789 "),a("br"),this._v("Email:\n                  sample_email@gmail.com\n                ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"clergy-container--content"},[a("h3",{staticClass:"header-secondary font-weight-bold mt-2 text-dark text-uppercase"},[this._v("\n                  Abouna Keryllos Hany\n                ")]),this._v(" "),a("p",{},[this._v("\n                  Contact Information:\n                  "),a("br"),this._v("Phone: (+63) 912-345-6789 "),a("br"),this._v("Email:\n                  sample_email@gmail.com\n                ")])])}],!1,null,"344bf7c5",null);a.default=m.exports}}]);