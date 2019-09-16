import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import BadgeSearch from './views/BadgeSearch/BadgeSearch';
import BadgeNew from './views/BadgeNew/BadgeNew';
import BadgeList from './views/BadgeList/BadgeList';
import BadgeRickAndMorty from './views/BadgeRickAndMorty/BadgeRickAndMorty';
import NotFound from './views/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/novel-badges">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={BadgeSearch}/>
          <Route exact path="/badges" component={BadgeList}/>
          <Route exact path="/badges/new" component={BadgeNew}/>
          <Route exact path="/badges/RickAndMorty" component={BadgeRickAndMorty}/>
          <Route path="/404" component={NotFound}/>
          <Redirect from="*" to="/404"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
