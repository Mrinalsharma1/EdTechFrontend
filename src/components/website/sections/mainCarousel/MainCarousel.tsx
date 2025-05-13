import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CustomCarouselItem from './CustomCarouselItem';
import { mainCarouselItems } from '@/constants/CarouselItems';
import SectionLayout from '@/components/website/layouts/SectionLayout';

function MainCarousel() {
  return (
   <SectionLayout className=''>
     <div className='w-full'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='relative'
      >
        <CarouselContent>
          {mainCarouselItems.map((item, index) => (
            <CarouselItem key={index}>
              {' '}
              <CustomCarouselItem CustomCarouselItemProps={item} />{' '}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-[10px] top-[30%] sm:top-1/2 ' />
        <CarouselNext className='absolute right-[10px] top-[30%] sm:top-1/2' />
      </Carousel>
    </div>
    </SectionLayout>
  );
}

export default MainCarousel;
