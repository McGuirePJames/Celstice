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
var React = require("react");
var ReactDOM = require("react-dom");
require("../Rocket/_RocketStylesheet.scss");
var Direction;
(function (Direction) {
    Direction[Direction["SharpUp"] = 0] = "SharpUp";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Flat"] = 2] = "Flat";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["SharpDown"] = 4] = "SharpDown";
})(Direction = exports.Direction || (exports.Direction = {}));
var Rocket = (function (_super) {
    __extends(Rocket, _super);
    function Rocket(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rocketIgnited: true,
            x: 400,
            y: 400,
            cursorInElement: false,
            rocketWidth: 30,
            windowWidth: window.innerWidth,
            cursorDirection: Direction.Flat,
            isDestroyed: false
        };
        _this.igniteRocket = _this.igniteRocket.bind(_this);
        _this.handleRocketClick = _this.handleRocketClick.bind(_this);
        _this.handleMouseMove = _this.handleMouseMove.bind(_this);
        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.handleWindowResize = _this.handleWindowResize.bind(_this);
        _this.checkIfComponentIsOverlapping = _this.checkIfComponentIsOverlapping.bind(_this);
        _this.getRotateDirection = _this.getRotateDirection.bind(_this);
        return _this;
    }
    Rocket.prototype.componentDidMount = function () {
        document.addEventListener("mousemove", this.handleMouseMove);
        document.getElementById('spaceBackground').addEventListener("mouseover", this.handleMouseEnter);
        document.getElementById('spaceBackground').addEventListener("mouseleave", this.handleMouseLeave);
        window.addEventListener('resize', this.handleWindowResize);
        setInterval(this.checkIfComponentIsOverlapping, 75);
    };
    Rocket.prototype.render = function () {
        var rocketStyle = {
            left: this.state.x,
            top: this.state.y,
            transform: "rotate(" + this.getRotateDeg(this.state.cursorDirection) + "deg)",
            backgroundColor: this.state.isDestroyed ? "red" : "transparent"
        };
        return (React.createElement("div", { id: "rocket", style: rocketStyle, ref: "component" }, this.state.rocketIgnited ? (React.createElement("div", { id: "ignition" })) : null, React.createElement("div", { id: "thruster", onClick: this.handleRocketClick }), React.createElement("div", { id: "thrusterConnector", onClick: this.handleRocketClick })));
    };
    Rocket.prototype.igniteRocket = function () {
        this.setState(__assign({}, this.state, { rocketIgnited: true }));
    };
    Rocket.prototype.handleRocketClick = function () {
        this.igniteRocket();
    };
    Rocket.prototype.checkIfComponentIsOverlapping = function () {
        var component = ReactDOM.findDOMNode(this.refs.component);
        var componentBounding = component.getBoundingClientRect();
        var collisionElements = document.getElementsByClassName('collision');
        for (var i = 0; i < collisionElements.length; i++) {
            var currentelement = collisionElements[i];
            var currentElementBounding = currentelement.getBoundingClientRect();
            var overlap = !(componentBounding.right < currentElementBounding.left ||
                componentBounding.left > currentElementBounding.right ||
                componentBounding.bottom < currentElementBounding.top ||
                componentBounding.top > currentElementBounding.bottom);
            if (!this.state.isDestroyed && overlap) {
                this.setState({
                    isDestroyed: true
                });
            }
        }
    };
    Rocket.prototype.handleMouseMove = function (e) {
        //var component = ReactDOM.findDOMNode(this.refs.component);
        //if (e.target !== component && !component.contains(e.target)) {
        if (this.state.cursorInElement) {
            this.setState(__assign({}, this.state, { x: Number(e.clientX) - 200, y: Number(e.clientY) - this.state.rocketWidth, cursorDirection: this.getRotateDirection(e.movementY) }));
        }
    };
    Rocket.prototype.handleMouseEnter = function (e) {
        this.setState(__assign({}, this.state, { cursorInElement: true,
            //x: Number(e.clientX) >= this.state.windowWidth / 1.75 ? e.clientX - 200 : 400,
            x: Number(e.clientX) - 200, y: Number(e.clientY) - this.state.rocketWidth, cursorDirection: this.getRotateDirection(e.movementY) }));
    };
    Rocket.prototype.handleMouseLeave = function (e) {
        this.setState(__assign({}, this.state, { cursorInElement: false,
            //x: Number(e.clientX) >= this.state.windowWidth / 1.75 ? e.clientX - 200 : 400,
            x: Number(e.clientX) - 200, y: Number(e.clientY) - this.state.rocketWidth, cursorDirection: this.getRotateDirection(e.movementY) }));
    };
    Rocket.prototype.handleWindowResize = function (e) {
        this.setState(__assign({}, this.state, { windowWidth: window.innerWidth }));
    };
    Rocket.prototype.getRotateDirection = function (movementY) {
        if (movementY >= 4) {
            return Direction.Down;
        }
        else if (movementY >= 1 && movementY <= 3) {
            return Direction.Down;
        }
        else if (movementY === 0) {
            return Direction.Flat;
        }
        else if (movementY <= -1 && movementY >= -3) {
            return Direction.Up;
        }
        else {
            return Direction.Up;
        }
    };
    Rocket.prototype.getRotateDeg = function (direction) {
        if (direction === Direction.SharpUp) {
            return 45;
        }
        else if (direction === Direction.Up) {
            return 67;
        }
        else if (direction === Direction.Flat) {
            return 90;
        }
        else if (direction === Direction.Down) {
            return 112;
        }
        else if (direction === Direction.SharpDown) {
            return 135;
        }
    };
    return Rocket;
}(React.Component));
exports.Rocket = Rocket;
exports.default = Rocket;
//# sourceMappingURL=Rocket.js.map