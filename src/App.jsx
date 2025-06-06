// javascript
import React, { useRef } from 'react';
import ThreeBG from "./ThreeBG";

const projects = [
  {
    title: "Fitness Trainer Appointment Scheduling Website",
    description: "Built a CRUD-based scheduling system using HTML, CSS, JavaScript to manage trainer appointments.",
    link: "#"
  },
  {
    title: "Real-Time Localized Air Quality Monitoring System",
    description: "Used sensors and ML techniques to build a system for tracking air quality index and predicting pollution trends.",
    link: "#"
  },
  {
    title: "Touchless Thermal Scanner with Integrated Hand Sanitizer",
    description: "Developed a CoVid-19 hygiene detection system using Arduino UNO for public safety.",
    link: "#"
  }
];

const CARDS_PER_VIEW = 3;

export default function App() {
  const [start, setStart] = React.useState(0);
  const carouselRef = useRef(null);

  // Drag-to-scroll logic
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    carouselRef.current.classList.add('active');
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    carouselRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown = false;
    carouselRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  let touchStartX = 0;
  let touchScrollLeft = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = carouselRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 1.5;
    carouselRef.current.scrollLeft = touchScrollLeft - walk;
  };

  const end = start + CARDS_PER_VIEW;
  const canGoPrev = start > 0;
  const canGoNext = end < projects.length;

  const handlePrev = () => setStart((prev) => Math.max(0, prev - CARDS_PER_VIEW));
  const handleNext = () => setStart((prev) => Math.min(projects.length - CARDS_PER_VIEW, prev + CARDS_PER_VIEW));

  const scrollByCards = (direction = 1) => {
    if (carouselRef.current) {
      const cardWidth = 320 + 32; // card width + gap (2rem ≈ 32px)
      carouselRef.current.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const visibleProjects = projects.slice(start, end);

  const handleCopyMobile = () => {
    navigator.clipboard.writeText("6300929130");
    alert("Mobile number copied!");
  };

  return (
    <>
      <ThreeBG />
      <div style={{position: "relative", zIndex: 2}}>
        <nav className="navbar">
          <div className="logo">
            Naveen Kumar Balne
            <span style={{
              display: "block",
              fontSize: "0.95rem",
              fontWeight: 400,
              color: "#b3e0ff",
              letterSpacing: "0.5px"
            }}>
            </span>
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <section id="home" className="section">
          <div>
            <span style={{
              display: "block",
              fontSize: "2rem",
              fontWeight: 500,
              color: "#fff",
              marginBottom: "0.2em"
            }}>
              Hello,
            </span>
            <span style={{
              display: "block",
              fontSize: "3.2rem",
              fontWeight: 800,
              color: "#b3e0ff",
              lineHeight: 1.1,
              marginBottom: "0.5em"
            }}>
              I'm Naveen Kumar Balne
            </span>
            <p style={{fontWeight: 500, fontSize: "1.25rem", color: "#b3e0ff", marginBottom: 0}}>
              Java Full Stack Developer &nbsp;|&nbsp; Web Developer &nbsp;|&nbsp; JavaScript Enthusiast
            </p>
          </div>
        </section>
        <div className="section-divider"></div>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            Software Developer passionate about building scalable, modern web applications and APIs. I love working with Java, Spring Boot, and React, and thrive in collaborative, fast-paced environments.
          </p>
          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="Java">☕</span>
              <span>Java</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="Spring Boot">🌱</span>
              <span>Spring Boot</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="React">⚛️</span>
              <span>React</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="JavaScript">🟨</span>
              <span>JavaScript</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="HTML">📄</span>
              <span>HTML</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="CSS">🎨</span>
              <span>CSS</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="MySQL">🗄️</span>
              <span>MySQL</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="REST API">🔗</span>
              <span>REST APIs</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="Docker">🐳</span>
              <span>Docker</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="Git">🔧</span>
              <span>Git</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="Linux">🐧</span>
              <span>Linux</span>
            </div>
            <div className="skill-card">
              <span className="skill-icon" role="img" aria-label="Cloud">☁️</span>
              <span>Azure</span>
            </div>
          </div>
        </section>
        <div className="section-divider"></div>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="carousel-multi-container">
            <button className="carousel-btn" onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: -352, behavior: 'smooth' });
              }
            }} aria-label="Previous Projects">&#8592;</button>
            <div
              className="carousel-multi-track"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {projects.map((proj, idx) => (
                <div className="project-card" key={proj.title + idx}>
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                </div>
              ))}
            </div>
            <button className="carousel-btn" onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: 352, behavior: 'smooth' });
              }
            }} aria-label="Next Projects">&#8594;</button>
          </div>
        </section>
        <div className="section-divider"></div>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="contact-card">
            <div className="contact-info">
              <div className="contact-icons">
                <a href="mailto:naveenkumar1212000@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                  <span role="img" aria-label="email">📧</span>
                </a>
                <a href="https://www.linkedin.com/in/naveen-kumar-balne" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <span role="img" aria-label="linkedin">💼</span>
                </a>
                <a href="https://github.com/NaveenShelby12" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <span role="img" aria-label="github">🐙</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyMobile}
                  title="Copy Mobile Number"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "2rem",
                    padding: 0,
                    margin: 0,
                    color: "inherit"
                  }}
                >
                  <span role="img" aria-label="phone">📱</span>
                </button>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formspree.io/f/xnnvnjjd"
              method="POST"
              accept-charset="UTF-8"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required />
              <button type="submit">Send Message 🚀</button>
            </form>
          </div>
        </section>
        <footer>
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}