import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import QuestionSection from './components/QuestionSection.js';


function App() {
  return (
    <section className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <div>
        <QuestionSection/>
      </div>
    </section>
  );
}

export default App;
