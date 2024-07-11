/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "DM Sans", sans-serif;
}
body {
  display: flex;
  flex-direction: row;
}

/* Left part only */
.left {
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.locationSearchForm {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  gap: 10px;
}
.press {
  border: none;
  background-color: transparent;
}
.searchButtonImg {
  width: 30px;
  height: 30px;
}
#locationSearch,
#locationSearch:focus {
  border: none;
  /* height: 30px; */
  outline: none;
  font-size: 18px;
  width: 190px;
}
::placeholder,
::placeholder:focus {
  color: black;
  padding: 0;
  border: none;
  outline: none;
}
.leftChangableDOM {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mainWeatherImg {
  margin-top: 20px;
  max-width: 45vw;
  max-height: 45vh;
}
.cityLeftP {
  margin-top: 20px;
  font-size: 25px;
}
.tempLeftP {
  font-size: 50px;
}
.weatherStateP {
  font-size: 25px;
  font-style: italic;
}
.dateLeftP {
  margin-top: 10px;
  font-size: 25px;
  text-align: center;
}
.right {
  width: 70vw;
  background-color: #f6f6f8;
  height: 100%;
}

/* Right part only */
.locationP {
  margin-top: 15px;
  margin-left: 20px;
  font-size: 25px;
}
.thisWeekP {
  margin-top: 7px;
  margin-left: 20px;
  font-size: 25px;
}
.weekDIV,
.weekCard {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.weekDIV {
  margin-top: 15px;
  justify-content: space-evenly;
}
.weekCard {
  background-color: white;
  justify-content: center;
  width: 22vw;
}
.weekCardTextDiv {
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  text-align: left;
  font-size: 18px;
  padding: 0 5px;
  gap: 10px;
}
.weekCard img {
  padding: 10px;
  width: 125px;
  height: 125px;
}

@media only screen and (max-width: 952px) {
  .left {
    width: 35vw;
  }
  .right {
    width: 65vw;
    background-color: #f6f6f8;
    height: 100%;
  }
  .weekDIV {
    flex-direction: column;
    gap: 15px;
  }
  .weekCard {
    width: 50vw;
    height: 35vh;
  }
  .locationP {
    font-size: 35px;
  }
  .thisWeekP {
    font-size: 35px;
  }
  .weekCard img {
    padding: 10px;
    width: 200px;
    height: 200px;
  }
}
@media only screen and (max-width: 768px) {
  .left {
    width: 40vw;
  }
  .right {
    width: 60vw;
  }
}
@media only screen and (max-width: 426px) {
  body {
    flex-direction: column;
  }
  .left {
    width: 100vw;
  }
  .right {
    width: 100vw;
  }
  .weekCard {
    width: 80vw;
    height: 35vh;
  }
  .dateLeftP {
    margin-bottom: 20px;
  }
  .weekCard img {
    padding: 10px;
    width: 125px;
    height: 125px;
  }
  .mainWeatherImg {
    margin-top: 20px;
    max-width: 55vw;
    max-height: 55vh;
  }
  .weekCard img {
    padding: 10px;
    width: 200px;
    height: 200px;
  }
  .locationP,
  .thisWeekP {
    text-align: center;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA,mBAAmB;AACnB;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,YAAY;EACZ,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,YAAY;AACd;AACA;;EAEE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,yBAAyB;EACzB,YAAY;AACd;;AAEA,oBAAoB;AACpB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;AACA;;EAEE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,6BAA6B;AAC/B;AACA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB;4BAC0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,SAAS;AACX;AACA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX,yBAAyB;IACzB,YAAY;EACd;EACA;IACE,sBAAsB;IACtB,SAAS;EACX;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,YAAY;IACZ,aAAa;EACf;AACF;AACA;EACE;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;AACF;AACA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,YAAY;IACZ,aAAa;EACf;EACA;IACE,gBAAgB;IAChB,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,YAAY;IACZ,aAAa;EACf;EACA;;IAEE,kBAAkB;EACpB;AACF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"DM Sans\", sans-serif;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n/* Left part only */\r\n.left {\r\n  width: 30vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n.locationSearchForm {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: end;\r\n  gap: 10px;\r\n}\r\n.press {\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n.searchButtonImg {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n#locationSearch,\r\n#locationSearch:focus {\r\n  border: none;\r\n  /* height: 30px; */\r\n  outline: none;\r\n  font-size: 18px;\r\n  width: 190px;\r\n}\r\n::placeholder,\r\n::placeholder:focus {\r\n  color: black;\r\n  padding: 0;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.leftChangableDOM {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.mainWeatherImg {\r\n  margin-top: 20px;\r\n  max-width: 45vw;\r\n  max-height: 45vh;\r\n}\r\n.cityLeftP {\r\n  margin-top: 20px;\r\n  font-size: 25px;\r\n}\r\n.tempLeftP {\r\n  font-size: 50px;\r\n}\r\n.weatherStateP {\r\n  font-size: 25px;\r\n  font-style: italic;\r\n}\r\n.dateLeftP {\r\n  margin-top: 10px;\r\n  font-size: 25px;\r\n  text-align: center;\r\n}\r\n.right {\r\n  width: 70vw;\r\n  background-color: #f6f6f8;\r\n  height: 100%;\r\n}\r\n\r\n/* Right part only */\r\n.locationP {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\r\n  font-size: 25px;\r\n}\r\n.thisWeekP {\r\n  margin-top: 7px;\r\n  margin-left: 20px;\r\n  font-size: 25px;\r\n}\r\n.weekDIV,\r\n.weekCard {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.weekDIV {\r\n  margin-top: 15px;\r\n  justify-content: space-evenly;\r\n}\r\n.weekCard {\r\n  background-color: white;\r\n  justify-content: center;\r\n  width: 22vw;\r\n}\r\n.weekCardTextDiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* align-items: center;\r\n  justify-content: center; */\r\n  text-align: left;\r\n  font-size: 18px;\r\n  padding: 0 5px;\r\n  gap: 10px;\r\n}\r\n.weekCard img {\r\n  padding: 10px;\r\n  width: 125px;\r\n  height: 125px;\r\n}\r\n\r\n@media only screen and (max-width: 952px) {\r\n  .left {\r\n    width: 35vw;\r\n  }\r\n  .right {\r\n    width: 65vw;\r\n    background-color: #f6f6f8;\r\n    height: 100%;\r\n  }\r\n  .weekDIV {\r\n    flex-direction: column;\r\n    gap: 15px;\r\n  }\r\n  .weekCard {\r\n    width: 50vw;\r\n    height: 35vh;\r\n  }\r\n  .locationP {\r\n    font-size: 35px;\r\n  }\r\n  .thisWeekP {\r\n    font-size: 35px;\r\n  }\r\n  .weekCard img {\r\n    padding: 10px;\r\n    width: 200px;\r\n    height: 200px;\r\n  }\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .left {\r\n    width: 40vw;\r\n  }\r\n  .right {\r\n    width: 60vw;\r\n  }\r\n}\r\n@media only screen and (max-width: 426px) {\r\n  body {\r\n    flex-direction: column;\r\n  }\r\n  .left {\r\n    width: 100vw;\r\n  }\r\n  .right {\r\n    width: 100vw;\r\n  }\r\n  .weekCard {\r\n    width: 80vw;\r\n    height: 35vh;\r\n  }\r\n  .dateLeftP {\r\n    margin-bottom: 20px;\r\n  }\r\n  .weekCard img {\r\n    padding: 10px;\r\n    width: 125px;\r\n    height: 125px;\r\n  }\r\n  .mainWeatherImg {\r\n    margin-top: 20px;\r\n    max-width: 55vw;\r\n    max-height: 55vh;\r\n  }\r\n  .weekCard img {\r\n    padding: 10px;\r\n    width: 200px;\r\n    height: 200px;\r\n  }\r\n  .locationP,\r\n  .thisWeekP {\r\n    text-align: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addImg.js":
/*!***********************!*\
  !*** ./src/addImg.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImage: () => (/* binding */ addImage),
/* harmony export */   addSearchIcon: () => (/* binding */ addSearchIcon)
/* harmony export */ });
/* harmony import */ var _img_DayClouds_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/DayClouds.png */ "./src/img/DayClouds.png");
/* harmony import */ var _img_DayRain_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/DayRain.png */ "./src/img/DayRain.png");
/* harmony import */ var _img_DaySnow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/DaySnow.png */ "./src/img/DaySnow.png");
/* harmony import */ var _img_DayStorm_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/DayStorm.png */ "./src/img/DayStorm.png");
/* harmony import */ var _img_DaySun_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/DaySun.png */ "./src/img/DaySun.png");
/* harmony import */ var _img_DayWind_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/DayWind.png */ "./src/img/DayWind.png");
/* harmony import */ var _img_NightClouds_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/NightClouds.png */ "./src/img/NightClouds.png");
/* harmony import */ var _img_NightRain_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/NightRain.png */ "./src/img/NightRain.png");
/* harmony import */ var _img_NightSnow_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/NightSnow.png */ "./src/img/NightSnow.png");
/* harmony import */ var _img_NightStorm_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/NightStorm.png */ "./src/img/NightStorm.png");
/* harmony import */ var _img_NightMoon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/NightMoon.png */ "./src/img/NightMoon.png");
/* harmony import */ var _img_NightWind_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/NightWind.png */ "./src/img/NightWind.png");
/* harmony import */ var _img_search_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/search.png */ "./src/img/search.png");
/* harmony import */ var _getDataAPI__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getDataAPI */ "./src/getDataAPI.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index */ "./src/index.js");




















