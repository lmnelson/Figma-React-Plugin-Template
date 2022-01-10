import * as React from 'react';
import '../styles/ui.css';
import {Page} from '../../constants';
import {RouteContext} from '../context/route-context';
import RoutingContainer from './RoutingContainer';

declare function require(path: string): any;

const App = function ({}) {
  const to = (newRoute: Page) => {
    setRoute({...route, route: newRoute});
  };

  const [route, setRoute] = React.useState({
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
    <RouteContext.Provider value={route}>
      <RoutingContainer />
    </RouteContext.Provider>
  );
};

export default App;
