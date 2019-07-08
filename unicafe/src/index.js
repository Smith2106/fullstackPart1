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

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positive = (good / total) * 100

  return (
    <div>
      <table>
        <Stat label="Good" value={good} />
        <Stat label="Neutral" value={neutral} />
        <Stat label="Bad" value={bad} />
        <Stat label="Total" value={total} />
        <Stat label="Average" value={average} />
        <Stat label="Positive" value={positive} unit=" %"/>
      </table>
    </div>
  )
}

const Stat = ({label, value, unit}) => {

  return (
    <>
      <tr>
        <td>{label}</td>
        <td>{value}{unit}</td>
      </tr>
    </>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)