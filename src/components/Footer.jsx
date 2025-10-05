import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="https://github.com/YarBez12" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <span className="divider">✦</span>
        <a href="https://www.linkedin.com/in/yaroslavbezvesilnyi/" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <span className="divider">✦</span>
        <a href="mailto:yaroslavbezvesilnyi@gmail.com">
          <FaEnvelope /> Email
        </a>
        <span className="divider">✦</span>
        <a href="https://www.instagram.com/bez_yar/" target="_blank" rel="noreferrer">
          <FaInstagram /> Instagram
        </a>
      </div>
      <p className="footer-note">
        Built with React & a custom CSS theme
      </p>
    </footer>
  );
}