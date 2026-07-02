import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from "./carouselEffect.module.css"
import { img } from './img/data'
function CarouselEffect() {
  return (
    <div >
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
      {
        img?.map((singleImage,index)=> {
           return <img src={singleImage} alt='banner image' key={index}/>

          } )
      }
      </Carousel>
    <div className={classes.hero_image}></div>
    </div>
  );
}

export default CarouselEffect