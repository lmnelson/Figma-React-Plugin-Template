import * as React from 'react';
import {RouteContext} from '../context/route-context';
import {Route} from '../types/routes';

interface BackButtonProps {
  route: Route | undefined;
}

const BackButton = ({route}: BackButtonProps) => {
  return (
    <RouteContext.Consumer>
      {(router) => (
        <button
          onClick={() => router.to(route[route.previousRoute])}
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back
        </button>
      )}
    </RouteContext.Consumer>
  );
};

export default BackButton;
