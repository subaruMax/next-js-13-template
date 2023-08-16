import cn from 'classnames';
import React from 'react';

import s from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return <div className={cn(s.root, className)}>FOOTER</div>;
};

export default Footer;
