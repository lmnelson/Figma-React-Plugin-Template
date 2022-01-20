import * as React from 'react';
import {AppContext} from '../context/app-context';
import {useNavigate} from 'react-router';
import {routes} from '../routes';

const PageOne = () => {
  const navigateTo = useNavigate();
  const appContext = React.useContext(AppContext);
  return (
    <>
      <div className="bg-white overflow-hidden shadow rounded-md p-3">
        <p className="text-sm">App context: {JSON.stringify(appContext)}</p>
      </div>
      <button
        className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => navigateTo(routes.PAGE_TWO.path)}
      >
        Go to page 2
      </button>
    </>
  );
};
export default PageOne;
