import Memberships from '@/components/website/sections/memberships/Memberships';
import { SkillsHubSection } from '@/components/website/sections/SkillsHub/SkillsHubSection';
import Testimonials from '@/components/website/sections/testimonials/testimonial';
import FeatureSection from "@/components/website/sections/Features/FeatureSection";
import MainCarousel from '@/components/website/sections/mainCarousel/MainCarousel';
import CourseSection from '@/components/website/sections/CourseCarousel/CourseSection';
const Home = () => {
  return (
    <main className=''>
      <MainCarousel/>
      <CourseSection/>
      <SkillsHubSection/>
      <FeatureSection/>
      <Memberships />
      <Testimonials />
    </main>
  );
};

export default Home;
