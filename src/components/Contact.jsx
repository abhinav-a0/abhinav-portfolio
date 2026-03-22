export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        {/* Heading */}
        <div className="section-heading">
          <h2>Let’s Connect</h2>
         <p className="section-subtext contact-subtext">
  Let’s build something impactful together.
</p>
        </div>

        {/* Card */}
        <div className="contact-card">

          <h3>Contact Information</h3>

          <div className="contact-info">
            <p>
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:abhi3466zs@gmail.com">
                abhi3466zs@gmail.com
              </a>
            </p>

            <p>
              💻 <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/abhinav-a0"
                target="_blank"
                rel="noreferrer"
              >
                github.com/abhinav-a0
              </a>
            </p>

            <p>
              🔗 <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/abhinav299/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/abhinav299
              </a>
            </p>
          </div>

          {/* Buttons */}
          <div className="contact-cta">
            <a href="mailto:abhi3466zs@gmail.com" className="primary-btn">
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/abhinav299/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Connect on LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}