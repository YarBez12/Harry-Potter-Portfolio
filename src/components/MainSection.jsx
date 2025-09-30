import MainFrame from './MainFrame.jsx';
import SubHeader from './SubHeader.jsx';

export default function MainSection() {
  return (
    <div className="content-frame">
      <MainFrame></MainFrame>

      <div className="frame-inner bodycopy">
        <SubHeader></SubHeader>
      </div>
    </div>
  );
}
