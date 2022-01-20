import * as React from 'react';
import Navbar from '../components/Navbar';
import {useLocation} from 'react-router';

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({children}: PrimaryLayoutProps) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="wrapper h-screen bg-slate-100">
      <Navbar title={location.pathname} />
      <div className="content p-2">{children}</div>
    </div>
  );
};

export default PrimaryLayout;
