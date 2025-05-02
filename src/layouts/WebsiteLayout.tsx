import { Outlet } from 'react-router-dom';
import Navbar from '@/components/website/header/Navbar';

const WebsiteLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 p-6 md:p-10 bg-white'>
        <Outlet />
      </main>
    </div>
  );
};

export default WebsiteLayout;
