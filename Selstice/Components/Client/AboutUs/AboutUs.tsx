import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../AboutUs/_AboutUsStylesheet.scss';

export class AboutUs extends React.Component {
    render() {
        return (
            <section className="about-us">
                <div className="about-us__container-description">
                    <h5 className="about-us__title">Who are we?</h5>
                    <p className="about-us__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="about-us__images">
                    <img src="http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg"/>
                </div>
            </section>
        )
    }
}
export default AboutUs;