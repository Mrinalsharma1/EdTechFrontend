import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilterPills from "./FilterPills";
import { TabItem } from "./skillsHub.types";

interface DesktopSkillsProps{
  tabsData:TabItem[], 
  getActivePillIndex:(title:string)=>number,
  handlePillSelect:(tabTitle:string, pillIndex:number)=>void

}


const DesktopSkills = ({tabsData,getActivePillIndex,handlePillSelect}:DesktopSkillsProps) => {
  return (
    <Tabs defaultValue={tabsData[0]?.title} className="">
    <div className="w-full shadow-[inset_0_-1px_0_0_#d1d2e0] overflow-auto no-scrollbar">
      <TabsList className="rounded-none w-fit gap-8 py-6">
        {tabsData.map((tab) => (
          <TabsTrigger key={tab.title} value={tab.title} className="">
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>

    {/* Tab Content Areas */}
    {tabsData.map((tab) => {
      const activePillIndex = getActivePillIndex(tab.title);
      const activePill = tab.links[activePillIndex];
      
      return (
        <TabsContent key={tab.title} value={tab.title} className="">
          <div id="tabfilterpils wrapper" className="py-4">
            {/* Carousel for topics */}
            <FilterPills 
              tabPills={tab.links}
              activePillIndex={activePillIndex}
              onPillSelect={(pillIndex) => handlePillSelect(tab.title, pillIndex)}
            />

            {/* carousel videos */}
            <div className="w-full border-2 border-red-500 mt-8">
              <h3>Courses for {tab.title} - {activePill?.text || "All courses"}</h3>
           
            </div>
          </div>
        </TabsContent>
      );
    })}
  </Tabs>  
  )
}

export default DesktopSkills