import React from 'react'

import {activatePanel} from './ops'

const Panel = ({clr, snd}) => {
  const id = clr[0]
  return (
    <div
      id={id}
      className={`panel ${clr}`}
      onClick={e => {
        activatePanel(e)
      }}
    >
      <audio
        id={`panel-tone-${id}`}
        src={`https://s3.amazonaws.com/freecodecamp/simonSound${snd}.mp3`}
      />
    </div>
  )
}

export default () => {
  return (
    <div className="simon">
      <div className="panel-row top">
        <Panel clr="red" snd={1} />
        <Panel clr="green" snd={2} />
      </div>
      <div className="panel-row bottom">
        <Panel clr="blue" snd={3} />
        <Panel clr="yellow" snd={4} />
      </div>
    </div>
  )
}
