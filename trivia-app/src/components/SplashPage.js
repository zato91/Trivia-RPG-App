import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import SplashContent from './SplashContent';
import About from './About';
import {Route} from 'react-router-dom';



function SplashPage(props) {

  return (
    <div className="splash-page">
        <img id='splash-image' src='./images/Trivia_Fighter.png'/>
        <div className="splash-content">
            
        <Route exact path="/" render={(routeProps)=> <SplashContent {...routeProps}/>}/>
        <Route path="/about" component={About}/>
        </div>
    </div>

    )
  }
  
  export default SplashPage;