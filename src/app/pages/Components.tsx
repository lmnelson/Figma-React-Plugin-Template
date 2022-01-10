import * as React from 'react';
import {RouteContext} from '../context/route-context';
import {Page} from '../../constants';

const Components = () => {
  return (
    <RouteContext.Consumer>
      {(route) => (
        <div>
          <h1>Components Page</h1>
          <button onClick={() => route.to(Page.Root)}>Go to Home</button>
        </div>
      )}
    </RouteContext.Consumer>
  );
};
export default Components;
