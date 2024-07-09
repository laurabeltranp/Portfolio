import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;