import Space from '../../Components/Client/HighOrderComponents/Space/Space';
import NavigationBar from '../../Components/Server/NavigationBar/NavigationBar'
import AboutUs from '../../Components/Client/AboutUs/AboutUs'
import Products from '../../Components/Client/Products/Products'
import Rocket from '../../Components/Client/Rocket/Rocket'
import * as ReactDOM from 'react-dom';
import * as React from 'react'

window.onload = function () {
    ReactDOM.render(
        <Rocket />,
        document.getElementById('rocketMount')
    )
    ReactDOM.render(
        <Space />,
        document.getElementById('spaceMount')
    );
    ReactDOM.render(
        <AboutUs />,
        document.getElementById('aboutUsMount')
    );
    ReactDOM.render(
        <Products />,
        document.getElementById('productsMount')
    );
}