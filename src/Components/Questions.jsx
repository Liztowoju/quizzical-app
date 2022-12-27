import React from "react";
import Question from './Question'

export default function Questions(props) {
 
    function pickAnswer(id, answer) {
        props.pickAnswer(id, answer)
    }

    return (
        <>
        <div className="quiz">
            {props.quiz.map(function (question, index) {
                return <Question question={question} key={index} pickAnswer={pickAnswer}/>
            })}
        </div>
        </>
    )


}
