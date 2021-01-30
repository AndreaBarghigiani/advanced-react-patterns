// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext();

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

	const value = { on, toggle };
	return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
}

function ToggleOn({children}) {
	const { on, toggle } = React.useContext(ToggleContext)
  return on ? children : null
}

function ToggleOff({children}) {
	const { on, toggle } = React.useContext(ToggleContext)
  return on ? null : children
}

function ToggleButton({...props}) {
	const { on, toggle } = React.useContext(ToggleContext)
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
