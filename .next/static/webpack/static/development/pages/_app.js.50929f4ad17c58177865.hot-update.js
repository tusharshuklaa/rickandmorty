webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/*! exports provided: __Dark_Theme_Name, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Dark_Theme_Name", function() { return __Dark_Theme_Name; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module.scss */ "./components/Header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "../node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/tusshukl/_/Dev/rickAndMorty/src/components/Header/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const __Dark_Theme_Key = '__dark';
const __Dark_Theme_Name = 'theme_dark';

const Header = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const lsItem = localStorage.getItem(__Dark_Theme_Key);
    console.log('ls val: ', lsItem);
    const isDark = localStorage.getItem(__Dark_Theme_Key) === 'true';
    console.log('is dark', isDark);
    const existingClasses = document.documentElement.className;

    if (isDark) {
      const newClasses = (existingClasses.trim() + ' ' + __Dark_Theme_Name).trim();

      document.documentElement.className = newClasses;
    }
  });
  const [isDark, setDark] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const addClass = (src, val) => {
    const _src = src.length ? src.trim() + ' ' : '';

    return _src + val;
  };

  const removeClass = (src, val) => {
    return src.length ? src.replace(new RegExp(__Dark_Theme_Name, 'gi'), '') : '';
  };

  const themeToggle = () => {
    const existingClasses = document.documentElement.className;
    const isDarkTheme = existingClasses.indexOf(__Dark_Theme_Name) > -1;
    localStorage.setItem(__Dark_Theme_Key, JSON.stringify(!isDarkTheme));
    setDark(!isDarkTheme);
    document.documentElement.className = isDarkTheme ? removeClass(existingClasses, __Dark_Theme_Name) : addClass(existingClasses, __Dark_Theme_Name);
  };

  const toggleIcon = isDark ? 'toggle-on' : 'toggle-off';
  return __jsx("header", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Rick ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "And"), " Morty"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.toggle,
    onClick: themeToggle,
    icon: "search",
    role: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.toggle,
    onClick: themeToggle,
    icon: toggleIcon,
    role: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.50929f4ad17c58177865.hot-update.js.map