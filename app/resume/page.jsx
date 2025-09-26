import MotionWrapper from "@/components/CommonComponents/MotionWrapper";
import { ResumeClient } from "@/components/ResumeComponents/ResumeClient";

import {
  about,
  education,
  experience,
  skills,
} from "@/constants/resumePageData";

export const metadata = {
  title: "Menath Nadungoda | Resume",
  description: "My educational background, work experience, and skills.",
  keywords:
    "Menath Nadungoda, Menath, Nadungoda, Resume, Education, Work Experience, Skills, About me",
};

const Resume = () => {
  return (
    <MotionWrapper
      as="div"
      className={"min-h-[80vh] flex items-center justify-center py-12 xl:py-0"}
    >
      <div className="container mx-auto">
        <ResumeClient
          about={about}
          education={education}
          experience={experience}
          skills={skills}
        />
      </div>
    </MotionWrapper>
  );
};

export default Resume;
