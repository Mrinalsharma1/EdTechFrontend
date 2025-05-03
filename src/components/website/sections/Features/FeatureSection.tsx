import DesktopFeature from "./DesktopFeature"
import MobileFeature from "./MobileFeature"
import {data} from "./Feature.data"
import { useEffect, useState } from "react"
import { FeatureItem } from "./feature.types"

const FeatureSection = () => {
  
  const[featureData,setFeatureData]=useState<FeatureItem[]>([]);

 useEffect(()=>{
  const fetchFeatureData=async()=>{
    setTimeout(() => {
    setFeatureData(data)
    }, (3000));
  }
  fetchFeatureData();

 },[])


  return (

    <div id='feature-container' className='w-full py-4 bg-[#F6F7F9]'>
      <div className="px-4 xl:container mx-auto "> 
        <div id="heading-container" >
          <div id="feature-heading">
            <h2 className="font-heading-serif text-[clamp(1.9rem,calc(1.5rem+0.65*calc((100vw-36rem)/55)),2.2rem)] font-semibold text-left max-w-[36em] leading-normal">
              Learning focused on your goals
            </h2>
          </div>
        </div>

        <div id="desktop-feature" className="hidden md:block">
          <DesktopFeature featureData={featureData}/>
        </div>

        <div id="mobile-feature" className="block md:hidden">
          <MobileFeature/>
        </div>

      </div> 

    </div> 
  )
}

export default FeatureSection;