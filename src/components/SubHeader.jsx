export default function SubHeader({title}) {
  return (
    <>
      <div class="title">{title.name}</div>
      <div className="frame-edge divider">
        <span className="seg"></span>
        <span className="label">{title.dividerLabel}</span>
        <span className="seg"></span>
      </div>
    </>
  );
}
