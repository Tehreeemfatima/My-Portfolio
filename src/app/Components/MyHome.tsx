
import AI from "@/app/assets/AI.webp";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export default function MyHome() {
  return (
    <div
      id="Home"
      className="h-screen  w-full bg-gradient-to-b from-pink-800 to-gray-700"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full sm:mt-20">
          <h1 className="text-4xl sm:text-7xl font-bold text-white ">
            <span className="text-white-400 ">I am </span>
            <span className="text-pink-600"> statistician </span> <br /> &
            <span className="text-pink-600"> Front </span> End Developer 
          </h1>
          <p className="text-white py-4 max-w-md">
          As a front end developer, I specialize in React, Next.js, and Tailwind CSS. These technologies are my focus for building engaging web applications. I am enthusiastic about honing my skills and creating seamless user experiences in the world of web development.
          </p>

          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
            from-pink-600 to-pink-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <Image
            src={AI}
            alt="MyProfile"
            className="rounded-2xl mx-auto w-2/3
              md:w-[350px]"
          />
        </div>
      </div>
    </div>
  );
}
