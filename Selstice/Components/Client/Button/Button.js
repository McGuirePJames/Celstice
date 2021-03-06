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
require("../Button/_ButtonStylesheet.scss");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Button.prototype.render = function () {
        return (React.createElement("button", { className: "custom-button", type: "button", style: { backgroundColor: this.props.Color } },
            React.createElement("span", null, this.props.Text)));
    };
    return Button;
}(React.Component));
exports.Button = Button;
exports["default"] = Button;
