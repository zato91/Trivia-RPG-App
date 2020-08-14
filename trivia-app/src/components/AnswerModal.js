import React from 'react'
import { Button, Modal, Header, Image } from 'semantic-ui-react'

function AnswerModel(props) {
    const [open, setOpen] = React.useState(false)
    let damage = props.correct_answer !== props.answer
    let parry = true
    let image = '/images/damage.png'
    let header = "Wrong!"
    let message = "You took damage! If you have parry available you may select parry to prevent damage."
    if(!damage){
        header = "Correct"
    }
    if(!damage){
        message = "You dodged the blow! Now counter attack!"
    }
    if(!damage){
        image = '/images/dodge.png'
    }
  return (
    <Modal
      onClose={() => {
          setOpen(false)
          
        }}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<p>{props.answer.replace(/&#039;/g,"'").replace(/&quot;/g,"'")}</p>}
      >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content image>
        <Image size='small' src={image} wrapped />
        <Modal.Description>
          <h1>
            {message}
          </h1>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
          {parry ?
        <Button 
        color='green' 
        onClick={() => {
            setOpen(false)
            props.getQuestion()
            }}>
        Parry!        
        </Button>
        :null
          }
        <Button
          content="Next Question"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {
              setOpen(false)
              props.getQuestion()
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  )

}

export default AnswerModel