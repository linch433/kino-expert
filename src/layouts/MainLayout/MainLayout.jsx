import React from 'react';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-[15px] text-int-white-secondary">{children}</div>
    </div>
  );
};

export default MainLayout;
