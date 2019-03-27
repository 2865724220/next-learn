webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/actions/cart-actions.js":
/*!***************************************!*\
  !*** ./pages/actions/cart-actions.js ***!
  \***************************************/
/*! exports provided: ADD_TO_CART, UPDATE_CART, DELETE_FORM_CART, addToCart, updateCart, deleteFormCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CART", function() { return UPDATE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FORM_CART", function() { return DELETE_FORM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCart", function() { return updateCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFormCart", function() { return deleteFormCart; });
var ADD_TO_CART = 'ADD_TO_CART';
var UPDATE_CART = 'UPDATE_CART';
var DELETE_FORM_CART = 'DELETE_FORM_CART';

function addToCart(product, quality, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: {
      product: product,
      quality: quality,
      unitCost: unitCost
    }
  };
}

function updateCart(product, quality, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product: product,
      quality: quality,
      unitCost: unitCost
    }
  };
}

function deleteFormCart(product, quality, unitCost) {
  return {
    type: DELETE_FORM_CART,
    payload: {
      product: product
    }
  };
}



/***/ }),

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

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ })

})
//# sourceMappingURL=about.js.389f3773991425f40665.hot-update.js.map