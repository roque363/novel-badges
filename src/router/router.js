import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// Layouts
import BasicLayout from '../layout/BasicLayout'
// Generic Views
import Home from '../views/Home/Home'
import BadgeSearch from '../views/BadgeSearch/BadgeSearch'
import BadgeNew from '../views/BadgeNew/BadgeNew'
import BadgeDetail from '../views/BadgeDetail/BadgeDetail'
import BadgeListContainer from '../views/BadgeListContainer/BadgeListContainer'
import BadgeRickAndMorty from '../views/BadgeRickAndMorty/BadgeRickAndMorty'
import NotFound from '../views/NotFound/NotFound'

function router() {
  return (
    <BrowserRouter basename="/novel-badges">
      <Switch>
        <BasicRoute exact path="/" component={Home}/>
        <BasicRoute exact path="/search" component={BadgeSearch}/>
        <BasicRoute exact path="/badges" component={BadgeListContainer}/>
        <BasicRoute exact path="/badges/detail/:badgeId" component={BadgeDetail}/>
        <BasicRoute exact path="/badges/new" component={BadgeNew}/>
        <BasicRoute exact path="/badges/RickAndMorty" component={BadgeRickAndMorty}/>
        <Route path="/404" component={NotFound}/>
        <Redirect from="*" to="/404"/>
      </Switch>
    </BrowserRouter>
  )
}

function BasicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        <BasicLayout>
          <Component {...props}/>
        </BasicLayout>
      }
    />
  )
}

export default router
