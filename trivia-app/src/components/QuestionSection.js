import React, { useState } from 'react';
import Question from '../components/Question.js';

function QuestionSection (props) { 
    const [question, setQuestion] = useState(props.question_array[0])
    const [count, setCount] = useState(1)

    function getQuestion(){
        setCount(count+1)
        setQuestion(props.question_array[count])
        getAnswers()
    }
    function getAnswers(){
        if (question){
            let answers = question.incorrect_answers
            answers.push(question.correct_answer)
            return answers
        }
    }

     return (
         <div className="question-section">
        <Question question={question} answers={getAnswers()} correct_answer={question.correct_answer} getQuestion={getQuestion}/>
        <button className="ui button" onClick={getQuestion}>Next Question</button>
        </div>
    )

}
  
  export default QuestionSection;