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
var faEnvelope = require("@fortawesome/fontawesome-free-solid/faEnvelope");
var faHandshake = require("@fortawesome/fontawesome-free-solid/faHandshake");
var faQuestion = require("@fortawesome/fontawesome-free-solid/faQuestion");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var NavigationIcons = /** @class */ (function (_super) {
    __extends(NavigationIcons, _super);
    function NavigationIcons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationIcons.prototype.render = function () {
        return (React.createElement("div", { className: "container-navigation-icons" },
            React.createElement(react_fontawesome_1.default, { icon: faHandshake }),
            React.createElement(react_fontawesome_1.default, { icon: faQuestion }),
            React.createElement(react_fontawesome_1.default, { icon: faEnvelope })));
    };
    return NavigationIcons;
}(React.Component));
exports.NavigationIcons = NavigationIcons;
exports.default = NavigationIcons;
//# sourceMappingURL=NavigationIcons.js.map