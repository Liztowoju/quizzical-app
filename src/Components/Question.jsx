import React from "react";

export default function Question(props) {

    const question = props.question;
    // React.useEffect(function(){
    const incorrect_answers = [...question.incorrect_answers];
    const randNum = Math.floor(Math.random() * 3)
    incorrect_answers.splice(randNum, 0, question.correct_answer)
    // }, [])

    function pickAnswer(){
        console.log('mE')
        
    }

    console.log(question)
    return (
        <>
            <div className='each-quiz'>
                <h3 className="quiz-question" dangerouslySetInnerHTML={{ __html: question.question }}></h3>
                {incorrect_answers.map(function (answer, index) {
                    return <button className='quiz-options' onClick={pickAnswer} dangerouslySetInnerHTML={{ __html: answer }} key={index}></button>
                })}
            </div>
        </>

    )
}