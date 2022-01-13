import * as React from 'react';
import {Page} from '../../constants';
import BackButton from './BackButton';

const Navbar = ({title}) => {
  return (
    <div className="flex h-12 bg-white p-2">
      <BackButton route={Page.Root} />
      <span className="text-center text-sm font-semibold text-slate-700 self-center ml-4">{title}</span>
    </div>
  );
};
export default Navbar;
