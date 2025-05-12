import React from 'react';
import { memberships } from '@/constants/Memberships';
import InfoCardLG from './InfoCardLG';
import InfoCardSM from './InfoCardSM';

const Memberships: React.FC = () => {
  return (
    <div className=' mx-auto lg:p-4 sm:p-0'>
      <h2 className='flex text-3xl font-bold text-center mb-8'>
        Our Membership Plans
      </h2>
      {memberships && (
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 '>
          {memberships.map((membership, index) => (
            <div
              key={index}
              className='border rounded-2xl shadow-md bg-gradient-to-r from-blue-500 to-purple-600 pt-3 overflow-hidden h-fit'
            >
              <InfoCardLG membership={membership} />
              <InfoCardSM membership={membership} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Memberships;
