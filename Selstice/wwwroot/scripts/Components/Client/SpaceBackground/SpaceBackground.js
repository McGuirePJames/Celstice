"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_particles_js_1 = require("react-particles-js");
var React = require("react");
require("../SpaceBackground/SpaceBackgroundStylesheet.css");
var SpaceBackground = /** @class */ (function (_super) {
    __extends(SpaceBackground, _super);
    function SpaceBackground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpaceBackground.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_particles_js_1.default, { params: {
                    particles: {
                        number: {
                            value: 2000,
                            density: {
                                enable: true,
                                value_area: 789.1476416322727
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000"
                            },
                            polygon: {
                                nb_sides: 3
                            },
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100
                            }
                        },
                        opacity: {
                            value: 0.48927153781200905,
                            random: false,
                            anim: {
                                enable: true,
                                speed: 0.05,
                                opacity_min: 0,
                                sync: false
                            }
                        },
                        size: {
                            value: 2,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 0,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
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
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble"
                            },
                            onclick: {
                                enable: true,
                                mode: "push"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 83.91608391608392,
                                size: 1,
                                duration: 3,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    }
                }, style: {
                    width: '100%',
                } })));
    };
    return SpaceBackground;
}(React.Component));
exports.SpaceBackground = SpaceBackground;
exports.default = SpaceBackground;
//# sourceMappingURL=SpaceBackground.js.map