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
require("../Moon/MoonStylesheet.css");
var Moon = (function (_super) {
    __extends(Moon, _super);
    function Moon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moon.prototype.render = function () {
        return (React.createElement("div", { className: "container-moon collision" }, React.createElement("div", { className: "moon" }, React.createElement("div", { className: "crater small" }), React.createElement("div", { className: "crater medium" }), React.createElement("div", { className: "crater large" }))));
    };
    return Moon;
}(React.Component));
exports.Moon = Moon;
exports.default = Moon;
//# sourceMappingURL=Moon.js.map