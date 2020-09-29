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
      },
      isValidated: false
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
                _this.isValidated = true;

                if (!(_this.data.email.trim() == "")) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", _this.err("Email Address is required"));

              case 3:
                if (!(_this.data.password.trim() == "")) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", _this.err("Password is required"));

              case 5:
                _this.isLoading = true;
                _context.next = 8;
                return _this.callApi("POST", "/userlogin", _this.data);

              case 8:
                res = _context.sent;

                if (!(res.status == 200 || res.status == 201)) {
                  _context.next = 14;
                  break;
                }

                _this.isLoading = false;
                window.location = "/manage";
                _context.next = 18;
                break;

              case 14:
                _this.data.email = "";
                _this.data.password = "";
                _this.isLoading = false;
                return _context.abrupt("return", _this.err("Email or Password is incorrect"));

              case 18:
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wasvalidated .form-control:invalid,\n.form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.btn-container {\n  position: fixed;\n  z-index: 999;\n  top: 1.2rem;\n  right: 2.3rem;\n}\n.element-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n}\n.form-control {\n  background: #3a44a8;\n  border: 0;\n}\n.form-control:focus {\n  background: #3a44a8;\n  border-color: #14d0e9 !important;\n  box-shadow: 0 0 0 0.2rem rgba(20, 208, 233, 0.459);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
        "h6",
        {
          staticClass: "font-weight-bold login-logo",
          staticStyle: {
            position: "fixed",
            top: "2rem",
            left: "2.8rem",
            "z-index": "999"
          }
        },
        [_vm._v("\n      ST. MARK-PH\n    ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "btn-container" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-sm btn-outline-light rounded-pill",
            staticStyle: { "min-width": "75px", "margin-right": "10px" },
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.isSignUp = !_vm.isSignUp
              }
            }
          },
          [_vm._v(_vm._s(_vm.isSignUp ? "Login" : "Sign Up"))]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-sm btn-outline-light rounded-pill",
            staticStyle: { "min-width": "75px" },
            attrs: { href: "/" }
          },
          [_vm._v("Visit Site")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "row d-flex h-100 justify-content-center align-items-center"
        },
        [
          _c(
            "div",
            { staticClass: "col-sm-12 col-md-7 col-lg-8 h-100 st-mark" },
            [
              _c("div", { staticClass: "element-container" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  staticStyle: {
                    width: "50%",
                    display: "block",
                    margin: "0 auto"
                  },
                  attrs: { src: "/images/connection.svg", alt: "" }
                }),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c("h6", { staticClass: "mx-auto text-center mt-3" }, [
                  _vm._v(
                    "\n            Please log-in to your account to get started\n          "
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          !_vm.isSignUp
            ? _c(
                "div",
                {
                  staticClass: "col-sm-12 col-md-5 col-lg-4",
                  staticStyle: {
                    background: "rgb(75, 85, 193)",
                    height: "100vh"
                  }
                },
                [
                  _c("div", { staticClass: "element-container" }, [
                    _c("img", {
                      staticClass: "img-fluid img-mobile",
                      staticStyle: {
                        width: "60%",
                        display: "block",
                        margin: "0 auto"
                      },
                      attrs: { src: "/images/mobile_connection.svg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "mx-auto text-center text-light lead" },
                      [_vm._v("Welcome !")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "mx-auto text-center text-light lead" },
                      [
                        _vm._v(
                          "\n            Sign-in to your account\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        staticClass: "needs-validation",
                        class: { wasvalidated: _vm.isValidated },
                        attrs: { novalidate: "" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "form-group text-light lead" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex align-items-center" },
                              [
                                _c("li", {
                                  staticClass:
                                    "fas fa-envelope position-absolute ml-2 text-light"
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.data.email,
                                      expression: "data.email"
                                    }
                                  ],
                                  staticClass: "form-control text-light",
                                  staticStyle: { "padding-left": "35px" },
                                  attrs: {
                                    type: "text",
                                    placeholder: "sample_email@gmail.com",
                                    "aria-describedby": "Email Address",
                                    required: ""
                                  },
                                  domProps: { value: _vm.data.email },
                                  on: {
                                    keydown: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.login($event)
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.data,
                                        "email",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "valid-feedback" }, [
                                  _vm._v("Email address valid!")
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                  Email address should be valid\n                "
                                  )
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group text-light lead" },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex align-items-center" },
                              [
                                _c("i", {
                                  staticClass:
                                    "fas fa-key position-absolute ml-2 text-light"
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.data.password,
                                      expression: "data.password"
                                    }
                                  ],
                                  staticClass: "form-control text-light",
                                  staticStyle: { "padding-left": "35px" },
                                  attrs: {
                                    type: "password",
                                    id: "user_password",
                                    placeholder: "******",
                                    required: ""
                                  },
                                  domProps: { value: _vm.data.password },
                                  on: {
                                    keydown: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.login($event)
                                    },
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
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v("Password is required")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-info rounded-pill btn-block mt-4",
                                attrs: { type: "button" },
                                on: { click: _vm.login }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.isLoading ? "Logging in..." : "Login"
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isSignUp
            ? _c(
                "div",
                {
                  staticClass: "col-sm-12 col-md-5 col-lg-4",
                  staticStyle: {
                    background: "rgb(75, 85, 193)",
                    height: "100vh"
                  }
                },
                [
                  _c("div", { staticClass: "element-container" }, [
                    _c("img", {
                      staticClass: "img-fluid img-mobile",
                      staticStyle: {
                        width: "60%",
                        display: "block",
                        margin: "0 auto"
                      },
                      attrs: { src: "/images/mobile_connection.svg", alt: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "mx-auto text-center text-light lead" },
                      [_vm._v("Welcome !")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "mx-auto text-center text-light lead" },
                      [_vm._v("\n            We need your . . .\n          ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group text-light mt-3" }, [
                      _vm._v("\n            Full Name\n            "),
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c("li", {
                          staticClass:
                            "fas fa-user-circle position-absolute ml-2 text-light"
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.fullName,
                              expression: "data.fullName"
                            }
                          ],
                          staticClass: "form-control text-light",
                          staticStyle: { "padding-left": "30px" },
                          attrs: {
                            type: "text",
                            placeholder: "Juan Dela Cruz"
                          },
                          domProps: { value: _vm.data.fullName },
                          on: {
                            keydown: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.SignUp($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.data,
                                "fullName",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group text-light" }, [
                      _vm._v("\n            Email Address\n            "),
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c("li", {
                          staticClass:
                            "fas fa-envelope position-absolute ml-2 text-light"
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.email,
                              expression: "data.email"
                            }
                          ],
                          staticClass: "form-control  text-light",
                          staticStyle: { "padding-left": "30px" },
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
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group  text-light" }, [
                      _vm._v("\n            Password\n            "),
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c("i", {
                          staticClass:
                            "fas fa-key position-absolute ml-2 text-light"
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.password,
                              expression: "data.password"
                            }
                          ],
                          staticClass: "form-control  text-light",
                          staticStyle: { "padding-left": "30px" },
                          attrs: {
                            type: "password",
                            id: "user_password",
                            placeholder: "******"
                          },
                          domProps: { value: _vm.data.password },
                          on: {
                            keydown: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.SignUp($event)
                            },
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
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-info btn-block rounded-pill mt-4",
                        attrs: { type: "button" },
                        on: { click: _vm.SignUp }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.isLoading ? "Signing Up..." : "Sign Up"
                            ) +
                            "\n           "
                        )
                      ]
                    )
                  ])
                ]
              )
            : _vm._e()
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      {
        staticClass: "mx-auto text-center pt-5 text-uppercase font-weight-bold",
        staticStyle: { "letter-spacing": "0.4px", color: "rgb(43, 160, 230)" }
      },
      [
        _vm._v("\n            Welcome to St. Mark Coptic "),
        _c("br"),
        _vm._v("\n            Orthodox Church, Philippines\n          ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "pt-3" }, [_c("small", [_vm._v("Email")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", {}, [_c("small", [_vm._v("Password")])])
  }
]
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
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/Login.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/pages/Login.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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