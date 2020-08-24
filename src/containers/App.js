import React from 'react';
import './App.scss';

import TextSection from '../components/TextSection/TextSection';
import Portfolio from '../components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <TextSection />
      <Portfolio />
      <TextSection />
    </div>
  );
}

export default App;
