import React from 'react'

import filterPhotos from '../actions/portfolioActions.jsx'
import portfolioStore from '../stores/portfolioStore.jsx'

class Portfolio extends React.Component{
   constructor(props) {
      super(props)

      this.state = {
         photos: portfolioStore.getAlbum(),

      }
      this.filterPhotos = this.filterPhotos.bind(this);
   }
   filterPhotos(e){
     let category = e.target.dataset.category;
     filterPhotos(category);
   }
   componentWillMount() {//перед тем как компонент будет отображаться
      // назначение обработчика события
      portfolioStore.on("albumChange", () => { this.setState({ photos: portfolioStore.getAlbum() }) })

   }
   render(){
      return(
            <div id="portfolio">
               <h1 className="caption">Our amazing work</h1>
               <hr className="hr1"/>
               <hr className="hr2"/>
               <div className="container-fluid">
                  <div className="row" id="portfolio-menu">
                     <div data-category='all' onClick={(e)=> this.filterPhotos(e)} className="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2  col-sm-12 col-xs-12 portfolio-button">All</div>
                     <div data-category='graphic design' onClick={(e)=> this.filterPhotos(e)} className="col-lg-2 col-md-2 col-sm-3 col-xs-6 portfolio-button">Graphic design</div>
                     <div data-category='web design' onClick={(e)=> this.filterPhotos(e)} className="col-lg-2 col-md-2 col-sm-3 col-xs-6 portfolio-button">Web Design</div>
                     <div data-category='landing pages' onClick={(e)=> this.filterPhotos(e)} className="col-lg-2 col-md-2 col-sm-3 col-xs-6 portfolio-button">Landing pages</div>
                     <div data-category='wordpress' onClick={(e)=> this.filterPhotos(e)} className="col-lg-2 col-md-2 col-sm-3 col-xs-6 portfolio-button">Wordpress</div>
                  </div>
               </div>
               <div className="container portfolio-photo-container">
                  {this.state.photos.map((photo, index)=>{
                     return(
                           <div key = {index} className="col-lg-3 col-md-3 col-sm-5 col-xs-12 portfolio-photo-item">
                              <img className='portfolio-photo' src={photo.src}/>
                              <div className='portfolio-photo-hover'>
                                 <h2 className="portfolio-photo-caption"> {photo.category} </h2>
                                 <span className="hoverObjContent">
                                            <a href="javascript:void(0)"><i className="fa fa-link" aria-hidden="true"></i></a>
										    <a href="javascript:void(0)"><i className="fa fa-search" aria-hidden="true"></i></a>
                                        </span>
                              </div>
                           </div>
                     )
                  })}
               </div>
            </div>
      )
   }
}

export default Portfolio