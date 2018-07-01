import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Rocket/_RocketStylesheet.scss";
import { MouseEvent, MouseEventHandler, ReactElement } from "react";

export interface IRocketState {
    rocketIgnited: boolean;
}

export class Rocket extends React.Component<{},  IRocketState> {
    public constructor(props) {
        super(props);
        this.state = {
            rocketIgnited: false,
        };
        this.igniteRocket = this.igniteRocket.bind(this);
        this.handleRocketClick = this.handleRocketClick.bind(this);
    }

    public componentDidMount(): void {
        this.setState({
            ...this.state,
            rocketIgnited: false,
        });
    }
    public render() {
        return (
            <div id="rocket">
                {
                    this.state.rocketIgnited ? (
                        <div id="ignition">

                        </div>
                    ) : null
                }
                <div id="thruster" onClick={this.handleRocketClick}>

                </div>
                <div id="thrusterConnector" onClick={this.handleRocketClick}>
                </div>
            </div>
        );
    }
    private igniteRocket(): void {
        this.setState({
            ...this.state,
            rocketIgnited: true,
        });
    }
    private handleRocketClick(): void {
        this.igniteRocket();
    }
}
export default Rocket;
