import React, { useState } from 'react';


function Question(props) {

  return (
      <div className="Question">
        {props.answers 
          ? 
          <div>
            {props.question.question.replace(/&#039;/g,"'").replace(/&quot;/g,"'")}
            <div className ="answer-field">
            <p>{props.answers[0].replace(/&#039;/g,"'").replace(/&quot;/g,"'")}</p>
            <p>{props.answers[1].replace(/&#039;/g,"'").replace(/&quot;/g,"'")}</p>
            <p>{props.answers[2].replace(/&#039;/g,"'").replace(/&quot;/g,"'")}</p>
            <p>{props.answers[3].replace(/&#039;/g,"'").replace(/&quot;/g,"'")}</p> 
            </div>
          </div>
          :<div>
            loading
          </div>
        }
      </div>
    )
  }
  
  export default Question;