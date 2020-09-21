(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["user"],
  data: function data() {
    return {
      isLoading: false,
      isSignUp: false,
      data: {
        fullName: "",
        email: "",
        password: ""
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    login: function login() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.data.email.trim() == "")) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", _this.err("Email Address is required"));

              case 2:
                if (!(_this.data.password.trim() == "")) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", _this.err("Password is required"));

              case 4:
                _this.isLoading = true;
                _context.next = 7;
                return _this.callApi("POST", "/userlogin", _this.data);

              case 7:
                res = _context.sent;

                if (!(res.status == 200 || res.status == 201)) {
                  _context.next = 13;
                  break;
                }

                _this.isLoading = false;
                window.location = "/manage";
                _context.next = 17;
                break;

              case 13:
                _this.data.email = "";
                _this.data.password = "";
                _this.isLoading = false;
                return _context.abrupt("return", _this.err("Email or Password is incorrect"));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    SignUp: function SignUp() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.data.fullName.trim() == "")) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", _this2.err("Full name is required"));

              case 2:
                if (!(_this2.data.email.trim() == "")) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", _this2.err("Email is required"));

              case 4:
                if (!(_this2.data.password.trim() == "")) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", _this2.err("Password is required"));

              case 6:
                _this2.isAdding = true;
                _context2.next = 9;
                return _this2.callApi("post", "/sign-up", _this2.data);

              case 9:
                res = _context2.sent;

                if (res.status == 200 || res.status == 201) {
                  _this2.success("User has been added successfully!");

                  _this2.addingUser = false;
                  _this2.isAdding = false;
                  _this2.data.fullName = "";
                  _this2.data.email = "";
                  _this2.data.password = "";
                  window.location = "/manage";
                } else {
                  if (res.status == 422) {
                    for (i in res.data.errors) {
                      _this2.err(res.data.errors[i][0]);

                      _this2.isAdding = false;
                    }
                  } else {
                    _this2.swr();
                  }
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { height: "100vh" } }, [
    _c("div", { staticClass: "container-fluid h-100" }, [
      _c(
        "div",
        {
          staticClass:
            "row d-flex h-100 justify-content-center align-items-center"
        },
        [
          _c("div", { staticClass: "col-sm-4 col-md-4 col-lg-4" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "/images/login.png", loading: "lazy" }
            })
          ]),
          _vm._v(" "),
          !_vm.isSignUp
            ? _c("div", { staticClass: "col-sm-6 col-md-6 col-lg-6" }, [
                _c("h3", { staticClass: "mx-auto text-center pt-3 pb-5" }, [
                  _vm._v("Please Log-in")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-sm-7 col-md-7 col-lg-5" }, [
                    _c("form", [
                      _c("div", { staticClass: "form-group" }, [
                        _vm._v(
                          "\n                Email Address\n                "
                        ),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.email,
                              expression: "data.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            id: "user_email",
                            placeholder: "sampleemail@gmail.com",
                            "aria-describedby": "Email Address"
                          },
                          domProps: { value: _vm.data.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.data, "email", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _vm._v("\n                Password\n                "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.password,
                              expression: "data.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            id: "user_password",
                            placeholder: "******"
                          },
                          domProps: { value: _vm.data.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.data,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("p", {}, [
                        _vm._v(
                          "\n                Dont have an account?\n                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-center mx-auto text-warning",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                _vm.isSignUp = !_vm.isSignUp
                              }
                            }
                          },
                          [_vm._v("Sign-Up")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row justify-content-center" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-info mt-4",
                            attrs: { type: "button" },
                            on: { click: _vm.login }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.isLoading ? "Logging in..." : "Log-in")
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.isSignUp
            ? _c("div", { staticClass: "col-sm-6 col-md-6 col-lg-6" }, [
                _c("h3", { staticClass: "mx-auto text-center pt-3 pb-5" }, [
                  _vm._v("Sign-Up")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-sm-7 col-md-7 col-lg-5" }, [
                    _vm._v("\n            Full Name\n            "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.fullName,
                          expression: "data.fullName"
                        }
                      ],
                      staticClass: "form-control form-control-sm mb-2",
                      attrs: { type: "text", placeholder: "" },
                      domProps: { value: _vm.data.fullName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "fullName", $event.target.value)
                        }
                      }
                    }),
                    _vm._v("\n            Email Address\n            "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.email,
                          expression: "data.email"
                        }
                      ],
                      staticClass: "form-control form-control-sm mb-2",
                      attrs: { type: "text", placeholder: "" },
                      domProps: { value: _vm.data.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v("\n            Password\n            "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.password,
                          expression: "data.password"
                        }
                      ],
                      staticClass: "form-control form-control-sm mb-2",
                      attrs: { type: "password", placeholder: "" },
                      domProps: { value: _vm.data.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "password", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("p", {}, [
                      _vm._v(
                        "\n              Already have an account?\n              "
                      ),
                      _c(
                        "a",
                        {
                          staticClass: "text-center mx-auto text-warning mt-3",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.isSignUp = !_vm.isSignUp
                            }
                          }
                        },
                        [_vm._v("Sign-In")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row justify-content-center" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-info mt-4",
                          attrs: { type: "button" },
                          on: { click: _vm.SignUp }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.isLoading ? "Signing Up..." : "Sign-Up")
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Login.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=3b6adb30& */ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=3b6adb30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);