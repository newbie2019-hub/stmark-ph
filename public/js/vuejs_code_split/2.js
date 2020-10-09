(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gotop.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gotop.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inotom_vue_go_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inotom/vue-go-top */ "./node_modules/@inotom/vue-go-top/dist/vue-go-top.umd.js");
/* harmony import */ var _inotom_vue_go_top__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inotom_vue_go_top__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    GoTop: _inotom_vue_go_top__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Updates.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Gotop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Gotop */ "./resources/js/components/Gotop.vue");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {},
      postContent: "",
      popularPost: "",
      hasContent: true,
      total: 5,
      pageInfo: null
    };
  },
  methods: {
    getPost: function getPost() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context.next = 3;
                return _this.callApi("get", "/fetchUpdates?page=".concat(page, "&total=").concat(_this.total));

              case 3:
                res = _context.sent;

                if (res.status == 200 || res.status == 201) {
                  if (res.data.data.length > 0) {
                    _this.hasContent = true;
                  } else {
                    _this.hasContent = false;
                  }

                  _this.pageInfo = res.data;
                  _this.postContent = res.data.data;
                  console.log(_this.postContent);
                } else {
                  _this.swr();
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getPopularPost: function getPopularPost() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.callApi("get", "/getPopularPost");

              case 2:
                res = _context2.sent;

                if (res.status == 200 || res.status == 201) {
                  _this2.popularPost = res.data;
                } else {
                  _this2.swr();
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  created: function created() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this3.getPost();

              _this3.getPopularPost();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  components: {
    gotop: _components_Gotop__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gotop.vue?vue&type=template&id=4090a592&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Gotop.vue?vue&type=template&id=4090a592& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("go-top", {
        attrs: {
          bottom: 30,
          size: 60,
          weight: "bold",
          "bg-color": "#2d8cf0",
          "has-outline": false
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates.vue?vue&type=template&id=48d8f75e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Updates.vue?vue&type=template&id=48d8f75e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "update-section" }, [
      _c(
        "div",
        { staticClass: "container", staticStyle: { "min-height": "500px" } },
        [
          _vm.hasContent
            ? _c(
                "div",
                {
                  staticClass: "row justify-content-center  mt-5",
                  staticStyle: { "min-height": "500px" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "col-9 col-sm-9 col-md-10 col-lg-8" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._l(_vm.postContent, function(content, i) {
                        return _c(
                          "div",
                          {
                            key: i,
                            staticClass: "mb-4",
                            staticStyle: { "max-width": "800px" }
                          },
                          [
                            _c("div", { staticClass: "row no-gutters" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("img", {
                                  staticClass: "card-img",
                                  attrs: {
                                    src: "/uploads/" + content.featuredImage,
                                    alt: "..."
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "card-body" }, [
                                  _c("h5", { staticClass: "card-title" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "text-dark",
                                        attrs: { href: /blog/ + content.slug }
                                      },
                                      [_vm._v(_vm._s(content.title))]
                                    ),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-muted update-date" },
                                      [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(
                                              _vm._f("formatDate")(
                                                content.created_at
                                              )
                                            ) +
                                            "\n                        "
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _vm._v(
                                          "\n                        VIEWS: " +
                                            _vm._s(content.views) +
                                            "\n                        "
                                        ),
                                        _c("br")
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "card-text text-justify" },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(content.description) +
                                          "\n                    "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row pt-5" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "button-card button-card--secondary",
                                        attrs: {
                                          role: "button",
                                          href: /blog/ + content.slug
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                        Read More\n                      "
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-8 col-lg-4" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._l(_vm.popularPost, function(content, i) {
                        return _c("div", { key: i }, [
                          _c(
                            "a",
                            { attrs: { href: "/blog/" + content.slug } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "justify-content-center align-items-center mt-3"
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-fluid mx-auto",
                                    staticStyle: { display: "block" },
                                    attrs: {
                                      width: "50%",
                                      src: "/uploads/" + content.featuredImage,
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "h6",
                                    {
                                      staticClass:
                                        "text-muted mt-3 text-center mx-auto"
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(content.title) +
                                          "\n                      "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            _vm._f("formatDate")(
                                              content.created_at
                                            )
                                          ) +
                                          "\n                    "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      })
                    ],
                    2
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.hasContent
            ? _c(
                "div",
                {
                  staticClass: "row justify-content-center align-items-center"
                },
                [
                  _c(
                    "div",
                    { staticClass: "col-10 col-sm-9 col-md-9 col-lg-9 mt-5" },
                    [
                      _c("img", {
                        staticStyle: {
                          display: "block",
                          margin: "0 auto",
                          width: "75%",
                          cursor: "pointer"
                        },
                        attrs: { src: "/images/empty_post.svg" }
                      }),
                      _vm._v(" "),
                      _c(
                        "h4",
                        {
                          staticClass: "mx-auto text-center text-info mt-5 mb-3"
                        },
                        [
                          _vm._v(
                            "It appears that there are no updates for St. Mark Coptic Orthodox Church Philippines. You may check this section later. "
                          )
                        ]
                      )
                    ]
                  )
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
      "section",
      { staticClass: "updatesection", attrs: { id: "resources" } },
      [
        _c(
          "div",
          {
            staticClass:
              "container d-flex h-100 justify-content-center align-items-center"
          },
          [
            _c("div", { staticClass: "mx-auto text-center" }, [
              _c(
                "h1",
                {
                  attrs: {
                    "data-aos": "fade-right",
                    "data-aos-duration": "1400"
                  }
                },
                [
                  _c("span", { staticClass: "header-primary" }, [
                    _vm._v("UPDATES")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "icon-scroll" })
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      {
        staticClass: "text-uppercase mb-3",
        attrs: { "data-aos": "fade-up", "data-aos-duration": "1400" }
      },
      [
        _c(
          "span",
          { staticClass: "header-secondary text-secondary font-weight-bold" },
          [_vm._v("RECENT POST")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      {
        staticClass: "text-uppercase mb-3 text-center mx-auto",
        attrs: { "data-aos": "fade-up", "data-aos-duration": "1400" }
      },
      [
        _c(
          "span",
          { staticClass: "header-secondary  text-secondary font-weight-bold " },
          [_vm._v("POPULAR POST")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Gotop.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Gotop.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gotop_vue_vue_type_template_id_4090a592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gotop.vue?vue&type=template&id=4090a592& */ "./resources/js/components/Gotop.vue?vue&type=template&id=4090a592&");
/* harmony import */ var _Gotop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gotop.vue?vue&type=script&lang=js& */ "./resources/js/components/Gotop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Gotop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gotop_vue_vue_type_template_id_4090a592___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gotop_vue_vue_type_template_id_4090a592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Gotop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Gotop.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Gotop.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gotop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Gotop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gotop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gotop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Gotop.vue?vue&type=template&id=4090a592&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Gotop.vue?vue&type=template&id=4090a592& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gotop_vue_vue_type_template_id_4090a592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Gotop.vue?vue&type=template&id=4090a592& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Gotop.vue?vue&type=template&id=4090a592&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gotop_vue_vue_type_template_id_4090a592___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gotop_vue_vue_type_template_id_4090a592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Updates.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Updates.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Updates_vue_vue_type_template_id_48d8f75e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Updates.vue?vue&type=template&id=48d8f75e&scoped=true& */ "./resources/js/pages/Updates.vue?vue&type=template&id=48d8f75e&scoped=true&");
/* harmony import */ var _Updates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Updates.vue?vue&type=script&lang=js& */ "./resources/js/pages/Updates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Updates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Updates_vue_vue_type_template_id_48d8f75e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Updates_vue_vue_type_template_id_48d8f75e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48d8f75e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Updates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Updates.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Updates.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Updates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Updates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Updates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Updates.vue?vue&type=template&id=48d8f75e&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Updates.vue?vue&type=template&id=48d8f75e&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Updates_vue_vue_type_template_id_48d8f75e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Updates.vue?vue&type=template&id=48d8f75e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Updates.vue?vue&type=template&id=48d8f75e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Updates_vue_vue_type_template_id_48d8f75e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Updates_vue_vue_type_template_id_48d8f75e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);