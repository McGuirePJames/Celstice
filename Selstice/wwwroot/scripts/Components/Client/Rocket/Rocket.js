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
require("../Rocket/RocketStylesheet.scss");
var Rocket = /** @class */ (function (_super) {
    __extends(Rocket, _super);
    function Rocket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rocket.prototype.render = function () {
        return (React.createElement("div", { id: "rocket" },
            React.createElement("div", { id: "ignition" }),
            React.createElement("div", { id: "thruster" }),
            React.createElement("div", { id: "thrusterConnector" })));
    };
    return Rocket;
}(React.Component));
exports.Rocket = Rocket;
exports.default = Rocket;
//# sourceMappingURL=Rocket.js.map