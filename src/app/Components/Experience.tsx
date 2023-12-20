import html from "@/app/assets/html.png";
import css from "@/app/assets/css.png";
import javascript from "@/app/assets/javascript.png";
import nextjs from "@/app/assets/nextjs.png";
import node from "@/app/assets/node.png";
import react from "@/app/assets/react.png";
import tailwind from "@/app/assets/tailwind.png";
import github from "@/app/assets/github.png";
import graphql from "@/app/assets/graphql.png";
import SPSS from "@/app/assets/SPSS.png";
import R from "@/app/assets/R.png";
import EXCEL from "@/app/assets/EXCEL.jpg";

import Image from "next/image";

export default function skills() {
  const techs = [
    {
      id: 0,
      src: SPSS,
      title: "SPSS",
      style: "shadow-blue-500",
    },

    {
      id: 1,
      src: R,
      title: "R",
      style: "shadow-blue-500",
    },
      
    {
      id: 2,
      src: EXCEL,
      title: "EXCEL",
      style: "shadow-green-100",
    },


  
   
   
   {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    

    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 9,
      src: node,
      title: "Node",
      style: "shadow-gray-400",
    },
    
    {
      id: 10,
      src: github,
      title: "Git hub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      id="experience"
      className="parent bg-gradient-to-b from-gray-700 to-gray-700 w-full h-screen  py-[400px]"
    >
      <div className="child max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="subchild">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="child w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`subchild shadow-md hover:scale-105 duration-500 py-2  rounded-lg ${style}`}
            >
              <Image
                src={src}
                alt="experience"
                className="w-20 mx-auto"
              ></Image>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
