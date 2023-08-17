import cn from 'classnames';
import React from 'react';

import s from './BlankComponent.module.scss';

interface BlankComponentProps {
  className?: string;
}

const BlankComponent: React.FC<BlankComponentProps> = ({ className }) => {
  return <div className={cn(s.root, className)}></div>;
};

export default BlankComponent;
