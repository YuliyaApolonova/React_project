var React = require('react');
var router = require('react-router');

var Link = router.Link;

import Options from '../components/options.jsx'
import Portfolio from '../components/portfolio.jsx'

import Team from '../components/team.jsx'
import Slider from '../components/slider.jsx'
import News from '../components/news.jsx'
import Feedback from '../components/feedback.jsx'
import Contacts from '../components/contacts.jsx'
import Counts from '../components/count-up.jsx'
import About from '../components/about.jsx'

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
               <About></About>
               <Portfolio></Portfolio>
               <Team></Team>
               <Counts></Counts>
               <News></News>
               <Feedback></Feedback>
               <Contacts></Contacts>
            </div>

      )}
}

export default Home;