import * as React from 'react';
import {route} from '../routes';
import {Route} from '../types/routes';

export const RouteContext = React.createContext({
  title: route.ROOT.title,
  path: route.ROOT.path,
  previousPath: null,
  to: (newRoute: Route) => {
    newRoute;
  },
});

RouteContext.displayName = 'RouteContext';
