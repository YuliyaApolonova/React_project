import React from 'react'
import AnimationCount from 'react-count-animation'
const settings = {
   start: 0,
   count: 4609,
   duration: 3000,
   decimals: 4,
   useGroup: false,
   animation: 'up',
}

class Numbers extends React.Component{
   constructor(){
      super()
      this.state={
         isScroll: false
      }
      this.scrollHandler = this.scrollHandler.bind(this);
   }
   scrollHandler(){ //не срабатывает
      console.log('fgf');
      var counters = document.getElementById('numbers');
      var countersCoords = counters.getBoundingClientRect();
      var isVisibleTop = countersCoords.top > 0 && countersCoords.top < document.documentElement.clientHeight;
      var isVisibleBottom = countersCoords.bottom < document.documentElement.clientHeight && countersCoords.bottom > 0;
      if (isVisibleTop || isVisibleBottom){
         this.setState({isScroll: true});
         //alert('sfjvhfjhv');//работает
         return true;
      }
      else{
         this.setState({isScroll: false});
         return false;
      }
   }
   componentDidMount() {
      document.addEventListener('scroll', this.scrollHandler);
   }

   componentWillMount() {
      document.removeEventListener('scroll', this.scrollHandler);
   }


   render(){
      return (
            <div id="numbers">
               {this.state.isScroll ?  ( <div className="number-container">
                  <AnimationCount {...settings}/>
               </div>) : (null)
               }
            </div>
      )
   }
}

export default Numbers