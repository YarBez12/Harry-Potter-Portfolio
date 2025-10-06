import { Link } from "react-router-dom";

export default function Header({ branding }) {
  return (
    <>
      <div className="headline-divider-row">
        <div className="headline-divider top">
          <Link to="/" className="logo-link">
            <div className="logo-mark"></div>
          </Link>
        </div>
        <span className="headline-text">{branding.topLine}</span>
        <div className="headline-divider rest-top"></div>
      </div>
      <h1 className="main-head">{branding.title}</h1>
      <p className="strapline">
        <span className="star">✶</span>
        {branding.strapLine}
        <span className="star">✶</span>
      </p>
      <div className="headline-divider bottom"></div>
    </>
  );
}
