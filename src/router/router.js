import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// Constans
import * as ROUTES from 'constants/routes'
// Layouts
import { BasicLayout } from 'layout'
// Generic Views
import Home from 'views/Home'
import BadgeSearch from 'views/BadgeSearch/BadgeSearch'
import BadgeNew from 'views/BadgeNew/BadgeNew'
import BadgeDetail from 'views/BadgeDetail/BadgeDetail'
import BadgeListContainer from 'views/BadgeListContainer/BadgeListContainer'
import BadgeRickAndMorty from 'views/BadgeRickAndMorty/BadgeRickAndMorty'
import NotFound from 'views/NotFound/NotFound'

function router() {
  return (
    <BrowserRouter basename={ROUTES.BASE_ROUTE}>
      <Switch>
        <BasicRoute exact path={ROUTES.HOME} component={Home}/>
        <BasicRoute exact path={ROUTES.SEARCH} component={BadgeSearch}/>
        <BasicRoute exact path={ROUTES.BADGES} component={BadgeListContainer}/>
        <BasicRoute exact path={ROUTES.BADGES_NEW} component={BadgeNew}/>
        <BasicRoute exact path={ROUTES.BADGES_DETAIL} component={BadgeDetail}/>
        <BasicRoute exact path={ROUTES.RICKANDMORTY} component={BadgeRickAndMorty}/>
        <Route path={ROUTES.NOT_FOUND} component={NotFound}/>
        <Redirect from="*" to={ROUTES.NOT_FOUND}/>
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
