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
/* harmony import */ var _api_auth_cognito__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/auth/cognito */ "./api/auth/cognito.js");
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav.scss */ "./components/Nav/Nav.scss");
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nav_scss__WEBPACK_IMPORTED_MODULE_3__);




var navLinks = [{
  title: 'Songs',
  url: '/songs'
}, {
  title: 'Users',
  url: '/users'
}, {
  title: 'Upload',
  url: '/upload'
}, {
  title: 'Sign Out',
  action: _api_auth_cognito__WEBPACK_IMPORTED_MODULE_2__["signOut"]
}];

var Nav = function Nav(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: 'nav'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'nav__content'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'nav__logo'
  }, 'RockWithThis')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'nav__links'
  }, isLoggedIn && navLinks.map(function (_ref2) {
    var title = _ref2.title,
        url = _ref2.url,
        action = _ref2.action;
    return url ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: url,
      key: title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: 'nav__link'
    }, title)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'nav__link',
      key: title,
      onClick: action
    }, title);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.77124c2b6c76dcb5c291.hot-update.js.map