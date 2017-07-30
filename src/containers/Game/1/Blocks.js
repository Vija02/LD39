import React from 'react'

import * as EventList from './EventList'

import Background from 'components/Background'
import Bandage from 'components/Bandage'
import SingleDialogue from 'components/SingleDialogue'
import EventBackground from 'components/EventBackground'
import ConditionalEvent from 'components/ConditionalEvent'

import moss from 'assets/moss.png'
import bloody_moss from 'assets/bloody_moss.png'
import bandages from 'assets/bandages.png'
import chest from 'assets/chest.png'
import bonesss from 'assets/bonesss.png'
import note from 'assets/note.png'
import trap from 'assets/trap.png'

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
  12: <SingleDialogue src={[moss, note]} name="d_note_2" solid />,
  13: <Background src={[bloody_moss, bonesss]} />,
  14: <EventBackground src={[bloody_moss]} cb={EventList.omg} />,
  15: <SingleDialogue src={[moss, note]} name="d_note_3" solid />,
  16: <SingleDialogue src={[moss, note]} name="d_note_4" solid />,
  17: <SingleDialogue src={[moss, note]} name="d_note_5" solid />,
  18: <SingleDialogue src={[moss, note]} name="d_note_6" solid />,
  19: <SingleDialogue src={[moss, note]} name="d_note_7" solid />,
  20: <EventBackground src={[moss]} cb={EventList.unending} />,
  21: <SingleDialogue src={[moss, note]} name="d_note_1_2" solid cb={EventList.readTrap} />,
  22: <ConditionalEvent
        condition={EventList.trapIsVisible}
        element={[<Background src={[moss]} />, <Background src={[moss, trap]} />]}
        cb={EventList.stepOnTrap}
      />,
  23: <EventBackground src={[moss]} cb={EventList.stepOnPlotTrap} />,
  24: <EventBackground src={[moss]} cb={EventList.passTrap} />,
  25: <EventBackground src={[bloody_moss]} cb={EventList.looksLikeTrap} />,
}
