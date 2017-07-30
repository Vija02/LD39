import { store }from 'index';

export function setName(name) {
  store.dispatch(
    {
      type: 'SET_NAME',
      name: name
    }
  )
}
