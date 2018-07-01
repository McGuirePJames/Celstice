import * as React from "react";
import * as ReactDOM from "react-dom";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Button from "../Button/Button";
import "../Products/_ProductsStylesheet.scss";

export class Products extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="products">
                <div className="products__container-description">
                    <h5 className="products__title">Products</h5>
                    <p className="products__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <Button Text="Learn More" Color="#00B99A" />
                </div>
                <div className="products__images">
                    <ProductCarousel />
                </div>
            </div>
        );
    }
}
export default Products;
