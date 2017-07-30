import { store }from 'index';

export function useEnergy() {
  store.dispatch(
    {
      type: 'USE_ENERGY'
    }
  )
}
