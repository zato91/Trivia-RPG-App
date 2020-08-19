import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar.js';
import QuestionSection from './components/QuestionSection.js';
import CharacterSection from './components/CharacterSection.js';
import BattleSection from './components/BattleSection.js';
import CharSelect from './components/CharSelect';
import SplashPage from './components/SplashPage';
import DeathScreen from './components/DeathScreen.js';
import BossScreen from './components/BossScreen';


const enemies = ["./images/Enemies/Banger_One.png","./images/Enemies/Banger_Two.png","./images/Enemies/Banger_Three.png","./images/Enemies/Cop_One.png","./images/Enemies/Cop_Two.png","./images/Enemies/Cop_Three.png","./images/Enemies/Hawk_One.png","./images/Enemies/Hawk_Three.png","./images/Enemies/Thug_One.png","./images/Enemies/Thug_Two.png","./images/Enemies/Thug_Three.png",]
const TRIVIAURL = "https://opentdb.com/api.php?amount=50&type=multiple"
const CHARURL = "http://localhost:3000/characters"

class App extends Component{
  constructor(){
    super()
    this.state = {
      question_array:[],
      loading:true,
      newGame: true,
      eCount: 0,
      qCount: 0,
      characters: [],
      selected_character: "",
      current_health: "",
      current_energy:"",
      current_medkits: 1,
      current_energy_potions: 1,
      wrongAnswers: 0,
      fifty_fifty: false,
      answer_reveal: false,
      reachedBoss: false,
      loggedin: false,
      displayabout:false,
      displayplay :false
    } 
  }

  getCharacters = (e) => {
    e.preventDefault();
    
    fetch(CHARURL,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}` // send token back to server
      }
    })
    .then(res => res.json())
    .then(data => {
        this.setState({
          characters: data,
          loading: false,
          loggedin: true
        })
    })
}

  componentDidMount() {
    fetch(TRIVIAURL)
    .then(res => res.json())
    .then(data => {
        this.setState({
          question_array: data.results,
        })
    })
}
    
    setEnemy=()=>{
      let count = Math.floor(Math.random() * enemies.length)
      this.setState({
        eCount: count
      })
    }
    
    setQCount=()=>{
      let count = (this.state.qCount + 1)
      this.setState({
        qCount: count
      })
    }

    startGame = (character) =>{
      let newGame = !this.state.newGame
      this.setState({
        newGame: newGame,
        selected_character: character,
        current_health: character.max_hp,
        current_energy: character.energy,
      })
    }

    setWrongAnswers=()=>{
      let wrongAnswers = this.state.wrongAnswers + 1
      this.setState({
        wrongAnswers: wrongAnswers,
        current_health: this.state.current_health - 2
      })
    }

    setFiftyFifty=(ability)=>{
      let fifty_fifty = !this.state.fifty_fifty
      if(this.state.current_energy>0){
        this.setState({
          fifty_fifty: fifty_fifty,
        })
      }
      if (ability === true) this.setEnergy(-1)
    }

    setAnswerReveal=(ability)=>{
      let answer_reveal = !this.state.answer_reveal
      if(this.state.current_energy > 2){
        this.setState({
          answer_reveal: answer_reveal
        })
      }
      if (ability === true) this.setEnergy(-2)
    }

    useMedKit=()=>{
      if(this.state.current_medkits > 0){
        let healthGain = Math.floor(this.state.selected_character.max_hp / 2)
        let newHealth = this.state.current_health + healthGain
        if(newHealth > this.state.selected_character.max_hp){
          newHealth = this.state.selected_character.max_hp
        }
        this.setState({
          current_health: newHealth,
          current_medkits: this.state.current_medkits - 1
        })
      }
    }

    useEnergyPotion=()=>{
      if(this.state.current_energy_potions > 0){
        let newEnergy = this.state.current_energy + 1
        if(newEnergy > this.state.selected_character.energy){
          newEnergy = this.state.selected_character.energy
        }
        this.setState({
          current_energy: newEnergy,
          current_energy_potions: this.state.current_energy_potions - 1
        })
      }
    }
      
      setEnergy=(num)=>{
      this.setState({
        current_energy: this.state.current_energy + num
      })
    }

    displayAbout=()=>{
      
      this.setState({
        displayabout: !this.state.displayabout,
        displayplay : false
    })
    }

    displayPlay=()=>{
      this.setState({
        displayplay : !this.state.displayplay
    })
    }
    render(){
      return (
        <section className="App">
            <header className="App-header">
              <Navbar
              getCharacters={this.getCharacters}/> 
            </header>

          {this.state.loading 
          ?<SplashPage 
          displayAbout={this.displayAbout} 
          displayPlay={this.displayPlay}
          displayabout={this.state.displayabout}
          displayplay={this.state.displayplay}
           />

          :<> {this.state.loggedin
              ?
              <>
                <div>
                  {this.state.newGame ?
                    <div>
                      <img id='background-image' src='./images/Trivia_Fighter.png'/>
                      <CharSelect characters={this.state.characters} startGame={this.startGame}/>
                    </div>
                  :<>
                    <img id='background-image' src='./images/Trivia_Fighter.png'/>
                    <CharacterSection character={this.state.selected_character} current_health={this.state.current_health} current_energy={this.state.current_energy} current_medkits={this.state.current_medkits} current_energy_potions={this.state.current_energy_potions} setFiftyFifty={this.setFiftyFifty} setAnswerReveal={this.setAnswerReveal} useMedKit={this.useMedKit} useEnergyPotion={this.useEnergyPotion}/>
                    {this.state.current_health < 1 
                    ?<>
                      <DeathScreen/> 
                      <div className= "game-over-buttons">
                        <button className='ui green button'>New Game</button>
                        <button className='ui red button'>Log Out</button>
                      </div>
                    </>
                    :
                    <QuestionSection question_array={this.state.question_array} setEnemy={this.setEnemy} setQCount={this.setQCount} setWrongAnswers={this.setWrongAnswers} fifty_fifty={this.state.fifty_fifty} setFiftyFifty={this.setFiftyFifty} answer_reveal={this.state.answer_reveal} setAnswerReveal={this.setAnswerReveal}/>}
                    
                    <BattleSection enemy={enemies[this.state.eCount]} qCount={this.state.qCount}/>
                    {/* {this.state.reachedBoss ? <BossScreen/> : null} */}
                  </>
                  }
                </div>
              </>:
                <div>
                <SplashPage/>
               </div>
            }
          </>
          }
          
        </section>
        );
      }
}

export default App;
