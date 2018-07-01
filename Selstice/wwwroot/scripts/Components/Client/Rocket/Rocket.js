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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../Rocket/_RocketStylesheet.scss");
var Rocket = /** @class */ (function (_super) {
    __extends(Rocket, _super);
    function Rocket(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rocketIgnited: false,
        };
        _this.igniteRocket = _this.igniteRocket.bind(_this);
        _this.handleRocketClick = _this.handleRocketClick.bind(_this);
        return _this;
    }
    Rocket.prototype.componentDidMount = function () {
        this.setState(__assign({}, this.state, { rocketIgnited: false }));
    };
    Rocket.prototype.render = function () {
        return (React.createElement("div", { id: "rocket" },
            this.state.rocketIgnited ? (React.createElement("div", { id: "ignition" })) : null,
            React.createElement("div", { id: "thruster", onClick: this.handleRocketClick }),
            React.createElement("div", { id: "thrusterConnector", onClick: this.handleRocketClick })));
    };
    Rocket.prototype.igniteRocket = function () {
        this.setState(__assign({}, this.state, { rocketIgnited: true }));
    };
    Rocket.prototype.handleRocketClick = function () {
        this.igniteRocket();
    };
    return Rocket;
}(React.Component));
exports.Rocket = Rocket;
exports.default = Rocket;
//# sourceMappingURL=Rocket.js.map