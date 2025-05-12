import { Outlet } from 'react-router-dom';
import Navbar from '@/components/website/header/Navbar';
import { MainFooter } from '@/components/website/footer/mainfooter';

const WebsiteLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 bg-white'>
        <Outlet />
      </main>
      <MainFooter/>
    </div>
  );
};

export default WebsiteLayout;