import { store }from 'index';

export function finishBandage(json) {
  store.dispatch(
    {
      type: 'SET_BANDAGE',
      state: json
    }
  )
}
