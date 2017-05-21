import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';
import CountUp, { startAnimation } from 'react-countup';

class CounterStore extends EventEmitter{
   constructor(){
      super()
   }
   animate(work, customer, purchase, office){
      startAnimation(work);
      startAnimation(customer);
      startAnimation(purchase);
      startAnimation(office);
   }
   handleActions(action) {
      switch (action.type) {
         case "ANIMATE": {
            console.log('Animated');
            this.animate(action.work, action.customer, action.purchase, action.office);
            this.emit('animate')
            break;
         }
      }
   }
}

const counterStore = new CounterStore;
dispatcher.register(counterStore.handleActions.bind(counterStore));

module.exports = counterStore;