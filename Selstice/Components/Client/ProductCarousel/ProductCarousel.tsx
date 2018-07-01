import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MouseEvent, MouseEventHandler, ReactElement } from 'react';
import Slider from "react-slick";
import '../ProductCarousel/_ProductCarouselStylesheet.scss';
import '../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../node_modules/slick-carousel/slick/slick-theme.scss';


export interface IProductCarouselProps {

}
export interface IProductCarouselState {

}

export class ProductCarousel extends React.Component<IProductCarouselProps, IProductCarouselState>{
    render(): ReactElement<IProductCarouselProps> {
        var settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 6000
        };
        return (
            <Slider className="product-carousel" {...settings}>
                <div className="product-carousel__product-container">
                    <img className="product-carousel__product-image" src="http://www.funnycatsite.com/pictures/Fancy_Cat6872.jpg"/>
                </div>
                <div className="product-carousel__product-container">
                    <img className="product-carousel__product-image" src="https://media.daysoftheyear.com/20171223125918/happy-cat-month-1.jpg" />
                </div>
                <div className="product-carousel__product-container">
                    <img className="product-carousel__product-image" src="http://i0.kym-cdn.com/photos/images/original/001/163/583/0d7.jpg" />
                </div>
            </Slider>
        )
    }
}
export default ProductCarousel;