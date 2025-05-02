import { Outlet } from 'react-router-dom';
import Navbar from '@/components/website/header/Navbar';

const WebsiteLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      {/* Remove horizontal padding from main */}
      {/* The vertical padding (py-*) should now be managed by individual sections */}
      <main className='flex-1 bg-white'>
        <Outlet />
      </main>
    </div>
  );
};

export default WebsiteLayout;