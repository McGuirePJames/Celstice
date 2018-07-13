import * as React from 'react';
import '../../Server/NavigationBar/NavigationBarStylesheet.css';
export class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleLogoClick() {
    }
    render() {
        return (React.createElement("nav", { className: "main-navigation-bar" },
            React.createElement("div", { className: "sub-container" },
                React.createElement("div", { className: "company-logo" },
                    React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" })),
                React.createElement("div", { className: "navigation-options" },
                    React.createElement("div", { className: "navigation-option" },
                        React.createElement("a", { href: "#" }, "Products")),
                    React.createElement("div", { className: "navigation-option" },
                        React.createElement("a", { href: "#" }, "About Us")),
                    React.createElement("div", { className: "navigation-option" },
                        React.createElement("a", { href: "#" }, "Contact Us"))))));
    }
}
export default NavigationBar;
//# sourceMappingURL=NavigationBar.js.map