"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import CopyContactInfo from "@/components/ResumeComponents/CopyContactInfo";

export const ResumeClient = ({ about, education, experience, skills }) => {
  const [activeTab, setActiveTab] = useState("about");

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

  const listVariants = {
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

  const listItemVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <Tabs
      defaultValue="about"
      className="flex flex-col xl:flex-row gap-[60px]"
      onValueChange={setActiveTab}
    >
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>

      <div className="min-h-[70vh] w-full">
        <TabsContent value="about" className="w-full">
          <AnimatePresence mode="wait">
            {activeTab === "about" && (
              <motion.div
                key="about"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <motion.h3
                  className="text-4xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {about.title}
                </motion.h3>
                <motion.p
                  className="max-w-[750px] text-white/60 mx-auto xl:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {about.description}
                </motion.p>
                <ScrollArea className="h-[500px]">
                  <motion.ul
                    variants={listVariants}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-3"
                  >
                    {about.info.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
                          variants={listItemVariants}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-lg text-accent">
                            {item.fieldName}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.fieldValue}
                          </h3>
                          {item.fieldName === "Email" && (
                            <CopyContactInfo email="nadungmenath1@gmail.com" />
                          )}
                          {item.fieldName === "Mobile" && (
                            <CopyContactInfo phone="(+94) 76 549 3072" />
                          )}
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            )}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="experience" className="w-full">
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <motion.h3
                  className="text-4xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {experience.title}
                </motion.h3>
                <motion.p
                  className="max-w-[750px] text-white/60 mx-auto xl:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {experience.description}
                </motion.p>
                <ScrollArea className="h-[500px]">
                  <motion.ul
                    variants={listVariants}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-3"
                  >
                    {experience.items.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
                          variants={listItemVariants}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            )}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="education" className="w-full">
          <AnimatePresence mode="wait">
            {activeTab === "education" && (
              <motion.div
                key="education"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <motion.h3
                  className="text-4xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {education.title}
                </motion.h3>
                <motion.p
                  className="max-w-[750px] text-white/60 mx-auto xl:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {education.description}
                </motion.p>
                <ScrollArea className="h-[500px]">
                  <motion.ul
                    variants={listVariants}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-3"
                  >
                    {education.items.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
                          variants={listItemVariants}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.university}</p>
                          </div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            )}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="skills" className="w-full h-full">
          <AnimatePresence mode="wait">
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col gap-[30px]"
              >
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <motion.h3
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {skills.title}
                  </motion.h3>
                  <motion.p
                    className="max-w-[750px] text-white/60 mx-auto xl:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {skills.description}
                  </motion.p>
                </div>
                <ScrollArea className="h-[500px]">
                  <motion.ul
                    variants={listVariants}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] pr-3"
                  >
                    {skills.skillList.map((item, index) => {
                      return (
                        <motion.li key={index} variants={listItemVariants}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            )}
          </AnimatePresence>
        </TabsContent>
      </div>
    </Tabs>
  );
};
