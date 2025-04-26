import NavLogo from './NavLogo';
import MobileNavActions from './MobileNavActions';
import { MobileMenu } from './MobileMenu';
import { NavData } from './types';

const MobileNav = ({ navData }: { navData: NavData }) => {
  return (
    <div className='w-full flex items-center p-4 pl-0 h-full border-b'>
      <div className='w-full flex items-center justify-between h-16'>
        <MobileMenu navigationCategories={navData.navigationCategories} />
        <div className='flex-1 flex justify-center'>
          <NavLogo />
        </div>
        <MobileNavActions />
      </div>
    </div>
  );
};

export default MobileNav;
