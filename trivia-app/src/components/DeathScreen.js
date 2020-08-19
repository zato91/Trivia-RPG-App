import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react';


function DeathScreen (props){
    
    return (
        <div className="death screen">
           <Image src="./images/Game_Over.png" size="large" floated="left"/>
        </div>
    );
      
}
  
  export default DeathScreen;