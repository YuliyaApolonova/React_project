import React from 'react'

class Slider extends React.Component{
   render(){
      return(
            <div id="slider">
               <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                     <div className="carousel-item active">
                        <img className="d-block img-fluid" src="src/images/slide1.jpg" alt="First slide"/>
                     </div>
                     <div className="carousel-item">
                        <img className="d-block img-fluid" src="src/images/slide2.jpg" alt="Second slide"/>
                     </div>
                     <div className="carousel-item">
                        <img className="d-block img-fluid" src="src/images/slide3.jpg" alt="Third slide"/>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                  </a>
               </div>
            </div>
      )
   }
}


export default Slider