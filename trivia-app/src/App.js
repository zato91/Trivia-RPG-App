import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar.js';
import QuestionSection from './components/QuestionSection.js';
import CharacterSection from './components/CharacterSection.js';

class App extends Component{
  constructor(){
    super()
    this.state = {
      question_array:[],
      loading:true
    } 
  }
  
  async componentDidMount(){
    const URL = "https://opentdb.com/api.php?amount=50&type=multiple"
    const response = await fetch(URL)
    const data = await response.json()
    this.setState({
      question_array: data.results,
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
              <CharacterSection/>
              <QuestionSection question_array={this.state.question_array}/>
            </div>
            </>
          }
        </section>
        );
      }
}

export default App;
