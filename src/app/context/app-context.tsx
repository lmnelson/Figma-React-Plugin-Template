import * as React from 'react';

const initialState = {store: []};

interface AppContextType {}

export const AppContext = React.createContext<AppContextType>(initialState as AppContextType);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  return <AppContext.Provider value={{store: []}}>{children}</AppContext.Provider>;
};
