import * as React from 'react';
import {RouteContext} from '../context/route-context';

const NavigationList = ({listItems}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <RouteContext.Consumer>
      {(router) => (
        <div className="bg-white overflow-hidden sm:rounded-lg mt-2 p-2">
          <nav className="space-y-1" aria-label="Sidebar">
            {listItems.map((item) => (
              <button
                key={item.name}
                onClick={() => router.to(item.route)}
                className={classNames(
                  item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'flex items-center px-3 py-2 text-sm font-medium rounded-md w-full'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <span className="truncate">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </RouteContext.Consumer>
  );
};
export default NavigationList;
