import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Moon/MoonStylesheet.css";

export class Moon extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="container-moon">
                <div className="moon">
                    <div className="crater small">
                    </div>
                    <div className="crater medium">
                    </div>
                    <div className="crater large">
                    </div>
                </div>
            </div>
        );
    }
}
export default Moon;
