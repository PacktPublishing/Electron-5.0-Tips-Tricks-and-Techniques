/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./render/loadData */ \"./src/render/loadData.js\");\n\n__webpack_require__(/*! ./render/config */ \"./src/render/config.js\");\n\n//React, Vanilla Javascript ES6 ESNext\nvar _require = __webpack_require__(/*! electron */ \"electron\"),\n    ipcRenderer = _require.ipcRenderer;\n\nfunction handleErr(err, lineno, colno) {\n  ipcRenderer.send(\"renderingError\", err, lineno, colno);\n}\n\nsetTimeout(function () {\n  //Dispatch Exception to the Main Process\n  handleErr(\"Some Exceptions has been Thrown\", 13, 0);\n}, 3000); //Global Exceptions and Errors\n//Registered on the GLOBAL window object\n\nwindow.onerror = function (event, source, lineno, colno, err) {\n  handleErr(err, lineno, colno);\n};\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/render/config.js":
/*!******************************!*\
  !*** ./src/render/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar remote = __webpack_require__(/*! electron */ \"electron\").remote;\n\nvar _remote$require = remote.require(\"./main/menu\"),\n    toggleAppMenu = _remote$require.toggleAppMenu;\n\ntoggleAppMenu(1);\n\n//# sourceURL=webpack:///./src/render/config.js?");

/***/ }),

/***/ "./src/render/loadData.js":
/*!********************************!*\
  !*** ./src/render/loadData.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("//Used to Get Some Data from the Server \n\n/* Classic HTTP Callback request */\n\n/*let xmlHttpRequest = new XMLHttpRequest();\r\nxmlHttpRequest.open(\"GET\", \"https://reqres.in//api/users?page=2\");\r\nxmlHttpRequest.send();\r\nconst response = xmlHttpRequest.responseText;\r\n\r\nconst axios = require(\"axios\").default;\r\naxios.get(\"https://reqres.in//api/users?page=2\").then((response) => {\r\n  console.log(\"Response: \", response);\r\n}).catch((err) => {\r\n  console.error(\"Error fetching\", err);\r\n})\r\n\r\n//ES6 Async/Await \r\nasync function fetchData() {\r\n  const response =  await axios.get(\"https://reqres.in//api/users?page=2\")\r\n  if(response) {\r\n    console.log(\"Data Fetched: \", response);\r\n  }\r\n}\r\n\r\nfetchData();*/\n\n\n//# sourceURL=webpack:///./src/render/loadData.js?");

/***/ }),

/***/ "electron":
/*!**************************************!*\
  !*** external "require('electron')" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require('electron');\n\n//# sourceURL=webpack:///external_%22require('electron')%22?");

/***/ })

/******/ });