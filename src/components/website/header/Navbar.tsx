import { useState, useEffect } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { NavData } from './types';
import { navigationData } from './data';

const Navbar = () => {
  const [navData, setNavData] = useState<NavData>({ navigationCategories: [] });

  useEffect(() => {
    const fetchNavigationData = async () => {
      try {
        // const response = await fetch('/api/navigation-data')
        // const data = await response.json()

        setTimeout(() => {
          setNavData({
            navigationCategories: navigationData,
          });
        }, 2000);
      } catch (error) {
        console.error('Error fetching navigation data:', error);
      }
    };
    fetchNavigationData();
  }, []);

  return (
    <header className='bg-white h-[72px] px-2 relative z-[1010] shadow-[0_2px_4px_rgba(6,17,118,0.08),_0_4px_12px_rgba(6,17,118,0.08)] lg:px-6'>
      {/* Desktop navigation */}
      <div className='hidden md:block h-full'>
        <DesktopNav navData={navData} />
      </div>

      {/* Mobile navigation */}
      <div className='md:hidden h-full'>
        <MobileNav navData={navData} />
      </div>
    </header>
  );
};

export default Navbar;
