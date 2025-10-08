import { motion } from "framer-motion";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import MainFrame from "./MainFrame.jsx";
import SubHeader from "./SubHeader.jsx";

export default function ProjectDetails({ projects, frame }) {
  const { slug } = useParams();
  const project = projects.items.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="content-frame">
        <MainFrame frame={frame} />
        <div className="frame-inner bodycopy error">
          <h2>Project not found</h2>
          <p>
            <Link to="/" className="link">
              ← Back to homepage
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="content-frame">
      <MainFrame frame={frame} />
      <motion.div
        className="frame-inner bodycopy"
        initial={{ opacity: 0, y: 16, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <SubHeader
          title={{ name: project.title, dividerLabel: "PROJECT DETAILS" }}
        />

        <div className="project-details">
          <div className="project-links">
            <div className="links-left">
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
            <div className="links-right">
              <Link to="/" className="btn-link btn-ghost">
                ← Back
              </Link>
            </div>
          </div>
          <p
            className="introduction"
            dangerouslySetInnerHTML={{
              __html: project.detailed_description.introduction,
            }}
          />

          <p>
            <span className="highlight">Tech:</span> {project.tech}
          </p>

          <div className="headline-divider bottom" />

          <h3 className="section-title">Key Features</h3>
          <ul className="pretty-list">
            {project.detailed_description.features?.map((f, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: f }}></li>
            ))}
          </ul>

          {project.detailed_description.screenshots?.length ? (
            <>
              <div className="headline-divider bottom" />
              <h3 className="section-title">Screenshots</h3>
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="screenshot-grid"
              >
                {project.detailed_description.screenshots.map((src, i) => (
                  <a href={src} key={i} className="shot">
                    <img
                      src={src}
                      alt={`${project.title} – screenshot ${i + 1}`}
                    />
                  </a>
                ))}
              </LightGallery>
            </>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
