import cn from 'classnames';
import React from 'react';

import s from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return <div className={cn(s.root, className)}>HEADER</div>;
};

export default Header;
