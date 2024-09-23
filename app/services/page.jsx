"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    link: "web-development",
  },
  {
    num: "02",
    title: "Web Applications",
    description:
      "I develop web applications that help businesses automate their processes and increase efficiency.",
    link: "web-applications",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "I design user-friendly interfaces that are easy to navigate and provide a delightful experience.",
    link: "ui-ux-design",
  },
  {
    num: "04",
    title: "Logo Design",
    description:
      "I create unique logos that help your brand stand out in the market and attract your target audience.",
    link: "logo-design",
  },
  {
    num: "05",
    title: "Video Editing",
    description:
      "I edit videos that help businesses communicate their message clearly and effectively.",
    link: "video-editing",
  },
  {
    num: "06",
    title: "Content Writing",
    description:
      "I write content that helps businesses attract and engage their target audience.",
    link: "content-writing",
  },
  {
    num: "07",
    title: "Document Creation",
    description:
      "I create documents that help businesses communicate their message clearly and effectively.",
    link: "document-creation",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col py-12 justify-center xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center flex-1 gap-6 group"
            >
              <div className="flex items-center justify-between w-full">
                <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                  {item.num}
                </div>
                <Link
                  href={`/services/${item.link}`}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-3xl text-primary" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {item.title}
              </h2>
              <p className="text-white/60">{item.description}</p>
              <div className="w-full border-b border-white/20"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
