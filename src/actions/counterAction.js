import dispatcher from '../dispatcher.jsx'

export function animate(work, customer, purchase, office) {
   dispatcher.dispatch({
      type: 'ANIMATE',
      work,
      customer,
      purchase,
      office
   })
}
