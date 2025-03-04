"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Prime Tv",
    description:
      "Prime Tv is a movie streaming web app built with React.js and Rest API, offering curated content, personalized recommendations, and seamless, secure streaming. This project enhanced my skills in creating high-performance, user-friendly platforms optimized for all devices.",
    stack: [{ name: "React.Js" }, { name: "Rest API" }, { name: "Tailwind CSS" },{ name: "Redux Toolkit" },{ name: "javascript" }],
    image: "/assets/work/prime-tv.png",
    live: "https://prime-tv-two.vercel.app/",
    github: "https://github.com/sahilmor/Prime.tv",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate exercitationem asperiores aliquam. Possimus, quas.",
    stack: [{ name: "react" }, { name: "next" }, { name: "tailwind" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate exercitationem asperiores aliquam. Possimus, quas.",
    stack: [{ name: "react" }, { name: "next" }, { name: "tailwind" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate exercitationem asperiores aliquam. Possimus, quas.",
    stack: [{ name: "react" }, { name: "next" }, { name: "tailwind" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate exercitationem asperiores aliquam. Possimus, quas.",
    stack: [{ name: "react" }, { name: "next" }, { name: "tailwind" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const currIdx = swiper.activeIndex;
    setProject(projects[currIdx]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 text-justify">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {stack.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white"></div>
              <div className="flex gap-4 mt-4 items-center">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 group flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent hover:rotate-[45deg] transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>Live</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 group flex items-center justify-center">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              onSwiper={setSwiperInstance}
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="xl:h-[460px] h-[200px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all rounded-xl"></div>

                    {/* Image */}
                    <div className="relative w-full h-full rounded-xl">
                      <Image
                        src={project.image}
                        fill
                        className="object-center rounded-xl"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  z-20 w-full justify-between"
                btnStyles="bg-transparent xl:hover:bg-accent-hover text-white rounded-full text-[34px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles="w-5 h-5"
                swiper={swiperInstance}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
