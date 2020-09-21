(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Admin.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Admin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Admin.vue?vue&type=template&id=61fde616&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Admin.vue?vue&type=template&id=61fde616& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "sb-nav-fixed" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { attrs: { id: "layoutSidenav" } }, [
        _c("div", { attrs: { id: "layoutSidenav_nav" } }, [
          _c(
            "nav",
            {
              staticClass: "sb-sidenav accordion sb-sidenav-dark",
              attrs: { id: "sidenavAccordion" }
            },
            [
              _c("div", { staticClass: "sb-sidenav-menu" }, [
                _c("div", { staticClass: "nav" }, [
                  _c("div", { staticClass: "sb-sidenav-menu-heading" }, [
                    _vm._v("UPDATES")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-link text-uppercase",
                      attrs: { href: "index.html" }
                    },
                    [
                      _vm._m(1),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/manage/Updates" }
                        },
                        [_vm._v("Posts")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-link text-uppercase",
                      attrs: { href: "index.html" }
                    },
                    [
                      _vm._m(2),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/manage/schedule" }
                        },
                        [_vm._v("Schedules")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "sb-sidenav-menu-heading" }, [
                    _vm._v("RESOURCES")
                  ]),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse",
                      attrs: {
                        id: "collapseLayouts",
                        "aria-labelledby": "headingOne",
                        "data-parent": "#sidenavAccordion"
                      }
                    },
                    [
                      _c("nav", { staticClass: "sb-sidenav-menu-nested nav" }, [
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "nav-link",
                                attrs: { to: "/manage/resources/images" }
                              },
                              [_vm._v("Images")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [_vm._v("Videos")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [_vm._v("Books")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [_vm._v("Audios")]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "sb-sidenav-menu-heading" }, [
                    _vm._v("MANAGE")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "nav-link text-uppercase",
                      attrs: { href: "index.html" }
                    },
                    [
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/manage/accounts" }
                        },
                        [_vm._v("Accounts")]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(5)
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { attrs: { id: "layoutSidenav_content" } }, [
          _c("main", [
            _c(
              "div",
              { staticClass: "container-fluid" },
              [_c("router-view")],
              1
            )
          ]),
          _vm._v(" "),
          _vm._m(6)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      { staticClass: "sb-topnav navbar navbar-expand navbar-dark bg-dark" },
      [
        _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
          _vm._v("ADMIN PANEL")
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-link btn-sm order-1 order-lg-0",
            attrs: { id: "sidebarToggle", href: "#" }
          },
          [_c("i", { staticClass: "fas fa-bars" })]
        ),
        _vm._v(" "),
        _c(
          "ul",
          {
            staticClass:
              "navbar-nav d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"
          },
          [
            _c("li", { staticClass: "nav-item dropdown" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle",
                  attrs: {
                    id: "userDropdown",
                    href: "#",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [_c("i", { staticClass: "fas fa-user fa-fw" })]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "dropdown-menu dropdown-menu-right",
                  attrs: { "aria-labelledby": "userDropdown" }
                },
                [
                  _c(
                    "a",
                    { staticClass: "dropdown-item", attrs: { href: "#" } },
                    [_vm._v("Settings")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "dropdown-item", attrs: { href: "#" } },
                    [_vm._v("Activity Log")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-item",
                      attrs: { href: "login.html" }
                    },
                    [_vm._v("Logout")]
                  )
                ]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sb-nav-link-icon" }, [
      _c("i", { staticClass: "fas fa-newspaper" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sb-nav-link-icon" }, [
      _c("i", { staticClass: "fas fa-calendar-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link collapsed",
        attrs: {
          href: "#",
          "data-toggle": "collapse",
          "data-target": "#collapseLayouts",
          "aria-expanded": "false",
          "aria-controls": "collapseLayouts"
        }
      },
      [
        _c("div", { staticClass: "sb-nav-link-icon" }, [
          _c("i", { staticClass: "fas fa-align-justify" })
        ]),
        _vm._v(" CATEGORIES\n                "),
        _c("div", { staticClass: "sb-sidenav-collapse-arrow" }, [
          _c("i", { staticClass: "fas fa-angle-down" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sb-nav-link-icon" }, [
      _c("i", { staticClass: "fas fa-user-edit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sb-sidenav-footer" }, [
      _c("div", { staticClass: "small" }, [_vm._v("Logged in as:")]),
      _vm._v("User\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "py-4 bg-light mt-auto" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c(
          "div",
          {
            staticClass:
              "d-flex align-items-center justify-content-between small"
          },
          [
            _c("div", { staticClass: "text-muted" }, [
              _vm._v("© ST. MARK COPTIC ORTHODX CHURCH, PHILIPPINES")
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin/Admin.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/admin/Admin.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_vue_vue_type_template_id_61fde616___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=61fde616& */ "./resources/js/pages/admin/Admin.vue?vue&type=template&id=61fde616&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_61fde616___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admin_vue_vue_type_template_id_61fde616___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/Admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/Admin.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/admin/Admin.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/Admin.vue?vue&type=template&id=61fde616&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/Admin.vue?vue&type=template&id=61fde616& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_61fde616___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=template&id=61fde616& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Admin.vue?vue&type=template&id=61fde616&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_61fde616___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_61fde616___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);