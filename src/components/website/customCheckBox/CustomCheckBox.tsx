import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface CustomCheckBoxProps {
  CheckBoxMessage: string;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ CheckBoxMessage }) => {
  return (
    <div className='items-top flex space-x-2'>
      <Checkbox
        id='terms1'
        className={`
          peer size-4 shrink-0 rounded-[4px] border-[2px] shadow-xs transition-shadow outline-none
          border-[#525252] bg-white
          data-[state=checked]:bg-[#6d28d2] data-[state=checked]:text-white data-[state=checked]:border-[#6d28d2]
          aria-invalid:border-red-500 aria-invalid:ring-red-100
          focus-visible:outline-none focus-visible:ring-0
          disabled:cursor-not-allowed disabled:opacity-50
        `}
      />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor='terms1'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {CheckBoxMessage}
        </label>
      </div>
    </div>
  );
};

export default CustomCheckBox;
