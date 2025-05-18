import loginImg_lg from '../../assets/images/loginImg_lg.png';
import loginImg_sm from '../../assets/images/loginImg_sm.png';
import CustomInput from '@/components/website/customInput/CustomInput';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';
import { CiMail } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import { useState } from 'react';
function LoginPage() {
  const [name, setNAme] = useState('');
  console.log(name);
  return (
    <div className='flex flex-col sm:flex-row gap-6'>
      <div className='login-img sm:w-[50%] h-[100%]'>
        <img src={loginImg_lg} alt='login' className='hidden sm:block' />
        <img src={loginImg_sm} alt='login' className='block sm:hidden' />
      </div>
      <div className='login-cred sm:w-[50%] flex items-center '>
        <div className='w-[70%] flex flex-col m-auto gap-4'>
          <p className='font-bold text-3xl text-center mb-6'>
            Log in to continue your learning journey
          </p>
          <CustomInput UserInput='Full Name' setInput={setNAme} />
          <Link
            to='/course'
            className={cn(
              buttonVariants({
                variant: 'signup',
                size: 'lg',
                className: 'w-full h-[50px] flex justify-center items-center',
              })
            )}
          >
            <CiMail className='m-2 h-6 w-6' />
            <p>Continue with email</p>
          </Link>

          <div className='my-6 flex items-center'>
            <hr className='flex-grow border-gray-300' />
            <span className='px-2 py-1 text-sm text-gray-500 text-fluid-body2'>
              Other login options
            </span>
            <hr className='flex-grow border-gray-300' />
          </div>
          <div className='mb-6'>
            <div className='flex justify-center space-x-6 p-0 m-0'>
              <div>
                <button
                  type='button'
                  className='flex items-center justify-center px-3 min-w-auto w-12 h-12 bg-transparent border border-[#6d28d2] rounded-md hover:bg-gray-100 cursor-pointer'
                  aria-label='Continue with Google'
                >
                  <FcGoogle className='h-6 w-6 flex-shrink-0' />
                </button>
              </div>
              <div>
                <button
                  type='button'
                  className='flex items-center justify-center min-w-auto w-12 h-12 bg-transparent border border-[#6d28d2] rounded-md hover:bg-gray-100 cursor-pointer'
                  aria-label='Continue with Facebook'
                >
                  <FaFacebookF className='text-blue-600 h-6 w-6 flex-shrink-0' />
                </button>
              </div>

              <div>
                <button
                  type='button'
                  className='flex items-center justify-center min-w-auto w-12 h-12 bg-transparent border border-[#6d28d2] rounded-md hover:bg-gray-100 cursor-pointer'
                  aria-label='Continue with Apple'
                >
                  <FaApple className='text-black h-6 w-6 flex-shrink-0' />
                </button>
              </div>
            </div>
          </div>
          <p className='text-xs text-gray-500 text-center'>
            By signing up, you agree to our{' '}
            <a
              href='/terms/terms-of-use/'
              className='underline text-purple-600'
            >
              Terms of Use
            </a>{' '}
            and{' '}
            <a href='/terms/privacy/' className='underline text-purple-600'>
              Privacy Policy
            </a>
            .
          </p>
          <p className='mt-4 text-sm text-center'>
            Dont have an account?{' '}
            <a
              href='/login'
              className='text-purple-600 font-semibold hover:underline'
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
