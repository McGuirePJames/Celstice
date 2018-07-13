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
var __assign = (this && this.__assign) || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Space_1 = require("../../Components/Client/HighOrderComponents/Space/Space");
var Products_1 = require("../../Components/Client/Products/Products");
var CompanyDetails_1 = require("../../Components/Client/CompanyDetails/CompanyDetails");
var UglyCat = require('../../wwwroot/images/CatPics/Cat1.jpg');
var ReactDOM = require("react-dom");
var React = require("react");
require("aos/dist/aos.css");
var ContactUs_1 = require("../../Components/Client/ContactUs/ContactUs");
var Entry = (function (_super) {
    __extends(Entry, _super);
    function Entry(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            firstSlideAnimationCount: 0,
            hasSecondSlideAnimationBeenTriggered: false,
            hasThirdSlideAnimationBeenTriggered: false,
            hasFourthSlideAnimationBeenTriggered: false,
        };
        _this.handleVisibilityChange = _this.handleVisibilityChange.bind(_this);
        _this.handleFirstCallback = _this.handleFirstCallback.bind(_this);
        return _this;
    }
    Entry.prototype.componentDidMount = function () {
        var AOS = require('aos');
        AOS.init({
            once: true,
        });
    };
    Entry.prototype.render = function () {
        var VisibilitySensor = require('react-visibility-sensor');
        var companyDetailsStyle = {
            "overflow-x": "hidden",
            "min-height": "470px",
        };
        var companyDetailStyleOverFlowHidden = {
            "overflow": "hidden",
            "min-height": "470px",
        };
        return (React.createElement("main", { id: "entry" }, React.createElement("div", { id: "spaceBackground" }, React.createElement(Space_1.default, null)), React.createElement("div", { className: "company-details" }, React.createElement("div", { id: "scrollToAboutUs", style: companyDetailsStyle }, React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true }, React.createElement("div", { id: "aboutUs", style: companyDetailsStyle, "data-aos": "slide-left" }, React.createElement(CompanyDetails_1.default, { Title: "Who are we?", TitleColor: "#ea597a", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#ea597a", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: false })))), React.createElement("div", { id: "scrollToProducts", style: companyDetailsStyle }, React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true }, React.createElement("div", { id: "products", style: companyDetailsStyle, "data-aos": "slide-right" }, React.createElement(Products_1.default, null)))), React.createElement("div", { id: "scrollToServices", style: companyDetailsStyle }, React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true }, React.createElement("div", { id: "services", style: companyDetailsStyle, "data-aos": "slide-left" }, React.createElement(CompanyDetails_1.default, { Title: "Services", TitleColor: "#591A61", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#591A61", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: false })))), React.createElement("div", { id: "scrollToContactUs", style: companyDetailStyleOverFlowHidden }, React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true }, React.createElement("div", { id: "contactUs", style: companyDetailStyleOverFlowHidden, "data-aos": "slide-up" }, React.createElement(CompanyDetails_1.default, { Title: "Contact Us", TitleColor: "#F77249", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#F77249", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: true })))), React.createElement("div", { id: "scrollToContactUsForm", style: companyDetailStyleOverFlowHidden }, React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true }, React.createElement("div", { id: "contactUsForm", style: companyDetailStyleOverFlowHidden, "data-aos": "slide-up" }, React.createElement(ContactUs_1.default, null)))))));
    };
    Entry.prototype.handleFirstCallback = function (isVisible) {
        this.handleVisibilityChange(isVisible, 1);
    };
    Entry.prototype.handleVisibilityChange = function (isVisible, slideNumber) {
        if (slideNumber === 1) {
            console.log(this.state.firstSlideAnimationCount);
            if (this.state.firstSlideAnimationCount <= 1) {
                this.setState(__assign({}, this.state, { firstSlideAnimationCount: this.state.firstSlideAnimationCount + 1 }));
            }
        }
    };
    return Entry;
}(React.Component));
exports.Entry = Entry;
ReactDOM.render(React.createElement(Entry, null), document.getElementById('mainMount'));
exports.default = Entry;
//# sourceMappingURL=Entry.js.map