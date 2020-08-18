import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import AboutDev from "./AboutDev.js"
import AboutPlay from "./AboutPlay.js"

const About = ( props ) => {
  return (
    <div className="about">
        <Button inverted  onClick={()=>props.displayAbout()}>X</Button>
        {props.displayplay ? <AboutPlay  /> :<AboutDev/>  }
        {/* <AboutPlay  /> */}
        
    </div>
  )
 };
 
 export default About;