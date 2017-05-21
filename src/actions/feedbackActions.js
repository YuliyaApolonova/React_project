import dispatcher from '../dispatcher.jsx'

// создать элемент
export function createComment(comment) {
   dispatcher.dispatch({
      type: 'CREATE_ITEM',
      comment
   })
}

// удалить элемент
export function removeComment(title) {
   dispatcher.dispatch({
      type: 'REMOVE_ITEM',
      title
   })
}