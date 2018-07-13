import Space from '../../Components/Client/HighOrderComponents/Space/Space';
import Products from '../../Components/Client/Products/Products'
import CompanyDetails from '../../Components/Client/CompanyDetails/CompanyDetails'
import * as ReactDOM from 'react-dom';
import * as React from 'react'
import 'aos/dist/aos.css';
import ContactUs  from '../../Components/Client/ContactUs/ContactUs';

export interface IEntryState {
    firstSlideAnimationCount: number,
    hasSecondSlideAnimationBeenTriggered: boolean,
    hasThirdSlideAnimationBeenTriggered: boolean,
    hasFourthSlideAnimationBeenTriggered: boolean
}

export class Entry extends React.Component<{}, IEntryState>{
    constructor(props) {
        super(props)
        this.state = {
            firstSlideAnimationCount: 0,
            hasSecondSlideAnimationBeenTriggered: false,
            hasThirdSlideAnimationBeenTriggered: false,
            hasFourthSlideAnimationBeenTriggered: false,
        }
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
        } as React.CSSProperties
        const companyDetailStyleOverFlowHidden = {
            "overflow": "hidden",
            "min-height": "470px",
        } as React.CSSProperties
        return (
            <main id="entry">
                <div id="spaceBackground">
                    <Space />
                </div>
                <div className="company-details">
                    <div id="scrollToAboutUs" style={companyDetailsStyle}>
                        <VisibilitySensor partialVisibility delayedCall={true}>
                            <div id="aboutUs" style={companyDetailsStyle} data-aos="slide-left">
                                <CompanyDetails
                                    Title="Who are we?"
                                    TitleColor="#ea597a"
                                    Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                    ButtonText="Learn More"
                                    ButtonColor="#ea597a"
                                    ImagePath="http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg"
                                    IconPath=""
                                    Reversed={false} />
                            </div>
                        </VisibilitySensor>
                    </div>
                    <div id="scrollToProducts" style={companyDetailsStyle}>
                        <VisibilitySensor partialVisibility delayedCall={true}>
                            <div id="products" style={companyDetailsStyle} data-aos="slide-right">
                                <Products />
                            </div>
                        </VisibilitySensor>
                    </div>
                    <div id="scrollToServices" style={companyDetailsStyle}>
                        <VisibilitySensor partialVisibility delayedCall={true}>
                            <div id="services" style={companyDetailsStyle} data-aos="slide-left">
                                <CompanyDetails
                                    Title="Services"
                                    TitleColor="#591A61"
                                    Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                    ButtonText="Learn More"
                                    ButtonColor="#591A61"
                                    ImagePath="http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg"
                                    IconPath=""
                                    Reversed={false} />
                            </div>
                        </VisibilitySensor>
                    </div>
                    <div id="scrollToContactUs" style={companyDetailStyleOverFlowHidden}>
                        <VisibilitySensor partialVisibility delayedCall={true}>
                            <div id="contactUs" style={companyDetailStyleOverFlowHidden} data-aos="slide-up">
                                <CompanyDetails
                                    Title="Contact Us"
                                    TitleColor="#F77249"
                                    Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                    ButtonText="Learn More"
                                    ButtonColor="#F77249"
                                    ImagePath="http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg"
                                    IconPath=""
                                    Reversed={true} />
                            </div>
                        </VisibilitySensor>
                    </div>
                    <div id="scrollToContactUsForm" style={companyDetailStyleOverFlowHidden}>
                        <VisibilitySensor partialVisibility delayedCall={true}>
                            <div id="contactUsForm" style={companyDetailStyleOverFlowHidden} data-aos="slide-up">
                                <ContactUs/>
                            </div>
                        </VisibilitySensor>
                    </div>
                </div>
            </main>
        )
    }
    private handleFirstCallback(isVisible) {
        this.handleVisibilityChange(isVisible, 1);
    }
    private handleVisibilityChange(isVisible, slideNumber: number): any {
        if (slideNumber === 1) {
            console.log(this.state.firstSlideAnimationCount);
            if (this.state.firstSlideAnimationCount <= 1) {
                this.setState({
                    ...this.state,
                    firstSlideAnimationCount: this.state.firstSlideAnimationCount + 1
                })
            }
        }
    }
}
ReactDOM.render(
    <Entry />,
    document.getElementById('mainMount')
)
export default Entry;
