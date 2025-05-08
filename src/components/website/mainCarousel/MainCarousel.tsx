import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CustomCarouselItem from './CustomCarouselItem';
import { mainCarouselItems } from '@/constants/CarouselItems';
function MainCarousel() {
  return (
    <div className='p-0 mt-[-30px] w-full'>
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
  );
}

export default MainCarousel;
