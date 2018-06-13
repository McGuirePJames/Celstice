"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpaceBackground_1 = require("../../Components/Client/SpaceBackground/SpaceBackground");
var NavigationBar_1 = require("../../Components/Server/NavigationBar/NavigationBar");
var ReactDOM = require("react-dom");
var React = require("react");
window.onload = function () {
    ReactDOM.render(React.createElement(SpaceBackground_1.default, null), document.getElementById('particleMount'));
    ReactDOM.render(React.createElement(NavigationBar_1.default, null), document.getElementById('navigationMount'));
};
//# sourceMappingURL=Entry.js.map