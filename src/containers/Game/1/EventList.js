import { store } from 'index'

import { setEvent } from 'actions/event'

export const die_1 = (history) => {
  const storeData = store.getState();
  if(!storeData.event.die_1){
    history.push('/game/1/play/d_die_1')
    setEvent("die_1");
  }
}
