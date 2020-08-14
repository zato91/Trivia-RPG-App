import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar.js';
import QuestionSection from './components/QuestionSection.js';
import CharacterSection from './components/CharacterSection.js';

class App extends Component{
  constructor(){
    super()
    this.state = {
      question_array:[],
      loading:true,
      characters: []
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
      loading: false
      })
  }


    render(){
        return (
          <section className="App">
          {this.state.loading 
          ?<div>loading</div>
          :<>
            <header className="App-header">
              <Navbar/>
            </header>
            <div>
              <CharacterSection characters={this.state.characters}/>
              <QuestionSection question_array={this.state.question_array}/>
            </div>
            </>
          }
        </section>
        );
      }
}

export default App;
