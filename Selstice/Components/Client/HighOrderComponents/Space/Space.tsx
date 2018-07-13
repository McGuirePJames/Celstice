import * as React from "react";
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
            </div>
        );
    }
}
export default Space;
