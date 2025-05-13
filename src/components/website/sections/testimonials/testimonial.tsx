// import React, { useEffect, useState } from "react";
import { testimonials } from '@/constants/testimonial';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CardTestimonialDesktop from './testimonialsDesktop';
import CardTestimonialMobile from './testimonialsMobile';
import SectionLayout from '@/components/website/layouts/SectionLayout';

const CarouselFunction: React.FC = () => {
  return (
    <SectionLayout >
      <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-6'>
        <h2 className='w-full font-bold text-[#2d2f31] text-[clamp(1.75rem,3vw,3rem)] leading-tight break-words md:whitespace-nowrap mb-4'>
          See what others are achieving through learning
        </h2>
      </div>

      <Carousel opts={{ align: 'start', loop: false }}>
        <CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex' />
        <CarouselNext className='absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex' />

        <CarouselContent className='flex gap-3 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-hide'>
          {testimonials.map((testimonialItem, index) => (
            <div key={index} className='w-[300px] flex-shrink-0 snap-start'>
              <div className='hidden md:block'>
                <CardTestimonialDesktop
                  TestimonialItem={testimonialItem}
                  className='hidden md:block'
                />
              </div>
              <div className='block md:hidden'>
                <CardTestimonialMobile
                  TestimonialItem={testimonialItem}
                  className='block md:hidden'
                />
              </div>
            </div>
          ))}
        </CarouselContent>
      </Carousel>
    </SectionLayout>
  );
};

export default CarouselFunction;
