import * as React from 'react';
import {Page} from '../../constants';
import NavigationList from '../components/NavigationList';

const Home = () => {
  const homeListItems = [
    {name: 'Theme', route: Page.Theme, current: false},
    {name: 'Components', route: Page.Components, current: false},
  ];

  return (
    <div className="wrapper h-screen bg-slate-100">
      <NavigationList listItems={homeListItems} />
    </div>
  );
};
export default Home;
