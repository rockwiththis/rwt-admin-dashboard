webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/SignUpForm/index.js":
/*!****************************************!*\
  !*** ./components/SignUpForm/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth_cognito__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/auth/cognito */ "./api/auth/cognito.js");
var _jsxFileName = "/Users/josephwilliams/Documents/rwt-admin-dashboard/components/SignUpForm/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var LoginForm =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleFieldChange", function (field, event) {
      _this.setState(_defineProperty({}, field, event.target.payload));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleClickSearch", function () {
      console.log('>> SIGNUP', _this.state.username, _this.state.password);
      var _this$state = _this.state,
          username = _this$state.username,
          password = _this$state.password;
      Object(_api_auth_cognito__WEBPACK_IMPORTED_MODULE_1__["signIn"])(username, password, _this._onSuccessfulSignUp);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onSuccessfulSignUp", function () {
      '>> SUCCESSSFULLY SIGNED UP!';
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onKeyPress", function (event) {
      if (event.key === 'Enter') {
        _this._handleClickSearch();
      }
    });

    _this.state = {
      username: '',
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'loginForm__wrapper',
        onKeyPress: this._onKeyPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, 'SIGN UP', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this._handleClickSearch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(event) {
          return _this2._handleFieldChange('username', event);
        },
        type: 'text',
        placeholder: 'Username',
        className: 'signUpFormInput',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(event) {
          return _this2._handleFieldChange('email', event);
        },
        type: 'text',
        placeholder: 'Email',
        className: 'signUpFormInput',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(event) {
          return _this2._handleFieldChange('password', event);
        },
        type: 'password',
        placeholder: 'Password',
        className: 'signUpFormInput',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: 'submit',
        value: 'submit',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ })

})
//# sourceMappingURL=signup.js.48e0041f2f5241fead21.hot-update.js.map