webpackHotUpdate("static/development/pages/login.js",{

/***/ "./api/auth/cognito.js":
/*!*****************************!*\
  !*** ./api/auth/cognito.js ***!
  \*****************************/
/*! exports provided: signInUserSDK, signUpNewUser, createUserToken, getUserData, signOut, signIn, forgotPassword, resetPassword, getCurrentUser, getAccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInUserSDK", function() { return signInUserSDK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpNewUser", function() { return signUpNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserToken", function() { return createUserToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPassword", function() { return forgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return getAccessToken; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amazon-cognito-identity-js */ "./node_modules/amazon-cognito-identity-js/es/index.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ "./api/auth/config.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import tracker from './RequestTracker.js';

var userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUserPool"]({
  UserPoolId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.USER_POOL_ID,
  ClientId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.APP_CLIENT_ID
}); // HELPERS
// this is directly from the SDK
// https://www.npmjs.com/package/amazon-cognito-identity-js

function signInUserSDK(_ref) {
  var username = _ref.username,
      password = _ref.password;
  var authenticationData = {
    Username: username,
    Password: password
  };
  var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["default"].AuthenticationDetails(authenticationData);
  var poolData = {
    UserPoolId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.USER_POOL_ID,
    // Your user pool id here
    ClientId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.APP_CLIENT_ID // Your client id here

  };
  var userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["default"].CognitoUserPool(poolData);
  var userData = {
    Username: username,
    Pool: userPool
  };
  var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["default"].CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function onSuccess(result) {
      var accessToken = result.getAccessToken().getJwtToken(); //POTENTIAL: Region needs to be set if not already set previously elsewhere.

      AWS.config.region = _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.REGION;
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.USER_POOL_ID,
        // your identity pool id here
        Logins: _defineProperty({}, "cognito-idp.".concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.REGION, ".amazonaws.com/").concat(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.USER_POOL_ID), result.getIdToken().getJwtToken())
      }); //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()

      AWS.config.credentials.refresh(function (error) {
        if (error) {
          console.error(error);
        } else {
          // Instantiate aws sdk service objects now that the credentials have been updated.
          // example: var s3 = new AWS.S3();
          console.log('Successfully logged!');
        }
      });
    },
    onFailure: function onFailure(err) {
      alert(err.message || JSON.stringify(err));
    }
  });
}
function signUpNewUser(_ref2) {
  var username = _ref2.username,
      email = _ref2.email,
      password = _ref2.password;
  var authenticationData = {
    Username: username,
    Password: password
  };
  var attributeList = [];
  var dataEmail = {
    Name: 'email',
    Value: email
  };
  var attributeEmail = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUserAttribute"](dataEmail);
  attributeList.push(attributeEmail);
  userPool.signUp('username', 'password', attributeList, null, function (err, result) {
    if (err) {
      alert(err.message || JSON.stringify(err));
      return;
    }

    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
  });
}
/**
 * Signs in a user from authentication data, and returns a user token.
 *
 * @param      {string}   username  The username
 * @param      {string}   password  The password
 * @return     {Promise}  Promise resolving to user token
 */

function createUserToken(username, password) {
  var authenticationData = {
    Username: username,
    Password: password
  };
  var user = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUser"]({
    Username: username,
    Pool: userPool
  });
  var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["AuthenticationDetails"](authenticationData);
  return new Promise(function (resolve, reject) {
    return user.authenticateUser(authenticationDetails, {
      onSuccess: function onSuccess(result) {
        console.log('> createUserToken SUCCESS', result);
        resolve(result.getAccessToken().getJwtToken());
      },
      onFailure: function onFailure(err) {
        return reject(err);
      }
    });
  });
}
/**
 * Gets user token from current authenticated user.
 *
 * @param      {Object}   currentUser  The current user
 * @return     {Promise}  Promise resolving to user token
 */

function getUserToken(currentUser) {
  return new Promise(function (resolve, reject) {
    currentUser.getSession(function (err, session) {
      if (err) {
        reject(err);
        return;
      }

      resolve(session.getIdToken().getJwtToken());
    });
  });
} // EXPORTED

/**
 * Attempts to grab current user from session and then fetch data for that
 * user. On failure passes errors to onError callback
 *
 * @param      {function}  onError  Callback run on error
 * @return     {Promise}   Promise which resolves to user data
 */


function getUserData() {
  return _getUserData.apply(this, arguments);
}
/**
 * Grabs current user from session and signs them out.
 * @param {Function} onSignOut Callback run on signout success
 */

function _getUserData() {
  _getUserData = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var onError,
        currentUser,
        token,
        response,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            onError = _args.length > 0 && _args[0] !== undefined ? _args[0] : function (error) {
              throw new Error(error);
            };
            currentUser = userPool.getCurrentUser();

            if (currentUser) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", null);

          case 4:
            _context.prev = 4;
            _context.next = 7;
            return getUserToken(currentUser);

          case 7:
            token = _context.sent;
            // const response = await tracker.requestIfHaventAlready({
            //   path: `/current-user`
            // }, token);
            response = null;
            return _context.abrupt("return", Object.assign(response || {}, {
              token: token
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](4);
            if (onError) onError(_context.t0);
            return _context.abrupt("return", null);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 12]]);
  }));
  return _getUserData.apply(this, arguments);
}

