import * as React from 'react';
import Navbar from '../components/Navbar';

const PrimaryLayout = ({route, children}) => {
  return (
    <div className="wrapper h-screen bg-slate-100">
      <Navbar title={route} />
      <div className="content p-2">{children}</div>
    </div>
  );
};

export default PrimaryLayout;
