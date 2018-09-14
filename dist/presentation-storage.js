(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("next-core-structures"));
	else if(typeof define === 'function' && define.amd)
		define("presentation-storage", ["next-core-structures"], factory);
	else if(typeof exports === 'object')
		exports["presentation-storage"] = factory(require("next-core-structures"));
	else
		root["presentation-storage"] = factory(root["next-core-structures"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_next_core_structures__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _localStorage = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");

var _localStorage2 = _interopRequireDefault(_localStorage);

var _localStorageFactory = __webpack_require__(/*! ./localStorageFactory.js */ "./src/localStorageFactory.js");

var _localStorageFactory2 = _interopRequireDefault(_localStorageFactory);

var _namespacedLocalStorage = __webpack_require__(/*! ./namespacedLocalStorage.js */ "./src/namespacedLocalStorage.js");

var _namespacedLocalStorage2 = _interopRequireDefault(_namespacedLocalStorage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports.LocalStorage = _localStorage2.default;
module.exports.LocalStorageFactory = _localStorageFactory2.default;
module.exports.NamespacedLocalStorage = _namespacedLocalStorage2.default;

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const isStorageSupported = () => {
  return typeof Storage !== "undefined";
};

/**
 * Local Storage API - returned from LocalStorageFactory
 * @param {boolean} persist Persistant storage or not
 */
class LocalStorage {
  constructor(persist) {
    this.isPersisted = persist;
    this._myStore = null;

    // true = localStorage, false = sessionStorage
    if (isStorageSupported()) {
      if (this.isPersisted) {
        this._myStore = localStorage;
      } else {
        this._myStore = sessionStorage;
      }
    } else {
      console.warn("AUGMENTED: No localStorage.");
    }
  }

  /**
   * is Persistant or not
   * @property {boolean} isPersisted Persistant property
   */

  /**
   * Is storage supported
   * @returns {boolean} Returns true if supported
   */
  isSupported() {
    return isStorageSupported();
  }

  /**
   * Gets an item from storage
   * @param {string} key The key in storage
   * @returns {object} Returns object from storage
   */
  getItem(itemKey) {
    if (this._myStore) {
      const item = this._myStore.getItem(itemKey);
      if (item) {
        return JSON.parse(item);
      }
    }
    return null;
  }

  /**
   * Sets an item to storage
   * @param {string} key The key in storage
   * @param {object} object The data to set
   */
  setItem(itemKey, object) {
    if (this._myStore && itemKey && object) {
      this._myStore.setItem(itemKey, JSON.stringify(object));
    }
  }

  /**
   * Removes an item from storage
   * @param {string} key The key in storage
   */
  removeItem(itemKey) {
    if (this._myStore) {
      this._myStore.removeItem(itemKey);
    }
  }

  /**
   * Clears storage - <b>Warning: Destructive in non-namespaced instances!</b>
   */
  clear() {
    if (this._myStore) {
      this._myStore.clear();
    }
  }

  /**
   * Gets the key from storage for index
   * @param {number} i The index in storage
   * @returns {string} Returns the key from storage
   */
  key(i) {
    if (this._myStore) {
      return this._myStore.key(i);
    }
    return null;
  }

  /**
   * The length of storage by keys
   * @returns {number} Returns the length of storage by keys
   */
  length() {
    if (this._myStore) {
      return this._myStore.length;
    }
    return 0;
  }
};

exports.default = LocalStorage;

/***/ }),

/***/ "./src/localStorageFactory.js":
/*!************************************!*\
  !*** ./src/localStorageFactory.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localStorage = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");

var _localStorage2 = _interopRequireDefault(_localStorage);

var _namespacedLocalStorage = __webpack_require__(/*! ./namespacedLocalStorage.js */ "./src/namespacedLocalStorage.js");

