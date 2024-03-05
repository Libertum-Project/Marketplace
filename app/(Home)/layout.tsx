import React from 'react';
import { NavBar } from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
