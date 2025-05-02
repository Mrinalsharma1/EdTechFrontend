import { Button } from "@/components/ui/button"
import { Card,CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"


const DesktopFeature = () => {
  return (
    <div className=" flex justify-between gap-6">

   {/* feature tabs vertical */}
   <div className=" w-[33rem] h-full py-4 grid grid-cols-1 gap-4">
         <Card 
                className={cn(
                  'h-[10rem]  flex items-center justify-center cursor-pointer bg-[#fff] hover:bg-[#eeeffc] group border-transparent hover:border-purple-500 border-l-7',
                
                )}
              >
                <CardContent className=" pl-4">
                 <div className="flex justify-between items-center gap-2">
                     <div className="flex justify-center items-center h-20 min-w-20">
                     <img src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png" alt="" className="h-full w-full shrink-0" />
                     </div>
                     <div className="flex flex-col justify-center items-start">
                     <span className={cn(
                    "text-lg font-heading font-bold  pb-1 font-text", 
                  )}>
                   Hands-on training
                  </span>
                  <p className={cn(
                    "text-md  font-text text-[#595c73] group-hover:text-[#2a2b3f]",
                  )}>
                    Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.
                    
                  </p>
                     </div>
               
                 </div>
                </CardContent>
         </Card>
         <Card 
                className={cn(
                  'h-[10rem]  flex items-center justify-center cursor-pointer bg-[#fff] hover:bg-[#eeeffc] group border-transparent hover:border-purple-500 border-l-7',
                
                )}
              >
                <CardContent className=" pl-4">
                 <div className="flex justify-between items-center gap-2">
                     <div className="flex justify-center items-center h-20 min-w-20">
                     <img src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png" alt="" className="h-full w-full shrink-0" />
                     </div>
                     <div className="flex flex-col justify-center items-start">
                     <span className={cn(
                    "text-lg font-heading font-bold  pb-1 font-text", 
                  )}>
                   Hands-on training
                  </span>
                  <p className={cn(
                    "text-md  font-text text-[#595c73] group-hover:text-[#2a2b3f]",
                  )}>
                    Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.
                    
                  </p>
                    <Link to="/login">
                    <span className={cn(
                    "text-md font-heading font-bold inline-flex items-center gap-2 p-2 text-[#6d28d2] hover:bg-[#DAD3EE] pl-0 rounded-sm" 
                  )}>
                     Find out more
                    {/* Replaced <use> with an inline SVG */}
                    {/* You can adjust w-4, h-4 for size and text-current to inherit text color */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#6d28d2"
                    className="w-4 h-4" // Tailwind classes for size
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>

                  </span>
                    </Link>
                     </div>
               
                 </div>
                </CardContent>
         </Card> <Card 
                className={cn(
                  'h-[10rem]  flex items-center justify-center cursor-pointer bg-[#fff] hover:bg-[#eeeffc] group border-transparent hover:border-purple-500 border-l-7',
                
                )}
              >
                <CardContent className=" pl-4">
                 <div className="flex justify-between items-center gap-2">
                     <div className="flex justify-center items-center h-20 min-w-20">
                     <img src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png" alt="" className="h-full w-full shrink-0" />
                     </div>
                     <div className="flex flex-col justify-center items-start">
                     <span className={cn(
                    "text-lg font-heading font-bold  pb-1 font-text", 
                  )}>
                   Hands-on training
                  </span>
                  <p className={cn(
                    "text-md  font-text text-[#595c73] group-hover:text-[#2a2b3f]",
                  )}>
                    Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.
                    
                  </p>
                     </div>
               
                 </div>
                </CardContent>
         </Card> <Card 
                className={cn(
                  'h-[10rem]  flex items-center justify-center cursor-pointer bg-[#fff] hover:bg-[#eeeffc] group border-transparent hover:border-purple-500 border-l-7',
                
                )}
              >
                <CardContent className=" pl-4">
                 <div className="flex justify-between items-center gap-2">
                     <div className="flex justify-center items-center h-20 min-w-20">
                     <img src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png" alt="" className="h-full w-full shrink-0" />
                     </div>
                     <div className="flex flex-col justify-center items-start">
                     <span className={cn(
                    "text-lg font-heading font-bold  pb-1 font-text", 
                  )}>
                   Hands-on training
                  </span>
                  <p className={cn(
                    "text-md  font-text text-[#595c73] group-hover:text-[#2a2b3f]",
                  )}>
                    Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.
                    
                  </p>
                 
            
                   <span className={cn(
                    "text-md font-heading font-bold inline-flex items-center gap-2 pt-2 text-[#6d28d2] " 
                  )}>
                    Explore more courses
                    {/* Replaced <use> with an inline SVG */}
                    {/* You can adjust w-4, h-4 for size and text-current to inherit text color */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#6d28d2"
                    className="w-4 h-4" // Tailwind classes for size
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>

                  </span>
                     </div>
               
                 </div>
                </CardContent>
         </Card>
    
  
   
        


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
          <div className=" p-6">
           <img src="https://cms-images.udemycdn.com/96883mtakkm8/GUVYFTj0uwEQuJha5j7TZ/473be949e2751dd5826b141dc4c16892/desktop-certification-prep-2x.png" alt="" />
          </div>
        </div>
      </div>
   </div>
   


    </div>
  )
}

export default DesktopFeature