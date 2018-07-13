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
require("../ContactUs/_ContactUsStylesheet.scss");
var TextFIeld_jsx_1 = require("../../MaterialUI/TextField/TextFIeld.jsx");
var Button_1 = require("../../../Components/Client/Button/Button");
var ContactUs = (function (_super) {
    __extends(ContactUs, _super);
    function ContactUs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ContactUs.prototype.render = function () {
        return (React.createElement("div", { className: "contact-us" }, React.createElement("h5", { className: "contact-us__title" }, "Contact Us"), React.createElement("div", { className: "contact-us__container-input" }, React.createElement("div", { className: "contact-us__input" }, React.createElement(TextFIeld_jsx_1.MaterialUIInput, { id: "FirstName", label: "First Name", inputType: "Text" })), React.createElement("div", { className: "contact-us__input" }, React.createElement(TextFIeld_jsx_1.MaterialUIInput, { id: "LastName", label: "Last Name", inputType: "Text" }))), React.createElement("div", { className: "contact-us__container-input" }, React.createElement("div", { className: "contact-us__input" }, React.createElement(TextFIeld_jsx_1.MaterialUIInput, { id: "Kappa", label: "Email", inputType: "email" })), React.createElement("div", { className: "contact-us__input" }, React.createElement(TextFIeld_jsx_1.MaterialUIInput, { id: "Keepo", label: "Phone", inputType: "tel" }))), React.createElement("div", { className: "contact-us__container-input contact-us__message" }, React.createElement(TextFIeld_jsx_1.MaterialUIInput, { id: "Message", label: "Message", inputType: "Text", multiline: true, rows: 10 })), React.createElement("div", { className: "contact-us__container-input contact-us__submit" }, React.createElement(Button_1.default, { Text: "Submit", Color: "#1A1F22" }))));
    };
    return ContactUs;
}(React.Component));
exports.ContactUs = ContactUs;
exports.default = ContactUs;
//# sourceMappingURL=ContactUs.js.map