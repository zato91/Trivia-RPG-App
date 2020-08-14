import React, { useEffect, useState } from 'react';


function CharacterSection (props){

   let {characters} = props
//    console.log(characters.img_url)
// console.log(characters)

    return (
        <div className="character-section">
            
            <div id="character-img">
                {/* <img src={characters.img_url}  />   */}
            </div>
            <div className="stats"> 
                <p>Stats: </p>
                <p>Hp: </p>
                <p>Ac </p>

            </div>
        </div>
    );
      
}
  
  export default CharacterSection;