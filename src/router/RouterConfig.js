import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as ROUTES from 'router/CONSTANTS';
import RouteWithLayout from './RouteWithLayout';
import { BasicLayout } from 'layout';
import {
  HomeView,
  BadgeSearchView,
  BadgeNewView,
  BadgeDetailView,
  BadgeListView,
  RickAndMortyView,
  NotFoundView,
} from 'views';

const Routes = () => {
  return (
    <BrowserRouter basename={ROUTES.BASE_ROUTE}>
      <Switch>
        <RouteWithLayout
          exact
          layout={BasicLayout}
          component={HomeView}
          path={ROUTES.HOME}
        />
        <RouteWithLayout
          exact
          layout={BasicLayout}
          component={BadgeSearchView}
          path={ROUTES.SEARCH}
        />
        <RouteWithLayout
          exact
          layout={BasicLayout}
          component={BadgeNewView}
          path={ROUTES.BADGES_NEW}
        />
        <RouteWithLayout
          exact
          layout={BasicLayout}
          component={BadgeDetailView}
          path={ROUTES.BADGES_DETAIL}
        />
        <RouteWithLayout
          exact
          layout={BasicLayout}
          component={BadgeListView}
          path={ROUTES.BADGES}
        />
        <RouteWithLayout
          exact
          layout={BasicLayout}
          component={RickAndMortyView}
          path={ROUTES.RICKANDMORTY}
        />
        <Route path={ROUTES.NOT_FOUND} component={NotFoundView} />
        <Redirect from="*" to={ROUTES.NOT_FOUND} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
