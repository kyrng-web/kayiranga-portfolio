
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  GraduationCap,
  Car,
  Package,
  Users,
  Layers3
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "SmartPark",
    subtitle: "Stock Inventory Management System",
    description:
      "A software project focused on managing stock inventory and organizing inventory-related operations.",
    category: "INVENTORY MANAGEMENT",
    icon: Package,
    technologies: ["JavaScript", "PHP", "SQL"],
    color: "orange",
    status: "PROJECT SHOWCASE"
  },
  {
    number: "02",
    name: "CWSMS",
    subtitle: "Car Wash Management System",
    description:
      "A management system designed around the organization of car wash business operations.",
    category: "BUSINESS MANAGEMENT",
    icon: Car,
    technologies: ["JavaScript", "PHP", "SQL"],
    color: "blue",
    status: "PROJECT SHOWCASE"
  },
  {
    number: "03",
    name: "Estudy Learn",
    subtitle: "Educational Platform",
    description:
      "An educational platform project focused on bringing learning-related experiences into a digital environment.",
    category: "EDUCATION TECHNOLOGY",
    icon: GraduationCap,
    technologies: ["JavaScript", "HTML", "CSS"],
    color: "purple",
    status: "PROJECT SHOWCASE"
  },
  {
    number: "04",
    name: "Workers Record",
    subtitle: "Workers Record Management System",
    description:
      "A software project focused on organizing and managing workers' records digitally.",
    category: "RECORD MANAGEMENT",
    icon: Users,
    technologies: ["PHP", "SQL", "JavaScript"],
    color: "green",
    status: "PROJECT SHOWCASE"
  }
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            03 / SELECTED WORK
          </span>

          <h2>
            Ideas into <span>reality.</span>
          </h2>

          <p>
            A selection of software projects representing
            my interest in building practical digital solutions.
          </p>
        </motion.div>

        <div className="projects-topline">
          <span>FEATURED PROJECTS</span>
          <span>04 PROJECTS / 2026</span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className={`project-card ${project.color}`}
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-visual">
                  <div className="project-visual-top">
                    <span>{project.category}</span>
                    <span>{project.number} / 04</span>
                  </div>

                  <div className="project-graphic">
                    <div className="project-orbit"></div>
                    <div className="project-icon">
                      <Icon size={48} strokeWidth={1.3}/>
                    </div>
                    <span className="project-symbol">
                      KI.
                    </span>
                  </div>

                  <span className="project-status">
                    <span></span>
                    {project.status}
                  </span>
                </div>

                <div className="project-content">
                  <div className="project-number">
                    PROJECT {project.number}
                  </div>

                  <h3>{project.name}</h3>

                  <h4>{project.subtitle}</h4>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span>CASE STUDY</span>
                    <ArrowUpRight size={20}/>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="projects-bottom">
          <div>
            <span className="section-label">
              ALWAYS BUILDING
            </span>
            <h3>More ideas. More possibilities.</h3>
          </div>

          <a href="#contact" className="primary-button">
            Work With Me <ArrowUpRight size={18}/>
          </a>
        </div>

      </div>
    </section>
  );
}
