import * as React from 'react';
interface NavbarProps {
  title: string;
}

const Navbar = ({title}: NavbarProps) => {
  return (
    <div className="flex h-12 bg-white p-2">
      <span className="text-center text-sm font-semibold text-slate-700 self-center">{title}</span>
    </div>
  );
};
export default Navbar;
