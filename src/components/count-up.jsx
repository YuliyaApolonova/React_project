import React from 'react';
import { render } from 'react-dom';
import CountUp, { startAnimation } from 'react-countup';

var counterAction = require('../actions/counterAction')
import counterStore from '../stores/counterStore.jsx'

class Counts extends React.Component{
   constructor(){
      super()
      this.state={
         isAnimatedRecently: false
      }
      this.scrollHandler = this.scrollHandler.bind(this);
   }
   scrollHandler(){
      var counters = document.getElementById('counters');
      var countersCoords = counters.getBoundingClientRect();
      var isVisibleTop = countersCoords.top > 0 && countersCoords.top < document.documentElement.clientHeight;
      var isVisibleBottom = countersCoords.bottom < document.documentElement.clientHeight && countersCoords.bottom > 0;
      if ((isVisibleTop || isVisibleBottom) && !this.state.isAnimatedRecently){


         console.log('visible');//работает;

         counterAction.animate(this.Works, this.Customers, this.Purchase, this.Office);


         this.setState({isAnimatedRecently: true});

         return true;
      }
      else{
         console.log('invisible');
         // this.setState({isScroll: false});
         return false;
      }
   }
   componentDidMount() {
      document.addEventListener('scroll', this.scrollHandler);
   }
   render(){
      return(
            <div id='counters'>
               <div className="container-fluid">
               <div className="row">
                  <div className='dark-light-counters col-md-3 col-sm-6 col-xs-12'>
                     <div className='dark-light-counters-icon'>
                        <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                     </div>
                     <CountUp className="CountUp" start={0} end={4609} duration={3} ref={(Works) => {
                        this.Works = Works;
                     }} />
                     <br/>
                     <span>Works</span>
                     <br/>
                  </div>
                  <div className='light-dark-counters col-md-3 col-sm-6 col-xs-12'>
                     <div className='light-dark-counters-icon'>
                        <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                     </div>
                     <CountUp className="CountUp" start={0} end={3470} duration={3} ref={(Customers) => {
                        this.Customers = Customers;
                     }} />
                     <br/>
                     <span>Customers</span>
                     <br/>
                  </div>
                  <div className='dark-light-counters col-md-3 col-sm-6 col-xs-12'>
                     <div className='dark-light-counters-icon'>
                        <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                     </div>
                     <CountUp className="CountUp" start={0} end={2908} duration={3} ref={(Purchase) => {
                        this.Purchase = Purchase;
                     }} />
                     <br/>
                     <span>Purchase</span>
                     <br/>
                  </div>
                  <div className='light-dark-counters col-md-3 col-sm-6 col-xs-12'>
                     <div className='light-dark-counters-icon'>
                        <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                     </div>
                     <CountUp className="CountUp" start={0} end={1908} duration={3} ref={(Office) => {
                        this.Office = Office;
                     }} />
                     <br/>
                     <span>Office</span>
                     <br/>
                  </div>
               </div>
               </div>
            </div>
      )
   }
}

export default Counts

