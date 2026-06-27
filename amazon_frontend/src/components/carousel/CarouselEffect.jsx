import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from "./carouselEffect.module.css"

import { i
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={false}
        infiniteLoop={false}
        showIndicators={false}
        showThumbs={false}
      >
      {
        img.map((singleImage,index)=> {
           return <img src={singleImage}/>

          } )
      }
      </Carousel>
    <div className={classes.hero_image}></div>
    </div>
  );
}

export default CarouselEffect