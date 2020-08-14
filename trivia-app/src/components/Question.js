import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import AnswerModal from './AnswerModal'

function Question(props) {
  const [modal,setModal] = useState(false)
  let correct_answer = props.correct_answer
  return (
      <div className="Question">
        {props.question ?
        <div>
          <div>
            {props.question.question.replace(/&#039;/g,"'").replace(/&quot;/g,"'")}
          </div>
          <div>
              <AnswerModal answer={props.answers[0]} correct_answer={correct_answer} getQuestion={props.getQuestion}/>
              <AnswerModal answer={props.answers[1]} correct_answer={correct_answer} getQuestion={props.getQuestion}/>
              <AnswerModal answer={props.answers[2]} correct_answer={correct_answer} getQuestion={props.getQuestion}/>
              <AnswerModal answer={props.answers[3]} correct_answer={correct_answer} getQuestion={props.getQuestion}/>
          </div>
        </div>
          : <p>loading</p>
        }
      </div>

    )
  }
  
  export default Question;