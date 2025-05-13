import DesktopFeature from './DesktopFeature';
import MobileFeature from './MobileFeature';
import { data } from './Feature.data';
import { useEffect, useState } from 'react';
import { FeatureItem } from './feature.types';
import SectionLayout from '@/components/website/layouts/SectionLayout';

const FeatureSection = () => {
  const [featureData, setFeatureData] = useState<FeatureItem[]>([]);

  useEffect(() => {
    const fetchFeatureData = async () => {
      setTimeout(() => {
        setFeatureData(data);
      }, 3000);
    };
    fetchFeatureData();
  }, []);

  return (
    <SectionLayout background='bg-[#F6F7F9]'>
      <div id='heading-container' className='mb-2'>
        <div id='feature-heading'>
          <h2 className='font-heading-serif text-[clamp(1.8rem,calc(1.6rem+0.65*calc((100vw-36rem)/55)),2.2rem)] font-semibold text-left max-w-[36em] leading-[2rem]'>
            Learning focused on your goals
          </h2>
        </div>
      </div>

      <div id='desktop-feature' className='hidden md:block'>
        <DesktopFeature featureData={featureData} />
      </div>

      <div id='mobile-feature' className='block md:hidden'>
        <MobileFeature featureData={featureData} />
      </div>
    </SectionLayout>
  );
};

export default FeatureSection;
