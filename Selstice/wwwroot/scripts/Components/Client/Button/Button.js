import * as React from "react";
import "../Button/_ButtonStylesheet.scss";
export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("button", { className: "custom-button", type: "button", style: { backgroundColor: this.props.Color } },
            React.createElement("span", null, this.props.Text)));
    }
}
export default Button;
