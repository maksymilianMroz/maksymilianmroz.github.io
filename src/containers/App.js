import React, { Component } from 'react';
import './App.scss';

import TextSection from '../components/TextSection/TextSection';
import Portfolio from '../components/Portfolio/Portfolio';

class App extends Component {


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
