import * as React from 'react';
import {RouteContext} from '../context/route-context';
import {Route} from '../types/routes';

interface NavigationListProps {
  routes: Route[];
}

const NavigationList = ({routes}: NavigationListProps) => {
  return (
    <RouteContext.Consumer>
      {(router) => (
        <div className="overflow-hidden sm:rounded-lg p-2">
          <nav className="space-y-1" aria-label="Sidebar">
            {routes.map((route: Route) => (
              <button
                key={route.title}
                onClick={() => router.to(route)}
                className={'flex items-center px-3 py-2 text-sm font-medium rounded-md w-full'}
              >
                <span className="truncate">{route.title}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </RouteContext.Consumer>
  );
};
export default NavigationList;
