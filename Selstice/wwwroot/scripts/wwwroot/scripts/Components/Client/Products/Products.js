"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ProductCarousel_1 = require("../ProductCarousel/ProductCarousel");
var Button_1 = require("../Button/Button");
require("../Products/_ProductsStylesheet.scss");
require("aos/dist/aos.css");
var Products = (function (_super) {
    __extends(Products, _super);
    function Products() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Products.prototype.componentDidMount = function () {
        //setTimeout(function () {
        //    AOS.init({
        //        duration: 2000
        //    })
        //}, 5000);
    };
    Products.prototype.render = function () {
        return (React.createElement("div", { className: "products" }, React.createElement("div", { className: "products__container-description" }, React.createElement("h5", { className: "products__title" }, "Products"), React.createElement("p", { className: "products__description" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), React.createElement(Button_1.default, { Text: "Learn More", Color: "#00B99A" })), React.createElement("div", { className: "products__images" }, React.createElement(ProductCarousel_1.default, null))));
    };
    return Products;
}(React.Component));
exports.Products = Products;
exports.default = Products;
//# sourceMappingURL=Products.js.map