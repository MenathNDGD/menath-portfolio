"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "@/components/PhoneInput";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 76 549 3072",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nadungmenath1@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Galle, Sri Lanka",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="order-2 xl:order-none xl:w-[57%]">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Drop Me a Line</h3>
              <p className="text-white/60">
                Have a project in mind or just want to say hello? Feel free to
                reach out! I'm always open to discussing new ideas,
                collaborations, or opportunities. Simply fill out the form
                below, and I'll get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="firstname" placeholder="First Name" required />
                <Input type="lastname" placeholder="Last Name" required />
                <Input type="email" placeholder="Email Address" />
                <PhoneInput placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="webDev">Web Development</SelectItem>
                    <SelectItem value="webApp">Web Applications</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="video">Video Editing</SelectItem>
                    <SelectItem value="content">Content Writing</SelectItem>
                    <SelectItem value="doc">Document Creation</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here..."
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
