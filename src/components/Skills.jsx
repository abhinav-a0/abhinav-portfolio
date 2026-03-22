import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <h2>Technologies I am working with</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-chip" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}