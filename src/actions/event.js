import { store }from 'index';

export function setEvent(name) {
  store.dispatch(
    {
      type: 'SET_EVENT',
      eventName: name
    }
  )
}
