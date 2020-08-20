import React from 'react';
import CharPopUp from '../components/CharPopUp.js';
import {Image} from 'semantic-ui-react';

function CharSelect (props){    
    let characters = props.characters
    return (
        <div className="char-select">
          <h1>Select Your character!</h1>
          <Image.Group size='small'>
            {/* <Image src={characters[0].img_url} /> */}
            <CharPopUp character={characters[0]} startGame={props.startGame}/>
            <CharPopUp character={characters[1]} startGame={props.startGame}/>
            <CharPopUp character={characters[2]} startGame={props.startGame}/>
            <CharPopUp character={characters[3]} startGame={props.startGame}/>

        </Image.Group>
        </div>
    );
      
}
  
  export default CharSelect;