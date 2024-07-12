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
  height: 100vh;
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
  height: 100vh;
}

/* Right part only */
.locationP,
.todayHighlightsP {
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
.weekCard {
  height: 20vh;
}
.todayHighlightsDIV {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 10px;
}
.weekDIV {
  margin-top: 15px;
  justify-content: space-evenly;
}
.weekCard,
.todayHighlightsCard,
.todayHighlightsCardUV {
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
.todayHighlightsDIV {
  margin-top: 15px;
}
.todayHighlightsCard,
.todayHighlightsCardUV {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 20vh;
  gap: 20px;
}
.todayHighlightsCardUV {
  gap: 15px;
}
.todayHighlightsTitle {
  padding-top: 10px;
}
.todayHighlightsTitle,
.sunscreenReminder {
  text-align: left;
  font-size: 18px;
  padding-left: 10px;
}
.todayHighlightsValue {
  text-align: center;
  font-size: 18px;
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
  .todayHighlightsDIV {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
  }
  .todayHighlightsCard,
  .todayHighlightsCardUV {
    width: 50vw;
    height: 25vh;
    gap: 20px;
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
@media only screen and (max-width: 565px) {
  body {
    flex-direction: column;
  }
  .left {
    width: 100vw;
    height: 100%;
  }
  .locationSearchForm {
    margin-top: 20px;
  }
  .right {
    width: 100vw;
    height: 100%;
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
  .todayHighlightsCardUV,
  .todayHighlightsCard {
    width: 80vw;
  }
}
@media only screen and (max-width: 321px) {
  .todayHighlightsCardUV,
  .todayHighlightsCard,
  .weekCard {
    width: 90vw;
  }
  .locationP,
  .thisWeekP {
    font-size: 25px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA,mBAAmB;AACnB;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,YAAY;EACZ,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,YAAY;AACd;AACA;;EAEE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,yBAAyB;EACzB,aAAa;AACf;;AAEA,oBAAoB;AACpB;;EAEE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;AACA;;EAEE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,6BAA6B;AAC/B;AACA;;;EAGE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB;4BAC0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,SAAS;AACX;AACA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,YAAY;EACZ,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE,iBAAiB;AACnB;AACA;;EAEE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX,yBAAyB;IACzB,YAAY;EACd;EACA;IACE,sBAAsB;IACtB,SAAS;EACX;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,YAAY;IACZ,aAAa;EACf;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;EACf;EACA;;IAEE,WAAW;IACX,YAAY;IACZ,SAAS;EACX;AACF;AACA;EACE;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;AACF;AACA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,YAAY;IACZ,YAAY;EACd;EACA;IACE,gBAAgB;EAClB;EACA;IACE,YAAY;IACZ,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,YAAY;IACZ,aAAa;EACf;EACA;IACE,gBAAgB;IAChB,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,YAAY;IACZ,aAAa;EACf;EACA;;IAEE,kBAAkB;EACpB;EACA;;IAEE,WAAW;EACb;AACF;AACA;EACE;;;IAGE,WAAW;EACb;EACA;;IAEE,eAAe;EACjB;AACF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"DM Sans\", sans-serif;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n/* Left part only */\r\n.left {\r\n  width: 30vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n.locationSearchForm {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: end;\r\n  gap: 10px;\r\n}\r\n.press {\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n.searchButtonImg {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n#locationSearch,\r\n#locationSearch:focus {\r\n  border: none;\r\n  /* height: 30px; */\r\n  outline: none;\r\n  font-size: 18px;\r\n  width: 190px;\r\n}\r\n::placeholder,\r\n::placeholder:focus {\r\n  color: black;\r\n  padding: 0;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.leftChangableDOM {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.mainWeatherImg {\r\n  margin-top: 20px;\r\n  max-width: 45vw;\r\n  max-height: 45vh;\r\n}\r\n.cityLeftP {\r\n  margin-top: 20px;\r\n  font-size: 25px;\r\n}\r\n.tempLeftP {\r\n  font-size: 50px;\r\n}\r\n.weatherStateP {\r\n  font-size: 25px;\r\n  font-style: italic;\r\n}\r\n.dateLeftP {\r\n  margin-top: 10px;\r\n  font-size: 25px;\r\n  text-align: center;\r\n}\r\n.right {\r\n  width: 70vw;\r\n  background-color: #f6f6f8;\r\n  height: 100vh;\r\n}\r\n\r\n/* Right part only */\r\n.locationP,\r\n.todayHighlightsP {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\r\n  font-size: 25px;\r\n}\r\n.thisWeekP {\r\n  margin-top: 7px;\r\n  margin-left: 20px;\r\n  font-size: 25px;\r\n}\r\n.weekDIV,\r\n.weekCard {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n.weekCard {\r\n  height: 20vh;\r\n}\r\n.todayHighlightsDIV {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  row-gap: 10px;\r\n}\r\n.weekDIV {\r\n  margin-top: 15px;\r\n  justify-content: space-evenly;\r\n}\r\n.weekCard,\r\n.todayHighlightsCard,\r\n.todayHighlightsCardUV {\r\n  background-color: white;\r\n  justify-content: center;\r\n  width: 22vw;\r\n}\r\n.weekCardTextDiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* align-items: center;\r\n  justify-content: center; */\r\n  text-align: left;\r\n  font-size: 18px;\r\n  padding: 0 5px;\r\n  gap: 10px;\r\n}\r\n.weekCard img {\r\n  padding: 10px;\r\n  width: 125px;\r\n  height: 125px;\r\n}\r\n.todayHighlightsDIV {\r\n  margin-top: 15px;\r\n}\r\n.todayHighlightsCard,\r\n.todayHighlightsCardUV {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  height: 20vh;\r\n  gap: 20px;\r\n}\r\n.todayHighlightsCardUV {\r\n  gap: 15px;\r\n}\r\n.todayHighlightsTitle {\r\n  padding-top: 10px;\r\n}\r\n.todayHighlightsTitle,\r\n.sunscreenReminder {\r\n  text-align: left;\r\n  font-size: 18px;\r\n  padding-left: 10px;\r\n}\r\n.todayHighlightsValue {\r\n  text-align: center;\r\n  font-size: 18px;\r\n}\r\n\r\n@media only screen and (max-width: 952px) {\r\n  .left {\r\n    width: 35vw;\r\n  }\r\n  .right {\r\n    width: 65vw;\r\n    background-color: #f6f6f8;\r\n    height: 100%;\r\n  }\r\n  .weekDIV {\r\n    flex-direction: column;\r\n    gap: 15px;\r\n  }\r\n  .weekCard {\r\n    width: 50vw;\r\n    height: 35vh;\r\n  }\r\n  .locationP {\r\n    font-size: 35px;\r\n  }\r\n  .thisWeekP {\r\n    font-size: 35px;\r\n  }\r\n  .weekCard img {\r\n    padding: 10px;\r\n    width: 200px;\r\n    height: 200px;\r\n  }\r\n  .todayHighlightsDIV {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    row-gap: 10px;\r\n  }\r\n  .todayHighlightsCard,\r\n  .todayHighlightsCardUV {\r\n    width: 50vw;\r\n    height: 25vh;\r\n    gap: 20px;\r\n  }\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .left {\r\n    width: 40vw;\r\n  }\r\n  .right {\r\n    width: 60vw;\r\n  }\r\n}\r\n@media only screen and (max-width: 565px) {\r\n  body {\r\n    flex-direction: column;\r\n  }\r\n  .left {\r\n    width: 100vw;\r\n    height: 100%;\r\n  }\r\n  .locationSearchForm {\r\n    margin-top: 20px;\r\n  }\r\n  .right {\r\n    width: 100vw;\r\n    height: 100%;\r\n  }\r\n  .weekCard {\r\n    width: 80vw;\r\n    height: 35vh;\r\n  }\r\n  .dateLeftP {\r\n    margin-bottom: 20px;\r\n  }\r\n  .weekCard img {\r\n    padding: 10px;\r\n    width: 125px;\r\n    height: 125px;\r\n  }\r\n  .mainWeatherImg {\r\n    margin-top: 20px;\r\n    max-width: 55vw;\r\n    max-height: 55vh;\r\n  }\r\n  .weekCard img {\r\n    padding: 10px;\r\n    width: 200px;\r\n    height: 200px;\r\n  }\r\n  .locationP,\r\n  .thisWeekP {\r\n    text-align: center;\r\n  }\r\n  .todayHighlightsCardUV,\r\n  .todayHighlightsCard {\r\n    width: 80vw;\r\n  }\r\n}\r\n@media only screen and (max-width: 321px) {\r\n  .todayHighlightsCardUV,\r\n  .todayHighlightsCard,\r\n  .weekCard {\r\n    width: 90vw;\r\n  }\r\n  .locationP,\r\n  .thisWeekP {\r\n    font-size: 25px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
    const uvIndex = APIData.current.uv; // Correcting uvIndex property access
    const feelLike = APIData.current.feelslike_c;
    const wind = APIData.current.wind_kph;
    const windDirection = APIData.current.wind_dir;
    const visibility = APIData.current.vis_km;
    const airQuality = APIData.current.air_quality?.["us-epa-index"];
    const pressure = APIData.current.pressure_mb;

    console.log("Time " + localTimeHour); // debugging

    return {
      weatherConditionText: APIData.current.condition.text,
      tempCelsius: APIData.current.temp_c,
      weatherConditionID,
      localTimeHour,
      uvIndex,
      feelLike,
      wind,
      visibility,
      airQuality,
      pressure,
      windDirection,
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

  (0,_leftDOM__WEBPACK_IMPORTED_MODULE_1__.cleanLeftDOM)();
  await (0,_leftDOM__WEBPACK_IMPORTED_MODULE_1__.setLeftPartDOMContent)(cityInput);

  (0,_rightDOM__WEBPACK_IMPORTED_MODULE_4__.cleanRightDOM)();
  await (0,_rightDOM__WEBPACK_IMPORTED_MODULE_4__.setRightPartDOMContent)(cityInput);
});

document.addEventListener("DOMContentLoaded", () => {
  initialize("London");
});

async function initialize(defaultCity) {
  (0,_leftDOM__WEBPACK_IMPORTED_MODULE_1__.cleanLeftDOM)();
  await (0,_leftDOM__WEBPACK_IMPORTED_MODULE_1__.setLeftPartDOMContent)(defaultCity);

  (0,_rightDOM__WEBPACK_IMPORTED_MODULE_4__.cleanRightDOM)();
  await (0,_rightDOM__WEBPACK_IMPORTED_MODULE_4__.setRightPartDOMContent)(defaultCity);
}


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
/* harmony export */   setRightPartDOMContent: () => (/* binding */ setRightPartDOMContent)
/* harmony export */ });
/* harmony import */ var _getDataAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataAPI.js */ "./src/getDataAPI.js");
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

  rightDOM.appendChild(locationP);
  rightDOM.appendChild(thisWeekP);

  const weekDIV = document.createElement("div");
  weekDIV.classList.add("weekDIV");

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

  const todayHighlightsP = document.createElement("p");
  todayHighlightsP.classList.add("todayHighlightsP");

  const todayHighlightsDIV = document.createElement("div");
  todayHighlightsDIV.classList.add("todayHighlightsDIV");

  // UV card
  const cardUV = document.createElement("div");
  cardUV.classList.add("todayHighlightsCardUV");
  const cardUVp = document.createElement("p");
  cardUVp.classList.add("todayHighlightsTitle");
  cardUVp.textContent = "UV Index";
  const cardUVvalue = document.createElement("p");
  cardUVvalue.classList.add("todayHighlightsValue");
  const sunscreenReminder = document.createElement("p");
  sunscreenReminder.classList.add("sunscreenReminder");
  cardUV.appendChild(cardUVp);
  cardUV.appendChild(cardUVvalue);
  cardUV.appendChild(sunscreenReminder);
  todayHighlightsDIV.appendChild(cardUV);

  // Feels like
  const cardFeelsLike = document.createElement("div");
  cardFeelsLike.classList.add("todayHighlightsCard");
  const cardFeelsLikep = document.createElement("p");
  cardFeelsLikep.classList.add("todayHighlightsTitle");
  cardFeelsLikep.textContent = "Feels like..";
  const feelsLikeValue = document.createElement("p");
  feelsLikeValue.classList.add("todayHighlightsValue");
  cardFeelsLike.appendChild(cardFeelsLikep);
  cardFeelsLike.appendChild(feelsLikeValue);
  todayHighlightsDIV.appendChild(cardFeelsLike);

  // Pressure
  const cardPressure = document.createElement("div");
  cardPressure.classList.add("todayHighlightsCard");
  const cardPressureP = document.createElement("p");
  cardPressureP.classList.add("todayHighlightsTitle");
  cardPressureP.textContent = "Pressure:";
  const cardPressureValue = document.createElement("p");
  cardPressureValue.classList.add("todayHighlightsValue");
  cardPressure.appendChild(cardPressureP);
  cardPressure.appendChild(cardPressureValue);
  todayHighlightsDIV.appendChild(cardPressure);

  // Wind
  const cardWind = document.createElement("div");
  cardWind.classList.add("todayHighlightsCard");
  const cardWindP = document.createElement("p");
  cardWindP.classList.add("todayHighlightsTitle");
  cardWindP.textContent = "Wind:";
  const cardWindValue = document.createElement("p");
  cardWindValue.classList.add("todayHighlightsValue");
  cardWind.appendChild(cardWindP);
  cardWind.appendChild(cardWindValue);
  todayHighlightsDIV.appendChild(cardWind);

  // Air quality:
  const cardAirQuality = document.createElement("div");
  cardAirQuality.classList.add("todayHighlightsCard");
  const cardAirQualityP = document.createElement("p");
  cardAirQualityP.classList.add("todayHighlightsTitle");
  cardAirQualityP.textContent = "Air quality (US EPA):";
  const cardAirQualityValue = document.createElement("p");
  cardAirQualityValue.classList.add("todayHighlightsValue");
  cardAirQuality.appendChild(cardAirQualityP);
  cardAirQuality.appendChild(cardAirQualityValue);
  todayHighlightsDIV.appendChild(cardAirQuality);

  // Visibility:
  const cardVisibility = document.createElement("div");
  cardVisibility.classList.add("todayHighlightsCard");
  const cardVisibilityP = document.createElement("p");
  cardVisibilityP.classList.add("todayHighlightsTitle");
  cardVisibilityP.textContent = "Visibility:";
  const cardVisibilityValue = document.createElement("p");
  cardVisibilityValue.classList.add("todayHighlightsValue");
  cardVisibility.appendChild(cardVisibilityP);
  cardVisibility.appendChild(cardVisibilityValue);
  todayHighlightsDIV.appendChild(cardVisibility);

  rightDOM.appendChild(weekDIV);

  todayHighlightsP.textContent = "Current weather"; // permanent so add here
  rightDOM.appendChild(todayHighlightsP);

  rightDOM.appendChild(todayHighlightsDIV);

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
    cardUVvalue,
    sunscreenReminder,
    feelsLikeValue,
    cardPressureValue,
    cardWindValue,
    cardAirQualityValue,
    cardVisibilityValue,
  };
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
    cardUVvalue,
    sunscreenReminder,
    feelsLikeValue,
    cardPressureValue,
    cardWindValue,
    cardAirQualityValue,
    cardVisibilityValue,
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

  const {
    weatherConditionID,
    localTimeHour,
    uvIndex,
    feelLike,
    wind,
    visibility,
    airQuality,
    pressure,
    windDirection,
  } = await (0,_getDataAPI__WEBPACK_IMPORTED_MODULE_0__.fetchCurrentData)(cityInput);

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

  const { uvText, suncreenReminde } = UVrate(uvIndex);
  cardUVvalue.textContent = uvIndex + " - " + uvText;
  sunscreenReminder.textContent = suncreenReminde;

  feelsLikeValue.textContent = `${feelLike} °C`;

  cardPressureValue.textContent = pressure + " mb";

  cardWindValue.textContent = wind + " (" + windDirection + ")";

  const { airQualityText } = AQI(airQuality);
  cardAirQualityValue.textContent = airQuality + " - " + airQualityText;

  cardVisibilityValue.textContent = visibility + " km";
}

function cleanRightDOM() {
  const rightDOM = document.querySelector(".right");
  rightDOM.innerHTML = "";
}

function UVrate(uvValue) {
  if (uvValue < 3) {
    const uvText = "low";
    const suncreenReminde = "No protection needed";
    return { uvText, suncreenReminde };
  } else if (uvValue >= 3 && uvValue < 6) {
    const uvText = "moderate";
    const suncreenReminde = "Some protection is required";
    return { uvText, suncreenReminde };
  } else if (uvValue >= 6 && uvValue < 8) {
    const uvText = "high";
    const suncreenReminde = "Protection essential";
    return { uvText, suncreenReminde };
  } else if (uvValue >= 8 && uvValue < 11) {
    const uvText = "very high";
    const suncreenReminde = "Extra protection is needed";
    return { uvText, suncreenReminde };
  } else if (uvValue >= 11) {
    const uvText = "extreme";
    const suncreenReminde = "Stay inside";
    return { uvText, suncreenReminde };
  }

  // Default return if none of the conditions are met
  const uvText = "unknown";
  const suncreenReminde = "Unknown protection level";
  return { uvText, suncreenReminde };
}

function AQI(airQualityValue) {
  if (airQualityValue < 51) {
    const airQualityText = "good";
    return { airQualityText };
  } else if (airQualityValue >= 51 && airQualityValue < 101) {
    const airQualityText = "moderate";
    return { airQualityText };
  } else if (airQualityValue >= 101 && airQualityValue < 151) {
    const airQualityText = "unhealthy for sensitive groups";
    return { airQualityText };
  } else if (airQualityValue >= 151) {
    const airQualityText = "unhealthy";
    return { airQualityText };
  }

  // Default return if none of the conditions are met
  const airQualityText = "unknown";
  return { airQualityText };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE9BQU8sWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxPQUFPLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxPQUFPLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtB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QSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9zcmMvYWRkSW1nLmpzIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvLi9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vc3JjL2dldERhdGFBUEkuanMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwLy4vc3JjL2xlZnRET00uanMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC8uL3NyYy9yaWdodERPTS5qcyIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLzE2LS0td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8xNi0tLXdlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vMTYtLS13ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLyogTGVmdCBwYXJ0IG9ubHkgKi9cclxuLmxlZnQge1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmxvY2F0aW9uU2VhcmNoRm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLnByZXNzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNlYXJjaEJ1dHRvbkltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiNsb2NhdGlvblNlYXJjaCxcclxuI2xvY2F0aW9uU2VhcmNoOmZvY3VzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxOTBweDtcclxufVxyXG46OnBsYWNlaG9sZGVyLFxyXG46OnBsYWNlaG9sZGVyOmZvY3VzIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubGVmdENoYW5nYWJsZURPTSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1haW5XZWF0aGVySW1nIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1heC13aWR0aDogNDV2dztcclxuICBtYXgtaGVpZ2h0OiA0NXZoO1xyXG59XHJcbi5jaXR5TGVmdFAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi50ZW1wTGVmdFAge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4ud2VhdGhlclN0YXRlUCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4uZGF0ZUxlZnRQIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJpZ2h0IHtcclxuICB3aWR0aDogNzB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIFJpZ2h0IHBhcnQgb25seSAqL1xyXG4ubG9jYXRpb25QLFxyXG4udG9kYXlIaWdobGlnaHRzUCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLnRoaXNXZWVrUCB7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ud2Vla0RJVixcclxuLndlZWtDYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ud2Vla0NhcmQge1xyXG4gIGhlaWdodDogMjB2aDtcclxufVxyXG4udG9kYXlIaWdobGlnaHRzRElWIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHJvdy1nYXA6IDEwcHg7XHJcbn1cclxuLndlZWtESVYge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLndlZWtDYXJkLFxyXG4udG9kYXlIaWdobGlnaHRzQ2FyZCxcclxuLnRvZGF5SGlnaGxpZ2h0c0NhcmRVViB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIydnc7XHJcbn1cclxuLndlZWtDYXJkVGV4dERpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbi53ZWVrQ2FyZCBpbWcge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbn1cclxuLnRvZGF5SGlnaGxpZ2h0c0RJViB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4udG9kYXlIaWdobGlnaHRzQ2FyZCxcclxuLnRvZGF5SGlnaGxpZ2h0c0NhcmRVViB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDIwdmg7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcbi50b2RheUhpZ2hsaWdodHNDYXJkVVYge1xyXG4gIGdhcDogMTVweDtcclxufVxyXG4udG9kYXlIaWdobGlnaHRzVGl0bGUge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi50b2RheUhpZ2hsaWdodHNUaXRsZSxcclxuLnN1bnNjcmVlblJlbWluZGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnRvZGF5SGlnaGxpZ2h0c1ZhbHVlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MnB4KSB7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDM1dnc7XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogNjV2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2Zjg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC53ZWVrRElWIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG4gIC53ZWVrQ2FyZCB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogMzV2aDtcclxuICB9XHJcbiAgLmxvY2F0aW9uUCB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG4gIC50aGlzV2Vla1Age1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICAud2Vla0NhcmQgaW1nIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICAudG9kYXlIaWdobGlnaHRzRElWIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICByb3ctZ2FwOiAxMHB4O1xyXG4gIH1cclxuICAudG9kYXlIaWdobGlnaHRzQ2FyZCxcclxuICAudG9kYXlIaWdobGlnaHRzQ2FyZFVWIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjVweCkge1xyXG4gIGJvZHkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubG9jYXRpb25TZWFyY2hGb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC53ZWVrQ2FyZCB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMzV2aDtcclxuICB9XHJcbiAgLmRhdGVMZWZ0UCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAud2Vla0NhcmQgaW1nIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gIH1cclxuICAubWFpbldlYXRoZXJJbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1heC13aWR0aDogNTV2dztcclxuICAgIG1heC1oZWlnaHQ6IDU1dmg7XHJcbiAgfVxyXG4gIC53ZWVrQ2FyZCBpbWcge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC5sb2NhdGlvblAsXHJcbiAgLnRoaXNXZWVrUCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50b2RheUhpZ2hsaWdodHNDYXJkVVYsXHJcbiAgLnRvZGF5SGlnaGxpZ2h0c0NhcmQge1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpIHtcclxuICAudG9kYXlIaWdobGlnaHRzQ2FyZFVWLFxyXG4gIC50b2RheUhpZ2hsaWdodHNDYXJkLFxyXG4gIC53ZWVrQ2FyZCB7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICB9XHJcbiAgLmxvY2F0aW9uUCxcclxuICAudGhpc1dlZWtQIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUEsb0JBQW9CO0FBQ3BCOztFQUVFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjtBQUNBOzs7RUFHRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qjs0QkFDMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjtFQUNBOztJQUVFLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztFQUNYO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7O0lBRUUsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFOzs7SUFHRSxXQUFXO0VBQ2I7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi8qIExlZnQgcGFydCBvbmx5ICovXFxyXFxuLmxlZnQge1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5sb2NhdGlvblNlYXJjaEZvcm0ge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4ucHJlc3Mge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5zZWFyY2hCdXR0b25JbWcge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbiNsb2NhdGlvblNlYXJjaCxcXHJcXG4jbG9jYXRpb25TZWFyY2g6Zm9jdXMge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHdpZHRoOiAxOTBweDtcXHJcXG59XFxyXFxuOjpwbGFjZWhvbGRlcixcXHJcXG46OnBsYWNlaG9sZGVyOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ubGVmdENoYW5nYWJsZURPTSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1haW5XZWF0aGVySW1nIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDQ1dnc7XFxyXFxuICBtYXgtaGVpZ2h0OiA0NXZoO1xcclxcbn1cXHJcXG4uY2l0eUxlZnRQIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcbi50ZW1wTGVmdFAge1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbn1cXHJcXG4ud2VhdGhlclN0YXRlUCB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcbi5kYXRlTGVmdFAge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnJpZ2h0IHtcXHJcXG4gIHdpZHRoOiA3MHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmODtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8qIFJpZ2h0IHBhcnQgb25seSAqL1xcclxcbi5sb2NhdGlvblAsXFxyXFxuLnRvZGF5SGlnaGxpZ2h0c1Age1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG4udGhpc1dlZWtQIHtcXHJcXG4gIG1hcmdpbi10b3A6IDdweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG4ud2Vla0RJVixcXHJcXG4ud2Vla0NhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ud2Vla0NhcmQge1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbn1cXHJcXG4udG9kYXlIaWdobGlnaHRzRElWIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICByb3ctZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4ud2Vla0RJViB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcbi53ZWVrQ2FyZCxcXHJcXG4udG9kYXlIaWdobGlnaHRzQ2FyZCxcXHJcXG4udG9kYXlIaWdobGlnaHRzQ2FyZFVWIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjJ2dztcXHJcXG59XFxyXFxuLndlZWtDYXJkVGV4dERpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLndlZWtDYXJkIGltZyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEyNXB4O1xcclxcbiAgaGVpZ2h0OiAxMjVweDtcXHJcXG59XFxyXFxuLnRvZGF5SGlnaGxpZ2h0c0RJViB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG4udG9kYXlIaWdobGlnaHRzQ2FyZCxcXHJcXG4udG9kYXlIaWdobGlnaHRzQ2FyZFVWIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4udG9kYXlIaWdobGlnaHRzQ2FyZFVWIHtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuLnRvZGF5SGlnaGxpZ2h0c1RpdGxlIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG4udG9kYXlIaWdobGlnaHRzVGl0bGUsXFxyXFxuLnN1bnNjcmVlblJlbWluZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi50b2RheUhpZ2hsaWdodHNWYWx1ZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUycHgpIHtcXHJcXG4gIC5sZWZ0IHtcXHJcXG4gICAgd2lkdGg6IDM1dnc7XFxyXFxuICB9XFxyXFxuICAucmlnaHQge1xcclxcbiAgICB3aWR0aDogNjV2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmODtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLndlZWtESVYge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICB9XFxyXFxuICAud2Vla0NhcmQge1xcclxcbiAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgaGVpZ2h0OiAzNXZoO1xcclxcbiAgfVxcclxcbiAgLmxvY2F0aW9uUCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIH1cXHJcXG4gIC50aGlzV2Vla1Age1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICB9XFxyXFxuICAud2Vla0NhcmQgaW1nIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgfVxcclxcbiAgLnRvZGF5SGlnaGxpZ2h0c0RJViB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcm93LWdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC50b2RheUhpZ2hsaWdodHNDYXJkLFxcclxcbiAgLnRvZGF5SGlnaGxpZ2h0c0NhcmRVViB7XFxyXFxuICAgIHdpZHRoOiA1MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDI1dmg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmxlZnQge1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gIH1cXHJcXG4gIC5yaWdodCB7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2NXB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIC5sZWZ0IHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAubG9jYXRpb25TZWFyY2hGb3JtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIC5yaWdodCB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLndlZWtDYXJkIHtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgIGhlaWdodDogMzV2aDtcXHJcXG4gIH1cXHJcXG4gIC5kYXRlTGVmdFAge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgLndlZWtDYXJkIGltZyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gIH1cXHJcXG4gIC5tYWluV2VhdGhlckltZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1heC13aWR0aDogNTV2dztcXHJcXG4gICAgbWF4LWhlaWdodDogNTV2aDtcXHJcXG4gIH1cXHJcXG4gIC53ZWVrQ2FyZCBpbWcge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICB9XFxyXFxuICAubG9jYXRpb25QLFxcclxcbiAgLnRoaXNXZWVrUCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC50b2RheUhpZ2hsaWdodHNDYXJkVVYsXFxyXFxuICAudG9kYXlIaWdobGlnaHRzQ2FyZCB7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSB7XFxyXFxuICAudG9kYXlIaWdobGlnaHRzQ2FyZFVWLFxcclxcbiAgLnRvZGF5SGlnaGxpZ2h0c0NhcmQsXFxyXFxuICAud2Vla0NhcmQge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gIH1cXHJcXG4gIC5sb2NhdGlvblAsXFxyXFxuICAudGhpc1dlZWtQIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBEYXlDbG91ZHMgZnJvbSBcIi4vaW1nL0RheUNsb3Vkcy5wbmdcIjtcclxuaW1wb3J0IERheVJhaW4gZnJvbSBcIi4vaW1nL0RheVJhaW4ucG5nXCI7XHJcbmltcG9ydCBEYXlTbm93IGZyb20gXCIuL2ltZy9EYXlTbm93LnBuZ1wiO1xyXG5pbXBvcnQgRGF5U3Rvcm0gZnJvbSBcIi4vaW1nL0RheVN0b3JtLnBuZ1wiO1xyXG5pbXBvcnQgRGF5U3VuIGZyb20gXCIuL2ltZy9EYXlTdW4ucG5nXCI7XHJcbmltcG9ydCBEYXlXaW5kIGZyb20gXCIuL2ltZy9EYXlXaW5kLnBuZ1wiO1xyXG5cclxuaW1wb3J0IE5pZ2h0Q2xvdWRzIGZyb20gXCIuL2ltZy9OaWdodENsb3Vkcy5wbmdcIjtcclxuaW1wb3J0IE5pZ2h0UmFpbiBmcm9tIFwiLi9pbWcvTmlnaHRSYWluLnBuZ1wiO1xyXG5pbXBvcnQgTmlnaHRTbm93IGZyb20gXCIuL2ltZy9OaWdodFNub3cucG5nXCI7XHJcbmltcG9ydCBOaWdodFN0b3JtIGZyb20gXCIuL2ltZy9OaWdodFN0b3JtLnBuZ1wiO1xyXG5pbXBvcnQgTmlnaHRNb29uIGZyb20gXCIuL2ltZy9OaWdodE1vb24ucG5nXCI7XHJcbmltcG9ydCBOaWdodFdpbmQgZnJvbSBcIi4vaW1nL05pZ2h0V2luZC5wbmdcIjtcclxuXHJcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4vaW1nL3NlYXJjaC5wbmdcIjtcclxuXHJcbmltcG9ydCB7IGZldGNoQ3VycmVudERhdGEgfSBmcm9tIFwiLi9nZXREYXRhQVBJXCI7XHJcbmltcG9ydCB7IHJlbmFtZVdlYXRoZXJDb25kaXRpb24gfSBmcm9tIFwiLi9nZXREYXRhQVBJXCI7XHJcbmltcG9ydCB7IHN1Ym1pdEJ1dHRvbiB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG4vLyBBZGRpbmcgYW4gaW1nIGFjY29yZGluZyB0byB3ZWF0aGVyIGNvbmRpdGlvbiBhbmQgcGFydCBvZiB0aGUgZGF5XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRJbWFnZSh3ZWF0aGVyQ29uZGl0aW9uSUQsIGxvY2FsVGltZUhvdXIpIHtcclxuICAvLyBjb25zdCB7IHdlYXRoZXJDb25kaXRpb25JRCwgbG9jYWxUaW1lSG91ciB9ID0gYXdhaXQgZmV0Y2hDdXJyZW50RGF0YShcclxuICAvLyAgIGNpdHlJbnB1dFxyXG4gIC8vICk7XHJcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IHJlbmFtZVdlYXRoZXJDb25kaXRpb24od2VhdGhlckNvbmRpdGlvbklEKTtcclxuXHJcbiAgY29uc3QgbG9jYWxUaW1lID0gcGFyc2VJbnQobG9jYWxUaW1lSG91ciwgMTApO1xyXG4gIGNvbnNvbGUubG9nKGxvY2FsVGltZSwgbG9jYWxUaW1lSG91cik7XHJcblxyXG4gIGxldCBpbWdTcmM7XHJcblxyXG4gIGlmIChsb2NhbFRpbWUgPj0gNiAmJiBsb2NhbFRpbWUgPCAxOSkge1xyXG4gICAgLy8gRGF5IHRpbWVcclxuICAgIHN3aXRjaCAod2VhdGhlckNvbmRpdGlvbikge1xyXG4gICAgICBjYXNlIFwic3VuXCI6XHJcbiAgICAgICAgaW1nU3JjID0gRGF5U3VuO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY2xvdWRzXCI6XHJcbiAgICAgICAgaW1nU3JjID0gRGF5Q2xvdWRzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicmFpblwiOlxyXG4gICAgICAgIGltZ1NyYyA9IERheVJhaW47XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzbm93XCI6XHJcbiAgICAgICAgaW1nU3JjID0gRGF5U25vdztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInN0b3JtXCI6XHJcbiAgICAgICAgaW1nU3JjID0gRGF5U3Rvcm07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaW1nU3JjID0gRGF5V2luZDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gTmlnaHQgdGltZVxyXG4gICAgc3dpdGNoICh3ZWF0aGVyQ29uZGl0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJzdW5cIjpcclxuICAgICAgICBpbWdTcmMgPSBOaWdodE1vb247XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJjbG91ZHNcIjpcclxuICAgICAgICBpbWdTcmMgPSBOaWdodENsb3VkcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInJhaW5cIjpcclxuICAgICAgICBpbWdTcmMgPSBOaWdodFJhaW47XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzbm93XCI6XHJcbiAgICAgICAgaW1nU3JjID0gTmlnaHRTbm93O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic3Rvcm1cIjpcclxuICAgICAgICBpbWdTcmMgPSBOaWdodFN0b3JtO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGltZ1NyYyA9IE5pZ2h0V2luZDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBpbWdTcmM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTZWFyY2hJY29uKCkge1xyXG4gIGNvbnN0IHNlYXJjaEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBzZWFyY2hJbWFnZS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQnV0dG9uSW1nXCIpO1xyXG4gIHNlYXJjaEltYWdlLnNyYyA9IHNlYXJjaDtcclxuICBzdWJtaXRCdXR0b24uYXBwZW5kKHNlYXJjaEltYWdlKTtcclxufVxyXG4iLCJmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZGF5RGF0ZSgpIHtcclxuICByZXR1cm4gZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRBbmROZXh0RGF5cygpIHtcclxuICBjb25zdCB3ZWVrZGF5ID0gW1xyXG4gICAgXCJTdW5kYXlcIixcclxuICAgIFwiTW9uZGF5XCIsXHJcbiAgICBcIlR1ZXNkYXlcIixcclxuICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICBcIlRodXJzZGF5XCIsXHJcbiAgICBcIkZyaWRheVwiLFxyXG4gICAgXCJTYXR1cmRheVwiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGRheXMgPSBbXTtcclxuICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgIGNvbnN0IGN1cnJlbnREYXkgPSBuZXcgRGF0ZShkKTtcclxuICAgIGN1cnJlbnREYXkuc2V0RGF0ZShkLmdldERhdGUoKSArIGkpO1xyXG4gICAgZGF5cy5wdXNoKHdlZWtkYXlbY3VycmVudERheS5nZXREYXkoKV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRheXM7XHJcbn1cclxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ3VycmVudERhdGEoY2l0eUlub3V0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTBkYmNhZmEyYjRlNDQ5ZWFhM2QxMjAzNDEyNDA3MDcmcT0ke2NpdHlJbm91dH0mYXFpPXllc2AsXHJcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBFcnJvciBjaGVja1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlc3BvbnNlIHN0YXR1czogZmFpbGVkIHRvIGZldGNoIGN1cnJlbnQgZGF0YWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEFQSURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IHRlbXBlcmF0dXJlOiBcIiArIEFQSURhdGEuY3VycmVudC50ZW1wX2MpOyAvL2RlYnVnZ2luZ1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb25JRCA9IEFQSURhdGEuY3VycmVudC5jb25kaXRpb24uY29kZTtcclxuICAgIGNvbnN0IGxvY2FsVGltZUhvdXIgPSBBUElEYXRhLmxvY2F0aW9uLmxvY2FsdGltZVxyXG4gICAgICAuc3BsaXQoXCIgXCIpWzFdXHJcbiAgICAgIC5zcGxpdChcIjpcIilbMF07XHJcblxyXG4gICAgLy8gRm9yIHJpZ2h0IERPTSBjYXJkc1xyXG4gICAgY29uc3QgdXZJbmRleCA9IEFQSURhdGEuY3VycmVudC51djsgLy8gQ29ycmVjdGluZyB1dkluZGV4IHByb3BlcnR5IGFjY2Vzc1xyXG4gICAgY29uc3QgZmVlbExpa2UgPSBBUElEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2M7XHJcbiAgICBjb25zdCB3aW5kID0gQVBJRGF0YS5jdXJyZW50LndpbmRfa3BoO1xyXG4gICAgY29uc3Qgd2luZERpcmVjdGlvbiA9IEFQSURhdGEuY3VycmVudC53aW5kX2RpcjtcclxuICAgIGNvbnN0IHZpc2liaWxpdHkgPSBBUElEYXRhLmN1cnJlbnQudmlzX2ttO1xyXG4gICAgY29uc3QgYWlyUXVhbGl0eSA9IEFQSURhdGEuY3VycmVudC5haXJfcXVhbGl0eT8uW1widXMtZXBhLWluZGV4XCJdO1xyXG4gICAgY29uc3QgcHJlc3N1cmUgPSBBUElEYXRhLmN1cnJlbnQucHJlc3N1cmVfbWI7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUaW1lIFwiICsgbG9jYWxUaW1lSG91cik7IC8vIGRlYnVnZ2luZ1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdlYXRoZXJDb25kaXRpb25UZXh0OiBBUElEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgIHRlbXBDZWxzaXVzOiBBUElEYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgICB3ZWF0aGVyQ29uZGl0aW9uSUQsXHJcbiAgICAgIGxvY2FsVGltZUhvdXIsXHJcbiAgICAgIHV2SW5kZXgsXHJcbiAgICAgIGZlZWxMaWtlLFxyXG4gICAgICB3aW5kLFxyXG4gICAgICB2aXNpYmlsaXR5LFxyXG4gICAgICBhaXJRdWFsaXR5LFxyXG4gICAgICBwcmVzc3VyZSxcclxuICAgICAgd2luZERpcmVjdGlvbixcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hOZXh0VGhyZWVEYXlzRGF0YShjaXR5SW5vdXQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTBkYmNhZmEyYjRlNDQ5ZWFhM2QxMjAzNDEyNDA3MDcmcT0ke2NpdHlJbm91dH0mZGF5cz00YCxcclxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIEVycm9yIGNoZWNrXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVzcG9uc2Ugc3RhdHVzOiBmYWlsZWQgdG8gZmV0Y2ggZGF0YSBmb3IgbmV4dCAzIGRheXNgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JlY2FzdEFQSURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgY2l0eSA9IGZvcmVjYXN0QVBJRGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gICAgY29uc3QgY291bnRyeSA9IGZvcmVjYXN0QVBJRGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xyXG5cclxuICAgIC8vIENhcmQgMVxyXG4gICAgY29uc3QgbWF4VGVtcENhcmQxID0gZm9yZWNhc3RBUElEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2M7XHJcbiAgICBjb25zdCBtaW5UZW1wQ2FyZDEgPSBmb3JlY2FzdEFQSURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfYztcclxuICAgIGNvbnN0IGNvbmRpdGlvbkNvZGVDYXJkMSA9XHJcbiAgICAgIGZvcmVjYXN0QVBJRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmNvZGU7XHJcblxyXG4gICAgY29uc3QgdGltZUhvdXJDYXJkQWxsID0gZm9yZWNhc3RBUElEYXRhLmxvY2F0aW9uLmxvY2FsdGltZVxyXG4gICAgICAuc3BsaXQoXCIgXCIpWzFdXHJcbiAgICAgIC5zcGxpdChcIjpcIilbMF07XHJcblxyXG4gICAgLy8gQ2FyZCAyXHJcbiAgICBjb25zdCBtYXhUZW1wQ2FyZDIgPSBmb3JlY2FzdEFQSURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfYztcclxuICAgIGNvbnN0IG1pblRlbXBDYXJkMiA9IGZvcmVjYXN0QVBJRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jO1xyXG4gICAgY29uc3QgY29uZGl0aW9uQ29kZUNhcmQyID1cclxuICAgICAgZm9yZWNhc3RBUElEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uY29kZTtcclxuXHJcbiAgICAvLyBDYXJkIDNcclxuICAgIGNvbnN0IG1heFRlbXBDYXJkMyA9IGZvcmVjYXN0QVBJRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWF4dGVtcF9jO1xyXG4gICAgY29uc3QgbWluVGVtcENhcmQzID0gZm9yZWNhc3RBUElEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5taW50ZW1wX2M7XHJcbiAgICBjb25zdCBjb25kaXRpb25Db2RlQ2FyZDMgPVxyXG4gICAgICBmb3JlY2FzdEFQSURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5LmNvbmRpdGlvbi5jb2RlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpbWVIb3VyQ2FyZEFsbCxcclxuICAgICAgY2l0eSxcclxuICAgICAgY291bnRyeSxcclxuICAgICAgbWF4VGVtcENhcmQxLFxyXG4gICAgICBtaW5UZW1wQ2FyZDEsXHJcbiAgICAgIGNvbmRpdGlvbkNvZGVDYXJkMSxcclxuICAgICAgbWF4VGVtcENhcmQyLFxyXG4gICAgICBtaW5UZW1wQ2FyZDIsXHJcbiAgICAgIGNvbmRpdGlvbkNvZGVDYXJkMixcclxuICAgICAgbWF4VGVtcENhcmQzLFxyXG4gICAgICBtaW5UZW1wQ2FyZDMsXHJcbiAgICAgIGNvbmRpdGlvbkNvZGVDYXJkMyxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lV2VhdGhlckNvbmRpdGlvbih3ZWF0aGVyQ29uZGl0aW9uSUQpIHtcclxuICBpZiAoWzEwMDBdLmluY2x1ZGVzKHdlYXRoZXJDb25kaXRpb25JRCkpIHtcclxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBcInN1blwiO1xyXG4gICAgcmV0dXJuIHdlYXRoZXJDb25kaXRpb247XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIFsxMDAzLCAxMDA2LCAxMDA5LCAxMDMwLCAxMTM1LCAxMTQ3XS5pbmNsdWRlcyh3ZWF0aGVyQ29uZGl0aW9uSUQpXHJcbiAgKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gXCJjbG91ZHNcIjtcclxuICAgIHJldHVybiB3ZWF0aGVyQ29uZGl0aW9uO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBbXHJcbiAgICAgIDEwNjMsIDExNTAsIDExNTMsIDEwNzIsIDExNjgsIDExNzEsIDExODAsIDExODMsIDExODYsIDExODksIDExOTIsIDExOTUsXHJcbiAgICAgIDExOTgsIDEyMDEsIDEyNDAsIDEyNDMsIDEyNDYsIDEyNDksIDEyNTIsXHJcbiAgICBdLmluY2x1ZGVzKHdlYXRoZXJDb25kaXRpb25JRClcclxuICApIHtcclxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBcInJhaW5cIjtcclxuICAgIHJldHVybiB3ZWF0aGVyQ29uZGl0aW9uO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBbXHJcbiAgICAgIDEwNjYsIDEwNjksIDExMTQsIDEyMDQsIDEyMDcsIDEyMTAsIDEyMTMsIDEyMTYsIDEyMTksIDEyMjIsIDEyMjUsIDEyMzcsXHJcbiAgICAgIDEyNTUsIDEyNTgsIDEyNjEsIDEyNjQsIDEyNzksXHJcbiAgICBdLmluY2x1ZGVzKHdlYXRoZXJDb25kaXRpb25JRClcclxuICApIHtcclxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBcInNub3dcIjtcclxuICAgIHJldHVybiB3ZWF0aGVyQ29uZGl0aW9uO1xyXG4gIH0gZWxzZSBpZiAoWzEwODcsIDExMTcsIDEyNzMsIDEyNzYsIDEyODJdLmluY2x1ZGVzKHdlYXRoZXJDb25kaXRpb25JRCkpIHtcclxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBcInN0b3JtXCI7XHJcbiAgICByZXR1cm4gd2VhdGhlckNvbmRpdGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgYWRkTGVmdFBhcnRET00gfSBmcm9tIFwiLi9sZWZ0RE9NXCI7XHJcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCIuL2dldERhdGFBUElcIjtcclxuaW1wb3J0IHsgYWRkU2VhcmNoSWNvbiB9IGZyb20gXCIuL2FkZEltZ1wiO1xyXG5pbXBvcnQgeyBjbGVhbkxlZnRET00gfSBmcm9tIFwiLi9sZWZ0RE9NXCI7XHJcbmltcG9ydCB7IHNldExlZnRQYXJ0RE9NQ29udGVudCB9IGZyb20gXCIuL2xlZnRET01cIjtcclxuaW1wb3J0IHsgYWRkUmlnaHRQYXJ0RE9NIH0gZnJvbSBcIi4vcmlnaHRET01cIjtcclxuaW1wb3J0IHsgc2V0UmlnaHRQYXJ0RE9NQ29udGVudCB9IGZyb20gXCIuL3JpZ2h0RE9NXCI7XHJcbmltcG9ydCB7IGNsZWFuUmlnaHRET00gfSBmcm9tIFwiLi9yaWdodERPTVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvY2F0aW9uU2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25TZWFyY2hGb3JtXCIpO1xyXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc1wiKTtcclxuXHJcbmFkZFNlYXJjaEljb24oKTtcclxuXHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvblNlYXJjaFwiKS52YWx1ZTtcclxuXHJcbiAgY2xlYW5MZWZ0RE9NKCk7XHJcbiAgYXdhaXQgc2V0TGVmdFBhcnRET01Db250ZW50KGNpdHlJbnB1dCk7XHJcblxyXG4gIGNsZWFuUmlnaHRET00oKTtcclxuICBhd2FpdCBzZXRSaWdodFBhcnRET01Db250ZW50KGNpdHlJbnB1dCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGluaXRpYWxpemUoXCJMb25kb25cIik7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZShkZWZhdWx0Q2l0eSkge1xyXG4gIGNsZWFuTGVmdERPTSgpO1xyXG4gIGF3YWl0IHNldExlZnRQYXJ0RE9NQ29udGVudChkZWZhdWx0Q2l0eSk7XHJcblxyXG4gIGNsZWFuUmlnaHRET00oKTtcclxuICBhd2FpdCBzZXRSaWdodFBhcnRET01Db250ZW50KGRlZmF1bHRDaXR5KTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRUb2RheURhdGUsIGdldEN1cnJlbnRBbmROZXh0RGF5cyB9IGZyb20gXCIuL2RhdGUuanNcIjtcclxuaW1wb3J0IHsgZmV0Y2hDdXJyZW50RGF0YSB9IGZyb20gXCIuL2dldERhdGFBUEkuanNcIjtcclxuaW1wb3J0IHsgYWRkSW1hZ2UgfSBmcm9tIFwiLi9hZGRJbWcuanNcIjtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgYXBwZW5kIERPTSBlbGVtZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVmdFBhcnRET00oKSB7XHJcbiAgY29uc3QgbGVmdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdENoYW5nYWJsZURPTVwiKTtcclxuICBsZWZ0RE9NLmlubmVySFRNTCA9IFwiXCI7IC8vIENsZWFyIHByZXZpb3VzIGVsZW1lbnRzXHJcblxyXG4gIGNvbnN0IGNpdHlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2l0eVAuY2xhc3NMaXN0LmFkZChcImNpdHlMZWZ0UFwiKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgd2VhdGhlckltZy5jbGFzc0xpc3QuYWRkKFwibWFpbldlYXRoZXJJbWdcIik7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJTdGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB3ZWF0aGVyU3RhdGVQLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyU3RhdGVQXCIpO1xyXG5cclxuICBjb25zdCB0ZW1wUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHRlbXBQLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wTGVmdFBcIik7XHJcblxyXG4gIGNvbnN0IGRhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGF0ZVAuY2xhc3NMaXN0LmFkZChcImRhdGVMZWZ0UFwiKTtcclxuXHJcbiAgbGVmdERPTS5hcHBlbmRDaGlsZCh3ZWF0aGVySW1nKTtcclxuICBsZWZ0RE9NLmFwcGVuZENoaWxkKGNpdHlQKTtcclxuICBsZWZ0RE9NLmFwcGVuZENoaWxkKHRlbXBQKTtcclxuICBsZWZ0RE9NLmFwcGVuZENoaWxkKHdlYXRoZXJTdGF0ZVApO1xyXG4gIGxlZnRET00uYXBwZW5kQ2hpbGQoZGF0ZVApO1xyXG5cclxuICByZXR1cm4geyB3ZWF0aGVySW1nLCBjaXR5UCwgdGVtcFAsIHdlYXRoZXJTdGF0ZVAsIGRhdGVQIH07XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNldCBjb250ZW50IGZvciB0aGUgRE9NIGVsZW1lbnRzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRMZWZ0UGFydERPTUNvbnRlbnQoY2l0eUlucHV0KSB7XHJcbiAgY29uc3QgdG9kYXlEYXRlID0gZ2V0VG9kYXlEYXRlKCk7XHJcbiAgY29uc3QgbmV4dFRocmVlRGF5cyA9IGdldEN1cnJlbnRBbmROZXh0RGF5cygpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXkgPSBuZXh0VGhyZWVEYXlzWzBdO1xyXG5cclxuICBjb25zdCBlbGVtZW50cyA9IGFkZExlZnRQYXJ0RE9NKCk7XHJcblxyXG4gIGNvbnN0IHsgd2VhdGhlckltZywgY2l0eVAsIHRlbXBQLCB3ZWF0aGVyU3RhdGVQLCBkYXRlUCB9ID0gZWxlbWVudHM7XHJcblxyXG4gIGNpdHlQLnRleHRDb250ZW50ID0gY2l0eUlucHV0O1xyXG4gIGRhdGVQLmlubmVySFRNTCA9IGAke2N1cnJlbnREYXl9LDxicj4ke3RvZGF5RGF0ZX1gO1xyXG5cclxuICBjb25zdCB7IHdlYXRoZXJDb25kaXRpb25UZXh0LCB0ZW1wQ2Vsc2l1cyB9ID0gYXdhaXQgZmV0Y2hDdXJyZW50RGF0YShcclxuICAgIGNpdHlJbnB1dFxyXG4gICk7XHJcbiAgd2VhdGhlclN0YXRlUC50ZXh0Q29udGVudCA9IHdlYXRoZXJDb25kaXRpb25UZXh0O1xyXG4gIHRlbXBQLnRleHRDb250ZW50ID0gYCR7dGVtcENlbHNpdXN9IMKwQ2A7XHJcblxyXG4gIGNvbnN0IHsgd2VhdGhlckNvbmRpdGlvbklELCBsb2NhbFRpbWVIb3VyIH0gPSBhd2FpdCBmZXRjaEN1cnJlbnREYXRhKFxyXG4gICAgY2l0eUlucHV0XHJcbiAgKTtcclxuICBjb25zdCBpbWdTcmMgPSBhd2FpdCBhZGRJbWFnZSh3ZWF0aGVyQ29uZGl0aW9uSUQsIGxvY2FsVGltZUhvdXIpO1xyXG4gIHdlYXRoZXJJbWcuc3JjID0gaW1nU3JjO1xyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYWxsIGNoaWxkIGVsZW1lbnRzIGZyb20gdGhlIHBhcmVudCBjb250YWluZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuTGVmdERPTSgpIHtcclxuICBjb25zdCBsZWZ0RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0Q2hhbmdhYmxlRE9NXCIpO1xyXG4gIGxlZnRET00uaW5uZXJIVE1MID0gXCJcIjsgLy8gVGhpcyBlZmZlY3RpdmVseSByZW1vdmVzIGFsbCBjaGlsZCBlbGVtZW50c1xyXG59XHJcbiIsImltcG9ydCB7IGZldGNoTmV4dFRocmVlRGF5c0RhdGEgfSBmcm9tIFwiLi9nZXREYXRhQVBJXCI7XHJcbmltcG9ydCB7IGZldGNoQ3VycmVudERhdGEgfSBmcm9tIFwiLi9nZXREYXRhQVBJLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRBbmROZXh0RGF5cyB9IGZyb20gXCIuL2RhdGVcIjtcclxuaW1wb3J0IHsgYWRkSW1hZ2UgfSBmcm9tIFwiLi9hZGRJbWdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRSaWdodFBhcnRET00oKSB7XHJcbiAgY29uc3QgcmlnaHRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0XCIpO1xyXG4gIHJpZ2h0RE9NLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGxvY2F0aW9uUC5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25QXCIpO1xyXG5cclxuICBjb25zdCB0aGlzV2Vla1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0aGlzV2Vla1AuY2xhc3NMaXN0LmFkZChcInRoaXNXZWVrUFwiKTtcclxuICB0aGlzV2Vla1AudGV4dENvbnRlbnQgPSBcIk5leHQgdGhyZWUgZGF5c1wiOyAvLyBwZXJtYW5lbnQgc28gYWRkIGhlcmVcclxuXHJcbiAgcmlnaHRET00uYXBwZW5kQ2hpbGQobG9jYXRpb25QKTtcclxuICByaWdodERPTS5hcHBlbmRDaGlsZCh0aGlzV2Vla1ApO1xyXG5cclxuICBjb25zdCB3ZWVrRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3ZWVrRElWLmNsYXNzTGlzdC5hZGQoXCJ3ZWVrRElWXCIpO1xyXG5cclxuICAvLyAgIFdlYXRoZXIgY2FyZCAxXHJcbiAgY29uc3QgY2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJ3ZWVrQ2FyZFwiKTtcclxuXHJcbiAgY29uc3QgY2FyZDFUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkMVRleHREaXYuY2xhc3NMaXN0LmFkZChcIndlZWtDYXJkVGV4dERpdlwiKTtcclxuXHJcbiAgY29uc3QgY2FyZDFUZXh0RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2FyZDFUZXh0RGF5LmNsYXNzTGlzdC5hZGQoXCJjYXJkVGV4dERheVwiKTtcclxuXHJcbiAgY29uc3QgY2FyZDFUZXh0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNhcmQxVGV4dFRlbXAuY2xhc3NMaXN0LmFkZChcImNhcmRUZXh0VGVtcFwiKTtcclxuXHJcbiAgY29uc3QgY2FyZDFXZWF0aGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjYXJkMVdlYXRoZXJJbWcuY2xhc3NMaXN0LmFkZChcImNhcmRXZWF0aGVySW1nXCIpO1xyXG5cclxuICBjYXJkMVRleHREaXYuYXBwZW5kQ2hpbGQoY2FyZDFUZXh0RGF5KTtcclxuICBjYXJkMVRleHREaXYuYXBwZW5kQ2hpbGQoY2FyZDFUZXh0VGVtcCk7XHJcbiAgY2FyZDEuYXBwZW5kQ2hpbGQoY2FyZDFUZXh0RGl2KTtcclxuICBjYXJkMS5hcHBlbmRDaGlsZChjYXJkMVdlYXRoZXJJbWcpO1xyXG4gIHdlZWtESVYuYXBwZW5kKGNhcmQxKTtcclxuXHJcbiAgLy8gICBXZWF0aGVyIGNhcmQgMlxyXG4gIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwid2Vla0NhcmRcIik7XHJcblxyXG4gIGNvbnN0IGNhcmQyVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FyZDJUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ3ZWVrQ2FyZFRleHREaXZcIik7XHJcblxyXG4gIGNvbnN0IGNhcmQyVGV4dERheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNhcmQyVGV4dERheS5jbGFzc0xpc3QuYWRkKFwiY2FyZFRleHREYXlcIik7XHJcblxyXG4gIGNvbnN0IGNhcmQyVGV4dFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjYXJkMlRleHRUZW1wLmNsYXNzTGlzdC5hZGQoXCJjYXJkVGV4dFRlbXBcIik7XHJcblxyXG4gIGNvbnN0IGNhcmQyV2VhdGhlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2FyZDJXZWF0aGVySW1nLmNsYXNzTGlzdC5hZGQoXCJjYXJkV2VhdGhlckltZ1wiKTtcclxuXHJcbiAgY2FyZDJUZXh0RGl2LmFwcGVuZENoaWxkKGNhcmQyVGV4dERheSk7XHJcbiAgY2FyZDJUZXh0RGl2LmFwcGVuZENoaWxkKGNhcmQyVGV4dFRlbXApO1xyXG4gIGNhcmQyLmFwcGVuZENoaWxkKGNhcmQyVGV4dERpdik7XHJcbiAgY2FyZDIuYXBwZW5kQ2hpbGQoY2FyZDJXZWF0aGVySW1nKTtcclxuICB3ZWVrRElWLmFwcGVuZChjYXJkMik7XHJcblxyXG4gIC8vICAgV2VhdGhlciBjYXJkIDNcclxuICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FyZDMuY2xhc3NMaXN0LmFkZChcIndlZWtDYXJkXCIpO1xyXG5cclxuICBjb25zdCBjYXJkM1RleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmQzVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwid2Vla0NhcmRUZXh0RGl2XCIpO1xyXG5cclxuICBjb25zdCBjYXJkM1RleHREYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjYXJkM1RleHREYXkuY2xhc3NMaXN0LmFkZChcImNhcmRUZXh0RGF5XCIpO1xyXG5cclxuICBjb25zdCBjYXJkM1RleHRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2FyZDNUZXh0VGVtcC5jbGFzc0xpc3QuYWRkKFwiY2FyZFRleHRUZW1wXCIpO1xyXG5cclxuICBjb25zdCBjYXJkM1dlYXRoZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNhcmQzV2VhdGhlckltZy5jbGFzc0xpc3QuYWRkKFwiY2FyZFdlYXRoZXJJbWdcIik7XHJcblxyXG4gIGNhcmQzVGV4dERpdi5hcHBlbmRDaGlsZChjYXJkM1RleHREYXkpO1xyXG4gIGNhcmQzVGV4dERpdi5hcHBlbmRDaGlsZChjYXJkM1RleHRUZW1wKTtcclxuICBjYXJkMy5hcHBlbmRDaGlsZChjYXJkM1RleHREaXYpO1xyXG4gIGNhcmQzLmFwcGVuZENoaWxkKGNhcmQzV2VhdGhlckltZyk7XHJcbiAgd2Vla0RJVi5hcHBlbmQoY2FyZDMpO1xyXG5cclxuICBjb25zdCB0b2RheUhpZ2hsaWdodHNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdG9kYXlIaWdobGlnaHRzUC5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzUFwiKTtcclxuXHJcbiAgY29uc3QgdG9kYXlIaWdobGlnaHRzRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2RheUhpZ2hsaWdodHNESVYuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaGxpZ2h0c0RJVlwiKTtcclxuXHJcbiAgLy8gVVYgY2FyZFxyXG4gIGNvbnN0IGNhcmRVViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FyZFVWLmNsYXNzTGlzdC5hZGQoXCJ0b2RheUhpZ2hsaWdodHNDYXJkVVZcIik7XHJcbiAgY29uc3QgY2FyZFVWcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNhcmRVVnAuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaGxpZ2h0c1RpdGxlXCIpO1xyXG4gIGNhcmRVVnAudGV4dENvbnRlbnQgPSBcIlVWIEluZGV4XCI7XHJcbiAgY29uc3QgY2FyZFVWdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjYXJkVVZ2YWx1ZS5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzVmFsdWVcIik7XHJcbiAgY29uc3Qgc3Vuc2NyZWVuUmVtaW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBzdW5zY3JlZW5SZW1pbmRlci5jbGFzc0xpc3QuYWRkKFwic3Vuc2NyZWVuUmVtaW5kZXJcIik7XHJcbiAgY2FyZFVWLmFwcGVuZENoaWxkKGNhcmRVVnApO1xyXG4gIGNhcmRVVi5hcHBlbmRDaGlsZChjYXJkVVZ2YWx1ZSk7XHJcbiAgY2FyZFVWLmFwcGVuZENoaWxkKHN1bnNjcmVlblJlbWluZGVyKTtcclxuICB0b2RheUhpZ2hsaWdodHNESVYuYXBwZW5kQ2hpbGQoY2FyZFVWKTtcclxuXHJcbiAgLy8gRmVlbHMgbGlrZVxyXG4gIGNvbnN0IGNhcmRGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmRGZWVsc0xpa2UuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaGxpZ2h0c0NhcmRcIik7XHJcbiAgY29uc3QgY2FyZEZlZWxzTGlrZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjYXJkRmVlbHNMaWtlcC5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzVGl0bGVcIik7XHJcbiAgY2FyZEZlZWxzTGlrZXAudGV4dENvbnRlbnQgPSBcIkZlZWxzIGxpa2UuLlwiO1xyXG4gIGNvbnN0IGZlZWxzTGlrZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZmVlbHNMaWtlVmFsdWUuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaGxpZ2h0c1ZhbHVlXCIpO1xyXG4gIGNhcmRGZWVsc0xpa2UuYXBwZW5kQ2hpbGQoY2FyZEZlZWxzTGlrZXApO1xyXG4gIGNhcmRGZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVmFsdWUpO1xyXG4gIHRvZGF5SGlnaGxpZ2h0c0RJVi5hcHBlbmRDaGlsZChjYXJkRmVlbHNMaWtlKTtcclxuXHJcbiAgLy8gUHJlc3N1cmVcclxuICBjb25zdCBjYXJkUHJlc3N1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmRQcmVzc3VyZS5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzQ2FyZFwiKTtcclxuICBjb25zdCBjYXJkUHJlc3N1cmVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2FyZFByZXNzdXJlUC5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzVGl0bGVcIik7XHJcbiAgY2FyZFByZXNzdXJlUC50ZXh0Q29udGVudCA9IFwiUHJlc3N1cmU6XCI7XHJcbiAgY29uc3QgY2FyZFByZXNzdXJlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjYXJkUHJlc3N1cmVWYWx1ZS5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzVmFsdWVcIik7XHJcbiAgY2FyZFByZXNzdXJlLmFwcGVuZENoaWxkKGNhcmRQcmVzc3VyZVApO1xyXG4gIGNhcmRQcmVzc3VyZS5hcHBlbmRDaGlsZChjYXJkUHJlc3N1cmVWYWx1ZSk7XHJcbiAgdG9kYXlIaWdobGlnaHRzRElWLmFwcGVuZENoaWxkKGNhcmRQcmVzc3VyZSk7XHJcblxyXG4gIC8vIFdpbmRcclxuICBjb25zdCBjYXJkV2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FyZFdpbmQuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaGxpZ2h0c0NhcmRcIik7XHJcbiAgY29uc3QgY2FyZFdpbmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2FyZFdpbmRQLmNsYXNzTGlzdC5hZGQoXCJ0b2RheUhpZ2hsaWdodHNUaXRsZVwiKTtcclxuICBjYXJkV2luZFAudGV4dENvbnRlbnQgPSBcIldpbmQ6XCI7XHJcbiAgY29uc3QgY2FyZFdpbmRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNhcmRXaW5kVmFsdWUuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaGxpZ2h0c1ZhbHVlXCIpO1xyXG4gIGNhcmRXaW5kLmFwcGVuZENoaWxkKGNhcmRXaW5kUCk7XHJcbiAgY2FyZFdpbmQuYXBwZW5kQ2hpbGQoY2FyZFdpbmRWYWx1ZSk7XHJcbiAgdG9kYXlIaWdobGlnaHRzRElWLmFwcGVuZENoaWxkKGNhcmRXaW5kKTtcclxuXHJcbiAgLy8gQWlyIHF1YWxpdHk6XHJcbiAgY29uc3QgY2FyZEFpclF1YWxpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmRBaXJRdWFsaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RheUhpZ2hsaWdodHNDYXJkXCIpO1xyXG4gIGNvbnN0IGNhcmRBaXJRdWFsaXR5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNhcmRBaXJRdWFsaXR5UC5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzVGl0bGVcIik7XHJcbiAgY2FyZEFpclF1YWxpdHlQLnRleHRDb250ZW50ID0gXCJBaXIgcXVhbGl0eSAoVVMgRVBBKTpcIjtcclxuICBjb25zdCBjYXJkQWlyUXVhbGl0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2FyZEFpclF1YWxpdHlWYWx1ZS5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzVmFsdWVcIik7XHJcbiAgY2FyZEFpclF1YWxpdHkuYXBwZW5kQ2hpbGQoY2FyZEFpclF1YWxpdHlQKTtcclxuICBjYXJkQWlyUXVhbGl0eS5hcHBlbmRDaGlsZChjYXJkQWlyUXVhbGl0eVZhbHVlKTtcclxuICB0b2RheUhpZ2hsaWdodHNESVYuYXBwZW5kQ2hpbGQoY2FyZEFpclF1YWxpdHkpO1xyXG5cclxuICAvLyBWaXNpYmlsaXR5OlxyXG4gIGNvbnN0IGNhcmRWaXNpYmlsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkVmlzaWJpbGl0eS5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzQ2FyZFwiKTtcclxuICBjb25zdCBjYXJkVmlzaWJpbGl0eVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjYXJkVmlzaWJpbGl0eVAuY2xhc3NMaXN0LmFkZChcInRvZGF5SGlnaGxpZ2h0c1RpdGxlXCIpO1xyXG4gIGNhcmRWaXNpYmlsaXR5UC50ZXh0Q29udGVudCA9IFwiVmlzaWJpbGl0eTpcIjtcclxuICBjb25zdCBjYXJkVmlzaWJpbGl0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2FyZFZpc2liaWxpdHlWYWx1ZS5jbGFzc0xpc3QuYWRkKFwidG9kYXlIaWdobGlnaHRzVmFsdWVcIik7XHJcbiAgY2FyZFZpc2liaWxpdHkuYXBwZW5kQ2hpbGQoY2FyZFZpc2liaWxpdHlQKTtcclxuICBjYXJkVmlzaWJpbGl0eS5hcHBlbmRDaGlsZChjYXJkVmlzaWJpbGl0eVZhbHVlKTtcclxuICB0b2RheUhpZ2hsaWdodHNESVYuYXBwZW5kQ2hpbGQoY2FyZFZpc2liaWxpdHkpO1xyXG5cclxuICByaWdodERPTS5hcHBlbmRDaGlsZCh3ZWVrRElWKTtcclxuXHJcbiAgdG9kYXlIaWdobGlnaHRzUC50ZXh0Q29udGVudCA9IFwiQ3VycmVudCB3ZWF0aGVyXCI7IC8vIHBlcm1hbmVudCBzbyBhZGQgaGVyZVxyXG4gIHJpZ2h0RE9NLmFwcGVuZENoaWxkKHRvZGF5SGlnaGxpZ2h0c1ApO1xyXG5cclxuICByaWdodERPTS5hcHBlbmRDaGlsZCh0b2RheUhpZ2hsaWdodHNESVYpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9jYXRpb25QLFxyXG4gICAgY2FyZDFUZXh0RGF5LFxyXG4gICAgY2FyZDFUZXh0VGVtcCxcclxuICAgIGNhcmQxV2VhdGhlckltZyxcclxuICAgIGNhcmQyVGV4dERheSxcclxuICAgIGNhcmQyVGV4dFRlbXAsXHJcbiAgICBjYXJkMldlYXRoZXJJbWcsXHJcbiAgICBjYXJkM1RleHREYXksXHJcbiAgICBjYXJkM1RleHRUZW1wLFxyXG4gICAgY2FyZDNXZWF0aGVySW1nLFxyXG4gICAgY2FyZFVWdmFsdWUsXHJcbiAgICBzdW5zY3JlZW5SZW1pbmRlcixcclxuICAgIGZlZWxzTGlrZVZhbHVlLFxyXG4gICAgY2FyZFByZXNzdXJlVmFsdWUsXHJcbiAgICBjYXJkV2luZFZhbHVlLFxyXG4gICAgY2FyZEFpclF1YWxpdHlWYWx1ZSxcclxuICAgIGNhcmRWaXNpYmlsaXR5VmFsdWUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFJpZ2h0UGFydERPTUNvbnRlbnQoY2l0eUlucHV0KSB7XHJcbiAgY29uc3QgbmV4dFRocmVlRGF5cyA9IGdldEN1cnJlbnRBbmROZXh0RGF5cygpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXkgPSBuZXh0VGhyZWVEYXlzWzBdO1xyXG4gIGNvbnN0IHRvbW9ycm93ID0gbmV4dFRocmVlRGF5c1sxXTtcclxuICBjb25zdCBkYXlBZnRlclRvbW9ycm93ID0gbmV4dFRocmVlRGF5c1syXTtcclxuICBjb25zdCBkYXlBZnRlckFmdGVyb21vcnJvdyA9IG5leHRUaHJlZURheXNbM107XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRzID0gYWRkUmlnaHRQYXJ0RE9NKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgbG9jYXRpb25QLFxyXG4gICAgY2FyZDFUZXh0RGF5LFxyXG4gICAgY2FyZDFUZXh0VGVtcCxcclxuICAgIGNhcmQxV2VhdGhlckltZyxcclxuICAgIGNhcmQyVGV4dERheSxcclxuICAgIGNhcmQyVGV4dFRlbXAsXHJcbiAgICBjYXJkMldlYXRoZXJJbWcsXHJcbiAgICBjYXJkM1RleHREYXksXHJcbiAgICBjYXJkM1RleHRUZW1wLFxyXG4gICAgY2FyZDNXZWF0aGVySW1nLFxyXG4gICAgY2FyZFVWdmFsdWUsXHJcbiAgICBzdW5zY3JlZW5SZW1pbmRlcixcclxuICAgIGZlZWxzTGlrZVZhbHVlLFxyXG4gICAgY2FyZFByZXNzdXJlVmFsdWUsXHJcbiAgICBjYXJkV2luZFZhbHVlLFxyXG4gICAgY2FyZEFpclF1YWxpdHlWYWx1ZSxcclxuICAgIGNhcmRWaXNpYmlsaXR5VmFsdWUsXHJcbiAgfSA9IGVsZW1lbnRzO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB0aW1lSG91ckNhcmRBbGwsXHJcbiAgICBjaXR5LFxyXG4gICAgY291bnRyeSxcclxuICAgIG1heFRlbXBDYXJkMSxcclxuICAgIG1pblRlbXBDYXJkMSxcclxuICAgIGNvbmRpdGlvbkNvZGVDYXJkMSxcclxuICAgIG1heFRlbXBDYXJkMixcclxuICAgIG1pblRlbXBDYXJkMixcclxuICAgIGNvbmRpdGlvbkNvZGVDYXJkMixcclxuICAgIG1heFRlbXBDYXJkMyxcclxuICAgIG1pblRlbXBDYXJkMyxcclxuICAgIGNvbmRpdGlvbkNvZGVDYXJkMyxcclxuICB9ID0gYXdhaXQgZmV0Y2hOZXh0VGhyZWVEYXlzRGF0YShjaXR5SW5wdXQpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB3ZWF0aGVyQ29uZGl0aW9uSUQsXHJcbiAgICBsb2NhbFRpbWVIb3VyLFxyXG4gICAgdXZJbmRleCxcclxuICAgIGZlZWxMaWtlLFxyXG4gICAgd2luZCxcclxuICAgIHZpc2liaWxpdHksXHJcbiAgICBhaXJRdWFsaXR5LFxyXG4gICAgcHJlc3N1cmUsXHJcbiAgICB3aW5kRGlyZWN0aW9uLFxyXG4gIH0gPSBhd2FpdCBmZXRjaEN1cnJlbnREYXRhKGNpdHlJbnB1dCk7XHJcblxyXG4gIGxvY2F0aW9uUC50ZXh0Q29udGVudCA9IGNpdHkgKyBcIiwgXCIgKyBjb3VudHJ5O1xyXG5cclxuICBjYXJkMVRleHREYXkudGV4dENvbnRlbnQgPSB0b21vcnJvdyArIFwiLCBcIjtcclxuICBjYXJkMVRleHRUZW1wLnRleHRDb250ZW50ID0gYCR7bWF4VGVtcENhcmQxfSDCsEMgLyAke21pblRlbXBDYXJkMX0gwrBDYDtcclxuICBjb25zdCBpbWdTcmMxID0gYXdhaXQgYWRkSW1hZ2UoY29uZGl0aW9uQ29kZUNhcmQxLCB0aW1lSG91ckNhcmRBbGwpO1xyXG4gIGNhcmQxV2VhdGhlckltZy5zcmMgPSBpbWdTcmMxO1xyXG5cclxuICBjYXJkMlRleHREYXkudGV4dENvbnRlbnQgPSBkYXlBZnRlclRvbW9ycm93ICsgXCIsIFwiO1xyXG4gIGNhcmQyVGV4dFRlbXAudGV4dENvbnRlbnQgPSBgJHttYXhUZW1wQ2FyZDJ9IMKwQyAvICR7bWluVGVtcENhcmQyfSDCsENgO1xyXG4gIGNvbnN0IGltZ1NyYzIgPSBhd2FpdCBhZGRJbWFnZShjb25kaXRpb25Db2RlQ2FyZDIsIHRpbWVIb3VyQ2FyZEFsbCk7XHJcbiAgY2FyZDJXZWF0aGVySW1nLnNyYyA9IGltZ1NyYzI7XHJcblxyXG4gIGNhcmQzVGV4dERheS50ZXh0Q29udGVudCA9IGRheUFmdGVyQWZ0ZXJvbW9ycm93ICsgXCIsIFwiO1xyXG4gIGNhcmQzVGV4dFRlbXAudGV4dENvbnRlbnQgPSBgJHttYXhUZW1wQ2FyZDN9IMKwQyAvICR7bWluVGVtcENhcmQzfSDCsENgO1xyXG4gIGNvbnN0IGltZ1NyYzMgPSBhd2FpdCBhZGRJbWFnZShjb25kaXRpb25Db2RlQ2FyZDMsIHRpbWVIb3VyQ2FyZEFsbCk7XHJcbiAgY2FyZDNXZWF0aGVySW1nLnNyYyA9IGltZ1NyYzM7XHJcblxyXG4gIGNvbnN0IHsgdXZUZXh0LCBzdW5jcmVlblJlbWluZGUgfSA9IFVWcmF0ZSh1dkluZGV4KTtcclxuICBjYXJkVVZ2YWx1ZS50ZXh0Q29udGVudCA9IHV2SW5kZXggKyBcIiAtIFwiICsgdXZUZXh0O1xyXG4gIHN1bnNjcmVlblJlbWluZGVyLnRleHRDb250ZW50ID0gc3VuY3JlZW5SZW1pbmRlO1xyXG5cclxuICBmZWVsc0xpa2VWYWx1ZS50ZXh0Q29udGVudCA9IGAke2ZlZWxMaWtlfSDCsENgO1xyXG5cclxuICBjYXJkUHJlc3N1cmVWYWx1ZS50ZXh0Q29udGVudCA9IHByZXNzdXJlICsgXCIgbWJcIjtcclxuXHJcbiAgY2FyZFdpbmRWYWx1ZS50ZXh0Q29udGVudCA9IHdpbmQgKyBcIiAoXCIgKyB3aW5kRGlyZWN0aW9uICsgXCIpXCI7XHJcblxyXG4gIGNvbnN0IHsgYWlyUXVhbGl0eVRleHQgfSA9IEFRSShhaXJRdWFsaXR5KTtcclxuICBjYXJkQWlyUXVhbGl0eVZhbHVlLnRleHRDb250ZW50ID0gYWlyUXVhbGl0eSArIFwiIC0gXCIgKyBhaXJRdWFsaXR5VGV4dDtcclxuXHJcbiAgY2FyZFZpc2liaWxpdHlWYWx1ZS50ZXh0Q29udGVudCA9IHZpc2liaWxpdHkgKyBcIiBrbVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5SaWdodERPTSgpIHtcclxuICBjb25zdCByaWdodERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHRcIik7XHJcbiAgcmlnaHRET00uaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gVVZyYXRlKHV2VmFsdWUpIHtcclxuICBpZiAodXZWYWx1ZSA8IDMpIHtcclxuICAgIGNvbnN0IHV2VGV4dCA9IFwibG93XCI7XHJcbiAgICBjb25zdCBzdW5jcmVlblJlbWluZGUgPSBcIk5vIHByb3RlY3Rpb24gbmVlZGVkXCI7XHJcbiAgICByZXR1cm4geyB1dlRleHQsIHN1bmNyZWVuUmVtaW5kZSB9O1xyXG4gIH0gZWxzZSBpZiAodXZWYWx1ZSA+PSAzICYmIHV2VmFsdWUgPCA2KSB7XHJcbiAgICBjb25zdCB1dlRleHQgPSBcIm1vZGVyYXRlXCI7XHJcbiAgICBjb25zdCBzdW5jcmVlblJlbWluZGUgPSBcIlNvbWUgcHJvdGVjdGlvbiBpcyByZXF1aXJlZFwiO1xyXG4gICAgcmV0dXJuIHsgdXZUZXh0LCBzdW5jcmVlblJlbWluZGUgfTtcclxuICB9IGVsc2UgaWYgKHV2VmFsdWUgPj0gNiAmJiB1dlZhbHVlIDwgOCkge1xyXG4gICAgY29uc3QgdXZUZXh0ID0gXCJoaWdoXCI7XHJcbiAgICBjb25zdCBzdW5jcmVlblJlbWluZGUgPSBcIlByb3RlY3Rpb24gZXNzZW50aWFsXCI7XHJcbiAgICByZXR1cm4geyB1dlRleHQsIHN1bmNyZWVuUmVtaW5kZSB9O1xyXG4gIH0gZWxzZSBpZiAodXZWYWx1ZSA+PSA4ICYmIHV2VmFsdWUgPCAxMSkge1xyXG4gICAgY29uc3QgdXZUZXh0ID0gXCJ2ZXJ5IGhpZ2hcIjtcclxuICAgIGNvbnN0IHN1bmNyZWVuUmVtaW5kZSA9IFwiRXh0cmEgcHJvdGVjdGlvbiBpcyBuZWVkZWRcIjtcclxuICAgIHJldHVybiB7IHV2VGV4dCwgc3VuY3JlZW5SZW1pbmRlIH07XHJcbiAgfSBlbHNlIGlmICh1dlZhbHVlID49IDExKSB7XHJcbiAgICBjb25zdCB1dlRleHQgPSBcImV4dHJlbWVcIjtcclxuICAgIGNvbnN0IHN1bmNyZWVuUmVtaW5kZSA9IFwiU3RheSBpbnNpZGVcIjtcclxuICAgIHJldHVybiB7IHV2VGV4dCwgc3VuY3JlZW5SZW1pbmRlIH07XHJcbiAgfVxyXG5cclxuICAvLyBEZWZhdWx0IHJldHVybiBpZiBub25lIG9mIHRoZSBjb25kaXRpb25zIGFyZSBtZXRcclxuICBjb25zdCB1dlRleHQgPSBcInVua25vd25cIjtcclxuICBjb25zdCBzdW5jcmVlblJlbWluZGUgPSBcIlVua25vd24gcHJvdGVjdGlvbiBsZXZlbFwiO1xyXG4gIHJldHVybiB7IHV2VGV4dCwgc3VuY3JlZW5SZW1pbmRlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFRSShhaXJRdWFsaXR5VmFsdWUpIHtcclxuICBpZiAoYWlyUXVhbGl0eVZhbHVlIDwgNTEpIHtcclxuICAgIGNvbnN0IGFpclF1YWxpdHlUZXh0ID0gXCJnb29kXCI7XHJcbiAgICByZXR1cm4geyBhaXJRdWFsaXR5VGV4dCB9O1xyXG4gIH0gZWxzZSBpZiAoYWlyUXVhbGl0eVZhbHVlID49IDUxICYmIGFpclF1YWxpdHlWYWx1ZSA8IDEwMSkge1xyXG4gICAgY29uc3QgYWlyUXVhbGl0eVRleHQgPSBcIm1vZGVyYXRlXCI7XHJcbiAgICByZXR1cm4geyBhaXJRdWFsaXR5VGV4dCB9O1xyXG4gIH0gZWxzZSBpZiAoYWlyUXVhbGl0eVZhbHVlID49IDEwMSAmJiBhaXJRdWFsaXR5VmFsdWUgPCAxNTEpIHtcclxuICAgIGNvbnN0IGFpclF1YWxpdHlUZXh0ID0gXCJ1bmhlYWx0aHkgZm9yIHNlbnNpdGl2ZSBncm91cHNcIjtcclxuICAgIHJldHVybiB7IGFpclF1YWxpdHlUZXh0IH07XHJcbiAgfSBlbHNlIGlmIChhaXJRdWFsaXR5VmFsdWUgPj0gMTUxKSB7XHJcbiAgICBjb25zdCBhaXJRdWFsaXR5VGV4dCA9IFwidW5oZWFsdGh5XCI7XHJcbiAgICByZXR1cm4geyBhaXJRdWFsaXR5VGV4dCB9O1xyXG4gIH1cclxuXHJcbiAgLy8gRGVmYXVsdCByZXR1cm4gaWYgbm9uZSBvZiB0aGUgY29uZGl0aW9ucyBhcmUgbWV0XHJcbiAgY29uc3QgYWlyUXVhbGl0eVRleHQgPSBcInVua25vd25cIjtcclxuICByZXR1cm4geyBhaXJRdWFsaXR5VGV4dCB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==