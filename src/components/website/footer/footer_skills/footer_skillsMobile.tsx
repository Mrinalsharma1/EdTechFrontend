// import { useState } from "react";
import { skills } from '../../../../constants/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function MobileAccordion() {
  return (
    <div className='bg-[#1d1e27] border-t border-[#d1d7dc] py-3 px-6 flex flex-col'>
      <div className='text-[clamp(1rem,1.02rem+0.2vw,1.125rem)] text-fluid-heading2 font-bold font-weight-inherit text-[#fff] leading-6 mt-4 mb-6'>
        <span>Explore top skills and certifications</span>
      </div>

      <Accordion
        type='single'
        collapsible
        className='w-full bg-[#1d1e27] border-b border-[#3d3e47]'
      >
        {skills.map((skill, index) => (
          <AccordionItem
            key={index}
            value={skill.title}
            className='border-b border-[#3d3e47]'
          >
            <AccordionTrigger className='text-[#fff] text-base font-medium py-4  hover:no-underline flex justify-between items-center'>
              <span className='text-fluid-heading2 pb-2'>{skill.title}</span>
            </AccordionTrigger>
            <AccordionContent className='pb-4 pt-2 '>
              <ul className='flex flex-col space-y-1'>
                {skill.features.map((feature, idx) => (
                  <li key={idx}>
                    <a
                      href={feature.link}
                      className='text-fluid-body py-1 text-[#fff] hover:underline '
                    >
                      {feature.name}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
