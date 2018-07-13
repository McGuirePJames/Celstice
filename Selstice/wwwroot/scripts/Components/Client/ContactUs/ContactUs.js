import * as React from "react";
import "../ContactUs/_ContactUsStylesheet.scss";
import MaterialInput from '../../MaterialUI/MaterialInput/MaterialInput';
import Button from "../Button/Button";
export class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { className: "contact-us" },
            React.createElement("h5", { className: "contact-us__title" }, "Contact Us"),
            React.createElement("div", { className: "contact-us__container-input" },
                React.createElement("div", { className: "contact-us__input" },
                    React.createElement(MaterialInput, { id: "firstName", label: "First Name", inputType: "text", multiline: false, rows: 1 })),
                React.createElement("div", { className: "contact-us__input" },
                    React.createElement(MaterialInput, { id: "lastName", label: "Last Name", inputType: "text", multiline: false, rows: 1 }))),
            React.createElement("div", { className: "contact-us__container-input" },
                React.createElement("div", { className: "contact-us__input" },
                    React.createElement(MaterialInput, { id: "email", label: "Email", inputType: "email", multiline: false, rows: 1 })),
                React.createElement("div", { className: "contact-us__input" },
                    React.createElement(MaterialInput, { id: "phone", label: "Phone", inputType: "tel", multiline: false, rows: 1 }))),
            React.createElement("div", { className: "contact-us__container-input contact-us__message" },
                React.createElement(MaterialInput, { id: "Message", label: "Message", inputType: "text", multiline: true, rows: 10 })),
            React.createElement("div", { className: "contact-us__container-input contact-us__submit" },
                React.createElement(Button, { Text: "Submit", Color: "#1A1F22" }))));
    }
}
export default ContactUs;
