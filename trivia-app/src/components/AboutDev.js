import React from 'react';
import { Image, Item } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const AboutDev = () => (
    <Item.Group id="dev-card">
       
    <Item id="dev-item">
        <Image src='/images/Shawn.png'  className="imgdev" />

        <Item.Content>
        <Link id="link" to="/">X</Link>
        <Item.Header as='a'></Item.Header>
    
        <Item.Description id="descri">

            <p>Name: Shawn Alexander</p> 
            <p>Fighting Style: Code Maga</p>      
            <div class="inline">Height: 5'10</div>
            <div class="inline">Weight: 165lbs</div>
            <br></br>
            
            <p>Hobby: Badass Coder!</p>
            <div><p>Coding skills: <Image src='/images/stars.jpg'  id="stars" /></p></div>
            <p id="history">History: </p>
        </Item.Description>
        <div id="extra"><p>simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard</p></div>
        </Item.Content>
    </Item>

    <Item id="dev-item">
        <Image src='/images/zara.jpg' className="imgdev"/>

        <Item.Content>
        <Item.Header as='a'></Item.Header>
        {/* <Item.Meta>Description</Item.Meta> */}
        <Item.Description id="descri">

            <p>Name: Zara Ahmadi</p> 
            <p>Fighting Style: CodeBoxing</p>      
            <div class="inline">Height: 6'0</div>
            <div class="inline">Weight: 200lbs</div>
            <br></br>
            
            <p>Hobby: Bonsai</p>
            <div><p>Coding skills: <Image src='/images/stars.jpg'  id="stars" /></p></div>
            <p id="history">History: </p>
        </Item.Description>
        <div id="extra"><p>simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard</p></div>
        </Item.Content>
    </Item>
    </Item.Group>
)

    
 export default AboutDev;