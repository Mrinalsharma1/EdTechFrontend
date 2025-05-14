// CourseCarousel.tsx
import React, { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselItem,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { Course, CarouselProps } from './types';
import CourseCard from './CourseCard';

const CourseCarousel = ({ 
  title,
  courses: initialCourses,
}:CarouselProps) => {

  const [displayedCourses, setDisplayedCourses] = useState<Course[]>(initialCourses);
  
  return (
    <div className="w-full my-8 space-y-6">
      {/* Section Title */}
       {
        title&&   <div className="flex justify-between items-center">
        <h2 className="font-heading-serif text-[clamp(1.6rem,calc(1.6rem+0.65*calc((100vw-36rem)/55)),2rem)] font-semibold text-left max-w-[36em] leading-[2rem]">{title}</h2>
      </div> 
       }
      {/* Courses Carousel */}
      <div className="w-full">
        <Carousel className="relative">
          <CarouselContent className="-ml-4">
            {displayedCourses.map((course) => (
              <CarouselItem key={course.id} className="pl-4  md:basis-1/3 lg:basis-1/4 xl:basis-1/4">
                <CourseCard course={course} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
};

export default CourseCarousel;