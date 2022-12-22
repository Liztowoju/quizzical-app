import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Questions from './Components/Questions'
// import 'bootstrap/dist/css/bootstrap.css';


function App() {

const [start, setStart] = React.useState(false)
  const [questions, setQuestions] = React.useState([])

  function getQuestions() {
    return (
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => setQuestions(data)
      )
    )
  }
  console.log(questions)

  // const listQuestions = questions.map(function(list){
  //   <p>list</p>
  // })


  React.useEffect(function(){
    getQuestions()
  }, [start])


  return (
    <div className='container'>
      <div className='info-page'>
        <h1>Quizzical</h1>
        <p className='info'>Test your general knowledge? Let's go!</p>
        <button className='start' 
        onClick={function(){return(setStart(true))}}
        getquestions = {questions}
        >Start Game</button>
        {/* {listQuestions} */}
      </div>
    </div>
  )
}

export default App
