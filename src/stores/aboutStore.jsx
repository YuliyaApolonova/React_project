import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class AboutStore extends EventEmitter{
   constructor(){
      super()
   }
   animate(){
         $( "#skills-block1" ).animate({
               width: "300px"
            }, 3000 );

         $( "#skills-block2" ).animate({
            width: "230px"
         }, 3000 );

         $( "#skills-block3" ).animate({
            width: "200px"
         }, 3000 );

         $( "#skills-block4" ).animate({
            width: "250px"
         }, 3000 );

         $( "#skills-block5" ).animate({
            width: "270px"
         }, 3000 );

      }
   handleActions(action) {
      switch (action.type) {
         case "ANIMATION": {
            console.log('Animated');
            this.animate();
            this.emit('animate')
            break;
         }
      }
   }
}

const aboutStore = new AboutStore;
dispatcher.register(aboutStore.handleActions.bind(aboutStore));

module.exports = aboutStore;