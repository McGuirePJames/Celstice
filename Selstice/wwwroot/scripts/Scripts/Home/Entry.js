"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Space_1 = require("../../Components/Client/HighOrderComponents/Space/Space");
var AboutUs_1 = require("../../Components/Client/AboutUs/AboutUs");
var Products_1 = require("../../Components/Client/Products/Products");
var CompanyDetails_1 = require("../../Components/Client/CompanyDetails/CompanyDetails");
//const UglyCat = require('../../wwwroot/images/CatPics/Cat1.jpg');
var UglyCat = require('../../wwwroot/images/CatPics/Cat1.jpg');
var ReactDOM = require("react-dom");
var React = require("react");
window.onload = function () {
    ReactDOM.render(React.createElement(Space_1.default, null), document.getElementById('spaceMount'));
    ReactDOM.render(React.createElement(AboutUs_1.default, null), document.getElementById('aboutUsMount'));
    //ReactDOM.render(
    //    <Rocket />,
    //    document.getElementById('rocketDebug')
    //)
    ReactDOM.render(React.createElement(Products_1.default, null), document.getElementById('productsMount'));
    ReactDOM.render(React.createElement(CompanyDetails_1.default, { Title: "Services", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#F77249", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: false }), document.getElementById('servicesMount'));
    ReactDOM.render(React.createElement(CompanyDetails_1.default, { Title: "Contact Us", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#591A61", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: true }), document.getElementById('contactUsMount'));
};
//# sourceMappingURL=Entry.js.map