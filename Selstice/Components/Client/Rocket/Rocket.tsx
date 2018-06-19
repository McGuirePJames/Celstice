import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../Rocket/_RocketStylesheet.scss';
import { MouseEvent, MouseEventHandler, ReactElement } from 'react';

export interface IRocketProps {

}
export interface IRocketState {
    rocketIgnited: boolean
}

export class Rocket extends React.Component<IRocketProps, IRocketState> {
    public constructor(props) {
        super(props)
        this.state = {
            rocketIgnited: false
        }
        this.igniteRocket = this.igniteRocket.bind(this);
        this.handleRocketClick = this.handleRocketClick.bind(this);
    }
    igniteRocket():void {
        this.setState({
            ...this.state,
            rocketIgnited: true
        })
    }
    handleRocketClick():void {
        this.igniteRocket();
    }
    componentDidMount():void {
        this.setState({
            ...this.state, 
            rocketIgnited: false
        })
    }
    render():ReactElement<IRocketProps> {
        return (
            <div id="rocket">
                {
                    this.state.rocketIgnited ? (
                        <div id="ignition">

                        </div>
                    ): null
                }
                <div id="thruster" onClick={this.handleRocketClick}>

                </div>
                <div id="thrusterConnector" onClick={this.handleRocketClick}>
                </div>
            </div>
        )
    }
}
export default Rocket;