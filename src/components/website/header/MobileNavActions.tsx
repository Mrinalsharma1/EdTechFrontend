import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button-variants';

const MobileNavActions = () => {
  return (
    <div className='h-full flex items-center'>
      <Link
        to='/cart'
        className={buttonVariants({ variant: 'ghost', size: 'sm' })}
      >
        <ShoppingCartIcon className='size-6' />
      </Link>
    </div>
  );
};

export default MobileNavActions;
