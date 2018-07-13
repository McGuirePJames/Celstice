import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Rocket/_RocketStylesheet.scss";
export var Direction;
(function (Direction) {
    Direction[Direction["SharpUp"] = 0] = "SharpUp";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Flat"] = 2] = "Flat";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["SharpDown"] = 4] = "SharpDown";
})(Direction || (Direction = {}));
export class Rocket extends React.Component {
    constructor(props) {
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
    componentDidMount() {
        document.addEventListener("mousemove", this.handleMouseMove);
        document.getElementById('spaceBackground').addEventListener("mouseover", this.handleMouseEnter);
        document.getElementById('spaceBackground').addEventListener("mouseleave", this.handleMouseLeave);
        window.addEventListener('resize', this.handleWindowResize);
        setInterval(this.checkIfComponentIsOverlapping, 75);
    }
    render() {
        const rocketStyle = {
            left: this.state.x,
            top: this.state.y,
            transform: "rotate(" + this.getRotateDeg(this.state.cursorDirection) + "deg)",
            backgroundColor: this.state.isDestroyed ? "red" : "transparent"
        };
        return (React.createElement("div", { id: "rocket", style: rocketStyle, ref: "component" },
            this.state.rocketIgnited ? (React.createElement("div", { id: "ignition" })) : null,
            React.createElement("div", { id: "thruster", onClick: this.handleRocketClick }),
            React.createElement("div", { id: "thrusterConnector", onClick: this.handleRocketClick })));
    }
    igniteRocket() {
        this.setState(Object.assign({}, this.state, { rocketIgnited: true }));
    }
    handleRocketClick() {
        this.igniteRocket();
    }
    checkIfComponentIsOverlapping() {
        const component = ReactDOM.findDOMNode(this.refs.component);
        const componentBounding = component.getBoundingClientRect();
        const collisionElements = document.getElementsByClassName('collision');
        for (let i = 0; i < collisionElements.length; i++) {
            var currentelement = collisionElements[i];
            var currentElementBounding = currentelement.getBoundingClientRect();
            var overlap = !(componentBounding.right < currentElementBounding.left ||
                componentBounding.left > currentElementBounding.right ||
                componentBounding.bottom < currentElementBounding.top ||
                componentBounding.top > currentElementBounding.bottom);
            if (!this.state.isDestroyed && overlap) {
                this.setState({
                    isDestroyed: true
                });
            }
        }
    }
    handleMouseMove(e) {
        if (this.state.cursorInElement) {
            this.setState(Object.assign({}, this.state, { x: Number(e.clientX) - 200, y: Number(e.clientY) - this.state.rocketWidth, cursorDirection: this.getRotateDirection(e.movementY) }));
        }
    }
    handleMouseEnter(e) {
        this.setState(Object.assign({}, this.state, { cursorInElement: true, x: Number(e.clientX) - 200, y: Number(e.clientY) - this.state.rocketWidth, cursorDirection: this.getRotateDirection(e.movementY) }));
    }
    handleMouseLeave(e) {
        this.setState(Object.assign({}, this.state, { cursorInElement: false, x: Number(e.clientX) - 200, y: Number(e.clientY) - this.state.rocketWidth, cursorDirection: this.getRotateDirection(e.movementY) }));
    }
    handleWindowResize(e) {
        this.setState(Object.assign({}, this.state, { windowWidth: window.innerWidth }));
    }
    getRotateDirection(movementY) {
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
    getRotateDeg(direction) {
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
