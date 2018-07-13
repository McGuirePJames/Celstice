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
require("../NavigationIcons/_NavigationIcons.scss");
var NavigationIcons = (function (_super) {
    __extends(NavigationIcons, _super);
    function NavigationIcons(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.handleNavigationIconClick = _this.handleNavigationIconClick.bind(_this);
        return _this;
    }
    NavigationIcons.prototype.render = function () {
        return (React.createElement("div", { className: "navigation-icons" }, React.createElement("div", { className: "navigation-icons__container" }, React.createElement("p", { className: "navigation-icons__icon", "data-sibling-id": "scrollToAboutUs", onClick: this.handleNavigationIconClick }, "About Us"), React.createElement("p", { className: "navigation-icons__icon", "data-sibling-id": "scrollToProducts", onClick: this.handleNavigationIconClick }, "Products")), React.createElement("img", { className: "navigation-icons__icon navigation-icons__company-logo", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png", alt: "Company Logo" }), React.createElement("div", { className: "navigation-icons__container" }, React.createElement("p", { className: "navigation-icons__icon", "data-sibling-id": "scrollToServices", onClick: this.handleNavigationIconClick }, "Services"), React.createElement("p", { className: "navigation-icons__icon", "data-sibling-id": "scrollToContactUs", onClick: this.handleNavigationIconClick }, "Contact Us"))));
    };
    NavigationIcons.prototype.handleNavigationIconClick = function (e) {
        var clickedEle = e.target;
        if (clickedEle != null) {
            var siblingElement = document.getElementById(clickedEle.dataset.siblingId);
            siblingElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return NavigationIcons;
}(React.Component));
exports.NavigationIcons = NavigationIcons;
exports.default = NavigationIcons;
//# sourceMappingURL=NavigationIcons.js.map