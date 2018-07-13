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
exports.__esModule = true;
var React = require("react");
var SpaceBackground_1 = require("../../SpaceBackground/SpaceBackground");
require("../Space/SpaceStylesheet.css");
var CompanyMotto_1 = require("../../CompanyMotto/CompanyMotto");
var NavigationIcons_1 = require("../../NavigationIcons/NavigationIcons");
var Space = /** @class */ (function (_super) {
    __extends(Space, _super);
    function Space() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Space.prototype.render = function () {
        return (React.createElement("div", { className: "space-container" },
            React.createElement(SpaceBackground_1["default"], null),
            React.createElement(NavigationIcons_1.NavigationIcons, null),
            React.createElement(CompanyMotto_1.CompanyMotto, null)));
    };
    return Space;
}(React.Component));
exports.Space = Space;
exports["default"] = Space;
