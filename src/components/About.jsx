import { highlights } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <h2>Building with logic, teamwork, and consistency</h2>
        </div>

        <div className="card about-card">
          <p>
            I am a Computer Science student and Full Stack Developer with a strong
            interest in building practical, scalable, and user-friendly web
            applications. I enjoy solving problems, writing clean code, and
            continuously improving my technical skills through projects and
            regular practice. Along with development, I value confidence,
            teamwork, and effective collaboration while working on ideas and
            solutions.
          </p>

          <ul className="highlight-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}