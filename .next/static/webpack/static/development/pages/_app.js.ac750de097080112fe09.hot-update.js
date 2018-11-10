webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.scss */ "./components/Nav/Nav.scss");
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Nav_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/josephwilliams/Documents/rwt-admin-dashboard/components/Nav/index.js";



var navLinks = [{
  title: 'Upload',
  url: '/upload'
}, {
  title: 'Songs',
  url: '/songs'
}, {
  title: 'Users',
  url: '/users'
}];

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: 'nav',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'nav__logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, 'RockWithThis'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'nav__links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, navLinks.map(function (_ref) {
    var title = _ref.title,
        url = _ref.url;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: url,
      key: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: 'nav__link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, title));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.ac750de097080112fe09.hot-update.js.map