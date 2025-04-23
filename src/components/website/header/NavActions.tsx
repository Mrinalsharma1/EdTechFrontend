import { buttonVariants } from '@/components/ui/button-variants';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const NavActions = () => {
  return (
    <div className='h-full pr-4 flex items-center gap-4'>
      <div className='h-full flex items-center gap-4'>
        <HoverCard openDelay={0} closeDelay={150}>
          <HoverCardTrigger asChild>
            <Link
              to='/plans'
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              <span>Plans & Pricing</span>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent
            className='w-80 z-[1100] bg-white shadow-[0_2px_4px_rgba(6,17,118,0.08),_0_4px_12px_rgba(6,17,118,0.08)]'
            align='end'
            sideOffset={4}
            alignOffset={0}
          >
            Plans and pricing content here
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className='h-full flex items-center gap-4'>
        <HoverCard openDelay={0} closeDelay={150}>
          <HoverCardTrigger asChild>
            <Link
              to='/teach'
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              Teach on Udemy
            </Link>
          </HoverCardTrigger>
          <HoverCardContent
            className='w-80 z-[1100] bg-white shadow-[0_2px_4px_rgba(6,17,118,0.08),_0_4px_12px_rgba(6,17,118,0.08)]'
            align='end'
            sideOffset={4}
            alignOffset={0}
          >
            Teach on Udemy content here
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className='h-full flex items-center gap-4'>
        <HoverCard openDelay={0} closeDelay={150}>
          <HoverCardTrigger asChild>
            <Link
              to='/cart'
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              <ShoppingCartIcon className='size-4' />
            </Link>
          </HoverCardTrigger>
          <HoverCardContent
            className='w-80 z-[1100] bg-white shadow-[0_2px_4px_rgba(6,17,118,0.08),_0_4px_12px_rgba(6,17,118,0.08)]'
            align='end'
            sideOffset={4}
            alignOffset={0}
          >
            Shopping cart content here
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className='h-full flex items-center gap-4'>
        <Link
          to='/login'
          className={buttonVariants({ variant: 'login', size: 'lg' })}
        >
          Log in
        </Link>
      </div>
      <div className='h-full flex items-center gap-4'>
        <Link
          to='/signup'
          className={buttonVariants({ variant: 'signup', size: 'lg' })}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default NavActions;
