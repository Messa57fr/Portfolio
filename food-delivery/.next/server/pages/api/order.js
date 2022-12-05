"use strict";
(() => {
var exports = {};
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 2338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
;// CONCATENATED MODULE: ./lib/client.js


const client = client_default()({
    projectId: "l7ei6hag",
    dataset: "production",
    apiVersion: "2022-07-16",
    useCdn: true,
    token: "skcn7TEogTyNXIfNUciZTjCC18dIRfep2zLGLe6UzawTZVfrRnhAd8BunojwOSrmGei6stQSIsw8f9wLsX9WvopXUQLKK2z14QXd45JEiVbCmXASVFwkB66hgUHTov7Z5vOOqGvxvUKyeZAt6Jqwi1OKEi6pMaJrDjRyFprcoDCkK1uKDpQO"
});
const builder = image_url_default()(client);
const urlFor = (source)=>builder.image(source);

;// CONCATENATED MODULE: ./pages/api/order.js

async function handler(req, res) {
    switch(req.method){
        case "POST":
            const newOrder = await JSON.parse(req.body);
            try {
                await client.create({
                    _type: "order",
                    name: newOrder.name,
                    address: newOrder.address,
                    phone: newOrder.phone,
                    total: newOrder.total,
                    method: newOrder.method,
                    status: 1
                }).then((data)=>{
                    res.status(200).json(data._id);
                });
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    msg: "error, check console"
                });
            }
            break;
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2338));
module.exports = __webpack_exports__;

})();