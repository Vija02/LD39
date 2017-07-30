import { store }from 'index';

export function addMovement() {
  store.dispatch(
    {
      type: 'ADD_MOVEMENT'
    }
  )
}
export function rotateMovement(a, b) {
  store.dispatch(
    {
      type: 'ROTATE_MOVEMENT',
      a,
      b
    }
  )
}
