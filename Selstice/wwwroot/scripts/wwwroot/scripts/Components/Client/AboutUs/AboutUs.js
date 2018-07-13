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
require("../AboutUs/_AboutUsStylesheet.scss");
var Button_1 = require("../Button/Button");
require("../../../Stylesheets/Variables/ColorThemes.scss");
var AboutUs = (function (_super) {
    __extends(AboutUs, _super);
    function AboutUs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutUs.prototype.render = function () {
        return (React.createElement("div", { className: "about-us" }, React.createElement("div", { className: "about-us__container-description" }, React.createElement("h5", { className: "about-us__title" }, "Who are we?"), React.createElement("p", { className: "about-us__description" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), React.createElement(Button_1.default, { Text: "Learn More", Color: "#EA597A" })), React.createElement("div", { className: "about-us__images" }, React.createElement("img", { src: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", alt: "HappyCat" }))));
    };
    return AboutUs;
}(React.Component));
exports.AboutUs = AboutUs;
exports.default = AboutUs;
//# sourceMappingURL=AboutUs.js.map