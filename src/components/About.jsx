
import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Layers3,
  Rocket,
  ArrowUpRight,
  Terminal
} from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Clean Development",
    description:
      "Writing organized, maintainable code with attention to quality and performance."
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Turning real-world challenges into practical digital solutions."
  },
  {
    icon: Layers3,
    title: "Full-Stack Thinking",
    description:
      "Understanding how frontend, backend and databases work together."
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "Exploring new technologies and constantly improving my development skills."
  }
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container-inner">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">02 / THE PERSON BEHIND THE CODE</span>
          <h2>More than just <span>writing code.</span></h2>
          <p>
            Technology is my tool. Problem-solving is my mindset.
            Building useful digital experiences is my mission.
          </p>
        </motion.div>

        <div className="about-grid">

          <motion.div
            className="about-profile-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="profile-card-top">
              <span><Terminal size={16}/> DEVELOPER PROFILE</span>
              <span className="profile-live">● ACTIVE</span>
            </div>

            <div className="about-monogram">KI<span>.</span></div>

            <h3>Kayiranga Innocent</h3>
            <p className="about-role">Full-Stack Developer</p>

            <div className="profile-divider"></div>

            <div className="profile-detail">
              <span>EDUCATION</span>
              <strong>Software Development Student</strong>
            </div>

            <div className="profile-detail">
              <span>APPROACH</span>
              <strong>Learn · Build · Improve</strong>
            </div>

            <div className="profile-detail">
              <span>INTEREST</span>
              <strong>Technology & Innovation</strong>
            </div>

            <div className="profile-card-bottom">
              <span>DESIGNED TO BUILD WHAT'S NEXT</span>
              <ArrowUpRight size={18}/>
            </div>
          </motion.div>

          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="story-eyebrow">MY STORY</span>

            <h3>
              I believe great technology starts with
              <span> great ideas.</span>
            </h3>

           
<p>
  I'm Kayiranga Innocent, a Software Development
  student and aspiring Full-Stack Developer passionate
  about creating modern web applications and digital systems.
</p>

<p>
  My journey in software development is driven by curiosity,
  continuous learning and the desire to transform real-world
  challenges into practical digital solutions.
</p>

<p>
  I work with JavaScript, TypeScript, PHP, Python,
  HTML, CSS and SQL, exploring how different technologies
  come together to build useful applications.
</p>

<p>
  Every project is an opportunity to learn something new,
  strengthen my engineering skills and create something meaningful.
</p>


            <div className="about-quote">
              "Don't just imagine what technology can do.
              Build it."
            </div>

            <a href="#projects" className="about-link">
              Explore my projects <ArrowUpRight size={18}/>
            </a>
          </motion.div>
        </div>

        <div className="strength-heading">
          <span className="section-label">WHAT DRIVES MY WORK</span>
          <h3>My development philosophy.</h3>
        </div>

        <div className="strength-grid">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="strength-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -7 }}
              >
                <div className="strength-icon">
                  <Icon size={23}/>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <span className="strength-number">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
