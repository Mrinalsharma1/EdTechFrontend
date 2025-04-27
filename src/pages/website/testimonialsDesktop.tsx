import { CarouselItem } from '../../components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from '../../components/ui/card';
import { Testimonial } from '../../constants/testimonial';

const CardTestimonialDesktop = ({
  TestimonialItem,
  className,
}: {
  TestimonialItem: Testimonial;
  className: string;
}) => {
  return (
    <CarouselItem className={`w-[300px] flex-shrink-0 snap-start ${className}`}>
      <Card className='h-[280px] bg-white border border-[#d1d2e0] rounded-[0.8rem] flex flex-col p-5'>
        <CardContent className='flex flex-col justify-between h-full'>
          <CardDescription>
            <img
              src='https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg'
              alt='quote'
              className='w-5 h-5 mb-3'
            />
            <p className="text-[#2d2f31] text-[clamp(12px,3vw,16px)] leading-relaxed mb-4 font-['SF Pro Text','Roboto','Helvetica Neue','Arial','sans-serif'] line-clamp-3 min-h-[72px] max-h-[76px] overflow-hidden">
              {TestimonialItem.quote}
            </p>
          </CardDescription>

          <div className='flex items-center gap-3 mt-auto'>
            <div className='w-12 h-12 rounded-full bg-[#e4e4e4] overflow-hidden flex-shrink-0'>
              <img
                src={TestimonialItem.profileImage}
                alt='Alvin Lim'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col justify-center'>
              <p className="text-[clamp(12px,2.5vw,14px)] text-[#1c1d1f] font-['SF Pro Text','Roboto','Helvetica Neue','Arial','sans-serif']">
                {TestimonialItem.name}
              </p>
              <p className="text-[clamp(11px,1.5vw,13px)] text-[#6a6f73] font-['SF Pro Text','Roboto','Helvetica Neue','Arial','sans-serif'] leading-tight max-w-[180px] whitespace-nowrap">
                {TestimonialItem.role}
              </p>
              <p className="text-[clamp(11px,1.5vw,13px)] text-[#6a6f73] font-['SF Pro Text','Roboto','Helvetica Neue','Arial','sans-serif'] leading-tight max-w-[180px] break-words whitespace-normal">
                {TestimonialItem.company}
              </p>
            </div>
          </div>

          <CardFooter className='mt-5'>
            <a
              href='https://www.udemy.com/course/ios-13-app-development-bootcamp/'
              className='text-[clamp(11px,1.5vw,13px)] text-[#5624d0] font-semibold hover:underline'
            >
              {TestimonialItem.link}
            </a>
          </CardFooter>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CardTestimonialDesktop;
