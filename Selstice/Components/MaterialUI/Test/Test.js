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
var Button_1 = require("@material-ui/core/Button");
var Dialog_1 = require("@material-ui/core/Dialog");
var DialogActions_1 = require("@material-ui/core/DialogActions");
var DialogContent_1 = require("@material-ui/core/DialogContent");
var DialogContentText_1 = require("@material-ui/core/DialogContentText");
var DialogTitle_1 = require("@material-ui/core/DialogTitle");
var Typography_1 = require("@material-ui/core/Typography");
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var withRoot_1 = require("../../MaterialUI/withRoot/withRoot");
var styles = function (theme) { return ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20
    }
}); };
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false
        };
        _this.handleClose = function () {
            _this.setState({
                open: false
            });
        };
        _this.handleClick = function () {
            _this.setState({
                open: true
            });
        };
        return _this;
    }
    Index.prototype.render = function () {
        return (React.createElement("div", { className: this.props.classes.root },
            React.createElement(Dialog_1["default"], { open: this.state.open, onClose: this.handleClose },
                React.createElement(DialogTitle_1["default"], null, "Super Secret Password"),
                React.createElement(DialogContent_1["default"], null,
                    React.createElement(DialogContentText_1["default"], null, "1-2-3-4-5")),
                React.createElement(DialogActions_1["default"], null,
                    React.createElement(Button_1["default"], { color: "primary", onClick: this.handleClose }, "OK"))),
            React.createElement(Typography_1["default"], { variant: "display1", gutterBottom: true }, "Material-UI"),
            React.createElement(Typography_1["default"], { variant: "subheading", gutterBottom: true }, "example project"),
            React.createElement(Button_1["default"], { variant: "raised", color: "secondary", onClick: this.handleClick }, "Super Secret Password")));
    };
    return Index;
}(React.Component));
exports.Index = Index;
exports["default"] = withRoot_1["default"](withStyles_1["default"](styles)(Index));
