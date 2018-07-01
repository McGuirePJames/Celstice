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
require("../SpaceBackground/_SpaceBackgroundStylesheet.scss");
var Moon_1 = require("../Moon/Moon");
var SpaceBackground = /** @class */ (function (_super) {
    __extends(SpaceBackground, _super);
    function SpaceBackground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpaceBackground.prototype.render = function () {
        return (React.createElement("div", { className: "container-spacebackground" },
            React.createElement("div", { className: "spacebackground" },
                React.createElement(Moon_1.default, null))));
    };
    return SpaceBackground;
}(React.Component));
exports.SpaceBackground = SpaceBackground;
exports.default = SpaceBackground;
//# sourceMappingURL=SpaceBackground.js.map