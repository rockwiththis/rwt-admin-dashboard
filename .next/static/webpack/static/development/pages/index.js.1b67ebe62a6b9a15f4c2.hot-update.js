webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CardGrid/index.js":
/*!**************************************!*\
  !*** ./components/CardGrid/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ "./components/Card/index.js");
/* harmony import */ var _CardGrid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardGrid.scss */ "./components/CardGrid/CardGrid.scss");
/* harmony import */ var _CardGrid_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardGrid_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/josephwilliams/Documents/rwt-admin-dashboard/components/CardGrid/index.js";




var CardGrid = function CardGrid(_ref) {
  var cardsList = _ref.cardsList;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'cardGrid',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, cardsList.map(function (_ref2) {
    var title = _ref2.title,
        description = _ref2.description,
        imageUrl = _ref2.imageUrl,
        url = _ref2.url;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'cardGrid__card',
      key: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: title,
      description: description,
      imageUrl: imageUrl,
      url: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardGrid);

/***/ })

})
//# sourceMappingURL=index.js.1b67ebe62a6b9a15f4c2.hot-update.js.map