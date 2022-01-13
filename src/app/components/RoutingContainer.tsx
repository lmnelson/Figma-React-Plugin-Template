import * as React from 'react';
import {RouteContext} from '../context/route-context';
import {Page} from '../../constants';
import Home from '../pages/Home';
import Components from '../pages/Components';
import Theme from '../pages/Theme';
import PrimaryLayout from '../layouts/PrimaryLayout';

const RoutingContainer = () => {
  return (
    <RouteContext.Consumer>
      {(value) => {
        switch (value.route) {
          case Page.Root:
            return <Home />;
          case Page.Components:
            return (
              <PrimaryLayout route={Page.Components}>
                <Components />
              </PrimaryLayout>
            );
          case Page.Theme:
            return (
              <PrimaryLayout route={Page.Theme}>
                <Theme />
              </PrimaryLayout>
            );
        }
      }}
    </RouteContext.Consumer>
  );
};

export default RoutingContainer;
