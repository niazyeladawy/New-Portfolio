import { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from './footer/Footer';
import { initGA, logPageView } from '@/utils/analytics';
import { poppins } from '@/utils/fonts';
const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div className={poppins.className + ' layout-wrapper'}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
