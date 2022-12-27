import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Questions from './Components/Questions'
import { nanoid } from 'nanoid'

// import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [start, setStart] = React.useState(true)
  const [questions, setQuestions] = React.useState([])
  const [quiz, setQuiz] = React.useState([]);
  const [marked, setMarked] = React.useState(false);

  React.useEffect(function () {
    getQuestions()
  }, [])

  function getQuestions() {
    return (
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => setQuestions(data.results)
        )
    )
  }

  React.useEffect(function () {
    quizValues()
  }, [questions])



  function pickAnswer(id, ans) {

    setQuiz(function (oldValue) {
      return quiz.map(function (q) {
        return q.id === id ?
          { ...q, selected: ans }
          : q
      });
    })
  }


  function quizValues() {
    setQuiz(questions.map(function (question) {
      const incorrect_answers = [...question.incorrect_answers];
      const randNum = Math.floor(Math.random() * 3);
      incorrect_answers.splice(randNum, 0, question.correct_answer)
      return {
        id: nanoid(),
        title: question.question,
        choices: incorrect_answers,
        answer: question.correct_answer,
        selected: null
      }
    }))
  }

  function markAnswer() {
    setQuiz(function (oldValue) {
      return quiz.map(function (q) {
        return q.selected === q.answer ?
          { ...q, marked: true }
          :  { ...q, marked: false }
      });
    })

    setMarked(true)
  }

  function getScore(){

    if(!marked) return false;

    const gotten = quiz.filter(function (q) {
      return q.marked == true
    });

    return `${gotten.length}/${quiz.length}`;
  }


  return (
    <div className={start === true ? 'container small' : 'container'}>
      {false === start && <div className='info-page'>
        <h1>Quizzical</h1>
        <p className='info'>Test your general knowledge? Let's go!</p>
        <button className='start'
          onClick={function () { return (setStart(true)) }}
        >Start Game</button>
      </div>}

      {true === start && <div className='questions-page'>
        <Questions quiz={quiz} pickAnswer={pickAnswer} />
      </div>}
      <button type="button" className="check" onClick={markAnswer}>Check answers</button>{getScore()}
    </div>
  )
}

export default App
