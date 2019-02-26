import React from 'react'

const GameBtn = ({btnID, className, label, handler}) => {
  return (
    <div className={`ui-node ${className}`}>
      <button id={`${btnID}`} onClick={handler} />
      <p className="ui-label">{`${label}`}</p>
    </div>
  )
}

export default GameBtn
