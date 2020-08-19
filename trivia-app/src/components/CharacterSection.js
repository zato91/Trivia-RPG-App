import React, { useState } from 'react';
import {Card, Image, Button} from 'semantic-ui-react'

function CharacterSection (props){
    let character = props.character
    let CurrentHealth = props.current_health
    let CurrentEnergy = props.current_energy
    let CurrentMedkits = props.current_medkits
    let CurrentEnergyPotions = props.current_energy_potions
    let powers = character.powers.map(power=>{return power.name})
    let icons =["fire icon", "star icon", "heartbeat icon"]
    let count = -1

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
                    <Button.Group vertical>
                        <div>
                            <button class="ui icon left labeled button" onClick={(e)=>props.setFiftyFifty(true)}><i aria-hidden="true" class="fire icon"></i>{powers[0]}</button>
                            <button class="ui icon left labeled button" onClick={(e)=>{props.setAnswerReveal(true)}}><i aria-hidden="true" class="star icon"></i>{powers[1]}</button>
                        </div>
                    </Button.Group>
                </Card.Content>
                <Card.Content>
                    <Button.Group vertical>
                    <button class="ui icon left labeled button" onClick={()=>{props.useMedKit()}}><i aria-hidden="true" class="first aid icon"></i>Medkit ({CurrentMedkits})</button>
                        <button class="ui icon left labeled button" onClick={(e)=>{props.useEnergyPotion()}}><i aria-hidden="true" class="flask icon"></i>Energy Potion ({CurrentEnergyPotions})</button>
                    </Button.Group>
                </Card.Content>
            </Card>
        </div>
    );
      
}

  export default CharacterSection;