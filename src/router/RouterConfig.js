import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import RouteWithLayout from './RouteWithLayout';
import { BasicLayout } from 'layout';
import { Loader } from 'components';
import {
  HomeView,
  BadgeSearchView,
  BadgeListView,
  BadgeNewView,
  BadgeDetailView,
  RickAndMortyView,
  NotFoundView,
} from 'views';
import * as ROUTES from 'router/CONSTANTS';

const Routes = () => {
  return (
    <BrowserRouter basename={ROUTES.BASE_ROUTE}>
      <Suspense fallback={<Loader />}>
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
            component={BadgeListView}
            path={ROUTES.BADGES}
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
            component={RickAndMortyView}
            path={ROUTES.RICKANDMORTY}
          />
          <Route path={ROUTES.NOT_FOUND} component={NotFoundView} />
          <Redirect from="*" to={ROUTES.NOT_FOUND} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
