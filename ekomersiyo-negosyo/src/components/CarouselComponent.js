import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../assets/images/BannerImg2.png';
import image2 from './../assets/images/BannerImg1.webp';
import image3 from './../assets/images/Brewery.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;