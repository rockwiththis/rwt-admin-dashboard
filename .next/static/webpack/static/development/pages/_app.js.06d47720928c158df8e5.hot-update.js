webpackHotUpdate("static/development/pages/_app.js",{

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
          // example: var s3 = new AWS.S3();
          console.log('Successfully logged!');
        }
      });
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

/***/ })

})
//# sourceMappingURL=_app.js.06d47720928c158df8e5.hot-update.js.map