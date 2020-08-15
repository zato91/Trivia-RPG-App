import React from 'react'
import { Modal } from 'semantic-ui-react'

function handleChange (e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}

function handleSubmit(e) {
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
  .then(data => { console.log(data)
    localStorage.token = data.token
  })
}

function LoginModal() {

    return(
      <Modal
       trigger = {<button className="ui button">Login</button>}
      >
      <Modal.Header>This is login</Modal.Header>
      <Modal.Content>
        <Modal.Description>
        <div>
              <h2>Login</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
            <label>UserName</label>
            <input onChange={(e) => handleChange(e)} name="username" type="text"  />
            <label>Password</label>
            <input onChange={(e) => handleChange(e)} name="password" type="password" />
            <input type="submit"/>
            </form>
        </div>
        </Modal.Description>
      </Modal.Content>
     </Modal>
    )
}

export default LoginModal