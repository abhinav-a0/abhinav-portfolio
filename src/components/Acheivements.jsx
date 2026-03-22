export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-heading">
          {/* <p className="section-label">Achievements</p> */}
          <h2>Coding Milestone</h2>
          <p className="section-subtext">
            A quick highlight of my consistency and progress in problem solving.
          </p>
        </div>

        <div className="achievements-grid">
          <div className="achievement-box highlight-box">
            <span className="achievement-label">Problems Solved</span>
            <h3>400+</h3>
            <p>
              Solved more than 400 problems on LeetCode through regular practice
              in data structures, algorithms, and logical problem solving.
            </p>
          </div>

          <div className="achievement-box highlight-box">
            <span className="achievement-label">Platform</span>
            <h3>LeetCode</h3>
            <p>
              Practiced coding problems consistently to improve confidence,
              accuracy, and coding speed.
            </p>
          </div>

          <div className="achievement-box highlight-box">
            <span className="achievement-label">Focus Area</span>
            <h3>DSA & Algorithms</h3>
            <p>
              Covered arrays, strings, trees, recursion, graphs, and dynamic
              programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}