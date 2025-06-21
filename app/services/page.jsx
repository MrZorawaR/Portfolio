"use client";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Building responsive, high-performance websites using the latest technologies to deliver seamless user experiences across all devices.",
    href: "/contact",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing interfaces that prioritize user engagement and elevate brand identity.",
    href: "/contact",
  },
  {
    id: "03",
    title: "Logo Design",
    description:
    "Crafting unique, memorable, and impactful logos that effectively represent your brand’s vision and make a lasting impression.",
    href: "/contact",
  },
  {
    id: "04",
    title: "Full Stack Development",
    description:
      "Developing robust, end-to-end web applications with scalable backend solutions and dynamic, interactive frontends.",
    href: "/contact",
  },
];


import { motion } from "framer-motion";
import Link from "next/link";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div  className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.id}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex items-center justify-center transition-all duration-500 hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
