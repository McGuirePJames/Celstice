import * as React from "react";
import * as ReactDOM from "react-dom";
import "../NavigationIcons/_NavigationIcons.scss";

export class NavigationIcons extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleNavigationIconClick = this.handleNavigationIconClick.bind(this);
    }

    public render() {
        return (
            <div className="navigation-icons">
                <div className="navigation-icons__container">
                    <p className="navigation-icons__icon" data-sibling-id="aboutUs" onClick={this.handleNavigationIconClick}>About Us</p>
                    <p className="navigation-icons__icon" data-sibling-id="products" onClick={this.handleNavigationIconClick}>Products</p>
                </div>
                <img className="navigation-icons__icon navigation-icons__company-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="Company Logo" />
                <div className="navigation-icons__container">
                    <p className="navigation-icons__icon" data-sibling-id="services" onClick={this.handleNavigationIconClick}>Services</p>
                    <p className="navigation-icons__icon" data-sibling-id="contactUs" onClick={this.handleNavigationIconClick}>Contact Us</p>
                </div>

            </div>
        );
    }
    private handleNavigationIconClick(e) {
        const clickedEle: HTMLElement = e.target;
        if (clickedEle != null) {
            const siblingElement: HTMLElement = document.getElementById(clickedEle.dataset.siblingId);
            siblingElement.scrollIntoView({ behavior: "smooth" });
        }
    }
}
export default NavigationIcons;
