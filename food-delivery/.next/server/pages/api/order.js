"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "(api)/./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"l7ei6hag\",\n    dataset: \"production\",\n    apiVersion: \"2022-07-16\",\n    useCdn: true,\n    token: \"skcn7TEogTyNXIfNUciZTjCC18dIRfep2zLGLe6UzawTZVfrRnhAd8BunojwOSrmGei6stQSIsw8f9wLsX9WvopXUQLKK2z14QXd45JEiVbCmXASVFwkB66hgUHTov7Z5vOOqGvxvUKyeZAt6Jqwi1OKEi6pMaJrDjRyFprcoDCkK1uKDpQO\"\n});\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);\nconst urlFor = (source)=>builder.image(source);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNLO0FBQ3hDLE1BQU1FLE1BQU0sR0FBR0YscURBQVksQ0FBQztJQUNqQ0csU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFLElBQUk7SUFDWkMsS0FBSyxFQUFFLHNMQUFzTDtDQUM5TCxDQUFDO0FBRUYsTUFBTUMsT0FBTyxHQUFHUCx3REFBZSxDQUFDQyxNQUFNLENBQUM7QUFDaEMsTUFBTU8sTUFBTSxHQUFHLENBQUNDLE1BQU0sR0FBS0YsT0FBTyxDQUFDRyxLQUFLLENBQUNELE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bpenphc2hvcC8uL2xpYi9jbGllbnQuanM/ZTY5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50JztcbmltcG9ydCBJbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiBcImw3ZWk2aGFnXCIsXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgYXBpVmVyc2lvbjogXCIyMDIyLTA3LTE2XCIsXG4gIHVzZUNkbjogdHJ1ZSxcbiAgdG9rZW46IFwic2tjbjdURW9nVHlOWElmTlVjaVpUakNDMThkSVJmZXAyekxHTGU2VXphd1RaVmZyUm5oQWQ4QnVub2p3T1NybUdlaTZzdFFTSXN3OGY5d0xzWDlXdm9wWFVRTEtLMnoxNFFYZDQ1SkVpVmJDbVhBU1ZGd2tCNjZoZ1VIVG92N1o1dk9PcUd2eHZVS3llWkF0Nkpxd2kxT0tFaTZwTWFKckRqUnlGcHJjb0RDa0sxdUtEcFFPXCJcbn0pXG5cbmNvbnN0IGJ1aWxkZXIgPSBJbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiBidWlsZGVyLmltYWdlKHNvdXJjZSlcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJJbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsInRva2VuIiwiYnVpbGRlciIsInVybEZvciIsInNvdXJjZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/client.js\n");

/***/ }),

/***/ "(api)/./pages/api/order.js":
/*!****************************!*\
  !*** ./pages/api/order.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/client */ \"(api)/./lib/client.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"POST\":\n            const newOrder = await JSON.parse(req.body);\n            try {\n                await _lib_client__WEBPACK_IMPORTED_MODULE_0__.client.create({\n                    _type: \"order\",\n                    name: newOrder.name,\n                    address: newOrder.address,\n                    phone: newOrder.phone,\n                    total: newOrder.total,\n                    method: newOrder.method,\n                    status: 1\n                }).then((data)=>{\n                    res.status(200).json(data._id);\n                });\n            } catch (error) {\n                console.log(error);\n                res.status(500).json({\n                    msg: \"error, check console\"\n                });\n            }\n            break;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUM7QUFFeEIsZUFBZUMsT0FBTyxDQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUM5QyxPQUFPRCxHQUFHLENBQUNFLE1BQU07UUFFZixLQUFLLE1BQU07WUFDVCxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO1lBQzNDLElBQUk7Z0JBQ0YsTUFBTVIsc0RBQWEsQ0FBQztvQkFDbEJVLEtBQUssRUFBRSxPQUFPO29CQUNkQyxJQUFJLEVBQUVOLFFBQVEsQ0FBQ00sSUFBSTtvQkFDbkJDLE9BQU8sRUFBRVAsUUFBUSxDQUFDTyxPQUFPO29CQUN6QkMsS0FBSyxFQUFFUixRQUFRLENBQUNRLEtBQUs7b0JBQ3JCQyxLQUFLLEVBQUVULFFBQVEsQ0FBQ1MsS0FBSztvQkFDckJWLE1BQU0sRUFBRUMsUUFBUSxDQUFDRCxNQUFNO29CQUN2QlcsTUFBTSxFQUFFLENBQUM7aUJBQ1YsQ0FBQyxDQUFDQyxJQUFJLENBQUUsQ0FBQ0MsSUFBSSxHQUFLO29CQUNqQmQsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQztpQkFDaEMsQ0FBQyxDQUFDO2FBQ0osQ0FDRCxPQUFPQyxLQUFLLEVBQUU7Z0JBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztnQkFDbkJqQixHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csSUFBSSxDQUFDO29CQUFDSyxHQUFHLEVBQUUsc0JBQXNCO2lCQUFDLENBQUMsQ0FBQzthQUNyRDtZQUNELE1BQU07S0FDVDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emFzaG9wLy4vcGFnZXMvYXBpL29yZGVyLmpzPzM5OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjbGllbnR9IGZyb20gXCIuLi8uLi9saWIvY2xpZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlciAocmVxLCByZXMpe1xuICBzd2l0Y2gocmVxLm1ldGhvZClcbiAge1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICBjb25zdCBuZXdPcmRlciA9IGF3YWl0IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY2xpZW50LmNyZWF0ZSh7XG4gICAgICAgICAgX3R5cGU6IFwib3JkZXJcIixcbiAgICAgICAgICBuYW1lOiBuZXdPcmRlci5uYW1lLFxuICAgICAgICAgIGFkZHJlc3M6IG5ld09yZGVyLmFkZHJlc3MsXG4gICAgICAgICAgcGhvbmU6IG5ld09yZGVyLnBob25lLFxuICAgICAgICAgIHRvdGFsOiBuZXdPcmRlci50b3RhbCxcbiAgICAgICAgICBtZXRob2Q6IG5ld09yZGVyLm1ldGhvZCxcbiAgICAgICAgICBzdGF0dXM6IDFcbiAgICAgICAgfSkudGhlbiAoKGRhdGEpID0+IHtcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhLl9pZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21zZzogXCJlcnJvciwgY2hlY2sgY29uc29sZVwifSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuZXdPcmRlciIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJjcmVhdGUiLCJfdHlwZSIsIm5hbWUiLCJhZGRyZXNzIiwicGhvbmUiLCJ0b3RhbCIsInN0YXR1cyIsInRoZW4iLCJkYXRhIiwianNvbiIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/order.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order.js"));
module.exports = __webpack_exports__;

})();