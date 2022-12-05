(() => {
var exports = {};
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 2874:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Pizza_container__oASHf",
	"imageWrapper": "Pizza_imageWrapper__FNdxO",
	"right": "Pizza_right__oy8kL",
	"size": "Pizza_size__jTgKh",
	"sizeVariants": "Pizza_sizeVariants__7cusA",
	"quantity": "Pizza_quantity___F6jL",
	"counter": "Pizza_counter__TaBmF",
	"btn": "Pizza_btn__LJtmP",
	"selected": "Pizza_selected__Rok_J"
};


/***/ }),

/***/ 8324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ArrowLeft.d7380a1d.png","height":20,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAlElEQVR42k2MMQrCQBBFxyB4D72EpSCZWfBKNoInsbXwAAZs7K09hmRXjCSub9ks5MNnmDfzvyS1arNgbi6j3mrLbr2pxE+gr3Xl1c5BbcBHSXrVtgAe8BdHry4SugvLDj+pjTjBjhTTruILVPvgH3AIOdmk46mkgD3HPh+tkSSWLalHacm17ibASkbxvWdveebJLn8iMGhXwACYgQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 6967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ArrowRight.d2ed5034.png","height":20,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAiUlEQVR42k2PsQ0CQQwELSAgoQMCAlrB64wUiW7ohpiYlC4QPfC3n6B/WOv+xFuawLvjk854wIaOrU1TECtro+Ih3sXj0jnWmfWIBUWa34akV3Gc5peDGMUnBZUp3ojYWy70ejmJPZFS3K3ZCgYFI4HcKc7GWowp1CKuxX1nOQo71ief4vj/EpY/bk1mtWp5E8YAAAAASUVORK5CYII="});

/***/ }),

/***/ 7597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pizza),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7267);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(786);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2874);
/* harmony import */ var _styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_ArrowLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8324);
/* harmony import */ var _assets_ArrowRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6967);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(537);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _store_store__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _store_store__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Pizza({ pizza  }) {
    const src = (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(pizza.image).url();
    const { 0: Size , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { 0: Quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    // Handle Quantity
    const handleQuan = (type)=>{
        type == "inc" ? setQuantity((prev)=>prev + 1) : Quantity === 1 ? null : setQuantity((prev)=>prev - 1);
    };
    // Add to cart
    const addPizza = (0,_store_store__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .o)((state)=>state.addPizza);
    const addToCart = ()=>{
        addPizza({
            ...pizza,
            price: pizza.price[Size],
            quantity: Quantity,
            size: Size
        });
        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"].success("Added To Cart");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().imageWrapper),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        loader: ()=>src,
                        alt: "",
                        src: src,
                        layout: "fill",
                        unoptimized: true,
                        objectFit: "cover"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().right),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: pizza.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: pizza.details
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "var(--themeRed)"
                                    },
                                    children: "$ "
                                }),
                                pizza.price[Size]
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().size),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Size"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().sizeVariants),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>setSize(0),
                                            className: Size === 0 ? (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().selected) : "",
                                            children: "Small"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>setSize(1),
                                            className: Size === 1 ? (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().selected) : "",
                                            children: "Medium"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>setSize(2),
                                            className: Size === 2 ? (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().selected) : "",
                                            children: "Large"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().quantity),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().counter),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: _assets_ArrowLeft_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                        height: 20,
                                        width: 20,
                                        alt: "",
                                        objectFit: "contain",
                                        onClick: ()=>handleQuan("dec")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            " ",
                                            Quantity
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: _assets_ArrowRight_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                        height: 20,
                                        width: 20,
                                        alt: "",
                                        objectFit: "contain",
                                        onClick: ()=>handleQuan("inc")
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `btn ${(_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_9___default().btn)}`,
                            onClick: addToCart,
                            children: "Add to Cart"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.Toaster, {})
            ]
        })
    });
};
;
async function getStaticPaths() {
    const paths = await _lib_client__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(`*[_type == 'pizza' && defined(slug.current)][].slug.current`);
    return {
        paths: paths.map((slug)=>({
                params: {
                    slug
                }
            })),
        fallback: "blocking"
    };
}
async function getStaticProps(context) {
    const { slug =""  } = context.params;
    const pizza = await _lib_client__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(`*[_type == "pizza" && slug.current == '${slug}'][0]`);
    return {
        props: {
            pizza
        }
    };
}

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

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,494], () => (__webpack_exec__(7597)));
module.exports = __webpack_exports__;

})();