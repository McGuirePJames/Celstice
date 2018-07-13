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
require("../CompanyMotto/_CompanyMottoStylesheet.scss");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var faRocket = require("@fortawesome/fontawesome-free-solid/faRocket");
var CompanyMotto = (function (_super) {
    __extends(CompanyMotto, _super);
    function CompanyMotto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompanyMotto.prototype.render = function () {
        return (React.createElement("div", { className: "container-company-motto" }, React.createElement("div", { className: "company-name" }, React.createElement("p", null, "Selstice")), React.createElement("div", { className: "company-motto" }, React.createElement("p", null, "Come fly with us"), React.createElement("div", { className: "container-icon" }, React.createElement(react_fontawesome_1.default, { icon: faRocket })))));
    };
    return CompanyMotto;
}(React.Component));
exports.CompanyMotto = CompanyMotto;
exports.default = CompanyMotto;
//# sourceMappingURL=CompanyMotto.js.map