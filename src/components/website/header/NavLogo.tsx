import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <div className='h-full flex items-center gap-4 '>
      <Link to='/' className=''>
        <div className='w-[100px] h-[70px]'>
          <img
            src='https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg'
            alt='Udemy'
            className='w-full h-full object-contain'
          />
        </div>
      </Link>
    </div>
  );
};

export default NavLogo;
