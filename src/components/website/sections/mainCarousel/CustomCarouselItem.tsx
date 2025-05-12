import React from 'react';
import main_carousel_2_lg from '@/assets/images/main_carousel_2_lg.jpg';
import main_carousel_2_sm from '@/assets/images/main_carousel_2_sm.jpg';
import { MainCarouselItem } from '@/constants/CarouselItems';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';

interface CustomCarouselItemProps {
  CustomCarouselItemProps: MainCarouselItem;
}

const CustomCarouselItem: React.FC<CustomCarouselItemProps> = ({
  CustomCarouselItemProps,
}) => {
  return (
    <div className='sm:relative flex flex-col p-0 w-full'>
      <div className='carousel-image p-0 w-full h-[250px] sm:h-[400px]'>
        <picture>
          <source media='(max-width: 639px)' srcSet={main_carousel_2_sm} />
          <source media='(min-width: 640px)' srcSet={main_carousel_2_lg} />
          <img
            src={main_carousel_2_lg} // fallback
            alt='carousel image'
            className='w-full h-full object-cover object-right sm:object-center'
          />
        </picture>
      </div>
      <div className='p-4 carousel-info w-[100vw] sm:w-[400px] sm:absolute sm:left-[5%] sm:top-[25%] sm:border sm:rounded-[0.3rem] shadow-[2px_2px_2px_rgba(0,0,0,0.1)] bg-white sm:p-4 flex flex-col gap-3'>
        <p className='text-xl sm:text-4xl font-bold'>
          {CustomCarouselItemProps.heading}
        </p>
        <p className='text-sm sm:text-base'>
          {CustomCarouselItemProps.subtext}
        </p>
        {CustomCarouselItemProps.buttons &&
          CustomCarouselItemProps.buttons.length > 0 && (
            <div className='flex flex-col sm:flex-row gap-3'>
              {CustomCarouselItemProps.buttons.map((button, index) => (
                <Link
                  key={index}
                  to='/course'
                  className={cn(
                    buttonVariants({
                      variant: `${index % 2 === 0 ? 'signup' : 'login'}`,
                      size: 'lg',
                      className: 'w-full',
                    })
                  )}
                >
                  {button}
                </Link>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default CustomCarouselItem;
