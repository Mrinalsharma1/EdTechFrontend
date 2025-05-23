import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

interface CustomInputProps {
  UserInput: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const CustomInput: React.FC<CustomInputProps> = ({ UserInput, setInput }) => {
  return (
    <div className='relative w-full'>
      <Input
        id='message'
        placeholder=' '
        className='
          peer h-16 w-full rounded-sm border border-[#9194ac] px-3 pt-6 pb-2 text-sm placeholder-transparent
          focus-visible:border-[#6d28d2]
          focus-visible:border-[1.5px] 
          focus:shadow-[inset_0_0_0_0.5px_#6d28d2]
          focus:outline-none
          focus-visible:outline-none
          focus-visible:ring-0
          focus-visible:shadow-none
          shadow-none
        '
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Label
        htmlFor='message'
        className='absolute left-3 top-2 font-bold text-black transition-all 
                            peer-placeholder-shown:top-6 peer-placeholder-shown:text-base 
                            peer-focus:top-2 peer-focus:text-xs'
      >
        {UserInput}
      </Label>
    </div>
  );
};

export default CustomInput;
