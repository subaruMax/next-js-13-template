import cn from 'classnames';
import React from 'react';

import FONTS from '@app/constants/fonts';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Metadata from '@components/Metadata';

import s from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={cn(...FONTS, s.root)}>
      <Metadata />
      <Header />
      <div className={s.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
