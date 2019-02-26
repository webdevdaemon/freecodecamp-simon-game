import React from 'react'
import GameBtn from './GameBtn'
import Context from './context'

const CenterPanel = props => {
  const dbl = n => (n < 10 ? `0${n}` : `${n}`)

  return (
    <Context.Consumer>
      {ctx => (
        <div className="center" id="c-panel">
          <div className="unit-label">
            <span className="label top">simon</span>
            <span className="label bottom">SEZ</span>
          </div>
          <div className="interface">
            <GameBtn
              className={`${ctx.powerOn ? 'start-reset' : 'disabled'}`}
              label={'start'}
              id="toggle"
            />
            <div className="ui-node progress">
              <p className="digits">{`${
                ctx.powerOn ? dbl(ctx.progress) : ''
              }`}</p>
              <p className="ui-label" />
            </div>
            <GameBtn
              className={`${ctx.powerOn ? 'strict' : 'disabled'}`}
              label="strict"
              id="mode"
            />
          </div>
          <div className="power-switch">
            <div className={`switch ${ctx.powerOn && 'on'}`}>
              <button className="knob" id="on-off" onClick={ctx.togglePower}>
                {`${ctx.powerOn ? 'on' : 'off'}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  )
}

export default CenterPanel
