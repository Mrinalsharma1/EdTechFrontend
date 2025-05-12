import React from 'react';
import { Membership } from '@/constants/Memberships';
import success_icon from '@/assets/images/success_icon.svg';
import individual_person from '@/assets/images/individual_person.svg';
import group_people from '@/assets/images/group_people.svg';

interface MembershipCardProps {
  membership: Membership;
}
const InfoCardLG: React.FC<MembershipCardProps> = ({ membership }) => {
  return (
    <div className='membership-info-lg hidden sm:block md:block p-6 bg-white'>
      <div className='bg-[#f6f7f9]'>
        <h3 className='flex text-xl font-bold mb-1'>{membership.plan}</h3>
        <p className='flex text-sm text-gray-500 mb-2'>{membership.target}</p>

        <p className='flex text-sm text-gray-500 mb-2'>
          {membership.type === 'Individual' ? (
            <img
              src={individual_person}
              className='w-[14px] h-[14px] flex-shrink-0 mt-[3px] mr-2'
            />
          ) : (
            <img
              src={group_people}
              className='w-4 h-4 flex-shrink-0 mt-[3px] mr-2'
            />
          )}
          {membership.type}
        </p>
      </div>
      <span className='flex text-2xl font-bold'>
        {membership.pricing.currency}
        {membership.pricing.amount} {membership.pricing.period}
      </span>{' '}
      <p className='flex text-xs text-gray-500'>
        Cancel {membership.pricing.cancellation}
      </p>
      <button className='mt-5 bg-[#6d28d2] hover:bg-[#892de1] text-white px-4 py-2 rounded-[0.3rem] w-full mb-5'>
        {membership.action}
      </button>
      <ul className='list-none mb-4 space-y-1'>
        {membership.features.map((feature, i) => (
          <li key={i} className='flex items-start'>
            <img
              src={success_icon}
              alt=''
              className='w-4 h-4 flex-shrink-0 mt-[3px] mr-4'
            />
            <span className='text-sm text-gray-700'>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCardLG;
