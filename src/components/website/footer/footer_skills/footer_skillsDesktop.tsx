// import React from "react";
import { skills } from '../../../../constants/footer';
export default function DesktopAccordion() {
  return (
    <div className='bg-[#1d1e27] border-t border-[#d1d7dc] pt-6 px-6'>
      <div className='text-[clamp(1rem,1.02rem+0.2vw,1.125rem)] text-[#fff] font-bold mt-4 mb-6'>
        Explore top skills and certifications
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 pb-6'>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col'>
            <h3 className='text-fluid-heading text-[#fff] text-base font-semibold my-4'>
              {skill.title}
            </h3>
            <ul className='flex flex-col'>
              {skill.features.map((feature, idx) => (
                <li key={idx}>
                  <a
                    href={feature.link}
                    className='text-[#fff] text-fluid-body2 hover:underline pb-1'
                  >
                    {feature.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
