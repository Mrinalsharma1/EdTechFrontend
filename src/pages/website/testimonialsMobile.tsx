import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from '../../components/ui/card';
import { Testimonial } from '../../constants/testimonial';
import { CarouselItem } from '../../components/ui/carousel';

const CardTestimonialMobile = ({
  TestimonialItem,
  className,
}: {
  TestimonialItem: Testimonial;
  className: string;
}) => {
  return (
    <CarouselItem className={`w-[300px] flex-shrink-0 snap-start ${className}`}>
      <Card className='h-[300px] bg-white border border-[#d1d2e0] rounded-[0.8rem] flex flex-col p-4'>
        <CardContent className='flex flex-col justify-between h-full'>
          <CardDescription>
            <img
              src='https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg'
              alt='quote'
              className='w-4 h-4 mb-2'
            />
            <p className="text-[#2d2f31] text-[14px] leading-relaxed mb-3 font-['SF Pro Text','Roboto','Helvetica Neue','Arial','sans-serif'] line-clamp-3 min-h-[60px] max-h-[66px] overflow-hidden">
              {TestimonialItem.quote}
            </p>
          </CardDescription>

          <div className='flex items-center gap-2 mt-auto'>
            <div className='w-10 h-10 rounded-full bg-[#e4e4e4] overflow-hidden flex-shrink-0'>
              <img
                src={TestimonialItem.profileImage}
                alt={TestimonialItem.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col justify-center'>
              <p className='text-[13px] text-[#1c1d1f] font-semibold'>
                {TestimonialItem.name}
              </p>
              <p className='text-[12px] text-[#6a6f73]'>
                {TestimonialItem.role}
              </p>
              <p className='text-[12px] text-[#6a6f73] break-words'>
                {TestimonialItem.company}
              </p>
            </div>
          </div>

          <CardFooter className='mt-4'>
            <a
              href='https://www.udemy.com/course/ios-13-app-development-bootcamp/'
              className='text-[12px] text-[#5624d0] font-semibold hover:underline'
            >
              {TestimonialItem.link}
            </a>
          </CardFooter>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CardTestimonialMobile;
