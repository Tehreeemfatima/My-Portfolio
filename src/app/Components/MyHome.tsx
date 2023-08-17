import HeroImage from "@/app/assets/HeroImage.jpg";
import Image from "next/image";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from "react-scroll"


export default function MyHome() {
  return (

    <div id="home" className="h-screen  w-full bg-gradient-to-b from-black
    via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
         <div className="flex flex-col justify-center h-full sm:mt-20">
           <h2 className="text-4xl sm:text-7xl font-bold text-white "><span className="text-cyan-500 ">I'm a</span>  Front  End  <span className="text-cyan-500">Developer</span>
           </h2>
           <p className="text-gray-500 py-4 max-w-md">
           As an experienced front-end developer, I have an in-depth understanding of popular technologies including React, Next.js, Chakra UI, and Tailwind CSS. I love to work on web application using these technologies.
           </p>

           
          <div>
            <button  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer">
              Portfollio 
              <span className="group-hover:rotate-90 duration-300">            
              <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
  

            </button>
            </div>
            </div>
            <div>
              <Image src={HeroImage} alt="MyProfile" className="rounded-2xl mx-auto w-2/3
              md:w-[350px]"/>
            
            </div>
          </div>
      </div>
      
  )
}
