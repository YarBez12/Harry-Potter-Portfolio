import SoftSkillItem from "./SoftSkillItem.jsx"

export default function SoftSkillsBox({soft_skills}) {
  return (
    <section className="box soft-skills-box">
      <h2 className="skill-title">{soft_skills.title}</h2>
      <div className="soft-skills-list">
        {soft_skills.text.map((skill, index) => (
          <SoftSkillItem skill={skill}></SoftSkillItem>
        ))}
      </div>
    </section>
  );
}
