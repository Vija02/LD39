import React from 'react'

import * as EventList from './EventList'

import Background from 'components/Background'
import Bandage from 'components/Bandage'
import SingleDialogue from 'components/SingleDialogue'
import EventBackground from 'components/EventBackground'

import moss from 'assets/moss.png'
import bloody_moss from 'assets/bloody_moss.png'
import bandages from 'assets/bandages.png'
import chest from 'assets/chest.png'
import bonesss from 'assets/bonesss.png'
import note from 'assets/note.png'

export default {
  1: <Background color="black" solid />,
  2: <Background src={[moss]} />,
  3: <Background src={[bloody_moss]} />,
  4: <Bandage src={[moss, bandages]} solid />,
  5: <SingleDialogue src={[bloody_moss, chest]} name="d_chest" solid />,
  6: <EventBackground src={[moss]} cb={EventList.die_1} />,
  7: <EventBackground src={[bloody_moss]} cb={EventList.die_real} />,
  8: <EventBackground src={[moss]} cb={EventList.huge_cave} />,
  9: <Background src={[moss, bonesss]} />,
  10: <EventBackground src={[moss]} cb={EventList.bones} />,
  11: <SingleDialogue src={[moss, note]} name="d_note_1" solid />,
}
