import * as React from 'react';
import {Page} from '../../constants';

export const RouteContext = React.createContext({
  route: Page.Root,
  to: (newRoute: Page) => {
    newRoute;
  },
});

RouteContext.displayName = 'RouteContext';
