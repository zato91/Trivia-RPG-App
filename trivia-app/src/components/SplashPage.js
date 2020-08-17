import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import SplashContent from './SplashContent'


function SplashPage() {

  return (
    <div className="splash-page">
        <img id='splash-image' src='./images/Trivia_Fighter.png'/>
        <div className="splash-content">
            <SplashContent/>
        </div>
    </div>

    )
  }
  
  export default SplashPage;