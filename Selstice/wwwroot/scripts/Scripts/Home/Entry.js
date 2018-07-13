import Space from '../../Components/Client/HighOrderComponents/Space/Space';
import Products from '../../Components/Client/Products/Products';
import CompanyDetails from '../../Components/Client/CompanyDetails/CompanyDetails';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import 'aos/dist/aos.css';
import ContactUs from '../../Components/Client/ContactUs/ContactUs';
export class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstSlideAnimationCount: 0,
            hasSecondSlideAnimationBeenTriggered: false,
            hasThirdSlideAnimationBeenTriggered: false,
            hasFourthSlideAnimationBeenTriggered: false,
        };
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
        this.handleFirstCallback = this.handleFirstCallback.bind(this);
    }
    componentDidMount() {
        var AOS = require('aos');
        AOS.init({
            once: true,
        });
    }
    render() {
        var VisibilitySensor = require('react-visibility-sensor');
        const companyDetailsStyle = {
            "overflow-x": "hidden",
            "min-height": "470px",
        };
        const companyDetailStyleOverFlowHidden = {
            "overflow": "hidden",
            "min-height": "470px",
        };
        return (React.createElement("main", { id: "entry" },
            React.createElement("div", { id: "spaceBackground" },
                React.createElement(Space, null)),
            React.createElement("div", { className: "company-details" },
                React.createElement("div", { id: "scrollToAboutUs", style: companyDetailsStyle },
                    React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true },
                        React.createElement("div", { id: "aboutUs", style: companyDetailsStyle, "data-aos": "slide-left" },
                            React.createElement(CompanyDetails, { Title: "Who are we?", TitleColor: "#ea597a", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#ea597a", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: false })))),
                React.createElement("div", { id: "scrollToProducts", style: companyDetailsStyle },
                    React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true },
                        React.createElement("div", { id: "products", style: companyDetailsStyle, "data-aos": "slide-right" },
                            React.createElement(Products, null)))),
                React.createElement("div", { id: "scrollToServices", style: companyDetailsStyle },
                    React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true },
                        React.createElement("div", { id: "services", style: companyDetailsStyle, "data-aos": "slide-left" },
                            React.createElement(CompanyDetails, { Title: "Services", TitleColor: "#591A61", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#591A61", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: false })))),
                React.createElement("div", { id: "scrollToContactUs", style: companyDetailStyleOverFlowHidden },
                    React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true },
                        React.createElement("div", { id: "contactUs", style: companyDetailStyleOverFlowHidden, "data-aos": "slide-up" },
                            React.createElement(CompanyDetails, { Title: "Contact Us", TitleColor: "#F77249", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", ButtonText: "Learn More", ButtonColor: "#F77249", ImagePath: "http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg", IconPath: "", Reversed: true })))),
                React.createElement("div", { id: "scrollToContactUsForm", style: companyDetailStyleOverFlowHidden },
                    React.createElement(VisibilitySensor, { partialVisibility: true, delayedCall: true },
                        React.createElement("div", { id: "contactUsForm", style: companyDetailStyleOverFlowHidden, "data-aos": "slide-up" },
                            React.createElement(ContactUs, null)))))));
    }
    handleFirstCallback(isVisible) {
        this.handleVisibilityChange(isVisible, 1);
    }
    handleVisibilityChange(isVisible, slideNumber) {
        if (slideNumber === 1) {
            console.log(this.state.firstSlideAnimationCount);
            if (this.state.firstSlideAnimationCount <= 1) {
                this.setState(Object.assign({}, this.state, { firstSlideAnimationCount: this.state.firstSlideAnimationCount + 1 }));
            }
        }
    }
}
ReactDOM.render(React.createElement(Entry, null), document.getElementById('mainMount'));
export default Entry;
