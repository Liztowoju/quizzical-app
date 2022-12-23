import React from "react";

export default function Question(props) {

    const question = props.question;
// React.useEffect(function(){
    const options = [...question.incorrect_answers];
    const randNum = Math.floor(Math.random() * 3)
    options.splice(randNum, 0, question.correct_answer)
// }, [])

    console.log (question)
    return (
        <div>
            <h3>{question.question}</h3>
            {options.map(function (answer, index) {
                return <button key = {index}>{answer}</button>
            })}
        </div>
    )
}