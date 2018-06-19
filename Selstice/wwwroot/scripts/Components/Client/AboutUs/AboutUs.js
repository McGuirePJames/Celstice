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
require("../AboutUs/_AboutUsStylesheet.scss");
var AboutUs = /** @class */ (function (_super) {
    __extends(AboutUs, _super);
    function AboutUs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutUs.prototype.render = function () {
        return (React.createElement("section", { className: "container-about-us" },
            React.createElement("div", { className: "container-about-us-description" },
                React.createElement("h5", { className: "about-us-title" }, "Who are we?"),
                React.createElement("p", null, "Cutting Edge")),
            React.createElement("div", { className: "about-us-images" },
                React.createElement("p", null, "Hello World"))));
    };
    return AboutUs;
}(React.Component));
exports.AboutUs = AboutUs;
exports.default = AboutUs;
//# sourceMappingURL=AboutUs.js.map