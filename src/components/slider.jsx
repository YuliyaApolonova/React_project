import React from 'react'
import { Carousel } from 'react-bootstrap'

class Slider extends React.Component{
   render(){
      return(
            <div id="slider">
            <Carousel interval={3000}>
               <Carousel.Item className="carousel">
                  <img width={1600} height={500} alt="900x500" src="src/images/slide1.jpg"/>
                  <Carousel.Caption>
                     <h3>The HAM is a psd template</h3>
                     <h2>We are creative</h2>
                     <p>Nam varius accumsan elementim eliquam</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item className="carousel">
                  <img width={1600} height={500} alt="900x500" src="src/images/slide2.jpg"/>
                  <Carousel.Caption>
                     <h3>The HAM is a psd template</h3>
                     <h2>We are creative</h2>
                     <p>Nam varius accumsan elementim eliquam</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item className="carousel">
                  <img width={1600} height={500} alt="900x500" src="src/images/slide3.jpg"/>
                  <Carousel.Caption>
                     <h3>The HAM is a psd template</h3>
                     <h2>We are creative</h2>
                     <p>Nam varius accumsan elementim eliquam</p>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
            </div>
      )
   }
}


export default Slider