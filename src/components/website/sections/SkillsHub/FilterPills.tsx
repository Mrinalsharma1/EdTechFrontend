import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { TabLink } from "./skillsHub.types";
import { cn } from "@/lib/utils";
import { memo } from "react";

interface FilterPillsProps {
  tabPills: TabLink[];
  activePillIndex: number;
  onPillSelect: (index: number) => void;
}


const FilterPills = memo(({ 
  tabPills,
  activePillIndex,
  onPillSelect
}: FilterPillsProps) => {


  return (
    <div className="w-full">
      <Carousel className="relative">
        <CarouselContent className="-ml-4">
          {tabPills.map((tabPill, index) => (
            <CarouselItem key={index} className="pl-4 basis-auto flex-shrink-0">
              <Card 
                className={cn(
                  'h-[3.7rem] w-fit rounded-full border-none bg-[#e9eaf2] flex items-center justify-center p-4 py-7 hover:bg-[#d1d2e0] cursor-pointer',
                  activePillIndex === index && 'bg-[#33364a] text-white hover:bg-gray-800'
                )}
                onClick={() => onPillSelect(index)}
              >
                <CardContent className="flex flex-col items-start justify-center p-0">
                  <span className={cn(
                    "text-md font-heading font-bold", 
                    activePillIndex === index ? "text-white" : "text-[#2a2b3f]", 
                    "whitespace-nowrap"
                  )}>
                    {tabPill.text}
                  </span>
                  <span className={cn(
                    "text-xs", 
                    activePillIndex === index ? "text-gray-300" : "text-[#595c73]", 
                    "whitespace-nowrap"
                  )}>
                    4milion+ learners
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
});


FilterPills.displayName = "FilterPills";

export default FilterPills;