import React from 'react';
var ReactDOM = require('react-dom');
var Scroll  = require('react-scroll');

var ScrollLink       = Scroll.Link;
var ScrollElement    = Scroll.Element;
var ScrollEvents     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

//подключаеем роутинг
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

//Подключаем сюда компоненты для маршрутизации в services
import Home from './components/home.jsx'
import Web from './components/services/web.jsx'
import Graphic from './components/services/graphic.jsx'
import AppDesign from './components/services/appDesign.jsx'
import Support from './components/services/support.jsx'
import Marketing from './components/services/marketing.jsx'
import Seo from './components/services/seo.jsx'
// import History from './components/aboutCompany/history.jsx'

class NewId extends React.Component{
   constructor(props) {
      super(props)
      //console.log(this.props);
   }
   componentDidMount(){
      scrollSpy.update();
   }
   render() {
      // доступ к query параметрам
      let location = this.props.location
      let date = location.query.date;
      let text = location.query.text;
      return (
            <div className="container newId-container">
               <h3>New id: {this.props.params.newID}</h3>
               <p>{text}</p>
               <h4>{date}</h4>
               <Link to="/">Back</Link>
            </div>
      )}
}

class App extends React.Component{

   render(){
      return(
            <div id="main-container">
               <header id="header">
                  <div className="container-fluid">
                     <div className="row">
                        <div className="col-md-3 col-sm-3 col-sm-3 hidden-xs">
                           <img id="header-logotype" src="src/images/logo.png"/>
                        </div>
                        <div className="col-md-9 col-sm-9 col-sm-9 col-xs-12">
                           <div className="container-fluid">
                              <div className="row">

                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><ScrollLink to="slider"  spy={true} smooth={true} offset={-50} duration={500} className="header-link">Home</ScrollLink></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><ScrollLink to="about" spy={true} smooth={true} offset={-30} duration={500} className="header-link" >About</ScrollLink></div></div>

                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><ScrollLink to="service" spy={true} smooth={true} offset={-50} duration={500} className="header-link" >Service</ScrollLink></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2"><div className="nav-content"><ScrollLink to="feedback" spy={true} smooth={true} offset={-40} duration={500} className="header-link" >Feedback</ScrollLink></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><ScrollLink to="portfolio" spy={true} smooth={true} offset={-50} duration={500} className="header-link" >Work</ScrollLink></div></div>

                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><ScrollLink to="news" spy={true} smooth={true} offset={-50} duration={500} className="header-link" >News</ScrollLink></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><ScrollLink to="team" spy={true} smooth={true} offset={-50} duration={500} className="header-link" >Team</ScrollLink></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><ScrollLink to="contacts" spy={true} smooth={true} offset={-50} duration={500} className="header-link" >Contacts</ScrollLink></div></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </header>
               <div className="homeContainer">{this.props.children}</div>
               <footer>

                  <div className="container footer-container">
                     <p className="footer-text">Copyright 2016 <a  href="javascript:void(0)">theHam</a> | All Rights Reserved</p>
                     <ScrollLink className="footer-btn" to="slider"  spy={true} smooth={true} offset={-50} duration={500}><i className="fa fa-angle-up"></i></ScrollLink>
                  </div>

               </footer>
            </div>
      )
   }
}

ReactDOM.render(<Router history={hashHistory}>
   <Route component={App}>
      <Route key={0} path ="/" component={Home}>
         <IndexRoute component={Web}></IndexRoute>
         <Route key={1} path="/service/Web" component={Web}/>
         <Route key={2} path="/service/Graph" component={Graphic} />
         <Route key={3} path="/service/Support" component={Support} />
         <Route key={4} path="/service/AppDesign" component={AppDesign} />
         <Route key={5} path="/service/Marketing" component={Marketing} />
         <Route key={6} path="/service/Seo" component={Seo} />
      </Route>
      <Route key={7} path="new/:newID" component={NewId} />
   </Route>

</Router>, document.getElementById('root'));
