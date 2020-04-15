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

/***/ "../node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!********************************************************************!*\
  !*** ../node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"svg-inline--fa": "styles__svg-inline--fa--3LWDO",
	"fa-lg": "styles__fa-lg--ppSSd",
	"fa-w-1": "styles__fa-w-1--3aphA",
	"fa-w-2": "styles__fa-w-2--3o0UJ",
	"fa-w-3": "styles__fa-w-3--nwkeK",
	"fa-w-4": "styles__fa-w-4--2Q0xI",
	"fa-w-5": "styles__fa-w-5--1PE0t",
	"fa-w-6": "styles__fa-w-6--2GkfX",
	"fa-w-7": "styles__fa-w-7--22VOl",
	"fa-w-8": "styles__fa-w-8--2HjO8",
	"fa-w-9": "styles__fa-w-9--1FlJB",
	"fa-w-10": "styles__fa-w-10--1mPUk",
	"fa-w-11": "styles__fa-w-11--mTVCU",
	"fa-w-12": "styles__fa-w-12--3t_GI",
	"fa-w-13": "styles__fa-w-13--3drVu",
	"fa-w-14": "styles__fa-w-14--1yAXI",
	"fa-w-15": "styles__fa-w-15--7tyJH",
	"fa-w-16": "styles__fa-w-16--3pj96",
	"fa-w-17": "styles__fa-w-17--3V2jN",
	"fa-w-18": "styles__fa-w-18--3jJ1R",
	"fa-w-19": "styles__fa-w-19--2Qrxj",
	"fa-w-20": "styles__fa-w-20--2o7vB",
	"fa-pull-left": "styles__fa-pull-left--3N9Vu",
	"fa-pull-right": "styles__fa-pull-right--1IpIG",
	"fa-border": "styles__fa-border--2c9V4",
	"fa-li": "styles__fa-li--3ZGax",
	"fa-fw": "styles__fa-fw--2nEbd",
	"fa-layers": "styles__fa-layers--2YdK4",
	"fa-layers-text": "styles__fa-layers-text--2QPNu",
	"fa-layers-counter": "styles__fa-layers-counter--24YVf",
	"fa-layers-bottom-right": "styles__fa-layers-bottom-right--35C8i",
	"fa-layers-bottom-left": "styles__fa-layers-bottom-left--1CRE1",
	"fa-layers-top-right": "styles__fa-layers-top-right--wPNGT",
	"fa-layers-top-left": "styles__fa-layers-top-left--1M9WX",
	"fa-xs": "styles__fa-xs--cGqid",
	"fa-sm": "styles__fa-sm--1OViR",
	"fa-1x": "styles__fa-1x--1aPb7",
	"fa-2x": "styles__fa-2x--3tgbz",
	"fa-3x": "styles__fa-3x--1zFyP",
	"fa-4x": "styles__fa-4x--2e67r",
	"fa-5x": "styles__fa-5x--g0yxv",
	"fa-6x": "styles__fa-6x--2tk1U",
	"fa-7x": "styles__fa-7x--344yt",
	"fa-8x": "styles__fa-8x--2pUG1",
	"fa-9x": "styles__fa-9x--154HB",
	"fa-10x": "styles__fa-10x--3ZxFH",
	"fa-ul": "styles__fa-ul--1ibD5",
	"fa": "styles__fa--GXjws",
	"fas": "styles__fas--1b-OR",
	"far": "styles__far--1A4PF",
	"fal": "styles__fal--2ZzE8",
	"fab": "styles__fab--ZQ9hf",
	"fa-spin": "styles__fa-spin--1K3Os",
	"fa-pulse": "styles__fa-pulse--1MtEb",
	"fa-rotate-90": "styles__fa-rotate-90--17r4h",
	"fa-rotate-180": "styles__fa-rotate-180--1RPtE",
	"fa-rotate-270": "styles__fa-rotate-270--2D8Lw",
	"fa-flip-horizontal": "styles__fa-flip-horizontal--3eNDL",
	"fa-flip-vertical": "styles__fa-flip-vertical--2NvB4",
	"fa-flip-both": "styles__fa-flip-both--3TuGl",
	"fa-stack": "styles__fa-stack--1WCS-",
	"fa-stack-1x": "styles__fa-stack-1x--3LmmN",
	"fa-stack-2x": "styles__fa-stack-2x--qCgBv",
	"fa-inverse": "styles__fa-inverse--2u892",
	"sr-only": "styles__sr-only--3wI5Y",
	"sr-only-focusable": "styles__sr-only-focusable--uE9Yu",
	"fa-primary": "styles__fa-primary--2zfG8",
	"fa-secondary": "styles__fa-secondary--jflhq",
	"fa-swap-opacity": "styles__fa-swap-opacity--3aQ3w",
	"fad": "styles__fad--3f_lZ"
};

/***/ }),

/***/ "./components/Footer/index.tsx":
/*!*************************************!*\
  !*** ./components/Footer/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tusshukl/_/Dev/rickAndMorty/src/components/Footer/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, "This is footer section");
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header/header.module.scss":
/*!**********************************************!*\
  !*** ./components/Header/header.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header": "header-module__header--2j_at",
	"textShadow": "header-module__textShadow--3gCES",
	"icons": "header-module__icons--_m8Jb",
	"icon": "header-module__icon--1TLPq"
};

/***/ }),

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/*! exports provided: __Dark_Theme_Name, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Dark_Theme_Name", function() { return __Dark_Theme_Name; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module.scss */ "./components/Header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
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
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
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
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
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

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "../node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.tsx");
var _jsxFileName = "/Users/tusshukl/_/Dev/rickAndMorty/src/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["config"].autoAddCss = false;
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithub"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faToggleOff"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faToggleOn"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"]);

function MyApp({
  Component,
  pageProps
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "rickAndMorty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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