import { Card,CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FeatureItem } from "./feature.types"


const DesktopFeature = ({featureData}:{featureData:FeatureItem[]}) => {
 
  const [activeTab,setActiveTab]=useState<number>(0);
 
 
 const handleTabChange=(tabIndex:number)=>{
   setActiveTab(tabIndex)
 }


  return (
    <div className=" flex justify-between gap-6">

   {/* feature tabs vertical */}
   <div className=" w-[33rem] h-full py-4 grid grid-cols-1 gap-4">
    {
    featureData.map((feature,index)=>{
      return (
        <Card 
                className={cn(
                  'h-[10rem]  flex items-center justify-center cursor-pointer bg-[#fff] hover:bg-[#eeeffc] group border-transparent hover:border-purple-500',
                 activeTab===index&&'border-purple-500 border-l-7'
                )}
                onClick={()=>handleTabChange(index)}
              >
                <CardContent className=" pl-4">
                 <div className="flex justify-between items-center gap-2">
                     <div className="flex justify-center items-center h-20 min-w-20 
                     hidden lg:block
                     ">
                     <img src={feature?.secondaryImage?.url} alt="" className="h-full w-full shrink-0" />
                     </div>
                     <div className="flex flex-col justify-center items-start">
                     <span className={cn(
                    "text-lg font-heading font-bold  pb-1 font-text", 
                  )}>
                  {feature.heading}
                  </span>
                  <p className={cn(
                    "text-md  font-text text-[#595c73] group-hover:text-[#2a2b3f]",
                  )}>
                  {feature.description}
                  </p>
                    {
                      feature.contentUrl&&
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
                    }
                     </div>
               
                 </div>
                </CardContent>
         </Card>
      )
    })
    }
  
   </div>

   {/* feater tab image */}

   <div className=" w-[40rem] pt-7 justify-center items-center">
   <div className=" bg-gray-50 p-6">
        <div className=" bg-white rounded-lg shadow-sm overflow-hidden">
          <div className=" flex space-x-2 bg-gray-100 p-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {
          <div className=" p-6">
          <img src={featureData[activeTab]?.image?.url} alt="" />
         </div>
          }
        </div>
      </div>
   </div>
   


    </div>
  )
}

export default DesktopFeature