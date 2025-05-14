import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { TabItem, ActiveTabState } from "./skillsHub.types";
import CourseCarousel from "../CourseCarousel/CourseCarousel";
import FilterPills from "./FilterPills"


interface MobileSkillsProps {
  tabsData: TabItem[],
  activeTabState: ActiveTabState;
  handlePillSelect: (tabTitle: string, pillIndex: number) => void;
  loadMoreCourses: (tabTitle: string) => void;
  handleTabChange: (tabTitle: string) => void;
}

const MobileSkills = ({ tabsData, activeTabState, handlePillSelect, loadMoreCourses, handleTabChange }: MobileSkillsProps) => {


  console.log("from mobiloe", activeTabState)

  return (
    <Accordion type="single" collapsible className="border-y border-[#d1d2e0] "
      onValueChange={handleTabChange}
    >
      {tabsData.map((tab) => {
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
                  activePillIndex={activeTabState.activePillIndex}
                  onPillSelect={(pillIndex) => handlePillSelect(tab.title, pillIndex)}
                />

                {/* Carousel for videos */}
                <div className="w-full mt-2">
                  {
                    <>
                      {activeTabState.isLoading && activeTabState.courses.length === 0 ? (
                        <p>Loading courses...</p>
                      ) : activeTabState.error ? (
                        <p className="text-red-500">Error loading courses: {activeTabState.error}</p>
                      ) : activeTabState.courses.length > 0 ? (
                        <CourseCarousel
                          courses={activeTabState.courses}
                        />
                      ) : (
                        <p>No courses found for this selection.</p>
                      )}
                    </>
                  }
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