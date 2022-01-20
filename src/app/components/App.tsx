import * as React from 'react';
import RoutingContainer from './RoutingContainer';
import {AppContextProvider} from '../context/app-context';

import '../styles/ui.css';

const App = function ({}) {
  React.useEffect(() => {
    window.onmessage = (event) => {
      const {type, message} = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <AppContextProvider>
      <RoutingContainer />
    </AppContextProvider>
  );
};

export default App;
