import { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from './footer/Footer';
import { initGA, logPageView } from '@/utils/analytics';

const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
