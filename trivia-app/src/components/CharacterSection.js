import React, { useState } from 'react';


function CharacterSection (props){
    const [character, setCharacter] = useState(props.characters[0])
    // let character = prop.character[0]
//    let {characters} = props
    console.log(character)

    return (
        <div className="character-section">
            
            <div className="character-img">
                <img src={character.img_url} height="120"/>
            </div>
            <div className="stats"> 
                <p>Stats: </p>
                <p>HP: {character.max_hp}</p>
                <p>AC: {character.armor}</p>

            </div>
        </div>
    );
      
}
  
  export default CharacterSection;