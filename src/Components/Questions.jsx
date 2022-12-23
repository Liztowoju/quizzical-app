import React from "react";
import Question from './Question'

export default function Questions(props) {

    return (
        <div className="quiz">
            {props.quiz.map(function (question, index) {
                // console.log(question)
                return <Question question={question} key={index} />
            })}
        </div>
    )


}
