import * as React from 'react';
import {RouteContext} from '../context/route-context';
import BackButton from './BackButton';

interface NavbarProps {
  title: string;
}

const Navbar = ({title}: NavbarProps) => {
  return (
    <RouteContext.Consumer>
      {(route) => (
        <div className="flex h-12 bg-white p-2">
          {route.previousPath && <BackButton route={route} />}
          <span className="text-center text-sm font-semibold text-slate-700 self-center ml-4">{title}</span>
        </div>
      )}
    </RouteContext.Consumer>
  );
};
export default Navbar;
