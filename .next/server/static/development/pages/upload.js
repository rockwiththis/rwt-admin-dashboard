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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UploadSongForm/UploadSongForm.scss":
/*!*******************************************************!*\
  !*** ./components/UploadSongForm/UploadSongForm.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/UploadSongForm/index.js":
/*!********************************************!*\
  !*** ./components/UploadSongForm/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UploadSongForm_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadSongForm.scss */ "./components/UploadSongForm/UploadSongForm.scss");
/* harmony import */ var _UploadSongForm_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UploadSongForm_scss__WEBPACK_IMPORTED_MODULE_1__);
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




var UploadSongForm =
/*#__PURE__*/
function (_Component) {
  _inherits(UploadSongForm, _Component);

  function UploadSongForm(props) {
    var _this;

    _classCallCheck(this, UploadSongForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UploadSongForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleInputChange", function (inputName, event) {
      _this.setState(_defineProperty({}, inputName, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleSubmit", function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          songTitle = _this$state.songTitle,
          artistTitle = _this$state.artistTitle,
          youtubeUrl = _this$state.youtubeUrl,
          yearReleased = _this$state.yearReleased; // you'll have to make this postSong function

      postSong({
        songTitle: songTitle,
        artistTitle: artistTitle,
        youtubeUrl: youtubeUrl,
        yearReleased: yearReleased
      }); // or just: postSong(this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onKeyPress", function (event) {
      if (event.key === 'Enter') {
        _this._handleSubmit(event);
      }
    });

    _this.state = {
      songTitle: '',
      artistTitle: '',
      youtubeUrl: '',
      yearReleased: ''
    };
    return _this;
  } // componentDidMount() {
  //   const user = checkIsLoggedIn()
  //   console.log('>>> user', user)
  // }


  _createClass(UploadSongForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputFields = Object.keys(this.state);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'loginForm__wrapper',
        onKeyPress: this._onKeyPress
      }, 'upload song', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this._handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'loginForm__container'
      }, inputFields.map(function (inputKey) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: inputKey
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          onChange: function onChange() {
            return _this2._handleInputChange('inputKey');
          },
          type: 'text',
          placeholder: inputKey,
          className: 'loginForm__input'
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: 'submit',
        value: 'submit',
        className: 'loginForm__submit-button'
      })));
    }
  }]);

  return UploadSongForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UploadSongForm);

/***/ }),

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UploadSongForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UploadSongForm */ "./components/UploadSongForm/index.js");



var Upload = function Upload() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UploadSongForm__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/upload.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/upload.js */"./pages/upload.js");


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
//# sourceMappingURL=upload.js.map