var _namespacedLocalStorage2 = _interopRequireDefault(_namespacedLocalStorage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * LocalStorageFactory
 * Retrieve a local storage Object
 */
class LocalStorageFactory {
  constructor() {}

  /**
   * Get the storage instance
   * @param {boolean} persist Persistance or not
   * @param {string} namespace The namespace of the storage if needed (optional)
   * @returns {LocalStorage} Returns an instance of local storage
   */
  static getStorage(persist, namespace) {
    let ls = null;
    if (namespace) {
      ls = new _namespacedLocalStorage2.default(persist, namespace);
    } else {
      ls = new _localStorage2.default(persist);
    }
    if (ls && ls.isSupported()) {
      return ls;
    }
    return null;
  }
};

exports.default = LocalStorageFactory;

/***/ }),

/***/ "./src/namespacedLocalStorage.js":
/*!***************************************!*\
  !*** ./src/namespacedLocalStorage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextCoreStructures = __webpack_require__(/*! next-core-structures */ "next-core-structures");

var _localStorage = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");

var _localStorage2 = _interopRequireDefault(_localStorage);

var _localStorageFactory = __webpack_require__(/*! ./localStorageFactory.js */ "./src/localStorageFactory.js");

var _localStorageFactory2 = _interopRequireDefault(_localStorageFactory);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * NamespacedLocalStorage
 * Retrieve a local storage Object
 * @extends LocalStorage
 */
class NamespacedLocalStorage extends _localStorage2.default {
  constructor(persist, namespace) {
    super(persist);
    this._ls = _localStorageFactory2.default.getStorage(persist);
    this._myStore = new _nextCoreStructures.AugmentedMap();
    this.namespace = namespace;

    // true = localStorage, false = sessionStorage
    if (this.isSupported() && this.namespace && !persist) {
      this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
    } else if (this.isSupported() && this.namespace && persist) {
      this.getItem(this.namespace);
    }
  }

  /**
   * Is storage supported
   * @returns {boolean} Returns true if supported
   */
  isSupported() {
    return this._ls && this._ls.isSupported();
  }

  /**
   * Gets an item from storage
   * @param {string} key The key in storage
   * @returns {object} Returns object from storage
   */
  getItem(itemKey) {
    let map = {};
    try {
      map = JSON.parse(this._ls.getItem(this.namespace));
    } catch (e) {
      // TODO: bundle this
      //logger.error("AUGMENTED: Augmented Local Strorage could not parse item map from storage!");
      return null;
    }
    this._myStore.clear();
    this._myStore.marshall(map);

    const item = this._myStore.get(itemKey);

    if (item) {
      // support regular string as well as object
      let ret;
      try {
        ret = JSON.parse(item);
      } catch (e) {
        // not JSON
        ret = item;
      }
      return ret;
    }
    return null;
  }

  /**
   * Sets an item to storage
   * @param {string} key The key in storage
   * @param {object} object The data to set
   */
  setItem(itemKey, object) {
    if (!this._myStore) {
      this._myStore = new _nextCoreStructures.AugmentedMap();
    }
    this._myStore.set(itemKey, object);
    this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
  }

  /**
   * Removes an item from storage
   * @param {string} key The key in storage
   */
  removeItem(itemKey) {
    this._myStore.remove(itemKey);
    this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
  }

  /**
   * Clears storage for namespace
   */
  clear() {
    this._myStore.clear();
    this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
  }

  /**
   * Gets the key from storage for index
   * @param {number} i The index in storage
   * @returns {string} Returns the key from storage
   */
  key(i) {
    return this._myStore.key(i);
  }

  /**
   * The length of storage by keys
   * @returns {number} Returns the length of storage by keys
   */
  length() {
    return this._myStore.size();
  }

  /**
  * Gets the namespaced items as a Map
  * @returns {AugmentedMap} Returns the namespaced storage as Map
  */
  getNamespacedItems() {
    return this._myStore;
  }
};

exports.default = NamespacedLocalStorage;

/***/ }),

/***/ "next-core-structures":
/*!**************************************************************************************************************************************************!*\
  !*** external {"commonjs":"next-core-structures","commonjs2":"next-core-structures","amd":"next-core-structures","root":"next-core-structures"} ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_next_core_structures__;

/***/ })

/******/ });
});
//# sourceMappingURL=presentation-storage.js.map