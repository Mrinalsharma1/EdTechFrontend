import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import TestimonialCarouselItem from './TestimonialCarouselItem';
import { testimonials } from '@/constants/testimonialData';

const TestimonialCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className='relative mb-20 sm:mb-0'>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className='w-full h-full px-5'>
              <TestimonialCarouselItem
                heading={testimonial.heading}
                figureText={testimonial.figureText}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute sm:left-[25px] sm:top-[83%] top-[99.6%] left-5 ' />
        <CarouselNext className='absolute sm:left-[180px] sm:top-[83%] top-[99.6%] right-5' />
        <div className='sm:absolute mt-7 flex justify-center gap-2 sm:bottom-[16.3%] sm:left-[77.5px] '>
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded transition-all duration-300 ${
                current === index ? 'w-8 bg-[#892de1]' : 'w-2 bg-gray-400'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
