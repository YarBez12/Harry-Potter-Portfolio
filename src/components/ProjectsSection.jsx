import ProjectCard from "./ProjectCard.jsx";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectsSection({ projects, index, setIndex }) {
  const items = projects.items;
  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  const current = items[index];

  const variants = {
    initial: { opacity: 0, y: 12, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -12, scale: 0.98 },
  };

  return (
    <section className="box projects-box">
      <h3 className="skill-title">{projects.title}</h3>
      <div className="projects-info">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ProjectCard
              project={current}
              prevLabel={items[(index - 1 + items.length) % items.length].title}
              nextLabel={items[(index + 1) % items.length].title}
              onPrev={prev}
              onNext={next}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
