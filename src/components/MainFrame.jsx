export default function MainFrame({frame}) {
  return (
    <>
      <div className="frame-edge top"></div>

      <div className="frame-edge left">
        <span className="seg"></span>
        <span className="label">{frame.leftLabel}</span>
        <span className="seg"></span>
      </div>

      <div className="frame-edge right">
        <span className="seg"></span>
        <span className="label">{frame.rightLabel}</span>
        <span className="seg"></span>
      </div>

      <div className="frame-edge bottom">
        <span className="seg"></span>
        <span className="label">{frame.bottomLabel}</span>
        <span className="seg"></span>
      </div>
    </>
  );
}
