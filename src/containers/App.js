import React, { Component } from 'react';
import './App.scss';

import TextSection from '../components/TextSection/TextSection';
import Portfolio from '../components/Portfolio/Portfolio';

class App extends Component {
  state = {
    firstSection: {
      title: 'Hey there.',
      firstLine: 'My name is Max.',
      firstLineDecor: 'I love coding.',
      par: 'I live in Warsaw. Every day I try to learn as much as possible to be better frontend developer.',
      button: 'Find out more about me!'
    }
  }

  render() {
    return (
      <div className="App">
        <TextSection />
        <Portfolio />
        <TextSection />
      </div>
    );
  }
}

export default App;
