import React from 'react'
import { Item } from 'semantic-ui-react'




const SplashContent = (props) => {
  
  let handlegame =()=>{
    props.history.push("/about/game")
  }

  let handleplay =()=>{
    props.history.push('/about/play')
  }

  let handledev =()=>{
    props.history.push("/about/dev")

  }


  return (
  
  <Item.Group>
    <br></br>
    <Item onClick={() =>  handlegame()}>
      <Item.Image size='small' src='/images/Splash_Image_One.png' />

      <Item.Content>
        <Item.Header>What is Trivia Fight?</Item.Header>
        <Item.Description className="splash-content-description">Final Fight is a trivia game with RPG elements reminiscent of old school arcade fighting and roleplaying games. It incorporates elements of each through the use of power ups and character advancement mechanics in the shell of a trivia game.</Item.Description>
      </Item.Content>
    </Item>
    <br></br>
    <Item onClick={() =>  handleplay()}>
      <Item.Image size='small' src='/images/Splash_Image_Two.png' />

      <Item.Content>
        <Item.Header>How to Play</Item.Header>
        <Item.Description className="splash-content-description">Game play involves answering trivia questions to land attack and avoid damage. During the rounds each character has a set of powers that can make questions easier, avoid damage, increase stats, as well as, access to powerups. The better you perform, the more resources you will attain as questions get harder. Can you survive all of the waves and defeat the final boss? Sign-up and find out!</Item.Description>
      </Item.Content>
    </Item>
    <br></br>
    <Item onClick={()=> handledev()}>
      <Item.Image size='small' src='/images/Splash_Image_Three.png' />
      <Item.Content >
        <Item.Header>About the Developers</Item.Header>
            <Item.Description className="splash-content-description">Just two cool guys with mad coding skills built this app. Visit our about page to find out more about them, app updates, and to find contact information!</Item.Description>
        </Item.Content>
    </Item>
    <br></br>
  </Item.Group>
  
  )
}

export default SplashContent