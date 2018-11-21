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



var navLinks = [{
  title: 'Songs',
  url: '/songs'
}, {
  title: 'Users',
  url: '/users'
}, {
  title: 'Upload',
  url: '/upload'
}];

var Nav = function Nav(_ref) {
  var user = _ref.user;
  var isUser = !!(user || {}).keys;
  console.log('>> nav user', user.keys);
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
  }, isUser && navLinks.map(function (_ref2) {
    var title = _ref2.title,
        url = _ref2.url;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: url,
      key: url
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: 'nav__link'
    }, title));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.8ae1fa0dad7bbc0e589f.hot-update.js.map