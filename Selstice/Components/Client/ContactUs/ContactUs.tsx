import * as React from "react";
import "../ContactUs/_ContactUsStylesheet.scss";
import MaterialInput from '../../MaterialUI/MaterialInput/MaterialInput'
import Button from "../Button/Button";


export class ContactUs extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    public render() {
        return (
            <div className="contact-us">
                <h5 className="contact-us__title">Contact Us</h5>
                <div className="contact-us__container-input">
                    <div className="contact-us__input">
                        <MaterialInput id="firstName" label="First Name" inputType="text" multiline={false} rows={1} />
                    </div>
                    <div className="contact-us__input">
                        <MaterialInput id="lastName" label="Last Name" inputType="text" multiline={false} rows={1} />
                    </div>
                </div>
                <div className="contact-us__container-input">
                    <div className="contact-us__input">
                        <MaterialInput id="email" label="Email" inputType="email" multiline={false} rows={1} />
                    </div>
                    <div className="contact-us__input">
                        <MaterialInput id="phone" label="Phone" inputType="tel" multiline={false} rows={1} />
                    </div>
                </div>
                <div className="contact-us__container-input contact-us__message">
                    <MaterialInput id="Message" label="Message" inputType="text" multiline={true} rows={10} />
                </div>
                <div className="contact-us__container-input contact-us__submit">
                    <Button Text="Submit" Color="#1A1F22" />
                </div>
            </div>
        );
    }

}
export default ContactUs;
