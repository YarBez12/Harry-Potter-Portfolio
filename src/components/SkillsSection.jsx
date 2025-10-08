import SoftSkillsBox from "./SoftSkillsBox.jsx";
import HardSkillsBox from "./HardSkillsBox.jsx";
import EducationBox from "./EducationBox.jsx";
import { useState } from "react";

export default function SkillsSection({skills, setProjectIndex, allProjects}) {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (key) => setIsOpen((prev) => (prev === key ? null : key));
  return (
    <div className="mosaic">
      <SoftSkillsBox soft_skills={skills.soft_skills}></SoftSkillsBox>
      <HardSkillsBox
        hard_skills={skills.hard_skills}
        isOpen={isOpen}
        toggle={toggle}
        setProjectIndex={setProjectIndex}
        allProjects={allProjects}
      ></HardSkillsBox>
      <EducationBox
        education={skills.education}
        isOpen={isOpen}
        toggle={toggle}
      ></EducationBox>
    </div>
  );
}
