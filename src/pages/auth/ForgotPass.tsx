import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg_lg from '../../assets/images/loginImg_lg.png';
import loginImg_sm from '../../assets/images/loginImg_sm.png';
import CustomInput from '@/components/website/customInput/CustomInput';
import { buttonVariants } from '@/components/ui/button-variants';
import { cn } from '@/lib/utils';
import PasswordStrengthBar from 'react-password-strength-bar';
import {
  validatePassword,
  isPasswordValid,
} from '../../constants/passwordValidator';

const ForgotPass = () => {
  const [newPass, setNewPass] = useState('');
  const [cnfPass, setCnfPass] = useState('');

  const validation = validatePassword(newPass);
  const isMatching = newPass === cnfPass;
  const isFormValid = isPasswordValid(newPass) && isMatching;

  return (
    <div className='flex flex-col sm:flex-row gap-6'>
      <div className='login-img sm:w-[50%] h-[100%]'>
        <img src={loginImg_lg} alt='login' className='hidden sm:block' />
        <img src={loginImg_sm} alt='login' className='block sm:hidden' />
      </div>
      <div className='login-cred sm:w-[50%] flex items-center'>
        <div className='w-[70%] flex flex-col m-auto gap-4'>
          <p className='font-bold text-3xl text-center mb-6'>
            Reset your password here
          </p>

          <CustomInput UserInput='New Password' setInput={setNewPass} />
          <PasswordStrengthBar password={newPass} />

          <ul className='text-sm text-gray-600 list-disc ml-5 space-y-1'>
            <li className={validation.hasMinLength ? 'text-green-600' : ''}>
              At least 8 characters
            </li>
            <li className={validation.hasUpperCase ? 'text-green-600' : ''}>
              One uppercase letter
            </li>
            <li className={validation.hasLowerCase ? 'text-green-600' : ''}>
              One lowercase letter
            </li>
            <li className={validation.hasNumber ? 'text-green-600' : ''}>
              One number
            </li>
            <li className={validation.hasSpecialChar ? 'text-green-600' : ''}>
              One special character
            </li>
          </ul>

          <CustomInput UserInput='Confirm New Password' setInput={setCnfPass} />
          {!isMatching && cnfPass && (
            <p className='text-sm text-red-500'>Passwords do not match</p>
          )}

          <Link
            to='/course'
            className={cn(
              buttonVariants({
                variant: 'signup',
                size: 'lg',
                className: 'w-full h-[50px] flex justify-center items-center',
              }),
              !isFormValid && 'pointer-events-none opacity-50'
            )}
          >
            <p>Reset Password</p>
          </Link>

          <p className='mt-4 text-sm text-center'>
            Don't have an account?{' '}
            <a
              href='/login'
              className='text-purple-600 font-semibold hover:underline'
            >
              Sign up
            </a>
          </p>
          <p className='mt-4 text-sm text-center'>
            Go back to{' '}
            <a
              href='/login'
              className='text-purple-600 font-semibold hover:underline'
            >
              Login
            </a>{' '}
            page
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
