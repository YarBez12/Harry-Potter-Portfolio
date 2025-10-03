import { useState } from "react";
import Collapse from "./Collapse";
import ToggleButton from "./ToggleButton.jsx";
import SkillCardHeader from "./SkillCardHeader.jsx";
import SkillProjects from "./SkillProjects.jsx"

export default function HardSkillsBox({ hard_skills, isOpen, toggle }) {
  const skills = hard_skills.text;
  const [index, setIndex] = useState(0);
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

        <section className="skill-card-body dropcap">
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
            <SkillProjects projects={current.projects}></SkillProjects>
          </>
        ) : null}
      </article>
    </section>
  );
}
