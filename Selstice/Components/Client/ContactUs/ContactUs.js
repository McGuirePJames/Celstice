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
require("../ContactUs/_ContactUsStylesheet.scss");
var Test_1 = require("../../MaterialUI/Test/Test");
var ContactUs = /** @class */ (function (_super) {
    __extends(ContactUs, _super);
    function ContactUs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ContactUs.prototype.render = function () {
        return (React.createElement("div", { className: "contact-us" },
            React.createElement(Test_1["default"], null)));
    };
    return ContactUs;
}(React.Component));
exports.ContactUs = ContactUs;
exports["default"] = ContactUs;
