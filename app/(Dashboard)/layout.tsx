import React from 'react';
import LeftSidebar from '@/components/Dashboard/LeftSidebar';
import Navbar from '@/components/Dashboard/Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <LeftSidebar />
      <section className="w-full">
        <Navbar />
        {children}
      </section>
    </main>
  );
};

export default Layout;
