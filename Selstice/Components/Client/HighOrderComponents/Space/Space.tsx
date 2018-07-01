import * as React from "react";
import * as ReactDOM from "react-dom";
import Moon from "../../Moon/Moon";
import SpaceBackground from "../../SpaceBackground/SpaceBackground";
import "../Space/SpaceStylesheet.css";
import { CompanyMotto } from "../../CompanyMotto/CompanyMotto";
import { NavigationIcons } from "../../NavigationIcons/NavigationIcons";

export class Space extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="space-container">
                <SpaceBackground />
                <NavigationIcons />
                <CompanyMotto />
                <Moon />
            </div>
        );
    }
}
export default Space;
