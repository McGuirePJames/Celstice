import Space from '../../Components/Client/HighOrderComponents/Space/Space';
import NavigationBar from '../../Components/Server/NavigationBar/NavigationBar'
import AboutUs from '../../Components/Client/AboutUs/AboutUs'
import Products from '../../Components/Client/Products/Products'
import Rocket from '../../Components/Client/Rocket/Rocket'
import CompanyDetails from '../../Components/Client/CompanyDetails/CompanyDetails'
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
    ReactDOM.render(
        <CompanyDetails Title="Services" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." ButtonText="Learn More" ButtonColor="#F77249" ImagePath="http://i0.kym-cdn.com/entries/icons/original/000/000/888/VanillaHappyCat.jpg" IconPath="" Reversed={false}  />,
        document.getElementById('servicesMount')
    )
}