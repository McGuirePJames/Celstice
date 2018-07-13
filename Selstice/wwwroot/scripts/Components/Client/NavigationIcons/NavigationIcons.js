import * as React from "react";
import "../NavigationIcons/_NavigationIcons.scss";
export class NavigationIcons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleNavigationIconClick = this.handleNavigationIconClick.bind(this);
    }
    render() {
        return (React.createElement("div", { className: "navigation-icons" },
            React.createElement("div", { className: "navigation-icons__container" },
                React.createElement("p", { className: "navigation-icons__icon", "data-sibling-id": "scrollToAboutUs", onClick: this.handleNavigationIconClick }, "About Us"),
                React.createElement("p", { className: "navigation-icons__icon", "data-sibling-id": "scrollToProducts", onClick: this.handleNavigationIconClick }, "Products")),
            React.createElement("img", { className: "navigation-icons__icon navigation-icons__company-logo", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png", alt: "Company Logo" }),
            React.createElement("div", { className: "navigation-icons__container" },
                React.createElement("p", { className: "navigation-icons__icon", "data-sibling-id": "scrollToServices", onClick: this.handleNavigationIconClick }, "Services"),
                React.createElement("p", { className: "navigation-icons__icon", "data-sibling-id": "scrollToContactUs", onClick: this.handleNavigationIconClick }, "Contact Us"))));
    }
    handleNavigationIconClick(e) {
        const clickedEle = e.target;
        if (clickedEle != null) {
            const siblingElement = document.getElementById(clickedEle.dataset.siblingId);
            siblingElement.scrollIntoView({ behavior: "smooth" });
        }
    }
}
export default NavigationIcons;
