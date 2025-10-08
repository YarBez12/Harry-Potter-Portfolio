import MainFrame from "./MainFrame.jsx";
import SubHeader from "./SubHeader.jsx";
import PersonalStatement from "./PersonalStatement.jsx";
import WebsiteGuide from "./WebsiteGuide.jsx";
import SkillsSection from "./SkillsSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import { useState, useEffect } from "react";


export default function MainSection({ frame, title, sections }) {
  const PROJECT_INDEX_KEY = "ui:lastProjectIndex";
  const [projectIndex, setProjectIndex] = useState(() => {
    const saved = sessionStorage.getItem(PROJECT_INDEX_KEY);
    const n = Number(saved);
    return Number.isInteger(n) && n >= 0 && n < sections.projects.items.length ? n : 0;
  });

  useEffect(() => {
     sessionStorage.setItem(PROJECT_INDEX_KEY, String(projectIndex));
   }, [projectIndex]);

  return (
    <div className="content-frame">
      <MainFrame frame={frame}></MainFrame>

      <div className="frame-inner bodycopy">
        <SubHeader title={title}></SubHeader>
        <div className="two-cols">
          <PersonalStatement
            personal_statement={sections.personal_statement}
          ></PersonalStatement>
          <ProjectsSection projects={sections.projects} index={projectIndex} setIndex={setProjectIndex}></ProjectsSection>
        </div>
        <SkillsSection skills={sections.skills} setProjectIndex={setProjectIndex} allProjects={sections.projects}></SkillsSection>
      </div>
    </div>
  );
}
