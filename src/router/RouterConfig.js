import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as ROUTES from 'router/CONSTANTS';
import RouteWithLayout from './RouteWithLayout';
import { BasicLayout } from 'layout';
import { Loader } from 'components';

const Routes = () => {
  return (
    <BrowserRouter basename={ROUTES.BASE_ROUTE}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <RouteWithLayout
            exact
            layout={BasicLayout}
            component={lazy(() => import('views/Home'))}
            path={ROUTES.HOME}
          />
          <RouteWithLayout
            exact
            layout={BasicLayout}
            component={lazy(() => import('views/BadgeSearch'))}
            path={ROUTES.SEARCH}
          />
          <RouteWithLayout
            exact
            layout={BasicLayout}
            component={lazy(() => import('views/BadgeList'))}
            path={ROUTES.BADGES}
          />
          <RouteWithLayout
            exact
            layout={BasicLayout}
            component={lazy(() => import('views/BadgeNew'))}
            path={ROUTES.BADGES_NEW}
          />
          <RouteWithLayout
            exact
            layout={BasicLayout}
            component={lazy(() => import('views/BadgeDetail'))}
            path={ROUTES.BADGES_DETAIL}
          />
          <RouteWithLayout
            exact
            layout={BasicLayout}
            component={lazy(() => import('views/RickAndMorty'))}
            path={ROUTES.RICKANDMORTY}
          />
          <Route
            path={ROUTES.NOT_FOUND}
            component={lazy(() => import('views/NotFound'))}
          />
          <Redirect from="*" to={ROUTES.NOT_FOUND} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