function signOut(onSignOut) {
  var currentUser = userPool.getCurrentUser();

  if (currentUser !== null) {
    currentUser.signOut();
  }

  if (typeof onSignOut === 'function') {
    onSignOut();
  }
}
/**
 * Signs in a user from username and password
 *
 * @param      {string}    username   The username
 * @param      {string}    password   The password
 * @param      {Function}  onSuccess  Callback run on signin success
 */

function signIn(_x, _x2, _x3) {
  return _signIn.apply(this, arguments);
}
/**
 * Initiates a reset-password request
 *
 * @param      {string}   username  The username
 * @return     {Promise}  { description_of_the_return_value }
 */

function _signIn() {
  _signIn = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(username, password, onSuccess) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return createUserToken(username, password);

          case 3:
            _context2.next = 5;
            return getUserData();

          case 5:
            data = _context2.sent;

            if (onSuccess) {
              onSuccess(data);
            }

            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log('>>> signIn error: ', _context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 9]]);
  }));
  return _signIn.apply(this, arguments);
}

function forgotPassword(_x4, _x5, _x6, _x7) {
  return _forgotPassword.apply(this, arguments);
}
/**
 * Resets a user's password using a verification code emailed to them.
 *
 * @param      {string}    username     The username
 * @param      {number}    code         The code
 * @param      {string}    newPassword  The new password
 * @param      {Function}  onError      On error
 * @param      {Function}  onSuccess    On success
 */

function _forgotPassword() {
  _forgotPassword = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(username, onError, onVerify, _onSuccess2) {
    var params, cognitoUser;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = {
              Pool: userPool,
              Username: username
            };
            cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUser"](params);
            cognitoUser.forgotPassword({
              onFailure: function onFailure(err) {
                onError && onError(err);
              },
              inputVerificationCode: function inputVerificationCode(data) {
                onVerify && onVerify(data);
              },
              onSuccess: function onSuccess(data) {
                _onSuccess2 && _onSuccess2(data);
              }
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _forgotPassword.apply(this, arguments);
}

function resetPassword(username, code, newPassword, onError, _onSuccess) {
  var params = {
    Pool: userPool,
    Username: username
  };
  var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUser"](params);
  cognitoUser.confirmPassword(code, newPassword, {
    onSuccess: function onSuccess(data) {
      _onSuccess && _onSuccess(data);
    },
    onFailure: function onFailure(err) {
      onError && onError(err);
    }
  });
}
/**
 *
 *
 * @returns {Object} Current cognito user
 */

function getCurrentUser() {
  var userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUserPool"]({
    UserPoolId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.USER_POOL_ID,
    ClientId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.APP_CLIENT_ID
  });
  return userPool.getCurrentUser();
}
/**
 * Gets access token from current authenticated user.
 *
 * @param      {Object}   currentUser  The current user
 * @return     {Promise}  Promise resolving to access token
 */

function getAccessToken(currentUser) {
  var cu = currentUser || getCurrentUser();
  return new Promise(function (resolve, reject) {
    cu.getSession(function (err, session) {
      if (err) {
        reject(err);
        return;
      }

      resolve(session.getAccessToken().getJwtToken());
    });
  });
}

/***/ }),

/***/ "./components/LoginForm/index.js":
/*!***************************************!*\
  !*** ./components/LoginForm/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth_cognito__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/auth/cognito */ "./api/auth/cognito.js");
/* harmony import */ var _LoginForm_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginForm.scss */ "./components/LoginForm/LoginForm.scss");
/* harmony import */ var _LoginForm_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LoginForm_scss__WEBPACK_IMPORTED_MODULE_2__);
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleUsernameChange", function (event) {
      _this.setState({
        username: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handlePasswordChange", function (event) {
      _this.setState({
        password: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleClickSubmit", function () {
      var _this$state = _this.state,
          username = _this$state.username,
          password = _this$state.password;
      Object(_api_auth_cognito__WEBPACK_IMPORTED_MODULE_1__["signInUserSDK"])({
        username: username,
        password: password
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onKeyPress", function (event) {
      if (event.key === 'Enter') {
        _this._handleClickSubmit();
      }
    });

    _this.state = {
      username: '',
      password: ''
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'loginForm__wrapper',
        onKeyPress: this._onKeyPress
      }, 'login', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this._handleClickSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'loginForm__container'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this._handleUsernameChange,
        type: 'text',
        placeholder: 'Username/Email',
        className: 'loginForm__input',
        autoComplete: 'username'
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this._handlePasswordChange,
        type: 'password',
        placeholder: 'Password',
        className: 'loginForm__input',
        autoComplete: 'current-password'
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: 'submit',
        value: 'submit',
        className: 'loginForm__submit-button'
      })));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ })

})
//# sourceMappingURL=login.js.bd385299c77c7e05d397.hot-update.js.map