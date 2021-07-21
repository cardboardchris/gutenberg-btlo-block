(window["webpackJsonp_gutenberg_btlo_block"] = window["webpackJsonp_gutenberg_btlo_block"] || []).push([["style-index"],{

/***/ "./src/btlo/btlo-description/style.scss":
/*!**********************************************!*\
  !*** ./src/btlo/btlo-description/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/style.scss":
/*!********************************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/style.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/style.scss":
/*!********************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/style.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/style.scss":
/*!***********************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-node-container/style.scss":
/*!*************************************************!*\
  !*** ./src/btlo/btlo-node-container/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/style.scss":
/*!*****************************!*\
  !*** ./src/btlo/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_gutenberg_btlo_block"] = window["webpackJsonp_gutenberg_btlo_block"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/scss/bootstrap.scss":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/scss/bootstrap.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-description/edit.js":
/*!*******************************************!*\
  !*** ./src/btlo/btlo-description/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




var ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/heading'];
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return { JSX.Element } Element to render.
 */

function Edit(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    templateLock: false,
    renderAppender: function renderAppender() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["Inserter"], {
        rootClientId: props.clientId,
        renderToggle: function renderToggle(_ref) {
          var onToggle = _ref.onToggle,
              disabled = _ref.disabled;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            className: "btn btn-primary add-block-button",
            onClick: onToggle,
            disabled: disabled,
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add a description'),
            icon: "plus"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add Description Content')));
        },
        isAppender: true
      });
    }
  }));
}

/***/ }),

/***/ "./src/btlo/btlo-description/editor.scss":
/*!***********************************************!*\
  !*** ./src/btlo/btlo-description/editor.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-description/index.js":
/*!********************************************!*\
  !*** ./src/btlo/btlo-description/index.js ***!
  \********************************************/
/*! exports provided: BtloDescriptionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtloDescriptionConfig", function() { return BtloDescriptionConfig; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/btlo/btlo-description/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/btlo/btlo-description/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/btlo/btlo-description/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/btlo/btlo-description/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);





var BtloDescriptionConfig = {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('BTLO description', 'custom-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Text to describe the BTLO.', 'custom-block'),
  icon: 'admin-page',
  category: 'text',
  parent: ['custom-block/btlo'],
  supports: {
    html: false
  },
  attributes: {
    btloClientId: {
      type: 'string'
    }
  },
  example: {},
  usesContext: ['custom-block/btlo/clientId'],

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/btlo/btlo-description/save.js":
/*!*******************************************!*\
  !*** ./src/btlo/btlo-description/save.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return { JSX.Element } Element to render.
 */

function Save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/edit.js":
/*!*****************************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/edit.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return { JSX.Element } Element to render.
 */

