import * as React from "react";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Button from "../Button/Button";
import "../Products/_ProductsStylesheet.scss";
import 'aos/dist/aos.css';
export class Products extends React.Component {
    componentDidMount() {
    }
    render() {
        return (React.createElement("div", { className: "products" },
            React.createElement("div", { className: "products__container-description" },
                React.createElement("h5", { className: "products__title" }, "Products"),
                React.createElement("p", { className: "products__description" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),
                React.createElement(Button, { Text: "Learn More", Color: "#00B99A" })),
            React.createElement("div", { className: "products__images" },
                React.createElement(ProductCarousel, null))));
    }
}
export default Products;
