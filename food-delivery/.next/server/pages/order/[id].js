(() => {
var exports = {};
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 8306:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Order_container__MlAs7",
	"heading": "Order_heading__Y1i7k",
	"details": "Order_details__3vlvr",
	"statusContainer": "Order_statusContainer__yU2c2",
	"status": "Order_status__O10qm",
	"spinner": "Order_spinner__JlsQk",
	"pending": "Order_pending__6GZsj",
	"completed": "Order_completed__JL6j_"
};


/***/ }),

/***/ 9755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Cooking.fcf31c68.png","height":174,"width":174,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAm0lEQVR42jXPMQrCQBCF4fRWYiNWGozaqE2agEJA3MkBxEIsgilEBCtBCFGDIOlyhJwy2+efYhc+FnbePFhPT2vExx1vFHhakwTQYTKzRkoeM+yxQMbwj0C3X7hhiR6GuLC40zYN5DgjpSnivmKALb4a+CBEhBHGeGDiGgrEOMDHBiFiF1ihwRF9pFjjZ0Xm7psn5ChRoca0NeJ18Fdwa0vuCgMAAAAASUVORK5CYII="});

/***/ }),

/***/ 971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/onway.dd258833.png","height":171,"width":171,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqElEQVR42jXMIQ4CQQyF4W64AAmKICAEgeMSZDoJbMJBQEFYhcIgUGgEDgyGIyAQGAynWIWY0ezfzaz4Mp32tRLVC7KoKtHVMgyC0z669ZBCsEaeQm/qf1A9MvBmSePJlVbgIs4osbLhKKWnvG1cGdxwp14Q0AOfX3R+ks6/bIHFD725BQps8KVRGuo9tnhY4IIdPFsWzlHghJkE1SFbPYYWbnQwFhGpAJyodwYChOZ+AAAAAElFTkSuQmCC"});

/***/ }),

/***/ 9595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/spinner.7509e2b7.svg","height":201,"width":201});

/***/ }),

/***/ 5637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Orders),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(786);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7267);
/* harmony import */ var _styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8306);
/* harmony import */ var _styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7686);
/* harmony import */ var _iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_Cooking_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var _assets_onway_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(971);
/* harmony import */ var _assets_spinner_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9595);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_2__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const getServerSideProps = async ({ params  })=>{
    const query = `*[_type == 'order' && _id == '${params.id}']`;
    const order = await _lib_client__WEBPACK_IMPORTED_MODULE_1__/* .client.fetch */ .L.fetch(query);
    return {
        props: {
            order: order[0]
        }
    };
};
function Orders({ order  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        if (order.status > 3) {
            localStorage.clear();
        }
    }, [
        order
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().heading),
                    children: "Order in Process"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().details),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Order ID"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: order._id
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Customer Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: order.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Phone"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: order.phone
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Method"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: order.method === 0 ? "Cash on Delivery" : "Online Payment(Paid)"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Total"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "$ ",
                                        order.total
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().statusContainer),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().status),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_4__.UilBill, {
                                    width: 50,
                                    height: 50
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Payment"
                                }),
                                order.method === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().pending),
                                    children: "On Delivery"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().completed),
                                    children: "Completed"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().status),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    src: _assets_Cooking_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                    alt: "",
                                    width: 50,
                                    height: 50
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Cooking"
                                }),
                                order.status === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().spinner),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        src: _assets_spinner_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                        alt: ""
                                    })
                                }),
                                order.status > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().completed),
                                    children: "Completed"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().status),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    src: _assets_onway_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                    alt: "",
                                    width: 50,
                                    height: 50
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "On the Way"
                                }),
                                order.status === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().spinner),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        src: _assets_spinner_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                        alt: ""
                                    })
                                }),
                                order.status > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().completed),
                                    children: "Completed"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().status),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_4__.UilBox, {
                                    width: 50,
                                    height: 50
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Delivered"
                                }),
                                order.status === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().spinner),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        src: _assets_spinner_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                        alt: ""
                                    })
                                }),
                                order.status > 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().completed),
                                    children: "Completed"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7686:
/***/ ((module) => {

"use strict";
module.exports = require("@iconscout/react-unicons");

/***/ }),

/***/ 1097:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,494], () => (__webpack_exec__(5637)));
module.exports = __webpack_exports__;

})();