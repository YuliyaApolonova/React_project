import React from 'react'

var aboutActions = require('../actions/aboutActions')
import aboutStore from '../stores/aboutStore.jsx'

var router = require('react-router');
var Link = router.Link;


class About extends React.Component{
   constructor(){
      super()
      this.state={
         isAnimatedRecently: false
      }
      this.scrollHandler = this.scrollHandler.bind(this);
   }
   scrollHandler(){
      var about = document.getElementById('about');
      var aboutCoords = about.getBoundingClientRect();
      var isVisibleTop = aboutCoords.top > 0 && aboutCoords.top < document.documentElement.clientHeight;
      var isVisibleBottom = aboutCoords.bottom < document.documentElement.clientHeight && aboutCoords.bottom > 0;
      if ((isVisibleTop || isVisibleBottom) && !this.state.isAnimatedRecently){

         aboutActions.animate();

         this.setState({isAnimatedRecently: true});

         return true;
      }
      else{
         return false;
      }
   }
   componentDidMount() {
      document.addEventListener('scroll', this.scrollHandler);
   }
   render(){
      return(
            <div id="about">
               <div id="about-wrapper">
               <div id="about-container" className="container">
                     <div className=" col-lg-6 col-md-6 hidden-sm hidden-xs" id="about-photo"></div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                     <div className="row">
                        <h1>About our company</h1>
                        <hr className="hr1"/>
                        <hr className="hr2"/>
                        <div className="skills-block">
                        <div className="skills-link"><Link to="/about/History" > OUR HISTORY</Link></div>
                        <div className="skills-link"><Link to="/about/Biography" > OUR BIOGRAPHY</Link></div>
                        <div className="skills-link"><Link to="/about/Skills" > OUR SKILLS</Link></div>
                        </div>

                        <div id="diagram-container">
                        <div className="row">
                        <div className="skills-block" id="skills-block1"></div>
                        </div>
                        <div className="row">
                        <div className="skills-block" id="skills-block2"></div>
                        </div>
                           <div className="row">
                        <div className=" skills-block" id="skills-block3"></div>
                           </div>
                        <div className="row">
                        <div className="skills-block" id="skills-block4"></div>
                        </div>
                        <div className="row">
                        <div className=" skills-block" id="skills-block5"></div>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
      )
   }
}

export default About