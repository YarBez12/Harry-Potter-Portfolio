export default function SoftSkillItem({skill}) {
  return (
    <div className="soft-skill-block">
      <h4 className="soft-skill-name highlight">{skill.title}</h4>
      <div className="soft-skill-description dropca">
        <div dangerouslySetInnerHTML={{ __html: skill.description }}></div>
      </div>
    </div>
  );
}
