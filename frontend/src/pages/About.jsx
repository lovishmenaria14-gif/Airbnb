import React from "react";
import "../about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">

        <div className="about-hero">

          <div className="about-content">
            <h1>About Airbnb Clone</h1>

            <p>
              <strong>Airbnb Clone</strong> is a modern vacation rental platform
              that connects travelers with unique stays around the world.
              Whether you're looking for cozy apartments, luxury villas, or
              budget-friendly homes, our platform makes booking simple, secure,
              and convenient.
            </p>

            <p>
              This project demonstrates a complete MERN Stack application with
              user authentication, property listings, booking management,
              responsive design, and secure backend integration to simulate a
              real-world Airbnb experience.
            </p>
          </div>

          <div className="founder-image">
            <img src="/airbnb.png" alt="Airbnb Clone" />
          </div>

        </div>

        <section className="founder-section">

          <h2>Meet the Developer</h2>

          <div className="founder-card">

            <div className="founder-photo">
              <img src="/p.jpg" alt="Lovish Menaria" />
            </div>

            <div className="founder-content">

              <h3>Lovish Menaria</h3>

              <p>
                Hi! I'm <strong>Lovish Menaria</strong>, a Full Stack Developer
                passionate about building modern web applications. I created
                this <strong>Airbnb Clone</strong> using the MERN Stack
                (MongoDB, Express.js, React.js, and Node.js) to replicate the
                core features of Airbnb while strengthening my full-stack
                development skills.
              </p>

              <p>
                The project includes user authentication, property listing and
                management, image uploads, booking functionality, responsive UI,
                and RESTful APIs. It reflects real-world software engineering
                practices and scalable application architecture.
              </p>

              <div className="founder-links">

                <a
                  href="https://lovish-14-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐 Portfolio
                </a>

                <a
                  href="https://github.com/lovishmenaria14-gif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💻 GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/lovish-menaria-b6b562316/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 LinkedIn
                </a>

              </div>

            </div>

          </div>

        </section>

        <section className="features">

          <h2>Platform Highlights</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>🏠 Property Listings</h3>
              <p>
                Browse apartments, villas, cabins, and unique stays with
                detailed information and images.
              </p>
            </div>

            <div className="feature-card">
              <h3>📅 Booking System</h3>
              <p>
                Book accommodations with an intuitive reservation process and
                booking management.
              </p>
            </div>

            <div className="feature-card">
              <h3>🔒 Secure Authentication</h3>
              <p>
                User registration, login, and protected routes using JWT-based
                authentication.
              </p>
            </div>

            <div className="feature-card">
              <h3>⚡ MERN Stack</h3>
              <p>
                Built using MongoDB, Express.js, React.js, and Node.js with a
                responsive and modern UI.
              </p>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
};

export default About;