import * as React from "react";
import "../AboutUs/_AboutUsStylesheet.scss";
import Button from "../Button/Button";
import "../../../Stylesheets/Variables/ColorThemes.scss";
export class AboutUs extends React.Component {
    render() {
        return (React.createElement("div", { className: "about-us" },
            React.createElement("div", { className: "about-us__container-description" },
                React.createElement("h5", { className: "about-us__title" }, "Who are we?"),
                React.createElement("p", { className: "about-us__description" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),
                React.createElement(Button, { Text: "Learn More", Color: "#EA597A" })),
            React.createElement("div", { className: "about-us__images" },
                React.createElement("img", { src: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", alt: "HappyCat" }))));
    }
}
export default AboutUs;
