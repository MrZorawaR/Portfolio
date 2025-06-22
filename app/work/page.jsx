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
    stack: [
      { name: "React.Js" },
      { name: "Rest API" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/prime-tv.png",
    live: "https://prime-tv-two.vercel.app/",
    github: "https://github.com/sahilmor/Prime.tv",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "AI Fashion Stylist",
    description:
      "AI Fashion Stylist uses TensorFlow pose detection, MediaPipe, and generative AI to analyze your body shape and instantly suggest personalized outfit recommendations for every occasion. It makes fashion choices easy and helps you shop confidently with styles that truly fit you.",
    stack: [{ name: "Tensorflow Models" }, { name: "React.Js" },{name:"Vite"}, { name: "Tailwind CSS" },{name:"Generative AI"}, {name:"Mediapipe"}],
    image: "/assets/work/ai-fashion.png",
    live: "https://ai-fashion-stylist-ten.vercel.app/",
    github: "https://github.com/MrZorawaR/AI-Fashion-Stylist",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Prodec",
    description:
      "Prodec is an innovative addon for Netflix and YouTube that lets users pause any video and instantly capture the frame. Using Flask, Next.js, and generative AI, it analyzes the paused scene and recommends related products, making it easy to discover and shop for items seen in videos.",
    stack: [{ name: "Next.Js" }, { name: "Flask" }, { name: "Tailwind CSS" }, { name: "Python" },{name:"TypeScript"}],
    image: "/assets/work/prodec.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Carrer Flow AI",
    description:
      "Career Flow AI is a smart platform that uses generative AI to create a personalized career roadmap based on your skills and goals. It suggests the best courses, guides you step by step, and tracks your progress. Built with Next.js, Node.js, Express, MongoDB, Jotai, Tailwind CSS, and TypeScript.",
    stack: [{ name: "Express.Js" }, { name: "Next.Js" }, { name: "Tailwind CSS" },{name:"Generative AI"},{name:"Node.Js"},{name:"MongoDB"},{name:"Jotai"}],
    image: "/assets/work/carrerflow-ai.png",
    live: "https://carrer-flow-ai.vercel.app/",
    github: "https://github.com/sahilmor/CarrerFlowAI",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Quiz Master",
    description:
      "Quiz Master is a fun and interactive web app for taking quizzes. It provides an engaging user experience with smooth navigation and progress tracking. Built with Next.js, Recoil for state management, TypeScript for type safety, and styled using Tailwind CSS, Quiz Master makes learning enjoyable and easy to use for everyone.",
    stack: [{ name: "Next.js" },{ name: "Recoil" },{ name: "TypeScript" },{ name: "Tailwind CSS" },{ name: "Framer Motion" }],
    image: "/assets/work/quizmaster.png",
    live: "https://quiz-app-psi-navy.vercel.app/",
    github: "https://github.com/MrZorawaR/quiz-app",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Fasal Guru",
    description:
      "FasalGuru is a multilingual AI chatbot fine-tuned for farmers. Ask questions in any language and get answers spoken back in your language using Gemini AI, Web Speech API, ResponsiveVoice, React, Tailwind, and Framer. It makes farming advice simple and accessible to everyone.",
    stack: [{name:"React"},{name:"Tailwind CSS"},{name:"Framer Motion"},{name:"Web Speech API"},{name:"ResponsiveVoice"},{name:"Gemini API"}],
    image: "/assets/work/fasalguru.png",
    live: "https://fasal-guru.vercel.app/",
    github: "https://github.com/MrZorawaR/fasalguru",
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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full h-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="flex justify-between items-center gap-[30px]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <div className="flex gap-4 mt-4 items-center">
                  {project.live && (  
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 group flex items-center justify-center hover:rotate-[45deg] transition-all duration-500">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                        </TooltipTrigger>
                        <TooltipContent>Live</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  )}
                  {project.github && (  
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
                  )}
                </div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60 text-justify">
                {project.description}
              </p>
              <ul className="flex gap-4 flex-wrap w-full">
                {project.stack.map((stack, index) => (
                  <li
                    className="lg:text-xl text-accent text-sm border p-2 rounded-full"
                    key={index}
                  >
                    {stack.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white w-full"></div>
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
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all rounded-xl"></div>

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
                btnStyles="bg-transparent xl:hover:bg-accent-hover xl:hover:text-white text-accent rounded-full text-[34px] w-[44px] h-[44px] flex justify-center items-center transition-all"
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
