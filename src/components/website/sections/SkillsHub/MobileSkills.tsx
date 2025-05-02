import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { TabItem } from "./skillsHub.types"
import FilterPills from "./FilterPills"
  

interface MobileSkillsProps{
  tabsData:TabItem[], 
  getActivePillIndex:(title:string)=>number,
  handlePillSelect:(tabTitle:string, pillIndex:number)=>void

}

const MobileSkills = ({tabsData,getActivePillIndex,handlePillSelect}:MobileSkillsProps) => {
  return (
    <Accordion type="single" collapsible className="border-y border-[#d1d2e0] ">  
    {tabsData.map((tab) => {
        const activePillIndex = getActivePillIndex(tab.title);
        return (
          <AccordionItem key={tab.title} value={tab.title}> 
            <AccordionTrigger className="font-heading text-lg font-bold whitespace-nowrap text-[#2a2b3f] py-5 cursor-pointer hover:no-underline">
              {tab.title} 
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-4 px-1">

                {/* Carousel for topics */}
                <FilterPills 
                tabPills={tab.links}
                activePillIndex={activePillIndex}
                onPillSelect={(pillIndex) => handlePillSelect(tab.title, pillIndex)}
                />

                {/* Carousel for videos */}
                <div className="w-full border-2 border-purple-600 mt-8 min-h-[100px] p-2">
                  <h3>Courses for {tab.title}</h3>
                  <p>Selected Pill Index: {activePillIndex}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
  </Accordion>
  
  )
}

export default MobileSkills