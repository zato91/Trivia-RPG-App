import React from 'react';
import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal';
import {Image} from 'semantic-ui-react'

function Navbar() {
    return (
      <section className="navbar">
        <Image src='./images/title_icon.png' height='32px' className="title-image"/>
        <h1 className="app-title">Trivia Fight</h1>
        <div className="signup-buttons">
        <SignUpModal /> 
        <LoginModal />
        </div>
      </section>
    );
  }
  
  export default Navbar;