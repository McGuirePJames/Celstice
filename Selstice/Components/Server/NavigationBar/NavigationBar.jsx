import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../../Server/NavigationBar/NavigationBarStylesheet.css';

export class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleLogoClick() {

    }
    render() {
        return (
            <nav className="main-navigation-bar">
                <div className="sub-container">
                    <div className="company-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                    </div>
                    <div className="navigation-options">
                        <div className="navigation-option">
                            <a href="#">Products</a>
                        </div>
                        <div className="navigation-option">
                            <a href="#">About Us</a>
                        </div>
                        <div className="navigation-option">
                            <a href="#">Contact Us</a>
                        </div>
                    </div>

                </div>
            </nav>
        )
    }
}
export default NavigationBar;