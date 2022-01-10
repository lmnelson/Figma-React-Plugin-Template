import * as React from 'react';
import {RouteContext} from '../context/route-context';
import {Page} from '../../constants';

const Home = () => {
  return (
    <RouteContext.Consumer>
      {(route) => (
        <div>
          <h1>Home Page</h1>
          <button onClick={() => route.to(Page.Components)}>Go to Components</button>
        </div>
      )}
    </RouteContext.Consumer>
  );
};
export default Home;
