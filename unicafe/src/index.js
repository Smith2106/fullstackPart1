import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, onClick}) => {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  )
}

const Header = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Count = ({name, count}) => {
  return (
    <div>
      {name} {count}
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="Give Feedback" />
      <Button name="Good" onClick={() => setGood(good + 1)} />
      <Button name="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button name="Bad" onClick={() => setBad(bad + 1)} />
      <Header title="Statistics" />
      <Count name="Good" count={good} />
      <Count name="Neutral" count={neutral} />
      <Count name="Bad" count={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)