function Edit(props) {
  var nodeClientId = props.context['custom-block/btlo-node/clientId'];
  var nodeContainerClientId = props.context['custom-block/btlo-node-container/clientId'];
  var navClientId = props.context['custom-block/btlo-nav/clientId'];
  var buttonIndex = wp.data.select('core/block-editor').getBlockIndex(props.clientId, navClientId);
  props.setAttributes({
    nodeContainerClientId: nodeContainerClientId,
    navClientId: navClientId,
    buttonIndex: buttonIndex
  }); // get data about all nodes in the node container

  var btloNodes = wp.data.select('core/block-editor').getBlock(nodeContainerClientId).innerBlocks; // get nodes that have been named and are not the current node

  var possibleTargetNodes = [];
  btloNodes.forEach(function (node) {
    if (node.attributes.nodeName !== '' && node.clientId !== nodeClientId) {
      possibleTargetNodes.push({
        'nodeName': node.attributes.nodeName,
        'clientId': node.attributes.clientId
      });
    }
  }); // get the current target node from the parent btlo by node name

  var targetNode = btloNodes.find(function (node) {
    return node.attributes.nodeName === props.attributes.targetNodeName;
  }); // update button display

  var buttonClasses;
  var buttonTargetText; // if the target node is set

  if (targetNode) {
    // set the popup text and class
    buttonTargetText = 'navigates to node "' + props.attributes.targetNodeName + '"';
    buttonClasses = 'btn btn-outline-secondary';
    props.attributes.targetNodeClientId = targetNode.clientId;
    props.attributes.targetNodeName = targetNode.attributes.nodeName; // else if a target name exists but targetNode is false (target node couldn't be found by name)
  } else if (props.attributes.targetNodeName) {
    // update classes and popup
    buttonClasses = 'btn btn-outline-danger';
    buttonTargetText = 'node "' + props.attributes.targetNodeName + '" deleted or renamed';
    props.attributes.targetNodeClientId = null; // if no target node is set and at least one other node exists
  } else if (possibleTargetNodes.length > 0) {
    // assign the last node (that is not the current one) as target
    props.attributes.targetNodeClientId = possibleTargetNodes[possibleTargetNodes.length - 1].clientId;
    props.attributes.targetNodeName = possibleTargetNodes[possibleTargetNodes.length - 1].nodeName;
    buttonTargetText = 'navigates to node "' + props.attributes.targetNodeName + '"';
    buttonClasses = 'btn btn-outline-secondary'; // if no target is set and there are no other nodes
  } else {
    // update classes and popup
    buttonClasses = 'btn btn-outline-danger';
    buttonTargetText = 'no target available';
  } // generate options for target node select control


  var targetNodeOptions;

  if (possibleTargetNodes.length > 0) {
    targetNodeOptions = [];
    possibleTargetNodes.forEach(function (node) {
      targetNodeOptions.push({
        label: node.nodeName,
        value: node.clientId
      });
    });
    buttonClasses = 'btn btn-outline-secondary';
  } else {
    targetNodeOptions = [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('no nodes ready'),
      value: null
    }];
    props.attributes.targetNodeClientId = null;
  } // change the target node


  var handleTargetChange = function handleTargetChange() {
    var newTargetClientId = document.getElementById('nav-' + navClientId + '-button-' + buttonIndex + '-target').value;

    if (newTargetClientId) {
      props.attributes.targetNodeClientId = newTargetClientId;
    }

    props.attributes.targetNodeName = possibleTargetNodes.find(function (node) {
      return node.clientId = newTargetClientId;
    }).nodeName;
    console.log(props.attributes.targetNodeName);
  };

  console.log('button: ' + props.attributes.buttonText + ' targets node: ' + props.attributes.tra);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(buttonTargetText),
    position: "bottom center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: buttonClasses,
    id: 'nav-' + navClientId + '-button-' + buttonIndex
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(props.attributes.buttonText))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Button Settings'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Button text:'),
    value: props.attributes.buttonText,
    id: 'nav-' + navClientId + '-button-' + buttonIndex + '-text',
    onChange: function onChange(newText) {
      return props.setAttributes({
        buttonText: newText
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Navigates to node:'),
    value: props.attributes.targetNodeClientId,
    id: 'nav-' + navClientId + '-button-' + buttonIndex + '-target',
    onChange: function onChange() {
      return handleTargetChange();
    },
    options: targetNodeOptions,
    disable: !props.attributes.targetNodeClientId
  })))));
}

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/editor.scss":
/*!*********************************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/editor.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/index.js":
/*!******************************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/index.js ***!
  \******************************************************************************/
/*! exports provided: BtloButtonConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtloButtonConfig", function() { return BtloButtonConfig; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);





var BtloButtonConfig = {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('BTLO nav button', 'custom-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('A button for navigating to a BTLO-node.', 'custom-block'),
  icon: 'button',
  category: 'text',
  parent: ['custom-block/btlo-nav'],
  supports: {
    html: false
  },
  attributes: {
    btloClientId: {
      type: 'string'
    },
    nodeClientId: {
      type: 'string'
    },
    navClientId: {
      type: 'string'
    },
    buttonIndex: {
      type: 'integer'
    },
    targetNodeName: {
      type: 'string'
    },
    targetNodeClientId: {
      type: 'string',
      default: null
    },
    buttonText: {
      type: 'string',
      default: 'node link - click to edit'
    }
  },
  example: {},
  usesContext: ['custom-block/btlo-node/clientId', 'custom-block/btlo-nav/clientId', 'custom-block/btlo/nodeNames', 'custom-block/btlo-node-container/clientId'],

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/save.js":
/*!*****************************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/save.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return { JSX.Element } Element to render.
 */

