import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react'


function Footer (props){    

    return (
        <div>
            <Breadcrumb className="breadcrumb">
                <Breadcrumb.Section active>This game was made by awesome people for awesome people!</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link><a href="https://github.com/Nyelanioustour">Shawn</a></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link><a href="https://github.com/zato91">Zara</a></Breadcrumb.Section>
             </Breadcrumb>

        </div>
    );
      
}
  
  export default Footer;