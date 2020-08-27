import React, { Component } from 'react';
import './App.scss';

import TextSection from '../components/TextSection/TextSection';
import Portfolio from '../components/Portfolio/Portfolio';
import LastSection from '../components/LastSection/LastSection';


class App extends Component {
  state = {
    firstSection: {
      title: 'Hey there.',
      firstLine: 'My name is Max.',
      firstLineDecor: 'I love coding.',
      par: 'I live in Warsaw. Every day I try to learn as much as possible to be better frontend developer.',
      button: 'Find out more about me! 🔥'
    },
    lastSection: {
      title: 'Contact',
      info: 'Feel free to contact me anytime.',
      shortSendText: 'My mail adress: ',
      mailAdress: 'mrozmaksymilian@gmail.com'
    }
  }

  render() {
    return (
      <div className="App">
        <TextSection 
        title={this.state.firstSection.title}
        firstLine={this.state.firstSection.firstLine}
        firstLineDecor={this.state.firstSection.firstLineDecor}
        par={this.state.firstSection.par}
        button={this.state.firstSection.button}
        />
        <Portfolio />
        <LastSection 
        title={this.state.lastSection.title}
        info={this.state.lastSection.info}
        shortSendText={this.state.lastSection.shortSendText}
        mailAdress={this.state.lastSection.mailAdress}
        />
      </div>
    );
  }
}

export default App;
