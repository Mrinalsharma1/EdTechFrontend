import NavMenu from './NavMenu';
import NavActions from './NavActions';
import NavLogo from './NavLogo';
import { NavData } from './types';

const DesktopNav = ({ navData }: { navData: NavData }) => {
  return (
    <div className='w-full flex items-center p-4 h-full gap-x-8 border-b lg:pl-[34px]  '>
      <div className='w-full flex items-center justify-between h-16 '>
        <NavLogo />
        <NavMenu navigationCategories={navData.navigationCategories} />
        <div className='flex-1'></div>
        <NavActions />
      </div>
    </div>
  );
};

export default DesktopNav;
