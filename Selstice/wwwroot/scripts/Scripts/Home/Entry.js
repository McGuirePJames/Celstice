"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Space_1 = require("../../Components/Client/HighOrderComponents/Space/Space");
var AboutUs_1 = require("../../Components/Client/AboutUs/AboutUs");
var Products_1 = require("../../Components/Client/Products/Products");
var Rocket_1 = require("../../Components/Client/Rocket/Rocket");
var ReactDOM = require("react-dom");
var React = require("react");
window.onload = function () {
    ReactDOM.render(React.createElement(Rocket_1.default, null), document.getElementById('rocketMount'));
    ReactDOM.render(React.createElement(Space_1.default, null), document.getElementById('spaceMount'));
    ReactDOM.render(React.createElement(AboutUs_1.default, null), document.getElementById('aboutUsMount'));
    ReactDOM.render(React.createElement(Products_1.default, null), document.getElementById('productsMount'));
};
//# sourceMappingURL=Entry.js.map