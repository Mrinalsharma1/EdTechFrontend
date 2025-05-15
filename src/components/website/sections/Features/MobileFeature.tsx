import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FeatureItem } from "./feature.types";
import { Link } from "react-router-dom";


const MobileFeature = ({ featureData }: { featureData: FeatureItem[] }) => {
  return (
    <div className="w-full">
      <Carousel className="relative">
        <CarouselContent className="-ml-4">
          {featureData.map((feature, index) => (
            <CarouselItem key={index} className="pl-4 basis-full">
              <Card className=" bg-[#F6F7F9] shadow-none border-none">
                <CardContent className="flex flex-col p-6"> 
                  <div className="w-full justify-center items-center mb-4">
                    <div className="rounded-lg overflow-hidden"> 
                      <div className="rounded-lg  overflow-hidden">
                        <div className="flex space-x-2 bg-gray-100 p-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="  "> 
                          <img
                            src={feature.image?.url}
                            alt={feature.image?.altText || ''} 
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-start">
                    <span className={cn(
                      "text-lg font-heading font-bold pb-1 font-text",
                    )}>
                      {feature.heading}
                    </span>
            
                    <p className={cn(
                      "text-md font-text text-[#595c73]",
                    )}>
                      {feature.description}
                 
                    </p>
                    {
                      (feature.contentUrl && feature.contentUrlText) && (
                        <Link to={feature.contentUrl}>
                          <span className={cn(
                            "text-md font-heading font-bold inline-flex items-center gap-2 p-2 text-[#6d28d2] hover:bg-[#DAD3EE] pl-0 rounded-sm"
                          )}>
                            {feature.contentUrlText}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="#6d28d2"
                              className="w-4 h-4"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </span>
                        </Link>
                      )
                    }
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Position arrows */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
}

export default MobileFeature;