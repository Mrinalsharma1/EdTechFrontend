import Memberships from '@/components/website/memberships/Memberships';

const Home = () => {
  return (
    <main className='p-8 text-center'>
      <h1 className='text-4xl font-bold'>Welcome to the eLearning Platform</h1>
      <Memberships />
      <p className='mt-4 text-lg text-gray-600 cursor-pointer'>
        Explore courses and start learning today.
      </p>
    </main>
  );
};

export default Home;
