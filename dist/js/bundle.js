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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/field.js":
/*!*************************!*\
  !*** ./src/js/field.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Field {
  constructor() {
    this.area = {
      '1-1': null,
      '1-2': null,
      '1-3': null,
      '2-1': null,
      '2-2': null,
      '2-3': null,
      '3-1': null,
      '3-2': null,
      '3-3': null
    };
    this.row = {
      '1': [],
      '2': [],
      '3': []
    };
    this.col = {
      '1': [],
      '2': [],
      '3': []
    };
    this.dioginal1 = ['1-1', '2-2', '3-3'];
    this.dioginal2 = ['1-3', '2-2', '3-1'];
    this.dioginal = {
      '1': [],
      '2': []
    };
    this.winLine = [];
  }

  getWinLine() {
    return this.winLine;
  }

  getRow() {
    return this.row;
  }

  setItem(row, col, step) {
    const position = `${row}-${col}`;
    this.area[position] = step;
    this.row[`${row}`].push(step);
    this.col[`${col}`].push(step);

    if (this.dioginal1.includes(position)) {
      this.dioginal['1'].push(step);
    }

    if (this.dioginal2.includes(position)) {
      this.dioginal['2'].push(step);
    }
  }

  isItemEmpty(row, col) {
    const position = `${row}-${col}`;
    return this.area[position] === null;
  }

  isGameOver() {
    this.setWinline(this.row, 'line__horizontal', 'line_horizontal');
    this.setWinline(this.col, 'line__vertival', 'line_vertival');
    this.setWinline(this.dioginal, 'line__dioginal', 'line_dioginal');
    return this.winLine != 0;
  }

  setWinline(line, className, classNameModificator) {
    for (let key in line) {
      if (line[key].length != 3) continue;

      if (this.isAllElementsArrayEquel(line[key])) {
        this.winLine.push([`${className}`, `${classNameModificator}-${key}`]);
      }
    }
  }

  isAllElementsArrayEquel(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[0]) return false;
    }

    return true;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ "./src/js/field.js");



const field = new _field__WEBPACK_IMPORTED_MODULE_0__["default"]();
let stepNow = 'X';
let gameOver = false;
let countStep = 0;
const fieldItems = document.querySelectorAll('.field__item');
const header = document.querySelector('.header');
const fieldArea = document.querySelector('.field');

const game = e => {
  const row = e.target.dataset.row;
  const col = e.target.dataset.col;

  if (field.isItemEmpty(row, col) && !gameOver) {
    countStep++; //Вносим значение в ячейку

    e.target.innerHTML = stepNow;
    field.setItem(row, col, stepNow);

    if (countStep >= 5 && field.isGameOver()) {
      // Зачеркиваем поле
      const winLine = field.getWinLine();
      winLine.forEach(lineClasses => {
        const element = document.createElement('div');
        element.classList.add(lineClasses[0]);
        element.classList.add(lineClasses[1]);
        fieldArea.append(element);
      }); // Блокируем возможность дальше ходить - отключаем addEventListener

      gameOver = true;
      header.innerHTML = `Победил ${stepNow}`;
    } else {
      changeStep();
      header.innerHTML = `Сейчас ходит ${stepNow}`;
    }
  }
};

fieldItems.forEach(item => {
  item.addEventListener('click', game);
});

function changeStep() {
  stepNow === 'X' ? stepNow = 'O' : stepNow = 'X';
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map