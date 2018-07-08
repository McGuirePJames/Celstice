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
var Space_1 = require("../../Components/Client/HighOrderComponents/Space/Space");
var Products_1 = require("../../Components/Client/Products/Products");
var CompanyDetails_1 = require("../../Components/Client/CompanyDetails/CompanyDetails");
var UglyCat = require('../../wwwroot/images/CatPics/Cat1.jpg');
var ReactDOM = require("react-dom");
var React = require("react");
require("aos/dist/aos.css");
var Entry = /** @class */ (function (_super) {
    __extends(Entry, _super);
    function Entry(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            LastImageDisplayed: false,
        };
        return _this;
    }
    Entry.prototype.componentDidMount = function () {
        var AOS = require('aos');
        AOS.init({});
    };
    Entry.prototype.render = function () {
        var VisibilitySensor = require('react-visibility-sensor');
        var mainHeightStyle = {
            height: "3000px",
        };
        var overflowXHiddenStyle = {
            "overflow-x": "hidden"
        };
        return (React.createElement("main", { style: mainHeightStyle, id: "entry" },
            React.createElement("div", { id: "spaceBackground" },
                React.createElement(Space_1.default, null)),
            React.createElement("div", { className: "company-details" },
                React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true }, function (_a) {
                    var isVisible = _a.isVisible;
                    return React.createElement("div", { style: overflowXHiddenStyle }, isVisible ? (React.createElement("div", { "data-aos": "slide-left" },
                        React.createElement(CompanyDetails_1.default, { Title: "Who are we?", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#ea597a", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: false }))) : null);
                }),
                React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true }, function (_a) {
                    var isVisible = _a.isVisible;
                    return React.createElement("div", { style: overflowXHiddenStyle }, isVisible ? (React.createElement("div", { "data-aos": "slide-left" },
                        React.createElement(Products_1.default, null))) : null);
                }),
                React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true }, function (_a) {
                    var isVisible = _a.isVisible;
                    return React.createElement("div", { style: overflowXHiddenStyle }, isVisible ? (React.createElement("div", { "data-aos": "slide-left" },
                        React.createElement(CompanyDetails_1.default, { Title: "Services", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#F77249", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: false }))) : null);
                }),
                React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true }, function (_a) {
                    var isVisible = _a.isVisible;
                    return React.createElement("div", { style: overflowXHiddenStyle }, isVisible ? (React.createElement("div", { "data-aos": "slide-right" },
                        React.createElement(CompanyDetails_1.default, { Title: "Contact Us", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#591A61", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: true }))) : null);
                }))));
    };
    return Entry;
}(React.Component));
exports.Entry = Entry;
ReactDOM.render(React.createElement(Entry, null), document.getElementById('mainMount'));
exports.default = Entry;
//# sourceMappingURL=Entry.js.map