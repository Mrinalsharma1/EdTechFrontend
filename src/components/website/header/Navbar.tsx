import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <header className='bg-white h-[72px] px-6 relative z-[1010] shadow-[0_2px_4px_rgba(6,17,118,0.08),_0_4px_12px_rgba(6,17,118,0.08)]'>
      {/* Desktop navigation */}
      <div className='hidden md:block h-full'>
        <DesktopNav />
      </div>

      {/* Mobile navigation */}
      <div className='md:hidden h-full'>
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
