import * as React from 'react';
import {RouteContext} from '../context/route-context';
import {Page} from '../../constants';
import Home from '../pages/Home';
import Components from '../pages/Components';
import Theme from '../pages/Theme';

const RoutingContainer = () => {
  return (
    <div>
      <RouteContext.Consumer>
        {(value) => {
          switch (value.route) {
            case Page.Root:
              return <Home />;
            case Page.Components:
              return <Components />;
            case Page.Theme:
              return <Theme />;
          }
        }}
      </RouteContext.Consumer>
    </div>
  );
};

export default RoutingContainer;
