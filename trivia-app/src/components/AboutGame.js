import React from 'react';
import { Image } from 'semantic-ui-react'


 const AboutGame = ( props ) => {
   return (
     
     
     <div>
     <Image src='/images/About_Image.png' size="medium" centered />
       <h4>
       This game was inspired by old school beat'em ups and RPGs!
       </h4>

       <h4>
       Game play involves answering trivia questions to land attack and avoid damage. During the rounds each character has a set of powers that can make questions easier, avoid damage, increase stats, as well as, access to powerups to restore health or energy. 
       </h4>
       
       <h4>
        After each of the three waves of enemies a boss will appear. Defeating the bosses wins the game, but if your health drops to zero of below you are defeated!
       </h4>
      </div>
    
   )
  };
  
  export default AboutGame;