(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: start, __wbindgen_string_new, __wbg_instanceof_Window_adf3196bdc02b386, __wbg_document_6cc8d0b87c0a99b9, __wbg_instanceof_WebGlRenderingContext_a37cc8c6016098e4, __wbg_bufferData_0690087420a9f115, __wbg_attachShader_d213e7ecd3432f4a, __wbg_bindBuffer_f0ba4bbfd5b08434, __wbg_clear_c9cc14c37d12a838, __wbg_clearColor_73695d8d401f87e6, __wbg_compileShader_961db910485f4a76, __wbg_createBuffer_4deb008968921e7f, __wbg_createProgram_b502951c403f671a, __wbg_createShader_7bd4296ba9c32133, __wbg_drawArrays_cbb0990b0388fa17, __wbg_enableVertexAttribArray_4b6614b028d442ff, __wbg_getProgramInfoLog_a84afc629d343c75, __wbg_getProgramParameter_327111ebb2bca7fb, __wbg_getShaderInfoLog_a9529ee3f2ebd3e0, __wbg_getShaderParameter_d7853b2d4822ad9f, __wbg_linkProgram_7c29f15a5150d174, __wbg_shaderSource_bf6be2cc97a14fc1, __wbg_useProgram_51f7808f5955c03a, __wbg_vertexAttribPointer_76ddec1ed8425967, __wbg_getElementById_0cb6ad9511b1efc0, __wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3, __wbg_getContext_37ca0870acb096d9, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_buffer_49131c283a06686f, __wbg_newnoargs_f3b8a801d5d4b079, __wbg_call_8e95613cc6524977, __wbg_globalThis_b9277fc37e201fe5, __wbg_self_07b2f89e82ceb76d, __wbg_window_ba85d88572adc0dc, __wbg_global_e16303fe83e1d57f, __wbg_newwithbyteoffsetandlength_205200207c0c1946, __wbindgen_object_drop_ref, __wbindgen_boolean_get, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"start\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_adf3196bdc02b386\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_Window_adf3196bdc02b386\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_6cc8d0b87c0a99b9\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_document_6cc8d0b87c0a99b9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_WebGlRenderingContext_a37cc8c6016098e4\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_WebGlRenderingContext_a37cc8c6016098e4\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bufferData_0690087420a9f115\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_bufferData_0690087420a9f115\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_attachShader_d213e7ecd3432f4a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_attachShader_d213e7ecd3432f4a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bindBuffer_f0ba4bbfd5b08434\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_bindBuffer_f0ba4bbfd5b08434\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clear_c9cc14c37d12a838\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_clear_c9cc14c37d12a838\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clearColor_73695d8d401f87e6\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_clearColor_73695d8d401f87e6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_compileShader_961db910485f4a76\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_compileShader_961db910485f4a76\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createBuffer_4deb008968921e7f\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createBuffer_4deb008968921e7f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createProgram_b502951c403f671a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createProgram_b502951c403f671a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createShader_7bd4296ba9c32133\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createShader_7bd4296ba9c32133\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawArrays_cbb0990b0388fa17\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawArrays_cbb0990b0388fa17\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_enableVertexAttribArray_4b6614b028d442ff\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_enableVertexAttribArray_4b6614b028d442ff\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramInfoLog_a84afc629d343c75\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getProgramInfoLog_a84afc629d343c75\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramParameter_327111ebb2bca7fb\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getProgramParameter_327111ebb2bca7fb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderInfoLog_a9529ee3f2ebd3e0\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getShaderInfoLog_a9529ee3f2ebd3e0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderParameter_d7853b2d4822ad9f\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getShaderParameter_d7853b2d4822ad9f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_linkProgram_7c29f15a5150d174\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_linkProgram_7c29f15a5150d174\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_shaderSource_bf6be2cc97a14fc1\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_shaderSource_bf6be2cc97a14fc1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_useProgram_51f7808f5955c03a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_useProgram_51f7808f5955c03a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_vertexAttribPointer_76ddec1ed8425967\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_vertexAttribPointer_76ddec1ed8425967\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_0cb6ad9511b1efc0\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getElementById_0cb6ad9511b1efc0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_37ca0870acb096d9\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getContext_37ca0870acb096d9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_49131c283a06686f\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_buffer_49131c283a06686f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_f3b8a801d5d4b079\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_f3b8a801d5d4b079\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_8e95613cc6524977\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_8e95613cc6524977\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_b9277fc37e201fe5\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_b9277fc37e201fe5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_07b2f89e82ceb76d\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_07b2f89e82ceb76d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_ba85d88572adc0dc\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_ba85d88572adc0dc\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_e16303fe83e1d57f\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_e16303fe83e1d57f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithbyteoffsetandlength_205200207c0c1946\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithbyteoffsetandlength_205200207c0c1946\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_boolean_get\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_rethrow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_memory\"]; });\n\n\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/*! exports provided: start, __wbindgen_string_new, __wbg_instanceof_Window_adf3196bdc02b386, __wbg_document_6cc8d0b87c0a99b9, __wbg_instanceof_WebGlRenderingContext_a37cc8c6016098e4, __wbg_bufferData_0690087420a9f115, __wbg_attachShader_d213e7ecd3432f4a, __wbg_bindBuffer_f0ba4bbfd5b08434, __wbg_clear_c9cc14c37d12a838, __wbg_clearColor_73695d8d401f87e6, __wbg_compileShader_961db910485f4a76, __wbg_createBuffer_4deb008968921e7f, __wbg_createProgram_b502951c403f671a, __wbg_createShader_7bd4296ba9c32133, __wbg_drawArrays_cbb0990b0388fa17, __wbg_enableVertexAttribArray_4b6614b028d442ff, __wbg_getProgramInfoLog_a84afc629d343c75, __wbg_getProgramParameter_327111ebb2bca7fb, __wbg_getShaderInfoLog_a9529ee3f2ebd3e0, __wbg_getShaderParameter_d7853b2d4822ad9f, __wbg_linkProgram_7c29f15a5150d174, __wbg_shaderSource_bf6be2cc97a14fc1, __wbg_useProgram_51f7808f5955c03a, __wbg_vertexAttribPointer_76ddec1ed8425967, __wbg_getElementById_0cb6ad9511b1efc0, __wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3, __wbg_getContext_37ca0870acb096d9, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_buffer_49131c283a06686f, __wbg_newnoargs_f3b8a801d5d4b079, __wbg_call_8e95613cc6524977, __wbg_globalThis_b9277fc37e201fe5, __wbg_self_07b2f89e82ceb76d, __wbg_window_ba85d88572adc0dc, __wbg_global_e16303fe83e1d57f, __wbg_newwithbyteoffsetandlength_205200207c0c1946, __wbindgen_object_drop_ref, __wbindgen_boolean_get, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, module, TextEncoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_adf3196bdc02b386\", function() { return __wbg_instanceof_Window_adf3196bdc02b386; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_6cc8d0b87c0a99b9\", function() { return __wbg_document_6cc8d0b87c0a99b9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_WebGlRenderingContext_a37cc8c6016098e4\", function() { return __wbg_instanceof_WebGlRenderingContext_a37cc8c6016098e4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bufferData_0690087420a9f115\", function() { return __wbg_bufferData_0690087420a9f115; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_attachShader_d213e7ecd3432f4a\", function() { return __wbg_attachShader_d213e7ecd3432f4a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bindBuffer_f0ba4bbfd5b08434\", function() { return __wbg_bindBuffer_f0ba4bbfd5b08434; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clear_c9cc14c37d12a838\", function() { return __wbg_clear_c9cc14c37d12a838; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clearColor_73695d8d401f87e6\", function() { return __wbg_clearColor_73695d8d401f87e6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_compileShader_961db910485f4a76\", function() { return __wbg_compileShader_961db910485f4a76; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createBuffer_4deb008968921e7f\", function() { return __wbg_createBuffer_4deb008968921e7f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createProgram_b502951c403f671a\", function() { return __wbg_createProgram_b502951c403f671a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createShader_7bd4296ba9c32133\", function() { return __wbg_createShader_7bd4296ba9c32133; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawArrays_cbb0990b0388fa17\", function() { return __wbg_drawArrays_cbb0990b0388fa17; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_enableVertexAttribArray_4b6614b028d442ff\", function() { return __wbg_enableVertexAttribArray_4b6614b028d442ff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramInfoLog_a84afc629d343c75\", function() { return __wbg_getProgramInfoLog_a84afc629d343c75; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramParameter_327111ebb2bca7fb\", function() { return __wbg_getProgramParameter_327111ebb2bca7fb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderInfoLog_a9529ee3f2ebd3e0\", function() { return __wbg_getShaderInfoLog_a9529ee3f2ebd3e0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderParameter_d7853b2d4822ad9f\", function() { return __wbg_getShaderParameter_d7853b2d4822ad9f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_linkProgram_7c29f15a5150d174\", function() { return __wbg_linkProgram_7c29f15a5150d174; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_shaderSource_bf6be2cc97a14fc1\", function() { return __wbg_shaderSource_bf6be2cc97a14fc1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_useProgram_51f7808f5955c03a\", function() { return __wbg_useProgram_51f7808f5955c03a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_vertexAttribPointer_76ddec1ed8425967\", function() { return __wbg_vertexAttribPointer_76ddec1ed8425967; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_0cb6ad9511b1efc0\", function() { return __wbg_getElementById_0cb6ad9511b1efc0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3\", function() { return __wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_37ca0870acb096d9\", function() { return __wbg_getContext_37ca0870acb096d9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_49131c283a06686f\", function() { return __wbg_buffer_49131c283a06686f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_f3b8a801d5d4b079\", function() { return __wbg_newnoargs_f3b8a801d5d4b079; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_8e95613cc6524977\", function() { return __wbg_call_8e95613cc6524977; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_b9277fc37e201fe5\", function() { return __wbg_globalThis_b9277fc37e201fe5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_07b2f89e82ceb76d\", function() { return __wbg_self_07b2f89e82ceb76d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_ba85d88572adc0dc\", function() { return __wbg_window_ba85d88572adc0dc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_e16303fe83e1d57f\", function() { return __wbg_global_e16303fe83e1d57f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithbyteoffsetandlength_205200207c0c1946\", function() { return __wbg_newwithbyteoffsetandlength_205200207c0c1946; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n/**\n*/\nfunction start() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n}\n\nfunction logError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n                } catch(_) {\n                    return \"<failed to stringify thrown value>\";\n                }\n            }());\n            console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n            throw e;\n        }\n    };\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_instanceof_Window_adf3196bdc02b386 = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof Window;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_document_6cc8d0b87c0a99b9 = logError(function(arg0) {\n    var ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_instanceof_WebGlRenderingContext_a37cc8c6016098e4 = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof WebGLRenderingContext;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_bufferData_0690087420a9f115 = logError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);\n});\n\nconst __wbg_attachShader_d213e7ecd3432f4a = logError(function(arg0, arg1, arg2) {\n    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));\n});\n\nconst __wbg_bindBuffer_f0ba4bbfd5b08434 = logError(function(arg0, arg1, arg2) {\n    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));\n});\n\nconst __wbg_clear_c9cc14c37d12a838 = logError(function(arg0, arg1) {\n    getObject(arg0).clear(arg1 >>> 0);\n});\n\nconst __wbg_clearColor_73695d8d401f87e6 = logError(function(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).clearColor(arg1, arg2, arg3, arg4);\n});\n\nconst __wbg_compileShader_961db910485f4a76 = logError(function(arg0, arg1) {\n    getObject(arg0).compileShader(getObject(arg1));\n});\n\nconst __wbg_createBuffer_4deb008968921e7f = logError(function(arg0) {\n    var ret = getObject(arg0).createBuffer();\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_createProgram_b502951c403f671a = logError(function(arg0) {\n    var ret = getObject(arg0).createProgram();\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_createShader_7bd4296ba9c32133 = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).createShader(arg1 >>> 0);\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_drawArrays_cbb0990b0388fa17 = logError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);\n});\n\nconst __wbg_enableVertexAttribArray_4b6614b028d442ff = logError(function(arg0, arg1) {\n    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);\n});\n\nconst __wbg_getProgramInfoLog_a84afc629d343c75 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg1).getProgramInfoLog(getObject(arg2));\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n});\n\nconst __wbg_getProgramParameter_327111ebb2bca7fb = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbg_getShaderInfoLog_a9529ee3f2ebd3e0 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg1).getShaderInfoLog(getObject(arg2));\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n});\n\nconst __wbg_getShaderParameter_d7853b2d4822ad9f = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbg_linkProgram_7c29f15a5150d174 = logError(function(arg0, arg1) {\n    getObject(arg0).linkProgram(getObject(arg1));\n});\n\nconst __wbg_shaderSource_bf6be2cc97a14fc1 = logError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));\n});\n\nconst __wbg_useProgram_51f7808f5955c03a = logError(function(arg0, arg1) {\n    getObject(arg0).useProgram(getObject(arg1));\n});\n\nconst __wbg_vertexAttribPointer_76ddec1ed8425967 = logError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {\n    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);\n});\n\nconst __wbg_getElementById_0cb6ad9511b1efc0 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3 = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof HTMLCanvasElement;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_getContext_37ca0870acb096d9 = handleError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbg_buffer_49131c283a06686f = logError(function(arg0) {\n    var ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n});\n\nconst __wbg_newnoargs_f3b8a801d5d4b079 = logError(function(arg0, arg1) {\n    var ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_call_8e95613cc6524977 = handleError(function(arg0, arg1) {\n    var ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_globalThis_b9277fc37e201fe5 = handleError(function() {\n    var ret = globalThis.globalThis;\n    return addHeapObject(ret);\n});\n\nconst __wbg_self_07b2f89e82ceb76d = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_window_ba85d88572adc0dc = handleError(function() {\n    var ret = window.window;\n    return addHeapObject(ret);\n});\n\nconst __wbg_global_e16303fe83e1d57f = handleError(function() {\n    var ret = global.global;\n    return addHeapObject(ret);\n});\n\nconst __wbg_newwithbyteoffsetandlength_205200207c0c1946 = logError(function(arg0, arg1, arg2) {\n    var ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_boolean_get = function(arg0) {\n    const v = getObject(arg0);\n    var ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;\n    _assertNum(ret);\n    return ret;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\nconst __wbindgen_memory = function() {\n    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"];\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, start, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);