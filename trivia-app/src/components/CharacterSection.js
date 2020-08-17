import React, { useState } from 'react';
import {Card, Image} from 'semantic-ui-react'

function CharacterSection (props){
    let character = props.character
    let CurrentHealth = props.current_health
    const [CurrentEnergy, setCurrentEnergy] = useState(character.energy)
    if (CurrentHealth === 0){
        alert('Game Over Man!')
    }


    return (
        <div className="character-section">
            <Card>  
                <Image src={character.img_url}/>
                <Card.Header>{character.name}</Card.Header>
                <Card.Meta>{character.tagline}</Card.Meta>
                <Card.Content>
                <p>Stats: </p>
                <p>HP: {CurrentHealth}/{character.max_hp}</p>
                <p>AC: {character.armor}</p>
                <p>Energy: {CurrentEnergy}/{character.energy}</p>
                </Card.Content>
                <Card.Content>
                    {character.powers.map(power=>{
                        return power.name 
                    })}
                </Card.Content>
                <Card.Content>
                    this is the potion section
                </Card.Content>
            </Card>
        </div>
    );
      
}
  
  export default CharacterSection;