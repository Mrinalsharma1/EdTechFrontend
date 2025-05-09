import MainCarousel from '@/components/website/mainCarousel/MainCarousel';
import Memberships from '@/components/website/memberships/Memberships';
import Testimonials from '@/components/website/testimonials/testimonial';
import { MainFooter } from '@/components/website/footer/mainfooter';

const Home = () => {
  return (
    <main>
      <MainCarousel />
      <Memberships />
      <Testimonials />
      <p className='mt-4 text-lg text-gray-600 cursor-pointer'>
        Explore courses and start learning today.
      </p>
      <MainFooter />
    </main>
  );
};

export default Home;
