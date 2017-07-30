import React from 'react'
import Background from 'components/Background'
import Bandage from 'components/Bandage'

import moss from 'assets/moss.png'
import bandages from 'assets/bandages.png'

export default {
  1: <Background color="black" solid />,
  2: <Background src={[moss]} />,
  3: <Bandage src={[moss, bandages]} solid />,
}
