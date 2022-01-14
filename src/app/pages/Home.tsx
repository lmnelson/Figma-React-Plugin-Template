import * as React from 'react';

import {route} from '../routes';
import NavigationList from '../components/NavigationList';

const Home = () => {
  const homePageRoutes = [route.PAGE_ONE, route.PAGE_TWO];

  return (
    <div className="wrapper h-screen bg-slate-100">
      <NavigationList routes={homePageRoutes} />
    </div>
  );
};
export default Home;
