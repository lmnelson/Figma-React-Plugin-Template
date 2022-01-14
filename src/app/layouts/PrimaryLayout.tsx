import * as React from 'react';
import Navbar from '../components/Navbar';
import {RouteContext} from '../context/route-context';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({children}: PrimaryLayoutProps) => {
  return (
    <RouteContext.Consumer>
      {(route) => (
        <div className="wrapper h-screen bg-slate-100">
          <Navbar title={route.title} />
          <div className="content p-2">{children}</div>
        </div>
      )}
    </RouteContext.Consumer>
  );
};

export default PrimaryLayout;
