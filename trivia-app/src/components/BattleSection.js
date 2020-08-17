import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react';


function BattleSection (props){
    const [waveNumber, setwaveNumber] = useState(10)
    
    return (
        <div className="battle-section">
            <Card>
                <Image src={props.enemy}/>
                <Card.Content>
                    Wave: {props.qCount}/{waveNumber}
                </Card.Content>
            </Card>
        </div>
    );
      
}
  
  export default BattleSection;