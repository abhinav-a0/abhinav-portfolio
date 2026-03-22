import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="hero-badge">Full Stack Developer</p>

          <h1 className="hero-title">
            Hi, I'm <span>Abhinav</span>
          </h1>

          <h2 className="hero-subtitle">
            Turning ideas into scalable and high-performance web applications.
          </h2>

          <p className="hero-description">
            I build responsive frontend interfaces and robust backend systems 
            with a strong focus on performance, user experience, and clean, 
            maintainable code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-side">
          <div className="hero-image-frame">
            <img src={profile} alt="Abhinav profile" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}