function Save(props) {
  console.log(props.attributes);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn btn-outline-secondary btlo-nav-button",
    id: 'nav-' + props.attributes.navClientId + '-button-' + props.attributes.buttonIndex,
    disabled: !props.attributes.targetNodeClientId,
    "data-targetNode": props.attributes.targetNodeClientId
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(props.attributes.buttonText)));
}

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/edit.js":
/*!*****************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/edit.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




var ALLOWED_BLOCKS = ['custom-block/btlo-button'];
var TEMPLATE = [['custom-block/btlo-button']];
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return { JSX.Element } Element to render.
 */

function Edit(props) {
  var parentClientId = props.context['custom-block/btlo-node/clientId'];
  var navIndex = wp.data.select('core/block-editor').getBlockIndex(props.clientId, parentClientId);
  props.setAttributes({
    clientId: props.clientId,
    parentClientId: parentClientId,
    navIndex: navIndex
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    orientation: "horizontal",
    renderAppender: function renderAppender() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["Inserter"], {
        rootClientId: props.clientId,
        renderToggle: function renderToggle(_ref) {
          var onToggle = _ref.onToggle,
              disabled = _ref.disabled;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            className: "btn btn-primary add-block-button",
            onClick: onToggle,
            disabled: disabled,
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add a nav button'),
            icon: "plus"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add link')));
        },
        isAppender: true
      });
    }
  }));
}

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/editor.scss":
/*!*********************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/editor.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/index.js":
/*!******************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/index.js ***!
  \******************************************************************/
/*! exports provided: BtloNavConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtloNavConfig", function() { return BtloNavConfig; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);





var BtloNavConfig = {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('BTLO nav block', 'custom-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('A row of navigation buttons inside a BTLO-node.', 'custom-block'),
  icon: 'editor-insertmore',
  category: 'text',
  parent: ['custom-block/btlo-node'],
  supports: {
    html: false
  },
  attributes: {
    parentClientId: {
      type: 'string'
    },
    clientId: {
      type: 'string'
    },
    navIndex: {
      type: 'integer'
    }
  },
  example: {},
  usesContext: ['custom-block/btlo-node/clientId'],
  providesContext: {
    'custom-block/btlo-nav/navIndex': 'navIndex',
    'custom-block/btlo-nav/clientId': 'clientId'
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/save.js":
/*!*****************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/btlo-nav/save.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return { JSX.Element } Element to render.
 */

function Save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/edit.js":
/*!********************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/edit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




var ALLOWED_BLOCKS = ['custom-block/btlo-nav', 'core/image', 'core/paragraph', 'core/heading'];
var TEMPLATE = [['core/paragraph', {
  placeholder: 'Node Content'
}], ['custom-block/btlo-nav']];
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return { JSX.Element } Element to render.
 */

function Edit(props) {
  var parentBtloClientId = props.context['custom-block/btlo/clientId'];
  props.setAttributes({
    clientId: props.clientId,
    parentBtloClientId: parentBtloClientId
  });
  var parentAttributes = wp.data.select('core/block-editor').getBlock(parentBtloClientId).attributes; // let nodeNames = props.context['custom-block/btlo/nodeNames'];

  var nodeNames = parentAttributes.nodeNames;

  var handleNodeNameChange = function handleNodeNameChange() {
    var value = document.getElementById('btlo-' + parentBtloClientId + '-node-' + props.clientId + '-control').value; // remove old id from node ids array

    var currentNodeName = props.attributes.nodeName;
    nodeNames = nodeNames.filter(function (element) {
      return element.value !== currentNodeName;
    }); // add the new id to node ids array

    nodeNames.push({
      value: value,
      label: value
    }); // update the node ids array at the outermost container level

    wp.data.dispatch('core/block-editor').updateBlockAttributes(parentBtloClientId, {
      nodeNames: nodeNames
    }); // update this node's id attribute

    props.setAttributes({
      nodeName: value
    });
  };

  var handleDeleteSelf = function handleDeleteSelf() {
    // get fresh copy of node Ids
    var nodeNames = wp.data.select('core/block-editor').getBlock(parentBtloClientId).attributes.nodeNames; // remove tab data about this child from parent block

    var ownIndex = nodeNames.map(function (e) {
      return e.id;
    }).indexOf(props.attributes.id);
    nodeNames.splice(ownIndex, 1);
    wp.data.dispatch('core/block-editor').updateBlockAttributes(parentBtloClientId, {
      nodeNames: nodeNames
    }); // remove the block that calls this method

    wp.data.dispatch('core/block-editor').removeBlock(props.clientId, false);
  };

  var nodeNameText = 'give this node a name in the sidebar (node names are not displayed to users)';
  var labelClasses = 'node-index-label';

  if (props.attributes.nodeName) {
    nodeNameText = 'Node "' + props.attributes.nodeName + '"';
  } else {
    labelClasses += ' text-danger';
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edit-node-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: labelClasses
  }, nodeNameText), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "delete-tab-button btn btn-sm btn-outline-danger",
    icon: "no-alt",
    label: 'Delete this node',
    onClick: handleDeleteSelf.bind(this)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "btlo-node"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Node Settings'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("This node's name is:"),
    value: props.attributes.nodeName,
    id: 'btlo-' + parentBtloClientId + '-node-' + props.clientId + '-control',
    onChange: function onChange() {
      return handleNodeNameChange();
    }
  })))));
}

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/editor.scss":
/*!************************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/editor.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/index.js":
/*!*********************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/index.js ***!
  \*********************************************************/
