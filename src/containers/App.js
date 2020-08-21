import React from 'react';
import './App.scss';

import TextSection from '../components/TextSection/TextSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';

function App() {
  return (
    <div className="App">
      <TextSection />
      <PortfolioSection />
      <TextSection />
    </div>
  );
}

export default App;
