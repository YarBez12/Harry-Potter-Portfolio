import { useState, useEffect } from "react";
import Collapse from "./Collapse";
import ToggleButton from "./ToggleButton.jsx";
import SkillCardHeader from "./SkillCardHeader.jsx";
import SkillProjects from "./SkillProjects.jsx"

export default function HardSkillsBox({ hard_skills, isOpen, toggle, setProjectIndex, allProjects }) {
  const skills = hard_skills.text;
  const SKILL_INDEX_KEY = "ui:lastSkillIndex";
  const [index, setIndex] = useState(() => {
     const saved = sessionStorage.getItem(SKILL_INDEX_KEY);
     const n = Number(saved);
     return Number.isInteger(n) && n >= 0 && n < skills.length ? n : 0;
   });
  const [dir, setDir] = useState("right");

  const current = skills[index];

  const handlePrev = () => {
    if (isOpen === "hard") toggle("hard");
    setDir("left");
    setIndex((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isOpen === "hard") toggle("hard");
    setDir("right");
    setIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
     sessionStorage.setItem(SKILL_INDEX_KEY, String(index));
   }, [index]);
  return (
    <section className="box skill-card-box">
      <h3 className="skill-title">{hard_skills.title}</h3>
      <article
        key={current.title}
        className={`skill-card anim-${dir}`}
        aria-live="polite"
      >

        <SkillCardHeader
          title={current.title}
          prevLabel={skills[(index - 1 + skills.length) % skills.length].title}
          nextLabel={skills[(index + 1) % skills.length].title}
          onPrev={handlePrev}
          onNext={handleNext}
        ></SkillCardHeader>

        <div className="skill-card-line thick" />

        <section className="skill-card-body">
          <p>
            {current.description}
            <ToggleButton
              id="hard"
              isOpen={isOpen}
              toggle={toggle}
            ></ToggleButton>
          </p>
        </section>
        <Collapse isOpen={isOpen === "hard"}>
          {isOpen === `hard` && (
            <>
              <div className="skill-card-line thin" />
              <div className="skill-card-details">
                {current.additional_information}
              </div>
            </>
          )}
        </Collapse>

        {current.projects?.length ? (
          <>
            <div className="skill-card-line thin" />
            <SkillProjects projects={current.projects} setProjectIndex={setProjectIndex} allProjects={allProjects}></SkillProjects>
          </>
        ) : null}
      </article>
    </section>
  );
}
