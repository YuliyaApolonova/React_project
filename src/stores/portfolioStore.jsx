/**
 * Created by jull on 19.05.2017.
 */
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher.jsx'

class PortfolioStore extends EventEmitter{
   constructor(){
      super()
      this.photos = [
         {src: "src/images/photo.png", category: 'wordpress'},
         {src: "src/images/photo.png", category: 'wordpress'},
         {src: "src/images/photo.png", category: 'wordpress'},
         {src: "src/images/WEB.png", category: 'web design'},
         {src: "src/images/WEB.png", category: 'web design'},
         {src: "src/images/WEB.png", category: 'web design'},
         {src: "src/images/illustr.jpg", category: 'landing pages'},
         {src: "src/images/illustr.jpg", category: 'landing pages'},
         {src: "src/images/illustr.jpg", category: 'landing pages'},
         {src: 'src/images/graphics.jpg', category: 'graphic design'},
         {src: 'src/images/graphics.jpg', category: 'graphic design'},
         {src: 'src/images/graphics.jpg', category: 'graphic design'},
      ]
      this.albumPhotos = [
         {src: "src/images/photo.png", category: 'wordpress'},
         {src: "src/images/photo.png", category: 'wordpress'},
         {src: "src/images/photo.png", category: 'wordpress'},
         {src: "src/images/WEB.png", category: 'web design'},
         {src: "src/images/WEB.png", category: 'web design'},
         {src: "src/images/WEB.png", category: 'web design'},
         {src: "src/images/illustr.jpg", category: 'landing pages'},
         {src: "src/images/illustr.jpg", category: 'landing pages'},
         {src: "src/images/illustr.jpg", category: 'landing pages'},
         {src: 'src/images/graphics.jpg', category: 'graphic design'},
         {src: 'src/images/graphics.jpg', category: 'graphic design'},
         {src: 'src/images/graphics.jpg', category: 'graphic design'},
      ];
   }
   filterImages(category) {
      let filteredItems=[];
      this.photos.map((item)=>{
         if (category == item.category||category == "all") filteredItems.push(item);
      })
      this.albumPhotos = filteredItems;


   }
   getAlbum(){
      return this.albumPhotos;
   }
   //обработчик actions
   handleActions(action) {
      switch (action.type) {
         case "FILTER": {
            this.filterImages(action.category);
            this.emit('albumChange')
            console.log(`Filtered:${action.category}`);
            break;
         }
      }
   }
}
const portfolioStore = new PortfolioStore;
// регистрация обработчика actions
dispatcher.register(portfolioStore.handleActions.bind(portfolioStore));

export default portfolioStore