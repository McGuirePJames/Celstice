import Particles from "react-particles-js";
import * as React from "react";
import "../SpaceBackground/_SpaceBackgroundStylesheet.scss";
import Moon from "../Moon/Moon";
import { Rocket } from "../Rocket/Rocket";
export class SpaceBackground extends React.Component {
    render() {
        return (React.createElement("div", { className: "container-spacebackground" },
            React.createElement(Rocket, null),
            React.createElement("div", { className: "spacebackground" },
                React.createElement("div", { className: "background" }),
                React.createElement(Particles, { className: "particles", params: {
                        particles: {
                            number: {
                                value: 175,
                                density: {
                                    enable: true,
                                    value_area: 789.1476416322727,
                                },
                            },
                            color: {
                                value: "#ffffff",
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000",
                                },
                                polygon: {
                                    nb_sides: 3,
                                },
                            },
                            opacity: {
                                value: 0.48927153781200905,
                                random: false,
                                anim: {
                                    enable: true,
                                    speed: 0.05,
                                    opacity_min: 0,
                                    sync: false,
                                },
                            },
                            size: {
                                value: 1.5,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 2,
                                    size_min: 0,
                                    sync: false,
                                },
                            },
                            line_linked: {
                                enable: false,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1,
                            },
                            move: {
                                enable: true,
                                speed: 0,
                                direction: "none",
                                random: true,
                                straight: false,
                                out_mode: "out",
                                bounce: true,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200,
                                },
                            },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "bubble",
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push",
                                },
                                resize: true,
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 1,
                                    },
                                },
                                bubble: {
                                    distance: 83.91608391608392,
                                    size: 1,
                                    duration: 3,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                push: {
                                    particles_nb: 4,
                                },
                                remove: {
                                    particles_nb: 2,
                                },
                            },
                        },
                    } }),
                React.createElement("div", { className: "slide slide-one" },
                    React.createElement(Moon, null)),
                React.createElement("div", { className: "slide slide-two" }),
                React.createElement("div", { className: "slide slide-three" },
                    React.createElement(Moon, null)))));
    }
}
export default SpaceBackground;
