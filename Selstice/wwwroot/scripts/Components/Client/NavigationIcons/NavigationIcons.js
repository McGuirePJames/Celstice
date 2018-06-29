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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../NavigationIcons/_NavigationIcons.scss");
var NavigationIcons = /** @class */ (function (_super) {
    __extends(NavigationIcons, _super);
    function NavigationIcons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationIcons.prototype.render = function () {
        return (React.createElement("div", { className: "navigation-icons" },
            React.createElement("p", { className: "navigation-icons__icon" }, "About Us"),
            React.createElement("p", { className: "navigation-icons__icon" }, "Products"),
            React.createElement("img", { className: "navigation-icons__icon navigation-icons__company-logo", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" }),
            React.createElement("p", { className: "navigation-icons__icon" }, "Services"),
            React.createElement("p", { className: "navigation-icons__icon" }, "Contact Us")));
    };
    return NavigationIcons;
}(React.Component));
exports.NavigationIcons = NavigationIcons;
exports.default = NavigationIcons;
//# sourceMappingURL=NavigationIcons.js.map