import * as React from "react";
import "../Moon/MoonStylesheet.css";
export class Moon extends React.Component {
    render() {
        return (React.createElement("div", { className: "container-moon collision" },
            React.createElement("div", { className: "moon" },
                React.createElement("div", { className: "crater small" }),
                React.createElement("div", { className: "crater medium" }),
                React.createElement("div", { className: "crater large" }))));
    }
}
export default Moon;
