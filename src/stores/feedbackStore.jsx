import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class FeedbackStore extends EventEmitter{
   constructor(){
      super()
      this.comments = [ {title: 'caption1', msg: 'Some text here'},
         {title: 'caption2', msg: 'Some message'}
         ]
   }
   createComment(comment){
      this.comments.push(comment);
   }
   removeComment(title){
      var tmpData = this.comments;
      for(var i=0; i<tmpData.length; i++){
         if(tmpData[i].title == title){
            tmpData.splice(i,1);
         }
      }
      this.comments = tmpData;
   }
   getComments() {

      return this.comments;
   }



// обработка actions
handleActions(action) {
   switch (action.type) {
      case "CREATE_ITEM": {
         console.log('Item created');
         this.createComment(action.comment);
         this.emit('changeComments')
         break;
      }

      case "REMOVE_ITEM": {
         console.log('Item removed');
         this.removeComment(action.title);
         this.emit('changeComments');
         break;
      }

   }
}
}

const feedbackStore = new FeedbackStore;
dispatcher.register(feedbackStore.handleActions.bind(feedbackStore));

module.exports = feedbackStore;