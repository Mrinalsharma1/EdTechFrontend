import React from 'react';
import case_study_2 from '../../../../assets/images/case_study_2.png';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button-variants';
import { IoIosArrowRoundForward } from 'react-icons/io';
import use_case_logo from '../../../../assets/images/use_case_logo.svg';

interface FigureText {
  figure: string;
  subtext: string;
}

interface TestimonialCarouselItemProps {
  heading: string;
  figureText: FigureText[];
}

const TestimonialCarouselItem: React.FC<TestimonialCarouselItemProps> = ({
  heading,
  figureText,
}) => {
  return (
    <div className='w-full flex flex-col sm:flex-row'>
      {/* Mobile-first order control */}
      <div className='flex flex-col sm:flex-row w-full'>
        {/* Logo */}
        <div className='sm:hidden order-1 flex justify-start mb-4'>
          <img src={use_case_logo} alt='logo' className='w-20 h-20' />
        </div>

        {/* Image - Mobile second, Desktop right side */}
        <div className='order-2 sm:order-2 w-full sm:w-1/2'>
          <img
            src={case_study_2}
            alt='Case Study'
            className='w-full h-auto object-cover'
          />
        </div>

        {/* Text content */}
        <div className='order-3 sm:order-1 w-full sm:w-1/2 mt-5'>
          <div className='case-study-text flex flex-col justify-center gap-5 sm:p-5'>
            {/* Logo for desktop */}
            <div className='hidden sm:block'>
              <img src={use_case_logo} alt='logo' className='w-20 h-20' />
            </div>

            {/* Heading and stats */}
            <div className='case-study-info flex flex-col gap-5'>
              <p className='text-2xl  sm:text-3xl font-bold sm:w-[90%] mb-2'>
                {heading}
              </p>
              <div className='w-full flex flex-wrap gap-4 justify-between sm:justify-start'>
                {figureText.map((item, index) => (
                  <div
                    key={index}
                    className='w-[45%] figures text-start border-b border-gray-400 pb-2'
                  >
                    <p className='text-4xl font-bold'>{item.figure}</p>
                    <p className='text-sm sm:text-base  text-gray-600'>
                      {item.subtext}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className='read-full-story-button mt-4 sm:w-fit w-full'>
              <Link
                to='/course'
                className={cn(
                  buttonVariants({
                    variant: 'signup',
                    size: 'lg',
                    className:
                      'w-full h-[50px] flex justify-center items-center',
                  })
                )}
              >
                <p>
                  Read Full Story{' '}
                  <IoIosArrowRoundForward className='inline h-7 w-7' />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarouselItem;
