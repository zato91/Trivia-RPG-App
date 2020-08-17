import React, { useState } from 'react';
import CharPopUp from './CharPopUp.js';
import {Image, Modal} from 'semantic-ui-react';

function BossScreen (props){    

    return (
        <Modal
        trigger={<button className="boss-button">boss2</button>}
        >
            <Modal.Header>test</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                test
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
      
}
  
  export default BossScreen;