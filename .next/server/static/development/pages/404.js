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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Custom404/custom404.module.scss":
/*!****************************************************!*\
  !*** ./components/Custom404/custom404.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "custom404-module__wrapper--3CQSa",
	"rickContainer": "custom404-module__rickContainer--2FMRY",
	"rick__head": "custom404-module__rick__head--2xkwQ",
	"rick__ears": "custom404-module__rick__ears--2F13J",
	"rick__scalp": "custom404-module__rick__scalp--3UnUG",
	"hair_1": "custom404-module__hair_1--zJ-xO",
	"hair_2": "custom404-module__hair_2--2xqZP",
	"hair_3": "custom404-module__hair_3--3evOO",
	"hair_4": "custom404-module__hair_4--3VyZa",
	"hair_5": "custom404-module__hair_5--1F-U-",
	"hair_6": "custom404-module__hair_6--2Nny2",
	"hair_7": "custom404-module__hair_7--wGilj",
	"hair_8": "custom404-module__hair_8--FQyHx",
	"hair_9": "custom404-module__hair_9--160wz",
	"hair_10": "custom404-module__hair_10--virUw",
	"hair_11": "custom404-module__hair_11--JDQPM",
	"hair_12": "custom404-module__hair_12--f-QyE",
	"rick__face": "custom404-module__rick__face--1StwU",
	"rick__brow": "custom404-module__rick__brow--1t0y1",
	"rick__eyeContainer": "custom404-module__rick__eyeContainer--1c-4P",
	"rick__eye": "custom404-module__rick__eye--g4xCJ",
	"rick__eyeLeft": "custom404-module__rick__eyeLeft--2_kgz",
	"rick__eyeRight": "custom404-module__rick__eyeRight--3IJku",
	"eye-blink": "custom404-module__eye-blink--RZkjR",
	"rick__nose": "custom404-module__rick__nose--1TH0F",
	"rick__mouth": "custom404-module__rick__mouth--vlPoc",
	"drool": "custom404-module__drool--2pu6m",
	"rick__body": "custom404-module__rick__body--2fEkj",
	"rick__neck": "custom404-module__rick__neck--3LdKT",
	"name__sign": "custom404-module__name__sign--NUBBh"
};

/***/ }),

/***/ "./components/Custom404/index.tsx":
/*!****************************************!*\
  !*** ./components/Custom404/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rick404; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom404.module.scss */ "./components/Custom404/custom404.module.scss");
/* harmony import */ var _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom404_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tusshukl/_/Dev/rickAndMorty/src/components/Custom404/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Inspiration from: https://codepen.io/vinnyA3/pen/RpjvNq



const getHairs = () => {
  const hairs = [];
  let count = 1;

  while (count <= 12) {
    hairs.push(__jsx("div", {
      key: count,
      className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[`hair_${count}`],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 16
      }
    }));
    ++count;
  }

  return hairs;
};

const getEyes = () => {
  return __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__eyeContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__eyeLeft,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__eyeRight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};

function Rick404() {
  return __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "The page you are trying to search has been moved to another universe."), __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rickContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__ears,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__scalp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, getHairs()), __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__face,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__brow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), getEyes(), __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__nose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__mouth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.drool,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rick__neck,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name__sign,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Page Not Found"))));
}

/***/ }),

/***/ "./pages/404.tsx":
/*!***********************!*\
  !*** ./pages/404.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Custom404; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Custom404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/Custom404 */ "./components/Custom404/index.tsx");
var _jsxFileName = "/Users/tusshukl/_/Dev/rickAndMorty/src/pages/404.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Custom404() {
  return __jsx(_components_Custom404__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
}

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/404.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tusshukl/_/Dev/rickAndMorty/src/pages/404.tsx */"./pages/404.tsx");


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
//# sourceMappingURL=404.js.map