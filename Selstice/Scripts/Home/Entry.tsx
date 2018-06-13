import SpaceBackground from '../../Components/Client/SpaceBackground/SpaceBackground';
import NavigationBar from '../../Components/Server/NavigationBar/NavigationBar'
import * as ReactDOM from 'react-dom';
import * as React from 'react'

window.onload = function () {
    ReactDOM.render(
        <SpaceBackground />,
        document.getElementById('particleMount')
    );
    ReactDOM.render(
        <NavigationBar />,
        document.getElementById('navigationMount')
    );
}