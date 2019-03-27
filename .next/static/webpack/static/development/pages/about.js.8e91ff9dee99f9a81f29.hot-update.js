webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/actions/cart-actions.js":
/*!***************************************!*\
  !*** ./pages/actions/cart-actions.js ***!
  \***************************************/
/*! exports provided: ADD_TO_CART, addToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
var ADD_TO_CART = 'ADD_TO_CART';

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



/***/ })

})
//# sourceMappingURL=about.js.8e91ff9dee99f9a81f29.hot-update.js.map