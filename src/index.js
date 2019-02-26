import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import CenterPanel from './CenterPanel'
import Context from './context'
import PanelGrid from './PanelGrid'

import {genSeq} from './ops'

import './styles.css'

const INIT = {
  gameOver: false,
  cpuTurn: true,
  powerOn: false,
  goal: 1,
  progress: 0,
  masterSeq: genSeq(),
  targetSeq: [],
}

const App = () => {
  const [gameOver, setGameOver] = useState(INIT.gameOver)

  const [cpuTurn, setCpuTurn] = useState(INIT.cpuTurn)
  const toggleTurn = () => setCpuTurn(!cpuTurn)

  const [powerOn, setPowerOn] = useState(INIT.powerOn)
  const togglePower = () => setPowerOn(!powerOn)

  const [goal, setGoal] = useState(INIT.goal)
  const [progress, setProgress] = useState(INIT.progress)
  const [masterSeq, setMasterSeq] = useState(INIT.masterSeq)

  const [targetSeq, setTargetSeq] = useState(INIT.targetSeq)
  const getTargetSeq = () => masterSeq.slice(0, goal)

  const ctx = {
    gameOver,
    setGameOver,
    cpuTurn,
    toggleTurn,
    powerOn,
    togglePower,
    goal,
    setGoal,
    progress,
    setProgress,
    masterSeq,
    setMasterSeq,
    targetSeq,
    setTargetSeq,
  }

  return (
    <Context.Provider value={{...ctx}}>
      <div className="app-wrapper">
        <div className="app">
          <CenterPanel />
          <PanelGrid />
        </div>
      </div>
    </Context.Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
