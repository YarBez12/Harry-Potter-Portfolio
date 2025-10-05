import MainFrame from "./MainFrame.jsx";
import SubHeader from "./SubHeader.jsx";
import PersonalStatement from "./PersonalStatement.jsx";
import WebsiteGuide from "./WebsiteGuide.jsx";
import SkillsSection from "./SkillsSection.jsx"
import ProjectsSection from "./ProjectsSection.jsx";

export default function MainSection({ frame, title, sections }) {

  return (
    <div className="content-frame">
      <MainFrame frame={frame}></MainFrame>

      <div className="frame-inner bodycopy">
        <SubHeader title={title}></SubHeader>
        <div className="two-cols">
          <PersonalStatement
            personal_statement={sections.personal_statement}
          ></PersonalStatement>
          <ProjectsSection projects={sections.projects}></ProjectsSection>
        </div>
        <SkillsSection skills={sections.skills}></SkillsSection>

      </div>
    </div>
  );
}
