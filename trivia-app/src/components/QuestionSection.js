import React, { useState, useEffect } from 'react';
import Question from '../components/Question.js';
import InformationSection from './InformationSection.js';
import { Item } from 'semantic-ui-react';

function QuestionSection (props) { 
    const [question, setQuestion] = useState(props.question_array[0])
    const [count, setCount] = useState(0)
    const [Answers, setAnswers] = useState([])
    
    function getQuestion(){
        setQuestion(props.question_array[count])
        props.setEnemy()
        props.setQCount()
        getAnswers(question)
        setCount(count+1)
        if(props.fifty_fifty){
            props.setFiftyFifty()
        }
        if(props.answer_reveal){
            props.setAnswerReveal()
        }
    }
    
    function getAnswers(question){
        setAnswers(()=>{
            let array = props.question_array[count].incorrect_answers.concat(props.question_array[count].correct_answer  )
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array
        })
    }
    
    return (
        <div className="question-section">
        {Answers.length !== 0
        ?<div className="question">
            <h4>
        <Question question={question} answers={Answers} correct_answer={question.correct_answer} getQuestion={getQuestion} setWrongAnswers={props.setWrongAnswers}/>
            </h4>
        <br></br>    
            {props.fifty_fifty
            ?<div className="fifty-fifty">
                 <Item>
                    <Item.Image size="tiny" src ="./images/Special_Attack.png" floated='left'/>
                    <Item.Content verticalAlign="middle">
                    <h4>
                        Enemy guard is down! {question.incorrect_answers[0].replace(/&#039;/g,"'").replace(/&quot;/g,"'").replace(/&amp;/," & ")} and {question.incorrect_answers[1].replace(/&#039;/g,"'").replace(/&quot;/g,"'").replace(/&amp;/," & ")} are incorrect!
                    </h4>
                    </Item.Content>
                </Item>
            </div>
            :null
            }
            {props.answer_reveal
            ?<div className="answer-reveal">
                <Item>
                    <Item.Image size="tiny" src ="./images/Special_Attack.png" floated='left'/>
                    <Item.Content verticalAlign="middle">
                    <h5>
                    Blinding power has revealed the answer to be {question.correct_answer.replace(/&#039;/g,"'").replace(/&quot;/g,"'").replace(/&amp;/," & ")}!
                    </h5>
                    </Item.Content>
                </Item>
            </div>
            :null
            }
            {props.cheat 
            ?
            <div>
                <button
                onClick={() => {
                    getQuestion()
                }}>nexxt
                </button>
            </div>
            :null
            }
        </div>
        :<button onClick={getQuestion}>start</button>
        }
        </div>
    )
}
  
  export default QuestionSection;