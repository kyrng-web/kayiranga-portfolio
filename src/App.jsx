
import { useState } from "react";
import {
 
    ArrowUpRight,
  Mail,
  Code2,
  Database,
  Monitor,
  Server,
  Wrench,
  CarFront,
  GraduationCap,
  Boxes,
  Users,
  Send,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "SmartPark",
    subtitle: "Stock Inventory Management System",
    description:
      "An inventory management application designed to organize spare-parts records, purchases, stock-in, stock-out, available quantities and daily reports.",
    icon: Boxes,
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    color: "orange",
  },
  {
    number: "02",
    title: "CWSMS",
    subtitle: "Car Wash Management System",
    description:
      "A digital management solution for car wash operations, including user registration, authentication and wash package management.",
    icon: CarFront,
    stack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    color: "blue",
  },
  {
    number: "03",
    title: "Estudy Learn",
    subtitle: "Educational Learning Platform",
    description:
      "An educational platform designed to support digital learning, student resources and AI-assisted learning experiences.",
    icon: GraduationCap,
    stack: ["JavaScript", "HTML", "CSS", "Node.js", "MongoDB"],
    color: "purple",
  },
  {
    number: "04",
    title: "Workers Record",
    subtitle: "Workers Record Management System",
    description:
      "A web-based project focused on organizing worker information and managing workforce records digitally.",
    icon: Users,
    stack: ["JavaScript", "React", "Node.js", "MongoDB"],
    color: "green",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "PHP", "Python"],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: ["HTML5", "CSS3", "React.js", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "PHP", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MongoDB", "Database Design"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-heading projects-heading">
          <span>03 / SELECTED WORK</span>
          <h2>Ideas into <em>reality.</em></h2>
          <p>
            A selection of software projects representing my interest
            in building practical digital solutions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className={`project-card project-${project.color}`}
                key={project.number}
              >
                <div className="project-card-top">
                  <span className="project-number">
                    PROJECT {project.number}
                  </span>
                  <span className="project-status">PROJECT SHOWCASE</span>
                </div>

                <div className="project-icon">
                  <Icon size={30} />
                </div>

                <span className="project-category">
                  {project.subtitle}
                </span>

                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card-bottom">
                  <span>BUILT WITH PURPOSE</span>
                  <ArrowUpRight size={20} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-cta">
          <span>ALWAYS BUILDING</span>
          <h3>More ideas. More possibilities.</h3>
          <a href="#contact" className="primary-button">
            Work With Me <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="section-heading">
          <span>04 / MY TOOLKIT</span>
          <h2>Technology meets <em>creativity.</em></h2>
          <p>
            The languages, technologies and tools I use to turn
            ideas into functional digital experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-icon">
                  <Icon size={25} />
                </div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-note">
          <span className="skills-dot" />
          Always learning. Always improving.
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <span>05 / LET'S CONNECT</span>
          <h2>
            Have an idea?
            <br />
            Let's <em>build it.</em>
          </h2>
          <p>
            I'm interested in software development, creative
            collaborations and opportunities to build meaningful
            digital products.
          </p>

          <div className="contact-actions">
            <a
              className="primary-button"
             href="mailto:krngnncnt@gmail.com"
            >
              <Mail size={18} /> Email Me
            </a>
            <a
              className="secondary-button"
              href="https://github.com/kyrng-web"
              target="_blank"
              rel="noreferrer"
            >
             <Code2 size={18} />. 
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">
            <Send size={28} />
          </div>
          <span>OPEN TO OPPORTUNITIES</span>
          <h3>Let's create something meaningful.</h3>
          <p>
            Have a project, an idea or an opportunity?
            I'd be glad to hear from you.
          </p>
          <a href="mailto:YOUR_EMAIL@example.com">
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <footer className="portfolio-footer">
        <a href="#home" className="footer-logo">KAYIRANGA.</a>
        <p>Designed & built with passion by Kayiranga Innocent.</p>
        <span>© {new Date().getFullYear()} — ALL RIGHTS RESERVED</span>
      </footer>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => current === "dark" ? "light" : "dark");
  };

  return (
    <main className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
