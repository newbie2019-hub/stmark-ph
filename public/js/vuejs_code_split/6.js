(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Resources.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Resources.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['resources'],
  data: function data() {
    return {
      data: {
        title: '',
        description: '',
        content: ''
      },
      isSelected: false
    };
  },
  methods: {
    viewResource: function viewResource(res) {
      this.isSelected = true;
      this.data.title = res.title;
      this.data.description = res.description;
      this.data.content = res.content;
    },
    returnResources: function returnResources() {
      this.isSelected = false;
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Resources.vue?vue&type=template&id=23e37c6c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Resources.vue?vue&type=template&id=23e37c6c& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "container mt-5", staticStyle: { "min-height": "500px" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "row justify-content-center",
            attrs: { id: "allResources" }
          },
          [
            !_vm.isSelected
              ? _c(
                  "div",
                  { staticClass: "col-xs-10 col-sm-6 col-md-6 col-lg-6 mt-5" },
                  [
                    _c(
                      "ul",
                      { staticClass: "list-group list-group-flush" },
                      _vm._l(_vm.resources, function(res, i) {
                        return _c(
                          "li",
                          { key: i, staticClass: "list-group-item" },
                          [
                            _c(
                              "a",
                              {
                                attrs: { href: "" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.viewResource(res)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(res.title))]
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isSelected
              ? _c(
                  "div",
                  {
                    staticClass: "col-xs-10 col-sm-9 col-md-9 col-lg-8",
                    attrs: { id: "view" }
                  },
                  [
                    _c("h3", { staticClass: "mx-auto text-center" }, [
                      _vm._v(_vm._s(_vm.data.title))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ql-snow" }, [
                      _c("div", { staticClass: "ql-editor" }, [
                        _c("div", {
                          domProps: { innerHTML: _vm._s(_vm.data.content) }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-primary mt-5",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.returnResources($event)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-angle-left" }),
                            _vm._v("  Return")
                          ]
                        )
                      ])
                    ])
                  ]
                )
              : _vm._e()
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-8 col-md-8 col-lg-8" }, [
        _c(
          "h3",
          {
            staticClass: "text-uppercase mx-auto text-center",
            attrs: { "data-aos": "fade-up", "data-aos-duration": "1400" }
          },
          [
            _c(
              "span",
              {
                staticClass: "header-secondary text-secondary font-weight-bold"
              },
              [_vm._v("RESOURCES")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "h3",
          {
            staticClass: "text-uppercase mb-3 mx-auto text-center",
            attrs: { "data-aos": "fade-up", "data-aos-duration": "1400" }
          },
          [
            _c(
              "span",
              {
                staticClass: "header-secondary text-secondary font-weight-bold"
              },
              [_vm._v("THESE ARE THE AVAILABLE RESOURCES")]
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Resources.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Resources.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resources_vue_vue_type_template_id_23e37c6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resources.vue?vue&type=template&id=23e37c6c& */ "./resources/js/pages/Resources.vue?vue&type=template&id=23e37c6c&");
/* harmony import */ var _Resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resources.vue?vue&type=script&lang=js& */ "./resources/js/pages/Resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resources_vue_vue_type_template_id_23e37c6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resources_vue_vue_type_template_id_23e37c6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Resources.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Resources.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Resources.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Resources.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Resources.vue?vue&type=template&id=23e37c6c&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Resources.vue?vue&type=template&id=23e37c6c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resources_vue_vue_type_template_id_23e37c6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Resources.vue?vue&type=template&id=23e37c6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Resources.vue?vue&type=template&id=23e37c6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resources_vue_vue_type_template_id_23e37c6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resources_vue_vue_type_template_id_23e37c6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);