import React, {Component, useState} from 'react'
import { Modal } from 'semantic-ui-react'
 

class SignUp extends Component{

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    signUp = (e) => {
      e.preventDefault()
      let user =   {username: this.state.username, password: this.state.password}
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {user}
        )
      })
      .then(res => res.json())
      .then(data => { 
         localStorage.token = data.token
         console.log(data)
      })
    }
   
    render(){
        
      return(
        <Modal
        trigger = {<button className= "ui teal button">SignUp</button>}
        >
          <Modal.Header>This is signup</Modal.Header>
          <Modal.Content>
          <div>
              <h2>Signup</h2>
              <form onSubmit={(e) => this.signUp(e)}>
              <label>UserName</label>
              <input onChange={(e) => this.handleChange(e)} name="username" type="text" />
              <label>Password</label>
              <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
              <input type="submit"/>
              </form>
          </div>
          </Modal.Content>
        </Modal>
      )
    }
}

export default SignUp