import React from 'react';
import SignUp from './SignUp'
import Login from './Login';


function Navbar() {
    return (
      <div className="Navbar">
          <SignUp /> 
          <Login />
      </div>
    );
  }
  
  export default Navbar;