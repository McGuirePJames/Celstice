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
require("../CompanyDetails/_CompanyDetailsStylesheet.scss");
var Button_1 = require("../Button/Button");
var EntryAnimationDirection;
(function (EntryAnimationDirection) {
    EntryAnimationDirection[EntryAnimationDirection["Left"] = 0] = "Left";
    EntryAnimationDirection[EntryAnimationDirection["Right"] = 1] = "Right";
    EntryAnimationDirection[EntryAnimationDirection["Up"] = 2] = "Up";
    EntryAnimationDirection[EntryAnimationDirection["Down"] = 3] = "Down";
})(EntryAnimationDirection = exports.EntryAnimationDirection || (exports.EntryAnimationDirection = {}));
var CompanyDetails = (function (_super) {
    __extends(CompanyDetails, _super);
    function CompanyDetails(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    CompanyDetails.prototype.render = function () {
        var titleColor = {
            color: this.props.TitleColor
        };
        return (React.createElement("div", { className: this.props.Reversed ? ("reversed company-detail") : ("company-detail") }, React.createElement("div", { className: "company-detail__container-description" }, React.createElement("h5", { className: "company-detail__title", style: titleColor }, this.props.Title), React.createElement("p", { className: "company-detail__description" }, this.props.Description), React.createElement(Button_1.default, { Text: this.props.ButtonText, Color: this.props.ButtonColor })), React.createElement("div", { className: "company-detail__images" }, React.createElement("img", { src: this.props.ImagePath, alt: "Company Details Picture" }))));
    };
    return CompanyDetails;
}(React.Component));
exports.CompanyDetails = CompanyDetails;
exports.default = CompanyDetails;
//# sourceMappingURL=CompanyDetails.js.map