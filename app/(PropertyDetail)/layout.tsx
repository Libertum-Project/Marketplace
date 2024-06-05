'use client'
import { NavBar } from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer/Footer';
import withAuth from '@/components/HOC/withAuth';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default withAuth(Layout);
