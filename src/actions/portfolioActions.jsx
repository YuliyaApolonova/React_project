/**
 * Created by jull on 19.05.2017.
 */
import dispatcher from '../dispatcher.jsx'
export default function filterPhotos(category) {
   dispatcher.dispatch({
      type: 'FILTER',
        category
   })
}