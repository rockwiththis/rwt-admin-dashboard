module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/auth/cognito.js":
/*!*****************************!*\
  !*** ./api/auth/cognito.js ***!
  \*****************************/
/*! exports provided: signInUserSDK, checkIsLoggedIn, signUpNewUser, createUserToken, getUserData, signOut, signIn, forgotPassword, resetPassword, getCurrentUser, getAccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInUserSDK", function() { return signInUserSDK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsLoggedIn", function() { return checkIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpNewUser", function() { return signUpNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserToken", function() { return createUserToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPassword", function() { return forgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return getAccessToken; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amazon-cognito-identity-js */ "amazon-cognito-identity-js");
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__);
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
  var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["AuthenticationDetails"](authenticationData);
  var poolData = {
    UserPoolId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.USER_POOL_ID,
    // Your user pool id here
    ClientId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.APP_CLIENT_ID // Your client id here

  };
  var userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUserPool"](poolData);
  var userData = {
    Username: username,
    Pool: userPool
  };
  var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUser"](userData);
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
          console.error('credentials error', error);
        } else {
          // Instantiate aws sdk service objects now that the credentials have been updated.
          // example: var s3 = new AWS.S3()
          console.log('Successfully logged!');
        }
      });
    },
    newPasswordRequired: function newPasswordRequired(userAttributes, requiredAttributes) {
      // User was signed up by an admin and must provide new
      // password and required attributes, if any, to complete
      // authentication.
      userAttributes.name = username; // the api doesn't accept this field back

      delete userAttributes.email_verified; // unsure about this field, but I don't send this back

      delete userAttributes.phone_number_verified; // Get these details and call

      cognitoUser.completeNewPasswordChallenge(password, userAttributes, this);
    },
    onFailure: function onFailure(err) {
      console.log(err.message || JSON.stringify(err));
    }
  });
}
function checkIsLoggedIn() {
  var userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_1__["CognitoUserPool"]({
    UserPoolId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.USER_POOL_ID,
    ClientId: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"].cognito.APP_CLIENT_ID
  });
  var cognitoUser = userPool.getCurrentUser();

  if (cognitoUser !== null) {
    return cognitoUser.getSession(function (err, res) {
      if (err) {
        console.log('checkIsLoggedIn error ', err);
        throw err;
      }

      if (res && res.isValid()) {
        return {
          user: res,
          loggedIn: res.isValid()
        };
      } else {
        return {
          user: res,
          loggedIn: false
        };
      }
    });
  } else {
    return {
      user: {},
      loggedIn: false
    };
  }
} // all functions below this were ripped from Red Shift and need some looking at

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

function signIn(_x) {
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
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
    var username, password, onSuccess, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref3.username, password = _ref3.password, onSuccess = _ref3.onSuccess;
            _context2.prev = 1;
            _context2.next = 4;
            return createUserToken(username, password);

          case 4:
            _context2.next = 6;
            return getUserData();

          case 6:
            data = _context2.sent;

            if (onSuccess) {
              onSuccess(data);
            }

            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            console.log('>>> signIn error: ', _context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 10]]);
  }));
  return _signIn.apply(this, arguments);
}

function forgotPassword(_x2, _x3, _x4, _x5) {
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

/***/ "./api/auth/config.js":
/*!****************************!*\
  !*** ./api/auth/config.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  cognito: {
    USER_POOL_ID: 'us-west-2_OvPVHLsH7',
    APP_CLIENT_ID: '3n2n2t3n1se8cfhkathpuaim87',
    REGION: 'us-west-2' // IDENTITY_POOL_ID: ''

  } // apiGateway: {
  //   production: {
  //     ID: '',
  //     REGION: '',
  //     URL: ''
  //   },
  //   development: {
  //     ID: '',
  //     REGION: '',
  //     URL: ''
  //   }
  // },
  // s3: {
  //   BUCKET: ''
  // }

});

/***/ }),

/***/ "./components/Layout/Layout.scss":
/*!***************************************!*\
  !*** ./components/Layout/Layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Nav */ "./components/Nav/index.js");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.scss */ "./components/Layout/Layout.scss");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_2__);




var Layout = function Layout(_ref) {
  var children = _ref.children,
      isLoggedIn = _ref.isLoggedIn;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'layout'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLoggedIn: isLoggedIn
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'layout__content'
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Meta/index.js":
/*!**********************************!*\
  !*** ./components/Meta/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans|Roboto:500",
    rel: "stylesheet"
  })));
});

/***/ }),

/***/ "./components/Nav/Nav.scss":
/*!*********************************!*\
  !*** ./components/Nav/Nav.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/logo-desktop.png"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/redirect.js":
/*!*************************!*\
  !*** ./lib/redirect.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (context, target) {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, {
      Location: target
    });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace(target);
  }
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _api_auth_cognito__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/auth/cognito */ "./api/auth/cognito.js");
/* harmony import */ var _lib_redirect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/redirect.js */ "./lib/redirect.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index.scss */ "./index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loggedIn: false
    });

    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // check if user is logged in
      var _checkIsLoggedIn = Object(_api_auth_cognito__WEBPACK_IMPORTED_MODULE_5__["checkIsLoggedIn"])(),
          loggedIn = _checkIsLoggedIn.loggedIn,
          user = _checkIsLoggedIn.user;

      console.log('>> user', user, loggedIn);
      if (loggedIn) this.setState({
        loggedIn: loggedIn
      });

      if (!loggedIn) {
        // If not logged in, redirect to login page
        Object(_lib_redirect_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, '/login');
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.log('!!! ERROR CAUGHT', error); // This is needed to render errors correctly in development / production

      _get(_getPrototypeOf(MyApp.prototype), "componentDidCatch", this).call(this, error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      var loggedIn = this.state.loggedIn;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isLoggedIn: loggedIn
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "amazon-cognito-identity-js":
/*!*********************************************!*\
  !*** external "amazon-cognito-identity-js" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("amazon-cognito-identity-js");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map