
import React from "react";
import "./About.css";

const skills = [
  { name: "C", color: "blue" },
  { name: "C#", color: "green" },
  { name: "C++", color: "blue" },
  { name: "CSS3", color: "cyan" },
  { name: "HTML5", color: "orange" },
  { name: "Python", color: "blue" },
  { name: "PHP", color: "purple" },
  { name: "JavaScript", color: "yellow" },
  { name: "Java", color: "orange" },
  { name: "TypeScript", color: "blue" },
  { name: "Bash Script", color: "gray" },
  { name: "Anaconda", color: "green" },
  { name: "Flutter", color: "blue" },
  { name: "Tailwind CSS", color: "cyan" },
  { name: "MySQL", color: "blue" },
  { name: "MongoDB", color: "green" },
  { name: "Microsoft SQL Server", color: "red" },
  { name: "Canva", color: "cyan" },
  { name: "Blender", color: "orange" },
  { name: "Git", color: "red" },
  { name: "GitHub", color: "gray" },
  { name: "AI Research", color: "cyan" },
  { name: "Robotics", color: "blue" },
  { name: "Mechanical Engineering", color: "orange" },
];

export default function About() {
  return (
    <main className="robotics-page">
      <div className="system-status">
        <span className="status-dot" />
        <span>AI SYSTEM ONLINE</span>
        <span className="status-right">BUILDING A SMARTER TOMORROW</span>
      </div>

      <section className="robot-panel about-panel">
        <div className="brain-card">
          <div className="brain-icon">🧠</div>
          <p>AI + ROBOTICS</p>
          <p>SOFTWARE + DESIGN</p>
          <p>REAL WORLD IMPACT</p>
          <span className="mini-line" />
        </div>

        <div className="about-copy">
          <div className="section-heading">
            <span className="terminal-symbol">&gt;</span>
            <h1>ABOUT ME<span className="cyan">:</span></h1>
          </div>

          <div className="bio-line">
            <span className="bio-icon">🤖</span>
            <p>Currently working on: <strong>Conducting AI Research</strong></p>
          </div>

          <div className="bio-line">
            <span className="bio-icon">🐍</span>
            <p>
              Exploring Python for Artificial Intelligence, data
              preprocessing, and the fundamentals of mechanical engineering.
            </p>
          </div>

          <div className="bio-line">
            <span className="bio-icon">⚙️</span>
            <p>
              I'm a 5th-semester Software Engineering student who loves
              building the <strong>"brains"</strong> behind machines.
            </p>
          </div>

          <div className="role-tag">SOFTWARE ENGINEERING / UI/UX DESIGN</div>
        </div>

        <div className="robot-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="robot-brain">◈</div>
          <div className="robot-arm">🦾</div>
          <div className="robot-label">
            <span>AI ROBOTICS</span>
            <span>ENGINEERING</span>
            <span>IN PROGRESS...</span>
          </div>
        </div>
      </section>

      <section className="robot-panel socials-panel">
        <div className="section-heading">
          <span className="terminal-symbol">&gt;</span>
          <h2>SOCIALS<span className="cyan">:</span></h2>
        </div>

        <div className="social-links">
          <a
            className="social-button instagram"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            ◎ Instagram ↗
          </a>
          <a
            className="social-button linkedin"
            href="https://www.linkedin.com/in/bushra-asad/"
            target="_blank"
            rel="noreferrer"
          >
            in LinkedIn ↗
          </a>
          <a
            className="social-button github"
            href="https://github.com/11bushraasad"
            target="_blank"
            rel="noreferrer"
          >
            ◉ GitHub ↗
          </a>
        </div>
      </section>

      <section className="robot-panel tech-panel">
        <div className="section-heading">
          <span className="terminal-symbol">&gt;</span>
          <h2>TECH STACK<span className="cyan">:</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <span
              className={`skill-chip ${skill.color}`}
              key={skill.name}
            >
              <span className="chip-dot" />
              {skill.name}
            </span>
          ))}
        </div>

        <div className="panel-footer">
          <span>END OF MODULE</span>
          <span className="loading-bars">▰ ▰ ▰ ▰</span>
          <span>STATUS: OPERATIONAL</span>
        </div>
      </section>
    </main>
  );
}
