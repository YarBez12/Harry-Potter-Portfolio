// ProjectCard.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="skill-card project">
      <div className="project-card-header">
        <h3 className="skill-card-title">{project.title}</h3>

        <div className="project-links">
          <a
            className="btn-link"
            href={project.links.git_hub}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          {project.links.live && (
            <a
              className="btn-link"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>

      <div className="skill-card-line thick" />

      <section className="skill-card-body">
        <p dangerouslySetInnerHTML={{ __html: project.short_description }} />
      </section>

      {project.tech ? (
        <>
          <div className="skill-card-line thin" />
          <p className="project-tech">
            <span className="highlight">Tech:</span> {project.tech}
          </p>
        </>
      ) : null}

      <div className="skill-card-line thin" />

      <div className="project-actions">
        <Link to={`/projects/${project.slug}`} className="btn-primary">
          View More
        </Link>
      </div>
    </article>
  );
}
