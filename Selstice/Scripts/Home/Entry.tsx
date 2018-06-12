import Particle from '../Home/Particles';
import * as ReactDOM from 'react-dom';
import * as React from 'react'

window.onload = function () {
    console.log("HiThere");
    ReactDOM.render(
        <Particle/>,
        document.getElementById('particleMount')
    )
}