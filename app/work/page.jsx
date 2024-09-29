"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiAppwrite,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiTypescript,
  SiStripe,
  SiPrisma,
  SiTwilio,
  SiShadcnui,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// INFO: Importing components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend Web",
    title: "CarRent4U | Car Rental Website",
    description:
      "A user-friendly car rental website designed with HTML and CSS, offering a seamless experience for customers to rent cars with ease. Explore, book, and enjoy our services effortlessly.",
    stack: [
      { icon: <SiHtml5 />, name: "HTML 5" },
      { icon: <SiCss3 />, name: "CSS 3" },
      { icon: <SiJavascript />, name: "JavaScript" },
    ],
    image: "/assets/work/carRent4U.png",
    live: "https://car-rent4-u-front-end-ui.vercel.app/",
    github: "https://github.com/MenathNDGD/CarRent4U_-Front-end-_UI.git",
  },
  {
    num: "02",
    category: "Fullstack Web",
    title: "EduQuest | LMS Platform",
    description:
      "A Learning Management System (LMS) built with Next.js and React for a seamless user experience, integrated with Stripe for secure payments, and Mux for high-quality video streaming.",
    stack: [
      { icon: <SiNextdotjs />, name: "Next JS" },
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPrisma />, name: "Prisma" },
    ],
    image: "/assets/work/eduQuest.png",
    live: "https://edu-quest-lms-next-js.vercel.app/sign-in",
    github: "https://github.com/MenathNDGD/EduQuest-LMS-Platform.git",
  },
  {
    num: "03",
    category: "Fullstack Web",
    title: "CareSync | Healthcare App",
    description:
      "A modern Patient Management System streamlines patient care by managing appointments, records, and communication, offering real-time notifications and secure data handling.",
    stack: [
      { icon: <SiNextdotjs />, name: "Next JS" },
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiAppwrite />, name: "Appwrite" },
      { icon: <SiTwilio />, name: "Twilio" },
    ],
    image: "/assets/work/careSync.png",
    live: "https://care-sync-three.vercel.app/",
    github: "https://github.com/MenathNDGD/CareSync.git",
  },
  {
    num: "04",
    category: "Fullstack Web",
    title: "E-Market Hub | E-commerce Platform",
    description:
      "A full-stack, full-featured e-commerce platform with including both a user-facing store and an admin dashboard for managing products, orders, and users.",
    stack: [
      { icon: <SiNextdotjs />, name: "Next JS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: <SiStripe />, name: "Stripe" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
    image: "/assets/work/eComPlatform.png",
    live: "https://mern-ecommerce-platform.vercel.app/",
    github: "https://github.com/MenathNDGD/MERN-Ecommerce-Platform.git",
  },
  {
    num: "05",
    category: "Capstone Mini",
    title: "EcoBin | Waste Management App",
    description:
      "A web application built using new technologies to provide efficient and intelligent waste management solutions by helping users to manage waste disposal smartly and sustainably.",
    stack: [
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiHtml5 />, name: "HTML 5" },
      { icon: <SiCss3 />, name: "CSS 3" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
    image: "/assets/work/ecoBin.png",
    live: "https://eco-bin-website.vercel.app/",
    github: "https://github.com/MenathNDGD/EcoBin_Website.git",
  },
  {
    num: "06",
    category: "Frontend Web",
    title: "Trendify | Fashion E-commerce",
    description:
      "A modern and stylish e-commerce platform designed with a focus on fashion and lifestyle products, offering a seamless shopping experience for customers to explore and purchase products.",
    stack: [
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
    image: "/assets/work/trendify.png",
    live: "https://mern-ecommerce-lake-one.vercel.app/",
    github: "https://github.com/MenathNDGD/MERN-Ecommerce.git",
  },
  {
    num: "07",
    category: "Frontend Web",
    title: "TastyTrails | Food Delivery Website",
    description:
      "A user-friendly food delivery website designed for offering a seamless experience for customers to order food with ease. Explore, order, and enjoy our services effortlessly.",
    stack: [
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiHtml5 />, name: "HTML 5" },
      { icon: <SiCss3 />, name: "CSS 3" },
      { icon: <SiJavascript />, name: "JavaScript" },
    ],
    image: "/assets/work/tastyTrails.png",
    live: "https://tasty-trails-food-delivery-react-php.vercel.app/",
    github:
      "https://github.com/MenathNDGD/TastyTrails-FoodDelivery-ReactPHP.git",
  },
  {
    num: "08",
    category: "Fullstack WebApp",
    title: "NextBank | Online Banking App",
    description:
      "A full-stack online banking application built with a finance dashboard of sleek design, offering a seamless user experience for managing accounts, transactions, and payments securely.",
    stack: [
      { icon: <SiNextdotjs />, name: "Next JS" },
      { icon: <SiReact />, name: "React JS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiShadcnui />, name: "Shadcn UI" },
    ],
    image: "/assets/work/nextBank.png",
    live: "https://next-bank-weld.vercel.app/sign-in",
    github: "https://github.com/MenathNDGD/NextBank.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
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
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <span className="text-2xl font-semibold text-white/50">
                {project.title}
              </span>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap items-center gap-4 md:flex-nowrap">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="items-center text-5xl transition-all duration-300 text-accent group"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <div className="text-4xl text-white group-hover:text-accent">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/10">
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover"
                          alt={item.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                }
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300 rounded-full"
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
