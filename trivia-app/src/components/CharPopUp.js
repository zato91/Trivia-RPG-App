import React from 'react'
import { Image, Popup } from 'semantic-ui-react'

const PopupExample = (props) => (
  <Popup 
  header = {props.character.name}
  content={props.character.bio} 
  trigger={<Image src={props.character.img_url} onClick={(e)=>props.startGame(props.character)}/>} />
)

export default PopupExample