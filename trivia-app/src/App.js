import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar.js';
import QuestionSection from './components/QuestionSection.js';
import CharacterSection from './components/CharacterSection.js';
import BattleSection from './components/BattleSection.js';
import CharSelect from './components/CharSelect';
import BossScreen from './components/BossScreen';

const enemies = ["./images/Enemies/Banger_One.png","./images/Enemies/Banger_Two.png","./images/Enemies/Banger_Three.png","./images/Enemies/Cop_One.png","./images/Enemies/Cop_Two.png","./images/Enemies/Cop_Three.png","./images/Enemies/Hawk_One.png","./images/Enemies/Hawk_Three.png","./images/Enemies/Thug_One.png","./images/Enemies/Thug_Two.png","./images/Enemies/Thug_Three.png",]

class App extends Component{
  constructor(){
    super()
    this.state = {
      question_array:[],
      loading:true,
      newGame: true,
      eCount: 0,
      qCount: 1,
      characters: [],
      selected_character: "",
      current_health: "",
      wrongAnswers: 0,
      reachedBoss: false
    } 
  }
  
  async componentDidMount(){
    const TRIVIAURL = "https://opentdb.com/api.php?amount=50&type=multiple"
    const CHARURL = "http://localhost:3000/characters"
    const tresponse = await fetch(TRIVIAURL)
    const tdata = await tresponse.json()
    const cresponse = await fetch(CHARURL)
    const cdata = await cresponse.json()

    this.setState({
      question_array: tdata.results,
      characters: cdata,
      loading: false,
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
      })
    }

    setWrongAnswers=()=>{
      let wrongAnswers = this.state.wrongAnswers + 1
      this.setState({
        wrongAnswers: wrongAnswers,
        current_health: this.state.current_health - 2
      })
    }

    render(){
      return (
        <section className="App">
            <header className="App-header">
              <Navbar/>
            </header>
          {this.state.loading 
          ?<div>loading</div>
          :<>
            <div>
              {this.state.newGame ?
                <div>
                  <img id='background-image' src='./images/Trivia_Fighter.png'/>
                  <CharSelect characters={this.state.characters} startGame={this.startGame}/>
                </div>
              :<>
                <img id='background-image' src='./images/Trivia_Fighter.png'/>
                <CharacterSection character={this.state.selected_character} current_health={this.state.current_health}/>
                <QuestionSection question_array={this.state.question_array} setEnemy={this.setEnemy} setQCount={this.setQCount} setWrongAnswers={this.setWrongAnswers}/>
                <BattleSection enemy={enemies[this.state.eCount]} qCount={this.state.qCount}/>
              </>
              }
            </div>
            {this.state.reachedBoss ? <BossScreen/> : null}
            </>

          }
        </section>
        );
      }
}

export default App;
