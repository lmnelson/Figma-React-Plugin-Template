import * as React from 'react';
import '../styles/ui.css';
import {Page} from '../../constants';
import {RouteContext} from '../context/route-context';
import RoutingContainer from './RoutingContainer';

const App = function ({}) {
  const to = (newRoute: Page) => {
    setRouter({...router, route: newRoute});
  };

  const [router, setRouter] = React.useState({
    route: Page.Root,
    to: to,
  });

  React.useEffect(() => {
    window.onmessage = (event) => {
      const {type, message} = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <RouteContext.Provider value={router}>
      <RoutingContainer />
    </RouteContext.Provider>
  );
};

export default App;
