import React from 'react';
import './App.css';

import BadgeNew from './views/BadgeNew/BadgeNew';
import BadgeList from './views/BadgeList/BadgeList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BadgeList/>
    </div>
  );
}

export default App;
