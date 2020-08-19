import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react';


function BattleSection (props){
    const [waveNumber, setwaveNumber] = useState(10)
    let bosses = ["./images/Boss/Boss_Estelle_Avatar.png","./images/Boss/Boss_Mr_Y_Avatar.png","./images/Boss/Boss_Nora_Avatar.png"]
    
    return (
        <div className="battle-section">
            {props.reachedBoss
            ?
            <Card>
            <Image src={bosses[props.bossNumber]}/>
            <Card.Content>
                HP: {16-props.qCount}/5
            </Card.Content>
        </Card>
            :
            <Card>
                <Image src={props.enemy}/>
                <Card.Content>
                    Wave: {props.qCount}/{waveNumber}
                </Card.Content>
            </Card>
            }
        </div>
    );
      
}
  
  export default BattleSection;