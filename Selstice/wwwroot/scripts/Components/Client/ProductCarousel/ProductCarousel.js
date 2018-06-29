"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_slick_1 = require("react-slick");
require("../ProductCarousel/_ProductCarouselStylesheet.scss");
require("../../../node_modules/slick-carousel/slick/slick.scss");
//import '../../../Stylesheets/slick.scss';
//import '../../../Stylesheets/_slick-theme.scss'
require("../../../node_modules/slick-carousel/slick/slick-theme.scss");
require("../../../wwwroot/images/CatPics/Cat1.jpg");
var ProductCarousel = /** @class */ (function (_super) {
    __extends(ProductCarousel, _super);
    function ProductCarousel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductCarousel.prototype.render = function () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (React.createElement(react_slick_1.default, __assign({ className: "product-carousel" }, settings),
            React.createElement("div", { className: "product-carousel__product-container" },
                React.createElement("img", { className: "product-carousel__product-image", src: "'../../../wwwroot/images/CatPics/Cat1.jpg'" })),
            React.createElement("div", { className: "product-carousel__product-container" },
                React.createElement("img", { className: "product-carousel__product-image", src: "'../../../wwwroot/images/CatPics/Cat2.jpg'" })),
            React.createElement("div", { className: "product-carousel__product-container" },
                React.createElement("img", { className: "product-carousel__product-image", src: "'../../../wwwroot/images/CatPics/Cat3.jpg'" }))));
    };
    return ProductCarousel;
}(React.Component));
exports.ProductCarousel = ProductCarousel;
exports.default = ProductCarousel;
//# sourceMappingURL=ProductCarousel.js.map