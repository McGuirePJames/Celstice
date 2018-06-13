import Space from '../../Components/Client/HighOrderComponents/Space/Space';
import NavigationBar from '../../Components/Server/NavigationBar/NavigationBar'
import * as ReactDOM from 'react-dom';
import * as React from 'react'

window.onload = function () {
    ReactDOM.render(
        <Space />,
        document.getElementById('particleMount')
    );
    ReactDOM.render(
        <NavigationBar />,
        document.getElementById('navigationMount')
    );
}