(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/404.js"],{

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F404&absolutePagePath=%2FUsers%2Ftusshukl%2F_%2FDev%2FrickAndMorty%2Fsrc%2Fpages%2F404.tsx!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F404&absolutePagePath=%2FUsers%2Ftusshukl%2F_%2FDev%2FrickAndMorty%2Fsrc%2Fpages%2F404.tsx ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/404", function() {
      var mod = __webpack_require__(/*! ./pages/404.tsx */ "./pages/404.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/404.tsx */ "./pages/404.tsx", function() {
          if(!next.router.components["/404"]) return
          var updatedPage = __webpack_require__(/*! ./pages/404.tsx */ "./pages/404.tsx")
          next.router.update("/404", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "../node_modules/react/index.js":
/*!********************************************************************************************!*\
  !*** delegated ../node_modules/react/index.js from dll-reference dll_e6a94776c4176f860599 ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e6a94776c4176f860599 */ "dll-reference dll_e6a94776c4176f860599"))("../node_modules/react/index.js");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
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
      className: _custom404_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["hair_".concat(count)],
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
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

/***/ 5:
/*!****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F404&absolutePagePath=%2FUsers%2Ftusshukl%2F_%2FDev%2FrickAndMorty%2Fsrc%2Fpages%2F404.tsx ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F404&absolutePagePath=%2FUsers%2Ftusshukl%2F_%2FDev%2FrickAndMorty%2Fsrc%2Fpages%2F404.tsx! */"../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F404&absolutePagePath=%2FUsers%2Ftusshukl%2F_%2FDev%2FrickAndMorty%2Fsrc%2Fpages%2F404.tsx!./");


/***/ }),

/***/ "dll-reference dll_e6a94776c4176f860599":
/*!*******************************************!*\
  !*** external "dll_e6a94776c4176f860599" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_e6a94776c4176f860599;

/***/ })

},[[5,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=404.js.map