// Adding an img according to weather condition and part of the day
async function addImage(weatherConditionID, localTimeHour) {
  // const { weatherConditionID, localTimeHour } = await fetchCurrentData(
  //   cityInput
  // );
  const weatherCondition = (0,_getDataAPI__WEBPACK_IMPORTED_MODULE_13__.renameWeatherCondition)(weatherConditionID);

  const localTime = parseInt(localTimeHour, 10);
  console.log(localTime, localTimeHour);

  let imgSrc;

  if (localTime >= 6 && localTime < 19) {
    // Day time
    switch (weatherCondition) {
      case "sun":
        imgSrc = _img_DaySun_png__WEBPACK_IMPORTED_MODULE_4__;
        break;
      case "clouds":
        imgSrc = _img_DayClouds_png__WEBPACK_IMPORTED_MODULE_0__;
        break;
      case "rain":
        imgSrc = _img_DayRain_png__WEBPACK_IMPORTED_MODULE_1__;
        break;
      case "snow":
        imgSrc = _img_DaySnow_png__WEBPACK_IMPORTED_MODULE_2__;
        break;
      case "storm":
        imgSrc = _img_DayStorm_png__WEBPACK_IMPORTED_MODULE_3__;
        break;
      default:
        imgSrc = _img_DayWind_png__WEBPACK_IMPORTED_MODULE_5__;
        break;
    }
  } else {
    // Night time
    switch (weatherCondition) {
      case "sun":
        imgSrc = _img_NightMoon_png__WEBPACK_IMPORTED_MODULE_10__;
        break;
      case "clouds":
        imgSrc = _img_NightClouds_png__WEBPACK_IMPORTED_MODULE_6__;
        break;
      case "rain":
        imgSrc = _img_NightRain_png__WEBPACK_IMPORTED_MODULE_7__;
        break;
      case "snow":
        imgSrc = _img_NightSnow_png__WEBPACK_IMPORTED_MODULE_8__;
        break;
      case "storm":
        imgSrc = _img_NightStorm_png__WEBPACK_IMPORTED_MODULE_9__;
        break;
      default:
        imgSrc = _img_NightWind_png__WEBPACK_IMPORTED_MODULE_11__;
        break;
    }
  }

  return imgSrc;
}

function addSearchIcon() {
  const searchImage = document.createElement("img");
  searchImage.classList.add("searchButtonImg");
  searchImage.src = _img_search_png__WEBPACK_IMPORTED_MODULE_12__;
  _index__WEBPACK_IMPORTED_MODULE_14__.submitButton.append(searchImage);
}


/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentAndNextDays: () => (/* binding */ getCurrentAndNextDays),
/* harmony export */   getTodayDate: () => (/* binding */ getTodayDate)
/* harmony export */ });
function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

function getTodayDate() {
  return formatDate(new Date());
}

function getCurrentAndNextDays() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const days = [];
  const d = new Date();

  for (let i = 0; i < 4; i++) {
    const currentDay = new Date(d);
    currentDay.setDate(d.getDate() + i);
    days.push(weekday[currentDay.getDay()]);
  }

  return days;
}


/***/ }),

/***/ "./src/getDataAPI.js":
/*!***************************!*\
  !*** ./src/getDataAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCurrentData: () => (/* binding */ fetchCurrentData),
/* harmony export */   fetchNextThreeDaysData: () => (/* binding */ fetchNextThreeDaysData),
/* harmony export */   renameWeatherCondition: () => (/* binding */ renameWeatherCondition)
/* harmony export */ });
async function fetchCurrentData(cityInout) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0dbcafa2b4e449eaa3d120341240707&q=${cityInout}&aqi=yes`,
      { mode: "cors" }
    );

    // Error check
    if (!response.ok) {
      throw new Error(`Response status: failed to fetch current data`);
    }

    const APIData = await response.json();

    console.log("Current temperature: " + APIData.current.temp_c); //debugging

    const weatherConditionID = APIData.current.condition.code;
    const localTimeHour = APIData.location.localtime
      .split(" ")[1]
      .split(":")[0];

    // For right DOM cards
    const uvIndex = APIData.current.condition.uv;
    const feelLike = APIData.current.condition.feelslike_c;
    const wind = APIData.current.condition.wind_kph;
    const visibility = APIData.current.condition.vis_km;
    const airQuality = APIData.current.condition.air_quality?.["us-epa-index"];
    const pressure = APIData.current.condition.pressure_mb;

    console.log("Time " + localTimeHour); // debugging

    return {
      weatherConditionText: APIData.current.condition.text,
      tempCelsius: APIData.current.temp_c,
      weatherConditionID,
      localTimeHour,
    };
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchNextThreeDaysData(cityInout) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=0dbcafa2b4e449eaa3d120341240707&q=${cityInout}&days=4`,
      { mode: "cors" }
    );

    // Error check
    if (!response.ok) {
      throw new Error(`Response status: failed to fetch data for next 3 days`);
    }

    const forecastAPIData = await response.json();

    const city = forecastAPIData.location.name;
    const country = forecastAPIData.location.country;

    // Card 1
    const maxTempCard1 = forecastAPIData.forecast.forecastday[1].day.maxtemp_c;
    const minTempCard1 = forecastAPIData.forecast.forecastday[1].day.mintemp_c;
    const conditionCodeCard1 =
      forecastAPIData.forecast.forecastday[1].day.condition.code;

    const timeHourCardAll = forecastAPIData.location.localtime
      .split(" ")[1]
      .split(":")[0];

    // Card 2
    const maxTempCard2 = forecastAPIData.forecast.forecastday[2].day.maxtemp_c;
    const minTempCard2 = forecastAPIData.forecast.forecastday[2].day.mintemp_c;
    const conditionCodeCard2 =
      forecastAPIData.forecast.forecastday[2].day.condition.code;

    // Card 3
    const maxTempCard3 = forecastAPIData.forecast.forecastday[3].day.maxtemp_c;
    const minTempCard3 = forecastAPIData.forecast.forecastday[3].day.mintemp_c;
    const conditionCodeCard3 =
      forecastAPIData.forecast.forecastday[3].day.condition.code;

    return {
      timeHourCardAll,
      city,
      country,
      maxTempCard1,
      minTempCard1,
      conditionCodeCard1,
      maxTempCard2,
      minTempCard2,
      conditionCodeCard2,
      maxTempCard3,
      minTempCard3,
      conditionCodeCard3,
    };
  } catch (error) {
    console.error(error.message);
  }
}

function renameWeatherCondition(weatherConditionID) {
  if ([1000].includes(weatherConditionID)) {
    const weatherCondition = "sun";
    return weatherCondition;
  } else if (
    [1003, 1006, 1009, 1030, 1135, 1147].includes(weatherConditionID)
  ) {
    const weatherCondition = "clouds";
    return weatherCondition;
  } else if (
    [
      1063, 1150, 1153, 1072, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
      1198, 1201, 1240, 1243, 1246, 1249, 1252,
    ].includes(weatherConditionID)
  ) {
    const weatherCondition = "rain";
    return weatherCondition;
  } else if (
    [
      1066, 1069, 1114, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237,
      1255, 1258, 1261, 1264, 1279,
    ].includes(weatherConditionID)
  ) {
    const weatherCondition = "snow";
    return weatherCondition;
  } else if ([1087, 1117, 1273, 1276, 1282].includes(weatherConditionID)) {
    const weatherCondition = "storm";
    return weatherCondition;
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locationSearchForm: () => (/* binding */ locationSearchForm),
/* harmony export */   submitButton: () => (/* binding */ submitButton)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _leftDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leftDOM */ "./src/leftDOM.js");
/* harmony import */ var _getDataAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDataAPI */ "./src/getDataAPI.js");
/* harmony import */ var _addImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addImg */ "./src/addImg.js");
/* harmony import */ var _rightDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rightDOM */ "./src/rightDOM.js");










const locationSearchForm = document.querySelector(".locationSearchForm");
const submitButton = document.querySelector(".press");

(0,_addImg__WEBPACK_IMPORTED_MODULE_3__.addSearchIcon)();

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const cityInput = document.querySelector("#locationSearch").value;

  const elementsOfLeft = (0,_leftDOM__WEBPACK_IMPORTED_MODULE_1__.addLeftPartDOM)();
  (0,_leftDOM__WEBPACK_IMPORTED_MODULE_1__.cleanLeftDOM)();
  await (0,_leftDOM__WEBPACK_IMPORTED_MODULE_1__.setLeftPartDOMContent)(cityInput, elementsOfLeft);

  // const elementsOfRight = addRightPartDOM();
  // cleanRightDOM(elementsOfRight); // coming soon
  (0,_rightDOM__WEBPACK_IMPORTED_MODULE_4__.cleanRightDOM)();
  await (0,_rightDOM__WEBPACK_IMPORTED_MODULE_4__.setRightPartDOMContent)(cityInput);
});


/***/ }),

/***/ "./src/leftDOM.js":
/*!************************!*\
  !*** ./src/leftDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeftPartDOM: () => (/* binding */ addLeftPartDOM),
/* harmony export */   cleanLeftDOM: () => (/* binding */ cleanLeftDOM),
/* harmony export */   setLeftPartDOMContent: () => (/* binding */ setLeftPartDOMContent)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./src/date.js");
/* harmony import */ var _getDataAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDataAPI.js */ "./src/getDataAPI.js");
/* harmony import */ var _addImg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addImg.js */ "./src/addImg.js");




// Function to create and append DOM elements
function addLeftPartDOM() {
  const leftDOM = document.querySelector(".leftChangableDOM");
  leftDOM.innerHTML = ""; // Clear previous elements

  const cityP = document.createElement("p");
  cityP.classList.add("cityLeftP");

  const weatherImg = document.createElement("img");
  weatherImg.classList.add("mainWeatherImg");

  const weatherStateP = document.createElement("p");
  weatherStateP.classList.add("weatherStateP");

  const tempP = document.createElement("p");
  tempP.classList.add("tempLeftP");

  const dateP = document.createElement("p");
  dateP.classList.add("dateLeftP");

  leftDOM.appendChild(weatherImg);
  leftDOM.appendChild(cityP);
  leftDOM.appendChild(tempP);
  leftDOM.appendChild(weatherStateP);
  leftDOM.appendChild(dateP);

  return { weatherImg, cityP, tempP, weatherStateP, dateP };
}

