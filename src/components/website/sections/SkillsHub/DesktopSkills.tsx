import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilterPills from "./FilterPills";
import { TabItem,ActiveTabState } from "./skillsHub.types";
import CourseCarousel from "../CourseCarousel/CourseCarousel";

interface DesktopSkillsProps{
  tabsData:TabItem[],
  activeTabState: ActiveTabState; 
  handlePillSelect:(tabTitle:string, pillIndex:number)=>void;
  loadMoreCourses: (tabTitle: string) => void; 
  handleTabChange: (tabTitle: string) => void;
}


const DesktopSkills = ({tabsData, activeTabState, handlePillSelect, loadMoreCourses,handleTabChange}:DesktopSkillsProps) => {

   const activeTab = tabsData.find(tab => tab.title === activeTabState.tabTitle);
   if (!activeTab) {
       console.error(`Active tab data not found for title: ${activeTabState.tabTitle}`);
       return null;
   }


  return (
    <Tabs value={activeTabState.tabTitle} className="" onValueChange={handleTabChange}>
        <div className="w-full shadow-[inset_0_-1px_0_0_#d1d2e0] overflow-auto no-scrollbar">
            <TabsList className="rounded-none w-fit gap-8 py-6">
                {tabsData.map((tab) => (
                    <TabsTrigger key={tab.title} value={tab.title} className="">
                        {tab.title}
                    </TabsTrigger>
                ))}
            </TabsList>
        </div>

        {tabsData.map((tab) => {
            const isActiveTab = tab.title === activeTabState.tabTitle;
            return (
                <TabsContent key={tab.title} value={tab.title} className="">
                    <div id="tabfilterpils wrapper" className="py-4">
                        <FilterPills
                            tabPills={tab.links}
                            activePillIndex={activeTabState.tabTitle === tab.title ? activeTabState.activePillIndex : 0} 
                            onPillSelect={(pillIndex) => handlePillSelect(tab.title, pillIndex)}
                        />

                        {/* carousel videos */}
                        <div className="w-full mt-2">
                            {isActiveTab && (
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
                            )}
                        </div>
                    </div>
                </TabsContent>
            );
        })}
    </Tabs>
  );
}


export default DesktopSkills;