import * as React from "react";
import SpaceBackground from "../../SpaceBackground/SpaceBackground";
import "../Space/SpaceStylesheet.css";
import { CompanyMotto } from "../../CompanyMotto/CompanyMotto";
import { NavigationIcons } from "../../NavigationIcons/NavigationIcons";
export class Space extends React.Component {
    render() {
        return (React.createElement("div", { className: "space-container" },
            React.createElement(SpaceBackground, null),
            React.createElement(NavigationIcons, null),
            React.createElement(CompanyMotto, null)));
    }
}
export default Space;