// Function to set content for the DOM elements
async function setLeftPartDOMContent(cityInput) {
  const todayDate = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)();
  const nextThreeDays = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentAndNextDays)();
  const currentDay = nextThreeDays[0];

  const elements = addLeftPartDOM();

  const { weatherImg, cityP, tempP, weatherStateP, dateP } = elements;

  cityP.textContent = cityInput;
  dateP.innerHTML = `${currentDay},<br>${todayDate}`;

  const { weatherConditionText, tempCelsius } = await (0,_getDataAPI_js__WEBPACK_IMPORTED_MODULE_1__.fetchCurrentData)(
    cityInput
  );
  weatherStateP.textContent = weatherConditionText;
  tempP.textContent = `${tempCelsius} °C`;

  const { weatherConditionID, localTimeHour } = await (0,_getDataAPI_js__WEBPACK_IMPORTED_MODULE_1__.fetchCurrentData)(
    cityInput
  );
  const imgSrc = await (0,_addImg_js__WEBPACK_IMPORTED_MODULE_2__.addImage)(weatherConditionID, localTimeHour);
  weatherImg.src = imgSrc;
}

// Function to remove all child elements from the parent container
function cleanLeftDOM() {
  const leftDOM = document.querySelector(".leftChangableDOM");
  leftDOM.innerHTML = ""; // This effectively removes all child elements
}


/***/ }),

/***/ "./src/rightDOM.js":
/*!*************************!*\
  !*** ./src/rightDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRightPartDOM: () => (/* binding */ addRightPartDOM),
/* harmony export */   cleanRightDOM: () => (/* binding */ cleanRightDOM),
/* harmony export */   setLeftPartDOMContent: () => (/* binding */ setLeftPartDOMContent),
/* harmony export */   setRightPartDOMContent: () => (/* binding */ setRightPartDOMContent)
/* harmony export */ });
/* harmony import */ var _getDataAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataAPI */ "./src/getDataAPI.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _addImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addImg */ "./src/addImg.js");




function addRightPartDOM() {
  const rightDOM = document.querySelector(".right");
  rightDOM.innerHTML = "";

  const locationP = document.createElement("p");
  locationP.classList.add("locationP");

  const thisWeekP = document.createElement("p");
  thisWeekP.classList.add("thisWeekP");
  thisWeekP.textContent = "Next three days"; // permanent so add here

  const weekDIV = document.createElement("div");
  weekDIV.classList.add("weekDIV");

  rightDOM.appendChild(locationP);
  rightDOM.appendChild(thisWeekP);

  //   Weather card 1
  const card1 = document.createElement("div");
  card1.classList.add("weekCard");

  const card1TextDiv = document.createElement("div");
  card1TextDiv.classList.add("weekCardTextDiv");

  const card1TextDay = document.createElement("p");
  card1TextDay.classList.add("cardTextDay");

  const card1TextTemp = document.createElement("p");
  card1TextTemp.classList.add("cardTextTemp");

  const card1WeatherImg = document.createElement("img");
  card1WeatherImg.classList.add("cardWeatherImg");

  card1TextDiv.appendChild(card1TextDay);
  card1TextDiv.appendChild(card1TextTemp);
  card1.appendChild(card1TextDiv);
  card1.appendChild(card1WeatherImg);
  weekDIV.append(card1);

  //   Weather card 2
  const card2 = document.createElement("div");
  card2.classList.add("weekCard");

  const card2TextDiv = document.createElement("div");
  card2TextDiv.classList.add("weekCardTextDiv");

  const card2TextDay = document.createElement("p");
  card2TextDay.classList.add("cardTextDay");

  const card2TextTemp = document.createElement("p");
  card2TextTemp.classList.add("cardTextTemp");

  const card2WeatherImg = document.createElement("img");
  card2WeatherImg.classList.add("cardWeatherImg");

  card2TextDiv.appendChild(card2TextDay);
  card2TextDiv.appendChild(card2TextTemp);
  card2.appendChild(card2TextDiv);
  card2.appendChild(card2WeatherImg);
  weekDIV.append(card2);

  //   Weather card 3
  const card3 = document.createElement("div");
  card3.classList.add("weekCard");

  const card3TextDiv = document.createElement("div");
  card3TextDiv.classList.add("weekCardTextDiv");

  const card3TextDay = document.createElement("p");
  card3TextDay.classList.add("cardTextDay");

  const card3TextTemp = document.createElement("p");
  card3TextTemp.classList.add("cardTextTemp");

  const card3WeatherImg = document.createElement("img");
  card3WeatherImg.classList.add("cardWeatherImg");

  card3TextDiv.appendChild(card3TextDay);
  card3TextDiv.appendChild(card3TextTemp);
  card3.appendChild(card3TextDiv);
  card3.appendChild(card3WeatherImg);
  weekDIV.append(card3);

  rightDOM.appendChild(weekDIV);

  return {
    locationP,
    card1TextDay,
    card1TextTemp,
    card1WeatherImg,
    card2TextDay,
    card2TextTemp,
    card2WeatherImg,
    card3TextDay,
    card3TextTemp,
    card3WeatherImg,
  };
}

async function setLeftPartDOMContent() {
  const {
    locationP,
    card1TextDay,
    card1TextTemp,
    card1WeatherImg,
    card2TextDay,
    card2TextTemp,
    card2WeatherImg,
    card3TextDay,
    card3TextTemp,
    card3WeatherImg,
  } = addRightPartDOM();
}

async function setRightPartDOMContent(cityInput) {
  const nextThreeDays = (0,_date__WEBPACK_IMPORTED_MODULE_1__.getCurrentAndNextDays)();
  const currentDay = nextThreeDays[0];
  const tomorrow = nextThreeDays[1];
  const dayAfterTomorrow = nextThreeDays[2];
  const dayAfterAfteromorrow = nextThreeDays[3];

  const elements = addRightPartDOM();
  const {
    locationP,
    card1TextDay,
    card1TextTemp,
    card1WeatherImg,
    card2TextDay,
    card2TextTemp,
    card2WeatherImg,
    card3TextDay,
    card3TextTemp,
    card3WeatherImg,
  } = elements;

  const {
    timeHourCardAll,
    city,
    country,
    maxTempCard1,
    minTempCard1,
    conditionCodeCard1,
    maxTempCard2,
    minTempCard2,
    conditionCodeCard2,
    maxTempCard3,
    minTempCard3,
    conditionCodeCard3,
  } = await (0,_getDataAPI__WEBPACK_IMPORTED_MODULE_0__.fetchNextThreeDaysData)(cityInput);

  locationP.textContent = city + ", " + country;

  card1TextDay.textContent = tomorrow + ", ";
  card1TextTemp.textContent = `${maxTempCard1} °C / ${minTempCard1} °C`;
  const imgSrc1 = await (0,_addImg__WEBPACK_IMPORTED_MODULE_2__.addImage)(conditionCodeCard1, timeHourCardAll);
  card1WeatherImg.src = imgSrc1;

  card2TextDay.textContent = dayAfterTomorrow + ", ";
  card2TextTemp.textContent = `${maxTempCard2} °C / ${minTempCard2} °C`;
  const imgSrc2 = await (0,_addImg__WEBPACK_IMPORTED_MODULE_2__.addImage)(conditionCodeCard2, timeHourCardAll);
  card2WeatherImg.src = imgSrc2;

  card3TextDay.textContent = dayAfterAfteromorrow + ", ";
  card3TextTemp.textContent = `${maxTempCard3} °C / ${minTempCard3} °C`;
  const imgSrc3 = await (0,_addImg__WEBPACK_IMPORTED_MODULE_2__.addImage)(conditionCodeCard3, timeHourCardAll);
  card3WeatherImg.src = imgSrc3;
}

function cleanRightDOM() {
  const rightDOM = document.querySelector(".right");
  rightDOM.innerHTML = "";
}


/***/ }),

/***/ "./src/img/DayClouds.png":
/*!*******************************!*\
  !*** ./src/img/DayClouds.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec479b95ae36f4bf0ba0.png";

/***/ }),

/***/ "./src/img/DayRain.png":
/*!*****************************!*\
  !*** ./src/img/DayRain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75d53dd5149f6810971e.png";

/***/ }),

/***/ "./src/img/DaySnow.png":
/*!*****************************!*\
  !*** ./src/img/DaySnow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1404efa1c001b171cbb8.png";

/***/ }),

/***/ "./src/img/DayStorm.png":
/*!******************************!*\
  !*** ./src/img/DayStorm.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20164c14e8af050a415d.png";

/***/ }),

/***/ "./src/img/DaySun.png":
/*!****************************!*\
  !*** ./src/img/DaySun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15dc181118fa4b345b23.png";

/***/ }),

/***/ "./src/img/DayWind.png":
/*!*****************************!*\
  !*** ./src/img/DayWind.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4b0745a86f677f3b02e.png";

/***/ }),

/***/ "./src/img/NightClouds.png":
/*!*********************************!*\
  !*** ./src/img/NightClouds.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "759c750488ead4fc9f06.png";

/***/ }),

/***/ "./src/img/NightMoon.png":
/*!*******************************!*\
  !*** ./src/img/NightMoon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f3642ecce4cd5302de4.png";

/***/ }),

/***/ "./src/img/NightRain.png":
/*!*******************************!*\
  !*** ./src/img/NightRain.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b98f6591146f14059441.png";

/***/ }),

/***/ "./src/img/NightSnow.png":
/*!*******************************!*\
  !*** ./src/img/NightSnow.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07296208522f741d0001.png";

/***/ }),

/***/ "./src/img/NightStorm.png":
/*!********************************!*\
  !*** ./src/img/NightStorm.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77a8e63d68f98259ed88.png";

/***/ }),

