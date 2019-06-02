import React from 'react';
import './App.css';

import Badge from './components/Badge';
import nino_profile from './assets/nino_profile.jpg';
import nino from './assets/nino.jpg';

function App() {
  return (
    <div className="App">
      <Badge
        firstName="Nino" 
        lastName="Nakano"
        badgeImage={nino}
        avatarImage={nino_profile}
        mangaTitle="5Toubun no Hanayome"

      />
    </div>
  );
}

export default App;
