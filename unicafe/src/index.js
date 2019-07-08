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

const Statistic = ({label, value, unit}) => {
  if (isNaN(value)) {
    return (
      <div>
        {label} No statistics yet
      </div>
    )
  }

  return (
    <div>
      {label} {value}{unit}
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positive = (good / total) * 100

  return (
    <div>
      <Header title="Give Feedback" />
      <Button name="Good" onClick={() => setGood(good + 1)} />
      <Button name="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button name="Bad" onClick={() => setBad(bad + 1)} />
      <Header title="Statistics" />
      <Statistic label="Good" value={good} />
      <Statistic label="Neutral" value={neutral} />
      <Statistic label="Bad" value={bad} />
      <Statistic label="Total" value={total} />
      <Statistic label="Average" value={average} />
      <Statistic label="Positive" value={positive} unit=" %"/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)