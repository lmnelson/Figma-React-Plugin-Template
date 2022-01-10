import * as React from 'react';
import {RouteContext} from '../context/route-context';
import {Page} from '../../constants';
import Home from '../pages/Home';
import Components from '../pages/Components';

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
          }
        }}
      </RouteContext.Consumer>
    </div>
  );
};

export default RoutingContainer;

// import Breadcrumb from './Breadcrumb';
// import NavigationList from './NavigationList';

// const pages = [
//   {name: 'Components', href: '#', current: false},
//   {name: 'Atoms', href: '#', current: true},
// ];

// const componentList = [
//   {name: 'Buttons', href: '#', current: true},
//   {name: 'Badges', href: '#', current: false},
//   {name: 'Checkboxes', href: '#', current: false},
// ];
