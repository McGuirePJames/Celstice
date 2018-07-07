import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Rocket/_RocketStylesheet.scss";
import { MouseEvent, MouseEventHandler, ReactElement } from "react";
import ReactCSSTransitionGroup from 'react-transition-group/Transition';

export interface IRocketState {
    rocketIgnited: boolean;
    x: number;
    y: number;
    cursorInElement: boolean;
    rocketWidth: number,
    windowWidth: number,
    cursorDirection: Direction,
    isDestroyed: boolean
}
export enum Direction {
    SharpUp,
    Up,
    Flat,
    Down,
    SharpDown
}

export class Rocket extends React.Component<{}, IRocketState> {
    public constructor(props) {
        super(props);
        this.state = {
            rocketIgnited: true,
            x: 400,
            y: 400,
            cursorInElement: false,
            rocketWidth: 30,
            windowWidth: window.innerWidth,
            cursorDirection: Direction.Flat,
            isDestroyed: false
        };

        this.igniteRocket = this.igniteRocket.bind(this);
        this.handleRocketClick = this.handleRocketClick.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.checkIfComponentIsOverlapping = this.checkIfComponentIsOverlapping.bind(this);
        this.getRotateDirection = this.getRotateDirection.bind(this);
    }

    public componentDidMount(): void {
        document.addEventListener("mousemove", this.handleMouseMove);
        document.getElementById('spaceMount').addEventListener("mouseover", this.handleMouseEnter);
        document.getElementById('spaceMount').addEventListener("mouseleave", this.handleMouseLeave);
        window.addEventListener('resize', this.handleWindowResize);

        setInterval(this.checkIfComponentIsOverlapping, 75);
    }
    public render() {    
        const rocketStyle = {
            left: this.state.x,
            top: this.state.y,
            transform: "rotate(" + this.getRotateDeg(this.state.cursorDirection) + "deg)",
            backgroundColor: this.state.isDestroyed ? "red" : "transparent"
        }

        return (
            <div id="rocket" style={rocketStyle} ref="component">
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
    private checkIfComponentIsOverlapping(): void {
        const component: HTMLElement = ReactDOM.findDOMNode(this.refs.component) as HTMLElement;
        const componentBounding: ClientRect = component.getBoundingClientRect();
        const collisionElements: HTMLCollectionOf<Element> = document.getElementsByClassName('collision');

        for (let i = 0; i < collisionElements.length; i++) {
            var currentelement: Element = collisionElements[i];
            var currentElementBounding: ClientRect = currentelement.getBoundingClientRect();
            var overlap: boolean = !(componentBounding.right < currentElementBounding.left ||
                componentBounding.left > currentElementBounding.right ||
                componentBounding.bottom < currentElementBounding.top ||
                componentBounding.top > currentElementBounding.bottom)

            if (!this.state.isDestroyed && overlap) {
                this.setState({
                    isDestroyed: true
                })
            }
        }
    }
    private handleMouseMove(e): void {
        //var component = ReactDOM.findDOMNode(this.refs.component);
        //if (e.target !== component && !component.contains(e.target)) {

        if (this.state.cursorInElement) {
            this.setState({
                ...this.state,
                x: Number(e.clientX) - 200,
                y: Number(e.clientY) - this.state.rocketWidth,
                cursorDirection: this.getRotateDirection(e.movementY),
                //cursorDirection: Number(e.movementY) > 0 ? Direction.Down : Number(e.movementY) < 0 ? Direction.Up : Direction.Flat,
            })
        }
    }
    private handleMouseEnter(e): void {
        this.setState({
            ...this.state,
            cursorInElement: true,
            //x: Number(e.clientX) >= this.state.windowWidth / 1.75 ? e.clientX - 200 : 400,
            x: Number(e.clientX) - 200,
            y: Number(e.clientY) - this.state.rocketWidth,
            cursorDirection: this.getRotateDirection(e.movementY),
        })
    }
    private handleMouseLeave(e): void {
        this.setState({
            ...this.state,
            cursorInElement: false,
            //x: Number(e.clientX) >= this.state.windowWidth / 1.75 ? e.clientX - 200 : 400,
            x: Number(e.clientX) - 200,
            y: Number(e.clientY) - this.state.rocketWidth,
            cursorDirection: this.getRotateDirection(e.movementY),
        })
    }
    private handleWindowResize(e): void {
        this.setState({
            ...this.state,
            windowWidth: window.innerWidth
        })
    }
    private getRotateDirection(movementY: number): Direction {
        if (movementY >= 4) {
            return Direction.Down;
        }
        else if (movementY >= 1 && movementY <= 3) {
            return Direction.Down;
        }
        else if (movementY === 0) {
            return Direction.Flat;
        }
        else if (movementY <= -1 && movementY >= -3) {
            return Direction.Up;
        }
        else {
            return Direction.Up;
        }
    }
    private getRotateDeg(direction: Direction):number {
        if (direction === Direction.SharpUp) {
            return 45;
        }
        else if (direction === Direction.Up) {
            return 67;
        }
        else if (direction === Direction.Flat) {
            return 90;
        }
        else if (direction === Direction.Down) {
            return 112;
        }
        else if (direction === Direction.SharpDown) {
            return 135;
        }      
    }
}
export default Rocket;
