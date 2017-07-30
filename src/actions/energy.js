import { store }from 'index';

export function useEnergy() {
  store.dispatch(
    {
      type: 'USE_ENERGY'
    }
  )
}

export function setEnergy(val) {
  store.dispatch(
    {
      type: 'SET_ENERGY',
      energy: val
    }
  )
}
