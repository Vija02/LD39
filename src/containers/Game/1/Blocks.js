import React from 'react'

import * as EventList from './EventList'

import Background from 'components/Background'
import Bandage from 'components/Bandage'
import Chest from 'components/Chest'
import EventBackground from 'components/EventBackground'

import moss from 'assets/moss.png'
import bloody_moss from 'assets/bloody_moss.png'
import bandages from 'assets/bandages.png'
import chest from 'assets/chest.png'

export default {
  1: <Background color="black" solid />,
  2: <Background src={[moss]} />,
  3: <Background src={[bloody_moss]} />,
  4: <Bandage src={[moss, bandages]} solid />,
  5: <Chest src={[bloody_moss, chest]} solid />,
  6: <EventBackground src={[moss]} cb={EventList.die_1} />,
}
