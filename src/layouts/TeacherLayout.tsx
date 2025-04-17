import { Outlet } from 'react-router-dom';
import { AuthButton } from '@/components/common';

const TeacherLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <nav className='bg-gray-900 text-white px-6 py-4 flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Teacher Dashboard</h1>
        <AuthButton />
      </nav>

      <main className='flex-1 p-6 bg-gray-50'>
        <Outlet />
      </main>
    </div>
  );
};

export default TeacherLayout;
