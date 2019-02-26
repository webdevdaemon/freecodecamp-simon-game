const genSeq = (function() {
  const randomNumber = () => Math.floor(Math.random() * 4)
  const convertToColor = num => ['R', 'B', 'Y', 'G'][num]
  return () => Array.from({length: 20}, x => convertToColor(randomNumber()))
})()
export {genSeq}

const activatePanel = (() => {
  const soundHandler = t => t.play()
  const panelHandler = evt => {
    const el = evt.target
    const beep = document.getElementById(`panel-tone-${el.id}`)
    el.classList.add('active')
    soundHandler(beep)
    setTimeout(() => el.classList.remove('active'), 500)
  }
  return evt => panelHandler(evt)
})()
export {activatePanel}
