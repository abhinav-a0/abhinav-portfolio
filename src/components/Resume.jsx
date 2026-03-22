export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-heading resume-heading">
          {/* <span className="section-kicker">Resume</span> */}
          {/* <h2>My Resume</h2>
          <p className="section-subtext">
            You can view or download my resume to get a complete overview of my
            skills, projects, education, and technical background.
          </p> */}
        </div>

        <div className="resume-card">
          <div className="resume-card-content">
            <h3>Full Resume</h3>
            <p>
              This resume includes my full stack development skills, project
              work, problem-solving practice, certifications, and academic
              background.
            </p>

            <div className="resume-actions">
              <a
                href="/resume/Abhinav-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-view-btn"
              >
                View Resume
              </a>

              <a
                href="/resume/Abhinav-Resume.pdf"
                download="Abhinav-Resume.pdf"
                className="resume-download-btn"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}