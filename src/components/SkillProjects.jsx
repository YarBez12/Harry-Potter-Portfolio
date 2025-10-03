export default function SkillProjects({projects}) {
  return (
    <div className="skill-card-projects">
      <span className="skill-card-label">Related Projects:</span>
      <ul className="skill-card-tags">
        {projects.map((proj, i) => (
          <li key={i}>{proj.trim()}</li>
        ))}
      </ul>
    </div>
  );
}
