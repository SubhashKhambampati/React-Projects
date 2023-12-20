import React from 'react';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,


  };
  return (

    <Carousel {...settings}>

        <Wrap>

        <img src = "/images/slider-badging.jpg" alt = "" />

        </Wrap>
        <Wrap >

        <img src = "/images/slider-badag.jpg" alt = "" />

        </Wrap>

        
        




     
    
      
    </Carousel>
    

  );

}

export default ImgSlider

const Carousel = styled(Slider)`
margin:0px 70px;
margin-top:20px;
ul li button{

  &:before{
    font-size:10px;
    color:rgba(150,158,171);
  }
}

li.slick-active button::before{
  color:white;

}

.slick-list{
  overflow:visible;

}

`

const Wrap = styled.div`


img{

  
  

  border-radius:10px;
  border:4px solid transparent;

  
  width:100%;
  height:70%;

  box-shadow:rgba(0 0 0 / 69%) 0px 26px 30px -10px , rgba(0 0 0 / 73%) 0px 16px 10px -10px;
}

`

