import React from 'react';
import Slider from 'react-slick';
import './SlideGig.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const SlideG = ({children}) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      };
  return (
    <div className="slide_gig">
        <div className="container_gig">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default SlideG