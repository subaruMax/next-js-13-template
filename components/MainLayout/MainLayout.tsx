import cn from 'classnames';
import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Metadata, { MetadataProps } from 'components/Metadata';
import FONTS from 'constants/fonts';

import s from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
  metadata?: MetadataProps;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, metadata }) => {
  return (
    <div className={cn(...FONTS, s.root)}>
      <Metadata {...metadata} />
      <Header />
      <div className={s.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