/*! exports provided: BtloNodeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtloNodeConfig", function() { return BtloNodeConfig; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/btlo/btlo-node-container/btlo-node/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/btlo/btlo-node-container/btlo-node/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/btlo/btlo-node-container/btlo-node/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/btlo/btlo-node-container/btlo-node/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);





var BtloNodeConfig = {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('BTLO node', 'custom-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('One node of a BTLO.', 'custom-block'),
  icon: 'admin-page',
  category: 'text',
  parent: ['custom-block/btlo-node-container'],
  supports: {
    html: false
  },
  attributes: {
    clientId: {
      type: 'string'
    },
    btloClientId: {
      type: 'string'
    },
    nodeName: {
      type: 'string',
      default: ''
    }
  },
  example: {},
  usesContext: ['custom-block/btlo/clientId', 'custom-block/btlo-node-container/clientId', 'custom-block/btlo/nodeNames'],
  providesContext: {
    'custom-block/btlo-node/nodeIndex': 'nodeIndex',
    'custom-block/btlo-node/clientId': 'clientId'
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/btlo/btlo-node-container/btlo-node/save.js":
/*!********************************************************!*\
  !*** ./src/btlo/btlo-node-container/btlo-node/save.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return { JSX.Element } Element to render.
 */

function Save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'wp-block-custom-block-btlo-node',
    "data-nodeclientid": props.attributes.clientId
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/btlo/btlo-node-container/edit.js":
/*!**********************************************!*\
  !*** ./src/btlo/btlo-node-container/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




var ALLOWED_BLOCKS = ['custom-block/btlo-node'];
var TEMPLATE = [['custom-block/btlo-node']];
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return { JSX.Element } Element to render.
 */

function Edit(props) {
  props.setAttributes({
    clientId: props.clientId
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: false,
    renderAppender: function renderAppender() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["Inserter"], {
        rootClientId: props.clientId,
        renderToggle: function renderToggle(_ref) {
          var onToggle = _ref.onToggle,
              disabled = _ref.disabled;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            className: "btn btn-primary add-block-button",
            onClick: onToggle,
            disabled: disabled,
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add a node'),
            icon: "plus"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add Node')));
        },
        isAppender: true
      });
    }
  }));
}

/***/ }),

/***/ "./src/btlo/btlo-node-container/editor.scss":
/*!**************************************************!*\
  !*** ./src/btlo/btlo-node-container/editor.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/btlo-node-container/index.js":
/*!***********************************************!*\
  !*** ./src/btlo/btlo-node-container/index.js ***!
  \***********************************************/
