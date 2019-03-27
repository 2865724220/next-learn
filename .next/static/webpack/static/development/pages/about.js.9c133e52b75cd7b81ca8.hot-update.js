webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./pages/store.js");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/cart-actions */ "./pages/actions/cart-actions.js");
var _jsxFileName = "/Users/jennygao/Desktop/testP/next-test/pages/about.js";


 // const reducer = (state=[],action) =>{
//     return state
// }

console.log('initial', _store__WEBPACK_IMPORTED_MODULE_1__["default"].getState());
_store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["addToCart"])('coffee 500ml', 1, 2));
_store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["addToCart"])('flower 1', 1, 2));
_store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["addToCart"])('juice', 1, 2));
_store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["updateCart"])('flower 1', 10, 10));
_store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["deleteFormCart"])('coffee 500ml'));
var unsubscrible = _store__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(function () {
  console.log(_store__WEBPACK_IMPORTED_MODULE_1__["default"].getState());
});
unsubscrible();

function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "about");
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.9c133e52b75cd7b81ca8.hot-update.js.map