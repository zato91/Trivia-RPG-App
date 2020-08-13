import React, { useEffect, useState } from 'react';
import Question from '../components/Question.js';

const URL = "https://opentdb.com/api.php?amount=10"

class QuestionSection extends React.Component{

    render (){

        return (
            <div className="question-section">
            This is the question area
            <Question/>
            </div>
        )
    }
}
  
  export default QuestionSection;