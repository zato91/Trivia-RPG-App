import React from 'react'
import { Modal } from 'semantic-ui-react'

function handleChange (e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}

function signUp (e) {
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

function SignUpModal () {

    return(
      <Modal
      trigger = {<button className= "ui button">SignUp</button>}
      >
        <Modal.Header>This is signup</Modal.Header>
        <Modal.Content>
        <div>
            <h2>Signup</h2>
            <form onSubmit={(e) => signUp(e)}>
            <label>UserName</label>
            <input onChange={(e) => handleChange(e)} name="username" type="text" />
            <label>Password</label>
            <input onChange={(e) => handleChange(e)} name="password" type="password" />
            <input type="submit"/>
            </form>
        </div>
        </Modal.Content>
      </Modal>
    )
  }


export default SignUpModal