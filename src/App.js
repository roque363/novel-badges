import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BadgeNew from './views/BadgeNew/BadgeNew';
import BadgeList from './views/BadgeList/BadgeList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/badges" component={BadgeList}></Route>
          <Route exact path="/badges/new" component={BadgeNew}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
