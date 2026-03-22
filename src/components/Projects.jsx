import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <h2>Work that reflects my learning journey</h2>
        </div>

        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
            <article className="card project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}