import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "../NavigationIcons/_NavigationIcons.scss"
import * as faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import * as faHandshake from '@fortawesome/fontawesome-free-solid/faHandshake'
import * as faQuestion from '@fortawesome/fontawesome-free-solid/faQuestion'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export class NavigationIcons extends React.Component {
    render() {
        return (
            <div className="navigation-icons">
                <div className="navigation-icons__container">
                    <p className="navigation-icons__icon">About Us</p>
                    <p className="navigation-icons__icon">Products</p>
                </div>
                <img className="navigation-icons__icon navigation-icons__company-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
                <div className="navigation-icons__container">
                    <p className="navigation-icons__icon">Services</p>
                    <p className="navigation-icons__icon">Contact Us</p>
                </div>

            </div>
        )
    }
}
export default NavigationIcons;