/*! exports provided: BtloNodeContainerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtloNodeContainerConfig", function() { return BtloNodeContainerConfig; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/btlo/btlo-node-container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/btlo/btlo-node-container/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/btlo/btlo-node-container/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/btlo/btlo-node-container/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);





var BtloNodeContainerConfig = {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('BTLO node container', 'custom-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('containes nodes, and nothing else', 'custom-block'),
  icon: 'admin-page',
  category: 'text',
  parent: ['custom-block/btlo'],
  supports: {
    html: false
  },
  attributes: {
    clientId: {
      type: 'string'
    },
    btloClientId: {
      type: 'string'
    }
  },
  example: {},
  providesContext: {
    'custom-block/btlo-node-container/clientId': 'clientId'
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/btlo/btlo-node-container/save.js":
/*!**********************************************!*\
  !*** ./src/btlo/btlo-node-container/save.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return { JSX.Element } Element to render.
 */

function Save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'wp-block-custom-block-btlo-node-container' // data-nodeclientid={props.attributes.clientId}

  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/btlo/edit.js":
/*!**************************!*\
  !*** ./src/btlo/edit.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var ALLOWED_BLOCKS = ['custom-block/btlo-description', 'custom-block/btlo-node-container'];
var TEMPLATE = [['custom-block/btlo-description'], ['custom-block/btlo-node-container']];
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return { JSX.Element } Element to render.
 */

function Edit(props) {
  props.setAttributes({
    clientId: props.clientId
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: 'btlo-' + props.attributes.clientId
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "all"
  })));
}

/***/ }),

/***/ "./src/btlo/editor.scss":
/*!******************************!*\
  !*** ./src/btlo/editor.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/btlo/index.js":
/*!***************************!*\
  !*** ./src/btlo/index.js ***!
  \***************************/
/*! exports provided: BtloConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtloConfig", function() { return BtloConfig; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/btlo/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/btlo/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/btlo/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/btlo/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);





var BtloConfig = {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('BTLO', 'custom-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('A Branching Tree Learning Object activity.', 'custom-block'),
  icon: 'networking',
  category: 'text',
  supports: {
    html: false
  },
  attributes: {
    clientId: {
      type: 'string'
    },
    nodeNames: {
      type: 'array',
      default: []
    }
  },
  providesContext: {
    'custom-block/btlo/clientId': 'clientId',
    'custom-block/btlo/nodeNames': 'nodeNames'
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/btlo/save.js":
/*!**************************!*\
  !*** ./src/btlo/save.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return { JSX.Element } Element to render.
 */

function Save(_ref) {
  var attributes = _ref.attributes;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save({
    className: 'btlo',
    id: 'btlo-' + attributes.clientId
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _btlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btlo */ "./src/btlo/index.js");
/* harmony import */ var _btlo_btlo_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btlo/btlo-description */ "./src/btlo/btlo-description/index.js");
/* harmony import */ var _btlo_btlo_node_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btlo/btlo-node-container */ "./src/btlo/btlo-node-container/index.js");
/* harmony import */ var _btlo_btlo_node_container_btlo_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btlo/btlo-node-container/btlo-node */ "./src/btlo/btlo-node-container/btlo-node/index.js");
/* harmony import */ var _btlo_btlo_node_container_btlo_node_btlo_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btlo/btlo-node-container/btlo-node/btlo-nav */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/index.js");
/* harmony import */ var _btlo_btlo_node_container_btlo_node_btlo_nav_btlo_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button */ "./src/btlo/btlo-node-container/btlo-node/btlo-nav/btlo-button/index.js");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node_modules/bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var _node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_9__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */







/**
 * import bootstrap js and scss
 */

 // import "bootstrap";



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('custom-block/btlo', _btlo__WEBPACK_IMPORTED_MODULE_1__["BtloConfig"]);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('custom-block/btlo-description', _btlo_btlo_description__WEBPACK_IMPORTED_MODULE_2__["BtloDescriptionConfig"]);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('custom-block/btlo-node-container', _btlo_btlo_node_container__WEBPACK_IMPORTED_MODULE_3__["BtloNodeContainerConfig"]);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('custom-block/btlo-node', _btlo_btlo_node_container_btlo_node__WEBPACK_IMPORTED_MODULE_4__["BtloNodeConfig"]);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('custom-block/btlo-nav', _btlo_btlo_node_container_btlo_node_btlo_nav__WEBPACK_IMPORTED_MODULE_5__["BtloNavConfig"]);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('custom-block/btlo-button', _btlo_btlo_node_container_btlo_node_btlo_nav_btlo_button__WEBPACK_IMPORTED_MODULE_6__["BtloButtonConfig"]);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map