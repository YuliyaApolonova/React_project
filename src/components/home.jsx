var React = require('react');
var router = require('react-router');

var Link = router.Link;

import Options from '../components/options.jsx'
//import About from '../components/about.jsx'
import Portfolio from '../components/portfolio.jsx'
import Numbers from '../components/numbers.jsx'
import Team from '../components/team.jsx'
import Slider from '../components/slider.jsx'
// var Counters = require('../components/counters.jsx');
// var Feedback = require('../components/feedback.jsx');
// var Contact = require('../components/contact.jsx');
// var Options = require('../components/options.jsx');
// var News = require('../components/news.jsx');
// var Team = require('../components/team.jsx');



class Home extends React.Component {
   render() {
      return (
            <div>
               <Slider></Slider>
               <Options></Options>
               <div id="service">
                  <div className="serviceContainer">
                     <div className="serviceHeader">
                        <h1 className="caption">Our Services</h1>
                        <hr className="hr1" />
                        <hr className="hr2" />
                     </div>
                     <div>
                        <div className="container-fluid" id="services-menu">
                           <div className = "row">
                           <div className = "col-lg-2 col-md-2 col-sm-4 col-xs-6 service-button"><Link to="/service/Web" > Web Design</Link></div>
                           <div className = 'col-lg-2 col-md-2 col-sm-4 col-xs-6 service-button'><Link to="/service/Graph">Graphic Design</Link></div>
                           <div className = 'col-lg-2 col-md-2 col-sm-4 col-xs-6 service-button'><Link to="/service/Support">Online Support</Link></div>
                           <div className = 'col-lg-2 col-md-2 col-sm-4 col-xs-6 service-button'><Link to="/service/AppDesign">App Design</Link></div>
                           <div className = 'col-lg-2 col-md-2 col-sm-4 col-xs-6 service-button'><Link to="/service/Marketing">Online Marketing</Link></div>
                           <div className = 'col-lg-2 col-md-2 col-sm-4 col-xs-6 service-button'><Link to="/service/Seo">Seo Service</Link></div>
                           </div>
                        </div>
                     </div>


                  </div>
               </div>
               <div className="container-fluid">{this.props.children}</div>
               <Portfolio></Portfolio>
               <Numbers></Numbers>
               <Team></Team>
            </div>

      )}
}

export default Home;