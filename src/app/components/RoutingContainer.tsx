import * as React from 'react';
import {RouteContext} from '../context/route-context';
import {route} from '../routes';
import Home from '../pages/Home';
import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo';
import PrimaryLayout from '../layouts/PrimaryLayout';

const RoutingContainer = () => {
  return (
    <PrimaryLayout>
      <RouteContext.Consumer>
        {(value) => {
          switch (value.path) {
            case route.ROOT.path:
              return <Home />;
            case route.PAGE_ONE.path:
              return <PageOne />;
            case route.PAGE_TWO.path:
              return <PageTwo />;
          }
        }}
      </RouteContext.Consumer>
    </PrimaryLayout>
  );
};

export default RoutingContainer;
