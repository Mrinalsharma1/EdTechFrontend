//  import React from 'react';

const MobileFooterSection = () => {
  return (
    <div className='bg-[#1d1e27] border-t border-b border-[#d1d7dc] py-3 px-6 flex flex-col'>
      <div className='text-[clamp(1rem,0.9rem+0.2vw,1.125rem)] text-fluid-heading font-bold font-weight-inherit text-[#fff] leading-6 pt-[12px] pb-[12px] pr-[24px]'>
        <span>
          Top companies choose{' '}
          <a
            href='/udemy-business/?locale=en_US&path=request-demo-in-mx%2F&ref=footer-ad'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#c0c4fc]  hover:underline'
          >
            Udemy Business
          </a>{' '}
          to build in-demand career skills.
        </span>
      </div>
      <div className='flex flex-wrap gap-4'>
        <img
          src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg'
          alt='Nasdaq'
          className='h-[68px] w-[120px] pt-[12px] pb-[12px] pr-[24px]'
          loading='lazy'
        />
        <img
          src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg'
          alt='Volkswagen'
          className='h-[68px] w-[68px] pt-[12px] pb-[12px] pr-[24px]'
          loading='lazy'
        />
        <img
          src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg'
          alt='NetApp'
          className='h-[68px] w-[120px] pt-[12px] pb-[12px] pr-[24px]'
          loading='lazy'
        />
        <img
          src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg'
          alt='Eventbrite'
          className='h-[68px] w-[120px] pt-[12px] pb-[12px]'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default MobileFooterSection;
