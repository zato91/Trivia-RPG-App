import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import AboutDev from "./AboutDev.js"
import AboutPlay from "./AboutPlay.js"
import { Route} from 'react-router-dom'
import AboutGame from "./AboutGame.js"

const About = ( props ) => {

  let handleAbout = ()=>{
    props.history.push("/")   
}
  return (
    <div className="about">
        <Button inverted  onClick={()=>handleAbout()}>X</Button>

        <Route path='/about/play' component={AboutPlay}  />
        <Route path='/about/dev' component={AboutDev} />
        <Route path="/about/game" component={AboutGame}  />
        
    </div>
  )
 };
 
 export default About;