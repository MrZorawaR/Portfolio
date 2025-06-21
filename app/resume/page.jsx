"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiNpm,
  SiGit,
  SiVercel,
  SiFigma,
  SiCanva,
  SiBootstrap,
  SiFirebase,
  SiPostman,
  SiGithub,
  SiNetlify,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const about = {
  title: "About Me",
  description:
    "I’m a final-year B.Tech student at Geeta University, passionate about building impactful web solutions. I have proven my skills by winning a national-level hackathon and contributing as a Web Developer Intern at Geeta Technical Hub. Previously, I worked as a Full Stack Web Developer Intern at Naai India, where I honed my expertise in the MERN stack, Next.js, and Tailwind CSS. I thrive in dynamic environments, love solving real-world problems through code, and constantly seek to expand my technical horizons. With a strong foundation in modern web technologies, I aim to innovate and deliver user-centric applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nitish Chaudhary",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9012822721",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Year",
    },
    {
      fieldName: "Email",
      fieldValue: "zorawarsingh315@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
  items: [
    {
      company: "Geeta Technical Hub(GTH)",
      designation: "Website Development Intern",
      duration: "Feb 2025 - Present",
    },
    {
      company: "Naai India",
      designation: "FullStack Intern",
      duration: "Nov 2024 - Feb 2025",
    },
    {
      company: "Coding Blocks + GTH",
      designation: "DSA Intern",
      duration: "Jul 2024 - Aug 2024",
    },
    {
      company: "Pregrad",
      designation: "MERN-Stack Intern",
      duration: "Jul 2023 - Sept 2023",
    },
  ],
};

const achievements = {
  title: "Achievements",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
  items: [
    {
      title: "2nd Runner Up in Code-A-Haunt 2.0 Hackathon",
      location: "LPU, Phagwara, Punjab",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
      link: "https://www.linkedin.com/posts/nitish315_hackathon-codeahaunt-lpu-activity-7302348539353780224-IHHm/",
    },
    {
      title:"Organised HackForge'25,GU Internal Hackathon",
      location: "Geeta University, Panipat, Haryana",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
      link:"https://www.linkedin.com/posts/shravyatrey315_hackforge25-corecommittee-gratitudepost-activity-7324753837557219328-zQb3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQxf3ABiMkSQm8u0oLd4Ly0KcqbEmRmESg",
    },
    {
      title:
        "Finalists in AIU-North Zone Student Research Convention – Anveshan 2024",
      location: " Galgotias University, Greater Noida, Uttar Pradesh",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
      link: "https://www.linkedin.com/posts/nitish315_anveshan2024-aiu-krishidoot-activity-7270691542292393984-7MJl/",
    },
    {
      title: "Participant in HackaHound 3.0",
      location: "SRM University, Modinagar, Ghaziabad, Uttar Pradesh",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
      link: "https://www.linkedin.com/posts/nitish315_hackhound3-srmuniversity-hackathon-activity-7308002898565599232-3WLc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQxf3ABiMkSQm8u0oLd4Ly0KcqbEmRmESg",
    },
    {
      title: "Participant in Smart India Hackathon(SIH) 2024",
      location: "Geeta University, Panipat, Haryana",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
      link: "https://www.linkedin.com/posts/nitish315_sih2024-hackathon-fasalguru-activity-7246082531937136640-kuoS/",
    },
    {
      title: "Participant in HackaHound 2.0",
      location: "SRM University, Modinagar, Ghaziabad, Uttar Pradesh",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
      link: "https://www.linkedin.com/posts/nitish315_teamworkmakesthedreamwork-grateful-collaboration-activity-7184176607509536768-bA2G/",
    },
    {
      title: "Participant in Hack-Wars Hackathon",
      location: "Chandigarh University, Ajitgarh, Punjab",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
      link: "https://www.linkedin.com/posts/nitish315_hackathon-leadership-innovation-activity-7247636943612583937-lKsU/",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
  items: [
    {
      institution: "Geeta University",
      degree: "B.Tech in Computer Science",
      duration: "Sept 2022 - Present",
    },
    {
      institution: "CBSE",
      degree: "12th Non-Medical(PCM)",
      duration: "2021 - 2022",
    },
    {
      institution: "CBSE",
      degree: "10th - (94%)",
      duration: "2019 - 2020",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perferendis?",
  skillSets: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <TbBrandCpp />,
      name: "C++",
    },
    {
      icon: <SiNpm />,
      name: "Node Package Manager(NPM)",
    },
    {
      icon: <SiVercel />,
      name: "Vercel Deployment",
    },
    {
      icon: <SiFigma />,
      name: "Figma",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
    {
      icon: <SiNetlify />,
      name: "Netlify",
    }
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 max-w-[380px] w-full mx-auto xl:mx-0">
            <TabsTrigger value="about" className="rounded-xl">
              About me
            </TabsTrigger>
            <TabsTrigger value="experience" className="rounded-xl">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="rounded-xl">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="rounded-xl">
              Skills
            </TabsTrigger>
            
            <TabsTrigger value="achievements" className="rounded-xl">
              Achievements
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p> */}
                <ScrollArea className="lg:h-[26rem] h-[35rem]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center ld:text-left">
                            {item.designation}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p> */}
                <ScrollArea className="lg:h-[26rem] h-[35rem]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center ld:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-8">
                    {skills.description}
                  </p> */}
                </div>
                <ScrollArea className="lg:h-[26rem] h-[35rem]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.skillSets.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full h-full overflow-hidden">
              <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="text-white/60 mx-auto  text-justify">
                    {about.description}
                  </p>
                </div>
                <ScrollArea className="">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="w-full">
              <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{achievements.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-8">
                    {achievements.description}
                  </p> */}
                </div>
                <ScrollArea className="lg:h-[26rem] h-[35rem]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {achievements.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[17rem] lg:h-[12rem] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <h3 className="lg:text-xl font-semibold text-center lg:text-left">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{item.location}</p>
                        </div>
                        {/* <p className="text-white/60 text-sm text-center lg:text-left">
                          {item.description}
                        </p> */}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent text-sm mt-2 hover:underline"
                        >
                          Check out the achievement
                        </a>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
