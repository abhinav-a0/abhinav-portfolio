import { certificates } from "../data/portfolioData";

export default function Certificates() {
  const openCertificate = (imagePath) => {
    window.open(imagePath, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section certificates-section" id="certificates">
      <div className="container">
        <div className="certificates-heading">
          <h2 className="cert-title">
            Certifications That Support My Learning
          </h2>

          <p className="section-subtext">
            These certifications reflect my continuous learning in web development,
            JavaScript, React, and problem solving.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-card" key={cert.title}>
              <div className="certificate-image-wrap">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-image"
                />
              </div>

              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>

                <button
                  type="button"
                  onClick={() => openCertificate(cert.image)}
                  className="certificate-btn"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}