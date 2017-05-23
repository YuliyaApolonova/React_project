import dispatcher from '../dispatcher.jsx'

export function animate() {
   dispatcher.dispatch({
      type: 'ANIMATION'
   })
}
