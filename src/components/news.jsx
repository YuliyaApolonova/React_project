import React from 'react'
import loadMore from '../actions/newsActions.jsx'
import newsActions from '../actions/newsActions.jsx'
var router = require('react-router');

var Link = router.Link;
import newsStore from '../stores/newsStore.jsx'

class News extends React.Component {
   constructor() {
      super()
      this.state = {
         news: newsStore.getNews()
      }
      this.loadMore = this.loadMore.bind(this);
   }
   loadMore(e) {
      loadMore();
      let target = e.target;
      target.remove();

   }

   componentWillMount() {
      newsActions.loadNews();
      // обработчик события начала загрузки
      newsStore.on('loadStart', () => {
         this.setState({ news: newsStore.getNews() })
      })
      // обработчик события завершения загрузки
      newsStore.on('loadEnd', () => {
         this.setState({ news: newsStore.getNews() })
      })
      newsStore.on('loadMore', () => {
         this.setState({ news: newsStore.getNews() })
      })
   }
   render() {
      let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return(
            <div id="news">
               <div className="container">
                  <div className="newsTitle">
                     <h1>Breaking News</h1>
                     <hr className="hr1" />
                     <hr className="hr2" />
                  </div>
                  <div className="row">

                     {this.state.news.map((item, index) =>{
                        let dateArr = item.date.split('/');
                        let monthNew = months[(dateArr[0] - 1)];
                        return (

                              <div key={index} className="col-xs-12 col-sm-6 col-md-3 new-content">
                                 <Link to={{ pathname: `/new/${item.id}`, query: { date:item.date, text:item.text } }} >
                                    <div className="new-item-photo">
                                       <img src="src/images/news.jpg" />
                                       <span className="new-date">{dateArr[1]} {monthNew}</span>
                                    </div>
                                    <h3 className="new-item-title">Amazing Image Post</h3>
                                 </Link>
                              </div>
                        )
                     })}

                  </div>
                  <div className="news-btn-container">
					            <span className="btn news-loadMore-btn" onClick={(e)=>{this.loadMore(e)}}>
                                    <i className="fa fa-plus fa-1x"></i>Load more
                                </span>
                  </div>
               </div>
            </div>
      )
   }
}

export default News