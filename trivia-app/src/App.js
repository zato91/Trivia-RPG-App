import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import QuestionSection from './components/QuestionSection.js';
import CharacterSection from './components/CharacterSection.js';


class App extends React.Component {

  state ={
    characters: [],
  }

  componentDidMount () {

    fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then( characters => { 
          this.setState({
            characters
          })
          console.log(characters[0].name)
        })
  }



  render() {
    return (
      <section className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <div>
          <CharacterSection
          characters={this.state.characters[0]}
          />
          <QuestionSection/>
        </div>
      </section>
    );
  }
}

export default App;
