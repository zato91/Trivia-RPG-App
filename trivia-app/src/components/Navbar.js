import React from 'react';
import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal';
import {Image} from 'semantic-ui-react'

function Navbar(props) {

  let logout = () => {
    localStorage.clear();
    window.location.href = '/';
}

let buttonDisplay = () =>{
  if (!localStorage.token){
    return <> <SignUpModal getCharacters={props.getCharacters}/> <LoginModal getCharacters={props.getCharacters}/> </>
  }else {
    return<> 
    <button onClick={logout} class="ui button" id="logout">Logout</button>
    <button className="ui basic teal button" onClick={()=>props.setCheat()}>cheat</button>
    </>
  }
}
    return (
      <section className="navbar">
        <Image src='./images/title_icon.png' height='32px' className="title-image"/>
        <h1 className="app-title">Trivia Fight</h1>
        <div className="signup-buttons">
          { 
        buttonDisplay()
          }
        </div>
      </section>
    );
  }
  
  export default Navbar;