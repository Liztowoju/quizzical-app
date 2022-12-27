import React from "react";

export default function Question(props) {



    function style(question, answer) {
        let color = '' ;

        if(answer === question.selected ){
            color = '#D6DBF5';
        }

        if(question.marked !== undefined && question.marked == false && answer === question.selected){
            color = '#F8BCBC';
        }


        return {
            background: color 
        } 
    }



    return (
        <>
        {/* {JSON.stringify(props.question)} */}
            <div className='each-quiz'>
                <h3 className="quiz-question" dangerouslySetInnerHTML={{ __html: props.question.title }}></h3>
                {props.question.choices.map(function (answer, index) {
                    return <button className='quiz-options' style={style(props.question, answer)} onClick={() => props.pickAnswer(props.question.id, answer)} value={answer} dangerouslySetInnerHTML={{ __html: answer }} key={index}></button>
                })}
            </div>
        </>

    )
}