webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/reducers/cart-resucer.js":
/*!****************************************!*\
  !*** ./pages/reducers/cart-resucer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/cart-actions */ "./pages/actions/cart-actions.js");



var initialState = {
  cart: [{
    product: 'bread 700g',
    quality: 2,
    unitCost: 90
  }, {
    product: 'milk 500ml',
    quality: 2,
    unitCost: 90
  }]
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  // return state
  switch (action.type) {
    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_TO_CART"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          cart: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cart), [action.payload])
        });
      }

    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_CART"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          cart: state.cart.map(function (item) {
            return item.product === action.payload.product ? action.payload : item;
          })
        });
      }

    case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_FORM_CART"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          cart: state.cart.filter(function (item) {
            return item.product !== action.payload.product;
          })
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ })

})
//# sourceMappingURL=about.js.87e5e0973b952f7076c3.hot-update.js.map