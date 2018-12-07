webpackHotUpdate("static/development/pages/upload.js",{

/***/ "./components/UploadSongForm/index.js":
/*!********************************************!*\
  !*** ./components/UploadSongForm/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=upload.js.e6e7dc5d2709fe2819f9.hot-update.js.map