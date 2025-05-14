import React, { version } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CarouselProps, Course } from './types';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Verified } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }:CourseCardProps) => {
  return (
    <Card className="w-60 md:w-full h-full overflow-hidden border-1 shadow-sm rounded-sm">
      <div className="relative">
        <img 
          src={course.image.large} 
          alt={course.title} 
          className="w-full h-32 object-cover"
        />
      </div>
      
      <CardContent className="p-3">
        <h3 className="font-heading font-bold text-base mb-1 leading-5  line-clamp-2  text-[#2a2b3f] ">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-1 font-text line-clamp-1">{course.visible_instructors.map(i => i.display_name).join(', ')}</p>
        
        <div className="flex items-center mb-1">
          <span className="text-sm font-bold text-amber-800 mr-1">{course.rating.toFixed(1)}</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                size={12}
                className={cn(
                  "fill-current",
                  star <= Math.round(course.rating) ? "text-amber-400" : "text-gray-300"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({course.num_reviews.toLocaleString()})</span>
        </div>
        
        <div className="mt-2">
          <div className="flex items-baseline">
            <p className="text-base font-bold">₹{(29.99).toFixed(0)}</p>
            {true && (
              <p className="text-sm text-gray-500 line-through ml-2">${(29.99).toFixed(2)}</p>
            )}
          </div>
          
          <div className="flex items-center mt-1">
            {true && (
            <span className="mr-4 bg-[#5022C3] text-xs px-2 py-1 rounded flex items-center font-bold text-white">
            <span className="mr-1 leading-none flex items-center justify-center">
              <Verified size={18} />
            </span>
            Premium
          </span>
          
            )}
            {course.bestseller_badge_content && (
              <span className="bg-[#C2E9EB] text-gray-600 text-xs font-bold px-2 py-1 rounded">
                Bestseller
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;