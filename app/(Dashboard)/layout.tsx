'use client';
import React from 'react';
import LeftSidebar from '@/components/Dashboard/LeftSidebar';
import Navbar from '@/components/Dashboard/Navbar/Navbar';
import MobileNav from '@/components/Dashboard/Navbar/MobileNav';
import KycBanner from '@/components/shared/KycBanner';
import withAuth from '@/components/HOC/withAuth';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <LeftSidebar />
      <section className="w-full">
        <Navbar />
        <KycBanner />
        {children}
        <MobileNav />
      </section>
    </main>
  );
};

export default withAuth(Layout);
