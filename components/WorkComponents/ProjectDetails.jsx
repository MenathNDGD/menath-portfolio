"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectDetails = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const formatProjectNumber = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  // Animation variants for smooth transitions
  const contentVariants = {
    initial: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 },
    },
  };

  const stackVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  };

  const stackItemVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-[30px] h-[50%]"
          >
            <motion.div
              className="font-extrabold leading-none text-transparent text-8xl text-outline"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {project.num}
            </motion.div>

            <motion.h2
              className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.category} Project
            </motion.h2>

            <motion.span
              className="text-2xl font-semibold text-white/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.title}
            </motion.span>

            <motion.p
              className="text-white/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.description}
            </motion.p>

            <motion.ul
              variants={stackVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-wrap items-center gap-4 md:flex-nowrap"
            >
              {project.stack.map((item, index) => (
                <motion.li
                  key={index}
                  variants={stackItemVariants}
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
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="border border-white/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
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
                      <p>GitHub Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full xl:w-[50%] mb-10 xl:mb-0 order-1 xl:order-none">
        <Carousel onSlideChange={handleSlideChange}>
          <CarouselContent>
            {projects.map((item, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="h-[460px] relative group flex justify-center items-center bg-pink-50/10 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                  <div className="w-full xl:w-[50%] xl:h-[460px] flex justify-center items-center">
                    <Image
                      src={item.image}
                      fill
                      className="w-[90%] h-auto rounded-xl shadow-lg"
                      alt={item.title}
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {currentIndex > 0 && (
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 rounded-full p-2" />
          )}
          {currentIndex < projects.length - 1 && (
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 rounded-full p-2" />
          )}
        </Carousel>
        <motion.div
          className="hidden md:block text-lg text-center text-white/60 mt-4"
          key={`counter-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Project {formatProjectNumber(currentIndex + 1)} of{" "}
          {formatProjectNumber(projects.length)}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
