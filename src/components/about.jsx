import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

var router = require('react-router');
var Link = router.Link;

class TodoList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {items: ['hello', 'world', 'click', 'me']};
      this.handleAdd = this.handleAdd.bind(this);
   }

   handleAdd() {
      const newItems = this.state.items.concat([
         prompt('Enter some text')
      ]);
      this.setState({items: newItems});
   }

   handleRemove(i) {
      let newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
   }

   render() {
      const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
               {item}
            </div>
      ));

      return (
            <div>
               <button onClick={this.handleAdd}>Add Item</button>
               <CSSTransitionGroup
                     transitionName="example"
                     transitionEnterTimeout={500}
                     transitionLeaveTimeout={300}>
                  {items}
               </CSSTransitionGroup>
            </div>
      );
   }
}


class About extends React.Component{


   render(){
      return(
            <div id="about">
               <div id="about-wrapper">
               <div id="about-container" className="container-fluid">
                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" id="about-photo"></div>
                     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <h1>About our company</h1>
                        <hr className="hr1"/>
                        <hr className="hr2"/>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"><Link to="/about/History" > OUR HISTORY</Link></div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"><Link to="/about/Biography" > OUR BIOGRAPHY</Link></div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"><Link to="/about/Skills" > OUR SKILLS</Link></div>

                        <div onScroll={this.handleAdd} className="col-lg-12 col-md-12 col-sm-12 col-xs-12 skills-block"></div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 skills-block"></div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 skills-block"></div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 skills-block"></div>\
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 skills-block"></div>
                     </div>
                     <div className="col-lg-2 col-md-2 hidden-sm hidden-xs"></div>
               </div>
               </div>
            </div>
      )
   }
}

export default About