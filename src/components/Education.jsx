import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-heading">
          <h2>My learning background</h2>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <div className="card timeline-item" key={item.title}>
              <h3>{item.title}</h3>
              <h4>{item.place}</h4>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}