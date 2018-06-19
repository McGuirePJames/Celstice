import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../AboutUs/_AboutUsStylesheet.scss';

export class AboutUs extends React.Component {
    render() {
        return (
            <section className="container-about-us">
                <div className="container-about-us-description">
                    <h5 className="about-us-title">Who are we?</h5>
                    <p>Cutting Edge</p>
                </div>
                <div className="about-us-images">
                    <p>Hello World</p>
                </div>
            </section>
        )
    }
}
export default AboutUs;