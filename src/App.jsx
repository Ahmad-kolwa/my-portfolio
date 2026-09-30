import "./App.css";

function App() {
 const projects = [
  {
    title: "PSRS Recruitment System",
    description:
      "A recruitment management system for managing applicants, vacancies, applications, interviews, results and placements.",
    technologies: "Laravel • React • MySQL • REST API • Sanctum",
    github: "https://github.com/Ahmad-kolwa/psrs-recruitment-system",
    platform: "GitHub",
  },
  {
    title: "Permit Management System",
    description:
      "A system for managing permits, users, payments and permit-related activities with role-based access.",
    technologies: "Laravel • PHP • MySQL • REST API",
    github: "https://github.com/Ahmad-kolwa/permit-system",
    platform: "GitHub",
  },
  {
    title: "Asset Management System",
    description:
      "A system for managing organizational assets, categories and service requests for different users.",
    technologies: "Laravel • PHP • MySQL • REST API",
    github: "https://github.com/Ahmad-kolwa/assets-management-system",
    platform: "GitHub",
  },
];

const mobileProjects = [
  {
    title: "BAKWATA Management App",
    description:
      "A mobile application designed to support the management of mosque activities, children's centres, inheritance records and marriage certificate records within BAKWATA, Temeke Branch.",
    technologies: "Flutter • Dart",
    gitlab: "https://gitlab.com/jumahmad2000/bakwata",
    platform: "GitLab",
  },
  {
    title: "Camber Wakala",
    description:
      "A mobile application designed to help track agents and the distribution of money between branches and smaller agents.",
    technologies: "Flutter • Dart",
    gitlab: "https://gitlab.com/PeresWatson/camber-wakala",
    platform: "GitLab",
  },
  {
    title: "Madrassa App",
    description:
      "A mobile learning application providing access to Islamic educational videos, digital books and information about religious teachers and leaders.",
    technologies: "Flutter • Dart",
    gitlab: "https://gitlab.com/jumahmad2000/madrassa_app_new",
    platform: "GitLab",
  },
];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <h2>Ahmad Juma</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div>
          <p className="hello">HELLO, I'M</p>

          <h1>Ahmad Juma</h1>

          <h2>IT / Software Developer</h2>

          <p className="hero-text">
            I build web applications and REST APIs using Laravel, React,
            JavaScript and MySQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a
              href="https://github.com/Ahmad-kolwa"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <p>
          I am an Information Technology graduate interested in software
          development, web applications, database systems and REST APIs.
          I enjoy building practical systems that solve real-world problems.
        </p>

        <p>
          My main technologies include PHP, Laravel, React.js, JavaScript,
          MySQL, HTML, CSS and Git/GitHub.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>

      <div className="skills">
  <span>PHP</span>
  <span>Laravel</span>
  <span>React.js</span>
  <span>JavaScript</span>
  <span>HTML</span>
  <span>CSS</span>
  <span>MySQL</span>
  <span>REST API</span>
  <span>Flutter</span>
  <span>Dart</span>
  <span>Git</span>
  <span>GitHub</span>
  <span>GitLab</span>
  <span>Postman</span>
  <span>OOP</span>
</div>
      </section>

     {/* Web Projects */}
<section id="projects" className="section">
  <h2 className="section-title">Web Projects</h2>

  <div className="projects">
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <p className="technologies">
          {project.technologies}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on {project.platform} →
        </a>
      </div>
    ))}
  </div>

  <h2 className="section-title mobile-title">
    Mobile Applications
  </h2>

  <div className="projects">
    {mobileProjects.map((project, index) => (
      <div className="project-card" key={index}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <p className="technologies">
          {project.technologies}
        </p>

        <a
          href={project.gitlab}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on {project.platform} →
        </a>
      </div>
    ))}
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Contact Me</h2>

        <p>
          Interested in working together or discussing a project?
        </p>

        <a href="mailto:jumahmad2000@gmail.com" className="btn primary">
          Send Me an Email
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Ahmad Juma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;