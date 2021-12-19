import * as React from 'react';
import '../styles/ui.css';

declare function require(path: string): any;

const App = function ({}) {
  const textbox = React.useRef<HTMLInputElement>(undefined);

  const countRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = '5';
    textbox.current = element;
  }, []);

  const onCreate = () => {
    const count = parseInt(textbox.current.value, 10);
    parent.postMessage({pluginMessage: {type: 'create-rectangles', count}}, '*');
  };

  const onCancel = () => {
    parent.postMessage({pluginMessage: {type: 'cancel'}}, '*');
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const {type, message} = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <img src={require('../assets/logo.svg')} />
      <h2 className="text-lg font-bold text-center mt-4">Rectangle Creator</h2>
      <div className="p-2 bg-white rounded-md m-3 shadow-md">
        <div className="mb-2">
          <label htmlFor="count" className="block text-sm font-medium text-gray-700">
            Count
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="count"
              id="count"
              className="p-2  focus-visible:outline-0 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md border"
              ref={countRef}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <button
            id="create"
            onClick={onCreate}
            className="justify-center inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create
          </button>
          <button
            onClick={onCancel}
            className="justify-center inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
