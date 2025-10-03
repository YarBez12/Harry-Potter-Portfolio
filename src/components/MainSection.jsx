import MainFrame from "./MainFrame.jsx";
import SubHeader from "./SubHeader.jsx";
import PersonalStatement from "./PersonalStatement.jsx";
import WebsiteGuide from "./WebsiteGuide.jsx";
import SkillsSection from "./SkillsSection.jsx"

export default function MainSection({ frame, title, sections, instructions }) {

  return (
    <div className="content-frame">
      <MainFrame frame={frame}></MainFrame>

      <div className="frame-inner bodycopy">
        <SubHeader title={title}></SubHeader>
        <div className="two-cols">
          <PersonalStatement
            personal_statement={sections.personal_statement}
          ></PersonalStatement>
          <WebsiteGuide instructions={instructions}></WebsiteGuide>
        </div>
        <SkillsSection skills={sections.skills}></SkillsSection>
      </div>
    </div>
  );
}
