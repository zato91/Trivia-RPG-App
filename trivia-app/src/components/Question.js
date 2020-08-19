import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import AnswerModal from './AnswerModal'

function Question(props) {
  let correct_answer = props.correct_answer
  return (
      <div className="question">
        {props.question ?
        <div>
          <div>
            {props.question.question.replace(/&#039;/g,"'").replace(/&quot;/g,"'").replace(/&amp;/," & ")}
          </div>
          <br></br>
          <div>


              <AnswerModal answer={props.answers[0]} correct_answer={correct_answer} getQuestion={props.getQuestion} setWrongAnswers={props.setWrongAnswers}/>
              <AnswerModal answer={props.answers[1]} correct_answer={correct_answer} getQuestion={props.getQuestion} setWrongAnswers={props.setWrongAnswers}/>
              <AnswerModal answer={props.answers[2]} correct_answer={correct_answer} getQuestion={props.getQuestion} setWrongAnswers={props.setWrongAnswers}/>
              <AnswerModal answer={props.answers[3]} correct_answer={correct_answer} getQuestion={props.getQuestion} setWrongAnswers={props.setWrongAnswers}/>

          </div>
        </div>
          : <p>loading</p>
        }
      </div>

    )
  }
  
  export default Question;