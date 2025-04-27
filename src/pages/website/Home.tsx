import Memberships from '@/components/website/memberships/Memberships';
import Testimonials from '@/components/website/testimonials/testimonial';

const Home = () => {
  return (
    <main className='p-8 text-center'>
      <h1 className='text-4xl font-bold'>Welcome to the eLearning Platform</h1>
      <Memberships />
      <Testimonials />
      <p className='mt-4 text-lg text-gray-600 cursor-pointer'>
        Explore courses and start learning today.
      </p>
    </main>
  );
};

export default Home;
