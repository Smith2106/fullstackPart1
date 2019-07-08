import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({label, onClick}) => {
  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  )
}

const Anecdote = ({anecdote, votes}) => {
  return (
    <div>
      {anecdote}
      <br />
      has {votes} votes
    </div>
  )
}

const Header = ({title}) => <><h1>{title}</h1></>

const App = (props) => {
  const genRandInd = () => Math.floor(Math.random() * props.anecdotes.length)

  const [selected, setSelected] = useState(genRandInd())
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))


  const mostVotesInd = votes.reduce((bestIndexSoFar, currentlyTestedValue, currentlyTestedIndex, array) => currentlyTestedValue > array[bestIndexSoFar] ? currentlyTestedIndex : bestIndexSoFar, 0)

  const randomizeSelected = () => {
    setSelected(genRandInd())
  }

  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }

  return (
    <div>
      <Header title="Anecdote of the Day" />
      <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <Button label= "Vote" onClick={addVote} />
      <Button label="Next Anecdote" onClick={randomizeSelected} />
      <Header title="Anecdote with Most Votes" />
      <Anecdote anecdote={props.anecdotes[mostVotesInd]} votes={votes[mostVotesInd]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)