import { store } from 'index'

import { setEvent } from 'actions/event'

export const die_1 = (history) => {
  dialogCall(history, '/game/1/play/d_die_1', "die_1")
}

export const die_real = (history) => {
  history.push('/dead')
}

export const huge_cave = (history) => {
  dialogCall(history, '/game/1/play/d_huge_cave', "huge_cave")
}

export const bones = (history) => {
  dialogCall(history, '/game/1/play/d_bones', "bones")
}

function dialogCall(history, dialogUrl, name){
  const storeData = store.getState();
  if(!storeData.event[name]){
    history.push(dialogUrl)
    setEvent(name);
  }
}
