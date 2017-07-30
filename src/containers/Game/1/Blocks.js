import React from 'react'

import * as EventList from './EventList'

import Background from 'components/Background'
import Bandage from 'components/Bandage'
import SingleDialogue from 'components/SingleDialogue'
import EventBackground from 'components/EventBackground'
import ConditionalEvent from 'components/ConditionalEvent'
import ConditionalMovement from 'components/ConditionalMovement'

import moss from 'assets/moss.png'
import bloody_moss from 'assets/bloody_moss.png'
import bandages from 'assets/bandages.png'
import chest from 'assets/chest.png'
import bonesss from 'assets/bonesss.png'
import note from 'assets/note.png'
import trap from 'assets/trap.png'
import doorlock from 'assets/doorlock.png'

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
  // Basically the same, just for timing
  26: <ConditionalMovement
        condition={EventList.movingTrapIsCurrent(1)}
        element={[<Background src={[bloody_moss]} />, <Background src={[bloody_moss, trap]} />]}
        cb={EventList.stepOnTrap}
  />,
  27: <ConditionalMovement
        condition={EventList.movingTrapIsCurrent(2)}
        element={[<Background src={[bloody_moss]} />, <Background src={[bloody_moss, trap]} />]}
        cb={EventList.stepOnTrap}
  />,
  28: <ConditionalMovement
        condition={EventList.movingTrapIsCurrent(3)}
        element={[<Background src={[bloody_moss]} />, <Background src={[bloody_moss, trap]} />]}
        cb={EventList.stepOnTrap}
  />,
  29: <ConditionalMovement
        condition={EventList.movingTrapIsCurrent(4)}
        element={[<Background src={[bloody_moss]} />, <Background src={[bloody_moss, trap]} />]}
        cb={EventList.stepOnTrap}
  />,
  30: <ConditionalMovement
        condition={EventList.movingTrapIsCurrent(5)}
        element={[<Background src={[bloody_moss]} />, <Background src={[bloody_moss, trap]} />]}
        cb={EventList.stepOnTrap}
  />,
  31: <ConditionalMovement
        condition={EventList.movingTrapIsCurrent(6)}
        element={[<Background src={[bloody_moss]} />, <Background src={[bloody_moss, trap]} />]}
        cb={EventList.stepOnTrap}
  />,
  32: <EventBackground src={[bloody_moss, trap]} cb={EventList.stepOnTrap} />,
  33: <EventBackground src={[bloody_moss]} cb={EventList.needCareful} />,
  34: <EventBackground src={[bloody_moss]} cb={EventList.pattern} />,
  35: <EventBackground src={[moss]} cb={EventList.prepare} />,
  36: <EventBackground src={[moss]} cb={EventList.lotsOfEffort} />,
  37: <SingleDialogue src={[doorlock]} name="d_doorLock" solid />,
}
