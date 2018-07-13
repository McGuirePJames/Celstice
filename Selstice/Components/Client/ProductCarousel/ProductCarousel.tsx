import * as React from "react";
import Slider from "react-slick";
import "../ProductCarousel/_ProductCarouselStylesheet.scss";
import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";

export class ProductCarousel extends React.Component<{},  {}> {
    public render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 6000,
            centerPadding: "60px",
            className: "center",
            infinite: true,
            swipeToSlide: true,
        };
        return (
            <Slider className="product-carousel" {...settings}>
                <div className="product-carousel__product-container">
                    <img className="product-carousel__product-image" src="http://www.funnycatsite.com/pictures/Fancy_Cat6872.jpg" alt="Fancy Cat"/>
                </div>
                <div className="product-carousel__product-container">
                    <img className="product-carousel__product-image" src="https://media.daysoftheyear.com/20171223125918/happy-cat-month-1.jpg" alt="Happy Cat" />
                </div>
                <div className="product-carousel__product-container">
                    <img className="product-carousel__product-image" src="http://i0.kym-cdn.com/photos/images/original/001/163/583/0d7.jpg" alt="Happy Cat"/>
                </div>
            </Slider>
        );
    }
}
export default ProductCarousel;