/***/ "./src/img/NightWind.png":
/*!*******************************!*\
  !*** ./src/img/NightWind.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "600770eaac35cabdcb63.png";

/***/ }),

/***/ "./src/img/search.png":
/*!****************************!*\
  !*** ./src/img/search.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b6162614179dd07501f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxPQUFPLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sNEJBQTRCLDZCQUE2QixnQkFBZ0IsaUJBQWlCLDJDQUEyQyxLQUFLLFVBQVUsb0JBQW9CLDBCQUEwQixLQUFLLHVDQUF1QyxrQkFBa0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLG1CQUFtQixLQUFLLHlCQUF5Qix1QkFBdUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsdUJBQXVCLGdCQUFnQixLQUFLLFlBQVksbUJBQW1CLG9DQUFvQyxLQUFLLHNCQUFzQixrQkFBa0IsbUJBQW1CLEtBQUssK0NBQStDLG1CQUFtQix1QkFBdUIsc0JBQXNCLHNCQUFzQixtQkFBbUIsS0FBSywyQ0FBMkMsbUJBQW1CLGlCQUFpQixtQkFBbUIsb0JBQW9CLEtBQUssdUJBQXVCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLHFCQUFxQix1QkFBdUIsc0JBQXNCLHVCQUF1QixLQUFLLGdCQUFnQix1QkFBdUIsc0JBQXNCLEtBQUssZ0JBQWdCLHNCQUFzQixLQUFLLG9CQUFvQixzQkFBc0IseUJBQXlCLEtBQUssZ0JBQWdCLHVCQUF1QixzQkFBc0IseUJBQXlCLEtBQUssWUFBWSxrQkFBa0IsZ0NBQWdDLG1CQUFtQixLQUFLLDZDQUE2Qyx1QkFBdUIsd0JBQXdCLHNCQUFzQixLQUFLLGdCQUFnQixzQkFBc0Isd0JBQXdCLHNCQUFzQixLQUFLLDRCQUE0QixvQkFBb0IsMEJBQTBCLDBCQUEwQixLQUFLLGNBQWMsdUJBQXVCLG9DQUFvQyxLQUFLLGVBQWUsOEJBQThCLDhCQUE4QixrQkFBa0IsS0FBSyxzQkFBc0Isb0JBQW9CLDZCQUE2Qiw2QkFBNkIsK0JBQStCLHlCQUF5QixzQkFBc0IscUJBQXFCLGdCQUFnQixLQUFLLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixLQUFLLG1EQUFtRCxhQUFhLG9CQUFvQixPQUFPLGNBQWMsb0JBQW9CLGtDQUFrQyxxQkFBcUIsT0FBTyxnQkFBZ0IsK0JBQStCLGtCQUFrQixPQUFPLGlCQUFpQixvQkFBb0IscUJBQXFCLE9BQU8sa0JBQWtCLHdCQUF3QixPQUFPLGtCQUFrQix3QkFBd0IsT0FBTyxxQkFBcUIsc0JBQXNCLHFCQUFxQixzQkFBc0IsT0FBTyxLQUFLLCtDQUErQyxhQUFhLG9CQUFvQixPQUFPLGNBQWMsb0JBQW9CLE9BQU8sS0FBSywrQ0FBK0MsWUFBWSwrQkFBK0IsT0FBTyxhQUFhLHFCQUFxQixPQUFPLGNBQWMscUJBQXFCLE9BQU8saUJBQWlCLG9CQUFvQixxQkFBcUIsT0FBTyxrQkFBa0IsNEJBQTRCLE9BQU8scUJBQXFCLHNCQUFzQixxQkFBcUIsc0JBQXNCLE9BQU8sdUJBQXVCLHlCQUF5Qix3QkFBd0IseUJBQXlCLE9BQU8scUJBQXFCLHNCQUFzQixxQkFBcUIsc0JBQXNCLE9BQU8sbUNBQW1DLDJCQUEyQixPQUFPLEtBQUssdUJBQXVCO0FBQ2p4SztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9NMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2I0QztBQUNKO0FBQ0E7QUFDRTtBQUNKO0FBQ0U7QUFDeEM7QUFDZ0Q7QUFDSjtBQUNBO0FBQ0U7QUFDRjtBQUNBO0FBQzVDO0FBQ3NDO0FBQ3RDO0FBQ2dEO0FBQ007QUFDZjtBQUN2QztBQUNBO0FBQ087QUFDUCxhQUFhLG9DQUFvQztBQUNqRDtBQUNBO0FBQ0EsMkJBQTJCLG9FQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0Q0FBTTtBQUN2QjtBQUNBO0FBQ0EsaUJBQWlCLCtDQUFTO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQU87QUFDeEI7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBTztBQUN4QjtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFRO0FBQ3pCO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQU87QUFDeEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQVM7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQixpREFBVztBQUM1QjtBQUNBO0FBQ0EsaUJBQWlCLCtDQUFTO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQVM7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQixnREFBVTtBQUMzQjtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLDZDQUFNO0FBQzFCLEVBQUUsaURBQVk7QUFDZDs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBSSxHQUFHLE1BQU0sR0FBRyxLQUFLO0FBQ2pDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ087QUFDUDtBQUNBO0FBQ0EsMEZBQTBGLFVBQVU7QUFDcEcsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsMkZBQTJGLFVBQVU7QUFDckcsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSXFCO0FBQ3NCO0FBQ0Y7QUFDQTtBQUNBO0FBQ1M7QUFDTDtBQUNPO0FBQ1Q7QUFDM0M7QUFDTztBQUNBO0FBQ1A7QUFDQSxzREFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3REFBYztBQUN2QyxFQUFFLHNEQUFZO0FBQ2QsUUFBUSwrREFBcUI7QUFDN0I7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxFQUFFLHdEQUFhO0FBQ2YsUUFBUSxpRUFBc0I7QUFDOUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QitEO0FBQ2I7QUFDWjtBQUN2QztBQUNBO0FBQ087QUFDUDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDTztBQUNQLG9CQUFvQixzREFBWTtBQUNoQyx3QkFBd0IsK0RBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpREFBaUQ7QUFDM0Q7QUFDQTtBQUNBLHVCQUF1QixXQUFXLE9BQU8sVUFBVTtBQUNuRDtBQUNBLFVBQVUsb0NBQW9DLFFBQVEsZ0VBQWdCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0EsVUFBVSxvQ0FBb0MsUUFBUSxnRUFBZ0I7QUFDdEU7QUFDQTtBQUNBLHVCQUF1QixvREFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSwwQkFBMEI7QUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Ec0Q7QUFDUDtBQUNYO0FBQ3BDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNPO0FBQ1Asd0JBQXdCLDREQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFFBQVEsbUVBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWMsT0FBTyxjQUFjO0FBQ3BFLHdCQUF3QixpREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYyxPQUFPLGNBQWM7QUFDcEUsd0JBQXdCLGlEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxjQUFjLE9BQU8sY0FBYztBQUNwRSx3QkFBd0IsaURBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0tBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC8uL3NyYy9hZGRJbWcuanMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9zcmMvZ2V0RGF0YUFQSS5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9zcmMvbGVmdERPTS5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vc3JjL3JpZ2h0RE9NLmpzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogXCJETSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4vKiBMZWZ0IHBhcnQgb25seSAqL1xyXG4ubGVmdCB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5sb2NhdGlvblNlYXJjaEZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbi5wcmVzcyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zZWFyY2hCdXR0b25JbWcge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4jbG9jYXRpb25TZWFyY2gsXHJcbiNsb2NhdGlvblNlYXJjaDpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIC8qIGhlaWdodDogMzBweDsgKi9cclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMTkwcHg7XHJcbn1cclxuOjpwbGFjZWhvbGRlcixcclxuOjpwbGFjZWhvbGRlcjpmb2N1cyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmxlZnRDaGFuZ2FibGVET00ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tYWluV2VhdGhlckltZyB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXgtd2lkdGg6IDQ1dnc7XHJcbiAgbWF4LWhlaWdodDogNDV2aDtcclxufVxyXG4uY2l0eUxlZnRQIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4udGVtcExlZnRQIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuLndlYXRoZXJTdGF0ZVAge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLmRhdGVMZWZ0UCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yaWdodCB7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmODtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFJpZ2h0IHBhcnQgb25seSAqL1xyXG4ubG9jYXRpb25QIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4udGhpc1dlZWtQIHtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi53ZWVrRElWLFxyXG4ud2Vla0NhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi53ZWVrRElWIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi53ZWVrQ2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIydnc7XHJcbn1cclxuLndlZWtDYXJkVGV4dERpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbi53ZWVrQ2FyZCBpbWcge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUycHgpIHtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA2NXZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmODtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLndlZWtESVYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcbiAgLndlZWtDYXJkIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gIH1cclxuICAubG9jYXRpb25QIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcbiAgLnRoaXNXZWVrUCB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG4gIC53ZWVrQ2FyZCBpbWcge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogNDB2dztcclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gIC53ZWVrQ2FyZCB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMzV2aDtcclxuICB9XHJcbiAgLmRhdGVMZWZ0UCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAud2Vla0NhcmQgaW1nIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gIH1cclxuICAubWFpbldlYXRoZXJJbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1heC13aWR0aDogNTV2dztcclxuICAgIG1heC1oZWlnaHQ6IDU1dmg7XHJcbiAgfVxyXG4gIC53ZWVrQ2FyZCBpbWcge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC5sb2NhdGlvblAsXHJcbiAgLnRoaXNXZWVrUCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCOzRCQUMwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztFQUNYO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7O0lBRUUsa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi8qIExlZnQgcGFydCBvbmx5ICovXFxyXFxuLmxlZnQge1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmxvY2F0aW9uU2VhcmNoRm9ybSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5wcmVzcyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLnNlYXJjaEJ1dHRvbkltZyB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuI2xvY2F0aW9uU2VhcmNoLFxcclxcbiNsb2NhdGlvblNlYXJjaDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICAvKiBoZWlnaHQ6IDMwcHg7ICovXFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgd2lkdGg6IDE5MHB4O1xcclxcbn1cXHJcXG46OnBsYWNlaG9sZGVyLFxcclxcbjo6cGxhY2Vob2xkZXI6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5sZWZ0Q2hhbmdhYmxlRE9NIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubWFpbldlYXRoZXJJbWcge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1heC13aWR0aDogNDV2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDQ1dmg7XFxyXFxufVxcclxcbi5jaXR5TGVmdFAge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuLnRlbXBMZWZ0UCB7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxufVxcclxcbi53ZWF0aGVyU3RhdGVQIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLmRhdGVMZWZ0UCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucmlnaHQge1xcclxcbiAgd2lkdGg6IDcwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSaWdodCBwYXJ0IG9ubHkgKi9cXHJcXG4ubG9jYXRpb25QIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuLnRoaXNXZWVrUCB7XFxyXFxuICBtYXJnaW4tdG9wOiA3cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuLndlZWtESVYsXFxyXFxuLndlZWtDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLndlZWtESVYge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG4ud2Vla0NhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMnZ3O1xcclxcbn1cXHJcXG4ud2Vla0NhcmRUZXh0RGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4ud2Vla0NhcmQgaW1nIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB3aWR0aDogMTI1cHg7XFxyXFxuICBoZWlnaHQ6IDEyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MnB4KSB7XFxyXFxuICAubGVmdCB7XFxyXFxuICAgIHdpZHRoOiAzNXZ3O1xcclxcbiAgfVxcclxcbiAgLnJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDY1dnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2Zjg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC53ZWVrRElWIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgLndlZWtDYXJkIHtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIGhlaWdodDogMzV2aDtcXHJcXG4gIH1cXHJcXG4gIC5sb2NhdGlvblAge1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICB9XFxyXFxuICAudGhpc1dlZWtQIHtcXHJcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgfVxcclxcbiAgLndlZWtDYXJkIGltZyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmxlZnQge1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gIH1cXHJcXG4gIC5yaWdodCB7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIC5sZWZ0IHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgfVxcclxcbiAgLnJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgfVxcclxcbiAgLndlZWtDYXJkIHtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgIGhlaWdodDogMzV2aDtcXHJcXG4gIH1cXHJcXG4gIC5kYXRlTGVmdFAge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgLndlZWtDYXJkIGltZyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gIH1cXHJcXG4gIC5tYWluV2VhdGhlckltZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1heC13aWR0aDogNTV2dztcXHJcXG4gICAgbWF4LWhlaWdodDogNTV2aDtcXHJcXG4gIH1cXHJcXG4gIC53ZWVrQ2FyZCBpbWcge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICB9XFxyXFxuICAubG9jYXRpb25QLFxcclxcbiAgLnRoaXNXZWVrUCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRGF5Q2xvdWRzIGZyb20gXCIuL2ltZy9EYXlDbG91ZHMucG5nXCI7XHJcbmltcG9ydCBEYXlSYWluIGZyb20gXCIuL2ltZy9EYXlSYWluLnBuZ1wiO1xyXG5pbXBvcnQgRGF5U25vdyBmcm9tIFwiLi9pbWcvRGF5U25vdy5wbmdcIjtcclxuaW1wb3J0IERheVN0b3JtIGZyb20gXCIuL2ltZy9EYXlTdG9ybS5wbmdcIjtcclxuaW1wb3J0IERheVN1biBmcm9tIFwiLi9pbWcvRGF5U3VuLnBuZ1wiO1xyXG5pbXBvcnQgRGF5V2luZCBmcm9tIFwiLi9pbWcvRGF5V2luZC5wbmdcIjtcclxuXHJcbmltcG9ydCBOaWdodENsb3VkcyBmcm9tIFwiLi9pbWcvTmlnaHRDbG91ZHMucG5nXCI7XHJcbmltcG9ydCBOaWdodFJhaW4gZnJvbSBcIi4vaW1nL05pZ2h0UmFpbi5wbmdcIjtcclxuaW1wb3J0IE5pZ2h0U25vdyBmcm9tIFwiLi9pbWcvTmlnaHRTbm93LnBuZ1wiO1xyXG5pbXBvcnQgTmlnaHRTdG9ybSBmcm9tIFwiLi9pbWcvTmlnaHRTdG9ybS5wbmdcIjtcclxuaW1wb3J0IE5pZ2h0TW9vbiBmcm9tIFwiLi9pbWcvTmlnaHRNb29uLnBuZ1wiO1xyXG5pbXBvcnQgTmlnaHRXaW5kIGZyb20gXCIuL2ltZy9OaWdodFdpbmQucG5nXCI7XHJcblxyXG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuL2ltZy9zZWFyY2gucG5nXCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaEN1cnJlbnREYXRhIH0gZnJvbSBcIi4vZ2V0RGF0YUFQSVwiO1xyXG5pbXBvcnQgeyByZW5hbWVXZWF0aGVyQ29uZGl0aW9uIH0gZnJvbSBcIi4vZ2V0RGF0YUFQSVwiO1xyXG5pbXBvcnQgeyBzdWJtaXRCdXR0b24gfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuLy8gQWRkaW5nIGFuIGltZyBhY2NvcmRpbmcgdG8gd2VhdGhlciBjb25kaXRpb24gYW5kIHBhcnQgb2YgdGhlIGRheVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkSW1hZ2Uod2VhdGhlckNvbmRpdGlvbklELCBsb2NhbFRpbWVIb3VyKSB7XHJcbiAgLy8gY29uc3QgeyB3ZWF0aGVyQ29uZGl0aW9uSUQsIGxvY2FsVGltZUhvdXIgfSA9IGF3YWl0IGZldGNoQ3VycmVudERhdGEoXHJcbiAgLy8gICBjaXR5SW5wdXRcclxuICAvLyApO1xyXG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSByZW5hbWVXZWF0aGVyQ29uZGl0aW9uKHdlYXRoZXJDb25kaXRpb25JRCk7XHJcblxyXG4gIGNvbnN0IGxvY2FsVGltZSA9IHBhcnNlSW50KGxvY2FsVGltZUhvdXIsIDEwKTtcclxuICBjb25zb2xlLmxvZyhsb2NhbFRpbWUsIGxvY2FsVGltZUhvdXIpO1xyXG5cclxuICBsZXQgaW1nU3JjO1xyXG5cclxuICBpZiAobG9jYWxUaW1lID49IDYgJiYgbG9jYWxUaW1lIDwgMTkpIHtcclxuICAgIC8vIERheSB0aW1lXHJcbiAgICBzd2l0Y2ggKHdlYXRoZXJDb25kaXRpb24pIHtcclxuICAgICAgY2FzZSBcInN1blwiOlxyXG4gICAgICAgIGltZ1NyYyA9IERheVN1bjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImNsb3Vkc1wiOlxyXG4gICAgICAgIGltZ1NyYyA9IERheUNsb3VkcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInJhaW5cIjpcclxuICAgICAgICBpbWdTcmMgPSBEYXlSYWluO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic25vd1wiOlxyXG4gICAgICAgIGltZ1NyYyA9IERheVNub3c7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzdG9ybVwiOlxyXG4gICAgICAgIGltZ1NyYyA9IERheVN0b3JtO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGltZ1NyYyA9IERheVdpbmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIE5pZ2h0IHRpbWVcclxuICAgIHN3aXRjaCAod2VhdGhlckNvbmRpdGlvbikge1xyXG4gICAgICBjYXNlIFwic3VuXCI6XHJcbiAgICAgICAgaW1nU3JjID0gTmlnaHRNb29uO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY2xvdWRzXCI6XHJcbiAgICAgICAgaW1nU3JjID0gTmlnaHRDbG91ZHM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJyYWluXCI6XHJcbiAgICAgICAgaW1nU3JjID0gTmlnaHRSYWluO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic25vd1wiOlxyXG4gICAgICAgIGltZ1NyYyA9IE5pZ2h0U25vdztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInN0b3JtXCI6XHJcbiAgICAgICAgaW1nU3JjID0gTmlnaHRTdG9ybTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpbWdTcmMgPSBOaWdodFdpbmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW1nU3JjO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkU2VhcmNoSWNvbigpIHtcclxuICBjb25zdCBzZWFyY2hJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgc2VhcmNoSW1hZ2UuY2xhc3NMaXN0LmFkZChcInNlYXJjaEJ1dHRvbkltZ1wiKTtcclxuICBzZWFyY2hJbWFnZS5zcmMgPSBzZWFyY2g7XHJcbiAgc3VibWl0QnV0dG9uLmFwcGVuZChzZWFyY2hJbWFnZSk7XHJcbn1cclxuIiwiZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgcmV0dXJuIGAke2RheX0uJHttb250aH0uJHt5ZWFyfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RheURhdGUoKSB7XHJcbiAgcmV0dXJuIGZvcm1hdERhdGUobmV3IERhdGUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50QW5kTmV4dERheXMoKSB7XHJcbiAgY29uc3Qgd2Vla2RheSA9IFtcclxuICAgIFwiU3VuZGF5XCIsXHJcbiAgICBcIk1vbmRheVwiLFxyXG4gICAgXCJUdWVzZGF5XCIsXHJcbiAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgXCJUaHVyc2RheVwiLFxyXG4gICAgXCJGcmlkYXlcIixcclxuICAgIFwiU2F0dXJkYXlcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBkYXlzID0gW107XHJcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF5ID0gbmV3IERhdGUoZCk7XHJcbiAgICBjdXJyZW50RGF5LnNldERhdGUoZC5nZXREYXRlKCkgKyBpKTtcclxuICAgIGRheXMucHVzaCh3ZWVrZGF5W2N1cnJlbnREYXkuZ2V0RGF5KCldKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXlzO1xyXG59XHJcbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEN1cnJlbnREYXRhKGNpdHlJbm91dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0wZGJjYWZhMmI0ZTQ0OWVhYTNkMTIwMzQxMjQwNzA3JnE9JHtjaXR5SW5vdXR9JmFxaT15ZXNgLFxyXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gRXJyb3IgY2hlY2tcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNwb25zZSBzdGF0dXM6IGZhaWxlZCB0byBmZXRjaCBjdXJyZW50IGRhdGFgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBBUElEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCB0ZW1wZXJhdHVyZTogXCIgKyBBUElEYXRhLmN1cnJlbnQudGVtcF9jKTsgLy9kZWJ1Z2dpbmdcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uSUQgPSBBUElEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGU7XHJcbiAgICBjb25zdCBsb2NhbFRpbWVIb3VyID0gQVBJRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWVcclxuICAgICAgLnNwbGl0KFwiIFwiKVsxXVxyXG4gICAgICAuc3BsaXQoXCI6XCIpWzBdO1xyXG5cclxuICAgIC8vIEZvciByaWdodCBET00gY2FyZHNcclxuICAgIGNvbnN0IHV2SW5kZXggPSBBUElEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnV2O1xyXG4gICAgY29uc3QgZmVlbExpa2UgPSBBUElEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmZlZWxzbGlrZV9jO1xyXG4gICAgY29uc3Qgd2luZCA9IEFQSURhdGEuY3VycmVudC5jb25kaXRpb24ud2luZF9rcGg7XHJcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gQVBJRGF0YS5jdXJyZW50LmNvbmRpdGlvbi52aXNfa207XHJcbiAgICBjb25zdCBhaXJRdWFsaXR5ID0gQVBJRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5haXJfcXVhbGl0eT8uW1widXMtZXBhLWluZGV4XCJdO1xyXG4gICAgY29uc3QgcHJlc3N1cmUgPSBBUElEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnByZXNzdXJlX21iO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiVGltZSBcIiArIGxvY2FsVGltZUhvdXIpOyAvLyBkZWJ1Z2dpbmdcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3ZWF0aGVyQ29uZGl0aW9uVGV4dDogQVBJRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICB0ZW1wQ2Vsc2l1czogQVBJRGF0YS5jdXJyZW50LnRlbXBfYyxcclxuICAgICAgd2VhdGhlckNvbmRpdGlvbklELFxyXG4gICAgICBsb2NhbFRpbWVIb3VyLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE5leHRUaHJlZURheXNEYXRhKGNpdHlJbm91dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MGRiY2FmYTJiNGU0NDllYWEzZDEyMDM0MTI0MDcwNyZxPSR7Y2l0eUlub3V0fSZkYXlzPTRgLFxyXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gRXJyb3IgY2hlY2tcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNwb25zZSBzdGF0dXM6IGZhaWxlZCB0byBmZXRjaCBkYXRhIGZvciBuZXh0IDMgZGF5c2ApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcmVjYXN0QVBJRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBjaXR5ID0gZm9yZWNhc3RBUElEYXRhLmxvY2F0aW9uLm5hbWU7XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gZm9yZWNhc3RBUElEYXRhLmxvY2F0aW9uLmNvdW50cnk7XHJcblxyXG4gICAgLy8gQ2FyZCAxXHJcbiAgICBjb25zdCBtYXhUZW1wQ2FyZDEgPSBmb3JlY2FzdEFQSURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYztcclxuICAgIGNvbnN0IG1pblRlbXBDYXJkMSA9IGZvcmVjYXN0QVBJRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jO1xyXG4gICAgY29uc3QgY29uZGl0aW9uQ29kZUNhcmQxID1cclxuICAgICAgZm9yZWNhc3RBUElEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uY29kZTtcclxuXHJcbiAgICBjb25zdCB0aW1lSG91ckNhcmRBbGwgPSBmb3JlY2FzdEFQSURhdGEubG9jYXRpb24ubG9jYWx0aW1lXHJcbiAgICAgIC5zcGxpdChcIiBcIilbMV1cclxuICAgICAgLnNwbGl0KFwiOlwiKVswXTtcclxuXHJcbiAgICAvLyBDYXJkIDJcclxuICAgIGNvbnN0IG1heFRlbXBDYXJkMiA9IGZvcmVjYXN0QVBJRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jO1xyXG4gICAgY29uc3QgbWluVGVtcENhcmQyID0gZm9yZWNhc3RBUElEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2M7XHJcbiAgICBjb25zdCBjb25kaXRpb25Db2RlQ2FyZDIgPVxyXG4gICAgICBmb3JlY2FzdEFQSURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5jb2RlO1xyXG5cclxuICAgIC8vIENhcmQgM1xyXG4gICAgY29uc3QgbWF4VGVtcENhcmQzID0gZm9yZWNhc3RBUElEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5tYXh0ZW1wX2M7XHJcbiAgICBjb25zdCBtaW5UZW1wQ2FyZDMgPSBmb3JlY2FzdEFQSURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5Lm1pbnRlbXBfYztcclxuICAgIGNvbnN0IGNvbmRpdGlvbkNvZGVDYXJkMyA9XHJcbiAgICAgIGZvcmVjYXN0QVBJRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuY29uZGl0aW9uLmNvZGU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGltZUhvdXJDYXJkQWxsLFxyXG4gICAgICBjaXR5LFxyXG4gICAgICBjb3VudHJ5LFxyXG4gICAgICBtYXhUZW1wQ2FyZDEsXHJcbiAgICAgIG1pblRlbXBDYXJkMSxcclxuICAgICAgY29uZGl0aW9uQ29kZUNhcmQxLFxyXG4gICAgICBtYXhUZW1wQ2FyZDIsXHJcbiAgICAgIG1pblRlbXBDYXJkMixcclxuICAgICAgY29uZGl0aW9uQ29kZUNhcmQyLFxyXG4gICAgICBtYXhUZW1wQ2FyZDMsXHJcbiAgICAgIG1pblRlbXBDYXJkMyxcclxuICAgICAgY29uZGl0aW9uQ29kZUNhcmQzLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVXZWF0aGVyQ29uZGl0aW9uKHdlYXRoZXJDb25kaXRpb25JRCkge1xyXG4gIGlmIChbMTAwMF0uaW5jbHVkZXMod2VhdGhlckNvbmRpdGlvbklEKSkge1xyXG4gICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IFwic3VuXCI7XHJcbiAgICByZXR1cm4gd2VhdGhlckNvbmRpdGlvbjtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgWzEwMDMsIDEwMDYsIDEwMDksIDEwMzAsIDExMzUsIDExNDddLmluY2x1ZGVzKHdlYXRoZXJDb25kaXRpb25JRClcclxuICApIHtcclxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBcImNsb3Vkc1wiO1xyXG4gICAgcmV0dXJuIHdlYXRoZXJDb25kaXRpb247XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIFtcclxuICAgICAgMTA2MywgMTE1MCwgMTE1MywgMTA3MiwgMTE2OCwgMTE3MSwgMTE4MCwgMTE4MywgMTE4NiwgMTE4OSwgMTE5MiwgMTE5NSxcclxuICAgICAgMTE5OCwgMTIwMSwgMTI0MCwgMTI0MywgMTI0NiwgMTI0OSwgMTI1MixcclxuICAgIF0uaW5jbHVkZXMod2VhdGhlckNvbmRpdGlvbklEKVxyXG4gICkge1xyXG4gICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IFwicmFpblwiO1xyXG4gICAgcmV0dXJuIHdlYXRoZXJDb25kaXRpb247XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIFtcclxuICAgICAgMTA2NiwgMTA2OSwgMTExNCwgMTIwNCwgMTIwNywgMTIxMCwgMTIxMywgMTIxNiwgMTIxOSwgMTIyMiwgMTIyNSwgMTIzNyxcclxuICAgICAgMTI1NSwgMTI1OCwgMTI2MSwgMTI2NCwgMTI3OSxcclxuICAgIF0uaW5jbHVkZXMod2VhdGhlckNvbmRpdGlvbklEKVxyXG4gICkge1xyXG4gICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IFwic25vd1wiO1xyXG4gICAgcmV0dXJuIHdlYXRoZXJDb25kaXRpb247XHJcbiAgfSBlbHNlIGlmIChbMTA4NywgMTExNywgMTI3MywgMTI3NiwgMTI4Ml0uaW5jbHVkZXMod2VhdGhlckNvbmRpdGlvbklEKSkge1xyXG4gICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IFwic3Rvcm1cIjtcclxuICAgIHJldHVybiB3ZWF0aGVyQ29uZGl0aW9uO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBhZGRMZWZ0UGFydERPTSB9IGZyb20gXCIuL2xlZnRET01cIjtcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4vZ2V0RGF0YUFQSVwiO1xyXG5pbXBvcnQgeyBhZGRTZWFyY2hJY29uIH0gZnJvbSBcIi4vYWRkSW1nXCI7XHJcbmltcG9ydCB7IGNsZWFuTGVmdERPTSB9IGZyb20gXCIuL2xlZnRET01cIjtcclxuaW1wb3J0IHsgc2V0TGVmdFBhcnRET01Db250ZW50IH0gZnJvbSBcIi4vbGVmdERPTVwiO1xyXG5pbXBvcnQgeyBhZGRSaWdodFBhcnRET00gfSBmcm9tIFwiLi9yaWdodERPTVwiO1xyXG5pbXBvcnQgeyBzZXRSaWdodFBhcnRET01Db250ZW50IH0gZnJvbSBcIi4vcmlnaHRET01cIjtcclxuaW1wb3J0IHsgY2xlYW5SaWdodERPTSB9IGZyb20gXCIuL3JpZ2h0RE9NXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9jYXRpb25TZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblNlYXJjaEZvcm1cIik7XHJcbmV4cG9ydCBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzXCIpO1xyXG5cclxuYWRkU2VhcmNoSWNvbigpO1xyXG5cclxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uU2VhcmNoXCIpLnZhbHVlO1xyXG5cclxuICBjb25zdCBlbGVtZW50c09mTGVmdCA9IGFkZExlZnRQYXJ0RE9NKCk7XHJcbiAgY2xlYW5MZWZ0RE9NKCk7XHJcbiAgYXdhaXQgc2V0TGVmdFBhcnRET01Db250ZW50KGNpdHlJbnB1dCwgZWxlbWVudHNPZkxlZnQpO1xyXG5cclxuICAvLyBjb25zdCBlbGVtZW50c09mUmlnaHQgPSBhZGRSaWdodFBhcnRET00oKTtcclxuICAvLyBjbGVhblJpZ2h0RE9NKGVsZW1lbnRzT2ZSaWdodCk7IC8vIGNvbWluZyBzb29uXHJcbiAgY2xlYW5SaWdodERPTSgpO1xyXG4gIGF3YWl0IHNldFJpZ2h0UGFydERPTUNvbnRlbnQoY2l0eUlucHV0KTtcclxufSk7XHJcbiIsImltcG9ydCB7IGdldFRvZGF5RGF0ZSwgZ2V0Q3VycmVudEFuZE5leHREYXlzIH0gZnJvbSBcIi4vZGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBmZXRjaEN1cnJlbnREYXRhIH0gZnJvbSBcIi4vZ2V0RGF0YUFQSS5qc1wiO1xyXG5pbXBvcnQgeyBhZGRJbWFnZSB9IGZyb20gXCIuL2FkZEltZy5qc1wiO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBhcHBlbmQgRE9NIGVsZW1lbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWZ0UGFydERPTSgpIHtcclxuICBjb25zdCBsZWZ0RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0Q2hhbmdhYmxlRE9NXCIpO1xyXG4gIGxlZnRET00uaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgcHJldmlvdXMgZWxlbWVudHNcclxuXHJcbiAgY29uc3QgY2l0eVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjaXR5UC5jbGFzc0xpc3QuYWRkKFwiY2l0eUxlZnRQXCIpO1xyXG5cclxuICBjb25zdCB3ZWF0aGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB3ZWF0aGVySW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluV2VhdGhlckltZ1wiKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlclN0YXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHdlYXRoZXJTdGF0ZVAuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJTdGF0ZVBcIik7XHJcblxyXG4gIGNvbnN0IHRlbXBQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdGVtcFAuY2xhc3NMaXN0LmFkZChcInRlbXBMZWZ0UFwiKTtcclxuXHJcbiAgY29uc3QgZGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkYXRlUC5jbGFzc0xpc3QuYWRkKFwiZGF0ZUxlZnRQXCIpO1xyXG5cclxuICBsZWZ0RE9NLmFwcGVuZENoaWxkKHdlYXRoZXJJbWcpO1xyXG4gIGxlZnRET00uYXBwZW5kQ2hpbGQoY2l0eVApO1xyXG4gIGxlZnRET00uYXBwZW5kQ2hpbGQodGVtcFApO1xyXG4gIGxlZnRET00uYXBwZW5kQ2hpbGQod2VhdGhlclN0YXRlUCk7XHJcbiAgbGVmdERPTS5hcHBlbmRDaGlsZChkYXRlUCk7XHJcblxyXG4gIHJldHVybiB7IHdlYXRoZXJJbWcsIGNpdHlQLCB0ZW1wUCwgd2VhdGhlclN0YXRlUCwgZGF0ZVAgfTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gc2V0IGNvbnRlbnQgZm9yIHRoZSBET00gZWxlbWVudHNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldExlZnRQYXJ0RE9NQ29udGVudChjaXR5SW5wdXQpIHtcclxuICBjb25zdCB0b2RheURhdGUgPSBnZXRUb2RheURhdGUoKTtcclxuICBjb25zdCBuZXh0VGhyZWVEYXlzID0gZ2V0Q3VycmVudEFuZE5leHREYXlzKCk7XHJcbiAgY29uc3QgY3VycmVudERheSA9IG5leHRUaHJlZURheXNbMF07XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRzID0gYWRkTGVmdFBhcnRET00oKTtcclxuXHJcbiAgY29uc3QgeyB3ZWF0aGVySW1nLCBjaXR5UCwgdGVtcFAsIHdlYXRoZXJTdGF0ZVAsIGRhdGVQIH0gPSBlbGVtZW50cztcclxuXHJcbiAgY2l0eVAudGV4dENvbnRlbnQgPSBjaXR5SW5wdXQ7XHJcbiAgZGF0ZVAuaW5uZXJIVE1MID0gYCR7Y3VycmVudERheX0sPGJyPiR7dG9kYXlEYXRlfWA7XHJcblxyXG4gIGNvbnN0IHsgd2VhdGhlckNvbmRpdGlvblRleHQsIHRlbXBDZWxzaXVzIH0gPSBhd2FpdCBmZXRjaEN1cnJlbnREYXRhKFxyXG4gICAgY2l0eUlucHV0XHJcbiAgKTtcclxuICB3ZWF0aGVyU3RhdGVQLnRleHRDb250ZW50ID0gd2VhdGhlckNvbmRpdGlvblRleHQ7XHJcbiAgdGVtcFAudGV4dENvbnRlbnQgPSBgJHt0ZW1wQ2Vsc2l1c30gwrBDYDtcclxuXHJcbiAgY29uc3QgeyB3ZWF0aGVyQ29uZGl0aW9uSUQsIGxvY2FsVGltZUhvdXIgfSA9IGF3YWl0IGZldGNoQ3VycmVudERhdGEoXHJcbiAgICBjaXR5SW5wdXRcclxuICApO1xyXG4gIGNvbnN0IGltZ1NyYyA9IGF3YWl0IGFkZEltYWdlKHdlYXRoZXJDb25kaXRpb25JRCwgbG9jYWxUaW1lSG91cik7XHJcbiAgd2VhdGhlckltZy5zcmMgPSBpbWdTcmM7XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBhbGwgY2hpbGQgZWxlbWVudHMgZnJvbSB0aGUgcGFyZW50IGNvbnRhaW5lclxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5MZWZ0RE9NKCkge1xyXG4gIGNvbnN0IGxlZnRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRDaGFuZ2FibGVET01cIik7XHJcbiAgbGVmdERPTS5pbm5lckhUTUwgPSBcIlwiOyAvLyBUaGlzIGVmZmVjdGl2ZWx5IHJlbW92ZXMgYWxsIGNoaWxkIGVsZW1lbnRzXHJcbn1cclxuIiwiaW1wb3J0IHsgZmV0Y2hOZXh0VGhyZWVEYXlzRGF0YSB9IGZyb20gXCIuL2dldERhdGFBUElcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudEFuZE5leHREYXlzIH0gZnJvbSBcIi4vZGF0ZVwiO1xyXG5pbXBvcnQgeyBhZGRJbWFnZSB9IGZyb20gXCIuL2FkZEltZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJpZ2h0UGFydERPTSgpIHtcclxuICBjb25zdCByaWdodERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHRcIik7XHJcbiAgcmlnaHRET00uaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgbG9jYXRpb25QLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblBcIik7XHJcblxyXG4gIGNvbnN0IHRoaXNXZWVrUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHRoaXNXZWVrUC5jbGFzc0xpc3QuYWRkKFwidGhpc1dlZWtQXCIpO1xyXG4gIHRoaXNXZWVrUC50ZXh0Q29udGVudCA9IFwiTmV4dCB0aHJlZSBkYXlzXCI7IC8vIHBlcm1hbmVudCBzbyBhZGQgaGVyZVxyXG5cclxuICBjb25zdCB3ZWVrRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3ZWVrRElWLmNsYXNzTGlzdC5hZGQoXCJ3ZWVrRElWXCIpO1xyXG5cclxuICByaWdodERPTS5hcHBlbmRDaGlsZChsb2NhdGlvblApO1xyXG4gIHJpZ2h0RE9NLmFwcGVuZENoaWxkKHRoaXNXZWVrUCk7XHJcblxyXG4gIC8vICAgV2VhdGhlciBjYXJkIDFcclxuICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FyZDEuY2xhc3NMaXN0LmFkZChcIndlZWtDYXJkXCIpO1xyXG5cclxuICBjb25zdCBjYXJkMVRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmQxVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwid2Vla0NhcmRUZXh0RGl2XCIpO1xyXG5cclxuICBjb25zdCBjYXJkMVRleHREYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjYXJkMVRleHREYXkuY2xhc3NMaXN0LmFkZChcImNhcmRUZXh0RGF5XCIpO1xyXG5cclxuICBjb25zdCBjYXJkMVRleHRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2FyZDFUZXh0VGVtcC5jbGFzc0xpc3QuYWRkKFwiY2FyZFRleHRUZW1wXCIpO1xyXG5cclxuICBjb25zdCBjYXJkMVdlYXRoZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNhcmQxV2VhdGhlckltZy5jbGFzc0xpc3QuYWRkKFwiY2FyZFdlYXRoZXJJbWdcIik7XHJcblxyXG4gIGNhcmQxVGV4dERpdi5hcHBlbmRDaGlsZChjYXJkMVRleHREYXkpO1xyXG4gIGNhcmQxVGV4dERpdi5hcHBlbmRDaGlsZChjYXJkMVRleHRUZW1wKTtcclxuICBjYXJkMS5hcHBlbmRDaGlsZChjYXJkMVRleHREaXYpO1xyXG4gIGNhcmQxLmFwcGVuZENoaWxkKGNhcmQxV2VhdGhlckltZyk7XHJcbiAgd2Vla0RJVi5hcHBlbmQoY2FyZDEpO1xyXG5cclxuICAvLyAgIFdlYXRoZXIgY2FyZCAyXHJcbiAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmQyLmNsYXNzTGlzdC5hZGQoXCJ3ZWVrQ2FyZFwiKTtcclxuXHJcbiAgY29uc3QgY2FyZDJUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkMlRleHREaXYuY2xhc3NMaXN0LmFkZChcIndlZWtDYXJkVGV4dERpdlwiKTtcclxuXHJcbiAgY29uc3QgY2FyZDJUZXh0RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2FyZDJUZXh0RGF5LmNsYXNzTGlzdC5hZGQoXCJjYXJkVGV4dERheVwiKTtcclxuXHJcbiAgY29uc3QgY2FyZDJUZXh0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNhcmQyVGV4dFRlbXAuY2xhc3NMaXN0LmFkZChcImNhcmRUZXh0VGVtcFwiKTtcclxuXHJcbiAgY29uc3QgY2FyZDJXZWF0aGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjYXJkMldlYXRoZXJJbWcuY2xhc3NMaXN0LmFkZChcImNhcmRXZWF0aGVySW1nXCIpO1xyXG5cclxuICBjYXJkMlRleHREaXYuYXBwZW5kQ2hpbGQoY2FyZDJUZXh0RGF5KTtcclxuICBjYXJkMlRleHREaXYuYXBwZW5kQ2hpbGQoY2FyZDJUZXh0VGVtcCk7XHJcbiAgY2FyZDIuYXBwZW5kQ2hpbGQoY2FyZDJUZXh0RGl2KTtcclxuICBjYXJkMi5hcHBlbmRDaGlsZChjYXJkMldlYXRoZXJJbWcpO1xyXG4gIHdlZWtESVYuYXBwZW5kKGNhcmQyKTtcclxuXHJcbiAgLy8gICBXZWF0aGVyIGNhcmQgM1xyXG4gIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkMy5jbGFzc0xpc3QuYWRkKFwid2Vla0NhcmRcIik7XHJcblxyXG4gIGNvbnN0IGNhcmQzVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FyZDNUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ3ZWVrQ2FyZFRleHREaXZcIik7XHJcblxyXG4gIGNvbnN0IGNhcmQzVGV4dERheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNhcmQzVGV4dERheS5jbGFzc0xpc3QuYWRkKFwiY2FyZFRleHREYXlcIik7XHJcblxyXG4gIGNvbnN0IGNhcmQzVGV4dFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjYXJkM1RleHRUZW1wLmNsYXNzTGlzdC5hZGQoXCJjYXJkVGV4dFRlbXBcIik7XHJcblxyXG4gIGNvbnN0IGNhcmQzV2VhdGhlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2FyZDNXZWF0aGVySW1nLmNsYXNzTGlzdC5hZGQoXCJjYXJkV2VhdGhlckltZ1wiKTtcclxuXHJcbiAgY2FyZDNUZXh0RGl2LmFwcGVuZENoaWxkKGNhcmQzVGV4dERheSk7XHJcbiAgY2FyZDNUZXh0RGl2LmFwcGVuZENoaWxkKGNhcmQzVGV4dFRlbXApO1xyXG4gIGNhcmQzLmFwcGVuZENoaWxkKGNhcmQzVGV4dERpdik7XHJcbiAgY2FyZDMuYXBwZW5kQ2hpbGQoY2FyZDNXZWF0aGVySW1nKTtcclxuICB3ZWVrRElWLmFwcGVuZChjYXJkMyk7XHJcblxyXG4gIHJpZ2h0RE9NLmFwcGVuZENoaWxkKHdlZWtESVYpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9jYXRpb25QLFxyXG4gICAgY2FyZDFUZXh0RGF5LFxyXG4gICAgY2FyZDFUZXh0VGVtcCxcclxuICAgIGNhcmQxV2VhdGhlckltZyxcclxuICAgIGNhcmQyVGV4dERheSxcclxuICAgIGNhcmQyVGV4dFRlbXAsXHJcbiAgICBjYXJkMldlYXRoZXJJbWcsXHJcbiAgICBjYXJkM1RleHREYXksXHJcbiAgICBjYXJkM1RleHRUZW1wLFxyXG4gICAgY2FyZDNXZWF0aGVySW1nLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRMZWZ0UGFydERPTUNvbnRlbnQoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgbG9jYXRpb25QLFxyXG4gICAgY2FyZDFUZXh0RGF5LFxyXG4gICAgY2FyZDFUZXh0VGVtcCxcclxuICAgIGNhcmQxV2VhdGhlckltZyxcclxuICAgIGNhcmQyVGV4dERheSxcclxuICAgIGNhcmQyVGV4dFRlbXAsXHJcbiAgICBjYXJkMldlYXRoZXJJbWcsXHJcbiAgICBjYXJkM1RleHREYXksXHJcbiAgICBjYXJkM1RleHRUZW1wLFxyXG4gICAgY2FyZDNXZWF0aGVySW1nLFxyXG4gIH0gPSBhZGRSaWdodFBhcnRET00oKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFJpZ2h0UGFydERPTUNvbnRlbnQoY2l0eUlucHV0KSB7XHJcbiAgY29uc3QgbmV4dFRocmVlRGF5cyA9IGdldEN1cnJlbnRBbmROZXh0RGF5cygpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXkgPSBuZXh0VGhyZWVEYXlzWzBdO1xyXG4gIGNvbnN0IHRvbW9ycm93ID0gbmV4dFRocmVlRGF5c1sxXTtcclxuICBjb25zdCBkYXlBZnRlclRvbW9ycm93ID0gbmV4dFRocmVlRGF5c1syXTtcclxuICBjb25zdCBkYXlBZnRlckFmdGVyb21vcnJvdyA9IG5leHRUaHJlZURheXNbM107XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRzID0gYWRkUmlnaHRQYXJ0RE9NKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgbG9jYXRpb25QLFxyXG4gICAgY2FyZDFUZXh0RGF5LFxyXG4gICAgY2FyZDFUZXh0VGVtcCxcclxuICAgIGNhcmQxV2VhdGhlckltZyxcclxuICAgIGNhcmQyVGV4dERheSxcclxuICAgIGNhcmQyVGV4dFRlbXAsXHJcbiAgICBjYXJkMldlYXRoZXJJbWcsXHJcbiAgICBjYXJkM1RleHREYXksXHJcbiAgICBjYXJkM1RleHRUZW1wLFxyXG4gICAgY2FyZDNXZWF0aGVySW1nLFxyXG4gIH0gPSBlbGVtZW50cztcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdGltZUhvdXJDYXJkQWxsLFxyXG4gICAgY2l0eSxcclxuICAgIGNvdW50cnksXHJcbiAgICBtYXhUZW1wQ2FyZDEsXHJcbiAgICBtaW5UZW1wQ2FyZDEsXHJcbiAgICBjb25kaXRpb25Db2RlQ2FyZDEsXHJcbiAgICBtYXhUZW1wQ2FyZDIsXHJcbiAgICBtaW5UZW1wQ2FyZDIsXHJcbiAgICBjb25kaXRpb25Db2RlQ2FyZDIsXHJcbiAgICBtYXhUZW1wQ2FyZDMsXHJcbiAgICBtaW5UZW1wQ2FyZDMsXHJcbiAgICBjb25kaXRpb25Db2RlQ2FyZDMsXHJcbiAgfSA9IGF3YWl0IGZldGNoTmV4dFRocmVlRGF5c0RhdGEoY2l0eUlucHV0KTtcclxuXHJcbiAgbG9jYXRpb25QLnRleHRDb250ZW50ID0gY2l0eSArIFwiLCBcIiArIGNvdW50cnk7XHJcblxyXG4gIGNhcmQxVGV4dERheS50ZXh0Q29udGVudCA9IHRvbW9ycm93ICsgXCIsIFwiO1xyXG4gIGNhcmQxVGV4dFRlbXAudGV4dENvbnRlbnQgPSBgJHttYXhUZW1wQ2FyZDF9IMKwQyAvICR7bWluVGVtcENhcmQxfSDCsENgO1xyXG4gIGNvbnN0IGltZ1NyYzEgPSBhd2FpdCBhZGRJbWFnZShjb25kaXRpb25Db2RlQ2FyZDEsIHRpbWVIb3VyQ2FyZEFsbCk7XHJcbiAgY2FyZDFXZWF0aGVySW1nLnNyYyA9IGltZ1NyYzE7XHJcblxyXG4gIGNhcmQyVGV4dERheS50ZXh0Q29udGVudCA9IGRheUFmdGVyVG9tb3Jyb3cgKyBcIiwgXCI7XHJcbiAgY2FyZDJUZXh0VGVtcC50ZXh0Q29udGVudCA9IGAke21heFRlbXBDYXJkMn0gwrBDIC8gJHttaW5UZW1wQ2FyZDJ9IMKwQ2A7XHJcbiAgY29uc3QgaW1nU3JjMiA9IGF3YWl0IGFkZEltYWdlKGNvbmRpdGlvbkNvZGVDYXJkMiwgdGltZUhvdXJDYXJkQWxsKTtcclxuICBjYXJkMldlYXRoZXJJbWcuc3JjID0gaW1nU3JjMjtcclxuXHJcbiAgY2FyZDNUZXh0RGF5LnRleHRDb250ZW50ID0gZGF5QWZ0ZXJBZnRlcm9tb3Jyb3cgKyBcIiwgXCI7XHJcbiAgY2FyZDNUZXh0VGVtcC50ZXh0Q29udGVudCA9IGAke21heFRlbXBDYXJkM30gwrBDIC8gJHttaW5UZW1wQ2FyZDN9IMKwQ2A7XHJcbiAgY29uc3QgaW1nU3JjMyA9IGF3YWl0IGFkZEltYWdlKGNvbmRpdGlvbkNvZGVDYXJkMywgdGltZUhvdXJDYXJkQWxsKTtcclxuICBjYXJkM1dlYXRoZXJJbWcuc3JjID0gaW1nU3JjMztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuUmlnaHRET00oKSB7XHJcbiAgY29uc3QgcmlnaHRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0XCIpO1xyXG4gIHJpZ2h0RE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9