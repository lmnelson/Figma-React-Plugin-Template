import * as React from 'react';
import '../styles/ui.css';
import {Route} from '../types/routes';
import {RouteContext} from '../context/route-context';
import {route} from '../routes';
import RoutingContainer from './RoutingContainer';

const App = function ({}) {
  const to = (newRoute: Route) => {
    setRouter({...router, ...newRoute});
  };

  const [router, setRouter] = React.useState({
    path: route.ROOT.path,
    title: route.ROOT.title,
    previousPath: null,
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
