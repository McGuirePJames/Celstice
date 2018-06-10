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
var react_particles_js_1 = require("react-particles-js");
var React = require("react");
var Particles = /** @class */ (function (_super) {
    __extends(Particles, _super);
    function Particles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Particles.prototype.render = function () {
        return (React.createElement("p", null, "Hello World"));
    };
    ;
    return Particles;
}(React.Component));
exports.Particles = Particles;
exports.default = react_particles_js_1.default;
//# sourceMappingURL=Particles.js.map