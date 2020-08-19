import React, { useState } from 'react';
import CharPopUp from './CharPopUp.js';
import {Image, Modal, Item} from 'semantic-ui-react';

function InformationSection (props){    

    return (
        <div>
            {props.reachedBoss
                ? <Item>
                <Item.Image size="tiny" src="./images/title_icon.png" floated="left"/>
                <Item.Content verticalAlign="middle">
                    <h4>
                        You have discovered a boss. Reduce the bosses hit points to zero in order to defeat them!
                    </h4>
                </Item.Content>
                <br></br>
                </Item>
            :null
            }
        </div>
       
    );
      
}
  
  export default InformationSection;