import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
// import carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/images/image1.jpg'
import Slide2 from '../../assets/images/image2.jpg'
import Slide3 from '../../assets/images/image3.jpg'



function Slider (){
    return (
        <div>
            <Carousel fade interval={1000}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}
export default Slider;