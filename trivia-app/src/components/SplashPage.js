import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import SplashContent from './SplashContent'
import About from './About';



function SplashPage(props) {

  return (
    <div className="splash-page">
        <img id='splash-image' src='./images/Trivia_Fighter.png'/>
        <div className="splash-content">
            
            {props.displayabout? <About displayAbout={props.displayAbout} displayPlay={props.displayPlay}/>: <SplashContent   displayAbout={props.displayAbout} displayPlay={props.displayPlay}/>}
        </div>
    </div>

    )
  }
  
  export default SplashPage;