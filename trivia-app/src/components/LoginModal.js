import React, {Component, useState} from 'react'
import { Modal } from 'semantic-ui-react'
 

class LoginModal extends Component{

  state = {
    open: false,
  }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    login = (e) => {
      e.preventDefault()
      let user =   {username: this.state.username, password: this.state.password}
      fetch("http://localhost:3000/login", {
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
         if (!data.error){
           this.props.getCharacters(e);}
      })
    }
   
    render(){
        
      return(
        <Modal
        trigger = {<button className= "ui teal button">Login</button>}
        open= {this.state.open}
        onOpen = { ()=> { this.setState({
          open: true
        })}}
        >
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
          <div>
              <h2>Login</h2>
              <form onSubmit={(e) => {
                this.login(e)
                this.setState({ open: false})
              }
            }
              
              >
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

export default LoginModal
