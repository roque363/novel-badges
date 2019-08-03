import React from 'react';
import './App.css';

import BadgeNew from './views/BadgeNew/BadgeNew';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BadgeNew />
    </div>
  );
}

export default App;
