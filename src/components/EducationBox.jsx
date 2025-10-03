import ToggleButton from "./ToggleButton.jsx";
import Collapse from "./Collapse";

export default function EducationBox({ education, isOpen, toggle }) {
  return (
    <section className="box education-box">
      <h3 className="skill-title">{education.title}</h3>
      <ul className="education-list">
        {education.text.map((s, i) => (
          <li key={i} className="education-item">
            <header className="education-head">
              <h4 className="education-institution">
                {s.institution} -
                <span className="education-location"> {s.location}</span>
                <ToggleButton
                  id={s.focus ? "university:focus" : "school:details"}
                  isOpen={isOpen}
                  toggle={toggle}
                ></ToggleButton>
              </h4>
              {s.years ? (
                <span className="education-years">{s.years}</span>
              ) : null}
            </header>

            {s.degree ? (
              <p className="education-degree highlight">{s.degree}</p>
            ) : null}

            <div className="education-meta">
              {s.average_grade ? (
                <span className="education-badge">
                  Average Grade: {s.average_grade}
                </span>
              ) : null}

              {s.course_info ? (
                <>
                  <a
                    className="education-link"
                    href={s.course_info}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Course info ↗
                  </a>
                </>
              ) : null}
            </div>
            <Collapse isOpen={isOpen === "university:focus"}>
              {s.focus && (
                <>
                  <div className="education-subrule" />
                  <p className="education-focus">{s.focus}</p>
                </>
              )}
            </Collapse>
            <Collapse isOpen={isOpen === "school:details"}>
              {s.details && (
                <>
                  <div className="education-subrule" />
                  <p className="education-details">{s.details}</p>
                </>
              )}
            </Collapse>
          </li>
        ))}
      </ul>
    </section>
  );
}
