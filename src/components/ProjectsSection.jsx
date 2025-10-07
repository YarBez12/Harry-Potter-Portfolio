import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard.jsx";


export default function ProjectsSection({ projects }) {
  const items = projects.items;
  const PROJECT_INDEX_KEY = "ui:lastProjectIndex";
   const [index, setIndex] = useState(() => {
     const saved = sessionStorage.getItem(PROJECT_INDEX_KEY);
     const n = Number(saved);
     return Number.isInteger(n) && n >= 0 && n < items.length ? n : 0;
   });

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  const current = items[index];
  useEffect(() => {
     sessionStorage.setItem(PROJECT_INDEX_KEY, String(index));
   }, [index]);

  return (
    <section className="box projects-box">
      <h3 className="skill-title">{projects.title}</h3>
      <div className="projects-info">
        <ProjectCard
          project={current}
          prevLabel={items[(index - 1 + items.length) % items.length].title}
          nextLabel={items[(index + 1) % items.length].title}
          onPrev={prev}
          onNext={next}
        />
      </div>
    </section>
  );
}
