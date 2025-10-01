import MainFrame from "./MainFrame.jsx";
import SubHeader from "./SubHeader.jsx";
import PersonalStatement from "./PersonalStatement.jsx";
import WebsiteGuide from "./WebsiteGuide.jsx";

export default function MainSection() {
  return (
    <div className="content-frame">
      <MainFrame></MainFrame>

      <div className="frame-inner bodycopy">
        <SubHeader></SubHeader>
        <div className="two-cols">
          <PersonalStatement></PersonalStatement>
          <WebsiteGuide></WebsiteGuide>
        </div>
      </div>
    </div>
  );
}
