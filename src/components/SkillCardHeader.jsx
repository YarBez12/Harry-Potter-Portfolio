export default function SkillCardHeader({
  title,
  prevLabel,
  nextLabel,
  onPrev,
  onNext,
}) {
  return (
    <div className="skill-card-header">
      <button type="button" className="nav" onClick={onPrev}>
        <span className="nav-arrow left">Previous</span>
        <span className="nav-connector"></span>
        <span className="nav-arrow-text">{prevLabel}</span>
      </button>

      <h3 className="skill-card-title">{title}</h3>

      <button type="button" className="nav" onClick={onNext}>
        <span className="nav-arrow right">Next</span>
        <span className="nav-connector"></span>
        <span className="nav-arrow-text">{nextLabel}</span>
      </button>
    </div>
  );
}
