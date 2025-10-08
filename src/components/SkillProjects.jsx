export default function SkillProjects({ projects, setProjectIndex, allProjects }) {
  function slugify(name) {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  const openProject = (projName) => {
    const slug = slugify(projName);
    const projectsItems = allProjects.items;
    // window.location.hash = "#projects";
    setTimeout(() => {
      document
      .getElementById("project-card")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    setProjectIndex(projectsItems.findIndex((p) => p.slug === slug));
  };

  return (
    <div className="skill-card-projects">
      <span className="skill-card-label">Related Projects:</span>
      <ul className="skill-card-tags">
        {projects.map((proj, i) => (
          <li key={i}>
            <button
              type="button"
              className="tag-link"
              onClick={() => openProject(proj.trim())}
              aria-label={`Open project ${proj}`}
            >
              {proj.trim()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
