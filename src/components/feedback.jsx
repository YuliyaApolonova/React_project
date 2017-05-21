import React from 'react'
var feedbackActions = require('../actions/feedbackActions.js');
import feedbackStore from '../stores/feedbackStore.jsx'
class Feedback extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         loaded: true,
         data: feedbackStore.getComments()//array
      }
      this.addComment = this.addComment.bind(this);
      this.removeComment = this.removeComment.bind(this);
   }
   addComment(){
      this.setState({loaded: true});
      var form = document.forms.feedbackForm;
      var elems = form.elements;
      var newComment = {};
      newComment.title= elems.title.value;
      newComment.msg = elems.message.value;
      feedbackActions.createComment(newComment);

   }
   removeComment(e){
      var title = e.target.dataset.title;
      feedbackActions.removeComment(title);

   }
   componentWillMount() {
      feedbackStore.on('changeComments', () => {
         this.setState({data:feedbackStore.getComments()})
      })
   }
   render(){
      return(
            <div id="feedback">
               <div className="feedbackHeader">
                  <h1>Feedback</h1>
                  <hr className="hr1" />
                  <hr className="hr2" />
               </div>
               <div className="feedbackInner">
                  {this.state.data.map((comment, index) =>{
                     return (
                           <div key={index} className="feedbackMessage">
                              <h3>{comment.title}</h3>
                              <p>{comment.msg}</p>
                              <span>
                            <i data-title={comment.title} className="fa fa-remove fa-1x" onClick={(e) => { this.removeComment(e) }}></i>
                        </span>
                           </div>
                     )
                  })}
               </div>
               <form className="feedbackForm" name="feedbackForm">
                  <div className="row">
                     <div className="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                        <input type="text" placeholder="Title" name="title" />
                        <textarea name="message" placeholder="Message"></textarea>
                     </div>
                     <div className="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                        <h1>Leave us a message</h1>
                        <span className="feedbackAddBtn" onClick={this.addComment}>
                              <i className="fa fa-plus fa-1x"></i>
                              Add comment
                          </span>
                     </div>
                  </div>
               </form>
            </div>
      )
   }
}

export default Feedback