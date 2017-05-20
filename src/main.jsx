import React from 'react';
var ReactDOM = require('react-dom');

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
import History from './components/aboutCompany/history.jsx'

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

                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><Link to="home" className="header-link">HOME</Link></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><Link to="about" className="header-link" >ABOUT</Link></div></div>

                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><Link to="service" className="header-link" >SERVICE</Link></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><Link to="skills" className="header-link" >SKILLS</Link></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><Link to="portfolio" className="header-link" >PORTFOLIO</Link></div></div>

                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><Link to="news" className="header-link" >TESTIMONIAL</Link></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><Link to="team" className="header-link" >TEAM</Link></div></div>
                                 <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"><div className="nav-content"><Link to="contact" className="header-link" >CONTACTS</Link></div></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </header>
               <div className="homeContainer">{this.props.children}</div>
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
      <Route key={7} path="/about" component={Home}>
         <IndexRoute component={History}></IndexRoute>
         <Route key={8} path="/about/History" component={History}/>
      </Route>
   </Route>

</Router>, document.getElementById('root'));
