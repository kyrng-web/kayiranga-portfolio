
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Globe,
  Terminal,
  Sparkles
} from "lucide-react";
export default function Hero() {
  return (
    <section className="hero section-container" id="home">

      <div className="hero-grid"></div>

      <div className="hero-content">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="status-dot"></span>
          OPEN TO OPPORTUNITIES
        </motion.div>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hello, world! I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Kayiranga
          <br />
          <span>Innocent.</span>
        </motion.h1>

        <motion.div
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          FULL-STACK DEVELOPER
          <span className="role-cursor">_</span>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          I transform ambitious ideas into powerful digital
          experiences. Building modern applications, intelligent
          systems and solutions that make a real difference.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#projects" className="primary-button">
            Explore My Work <ArrowUpRight size={19} />
          </a>

          <a href="#contact" className="secondary-button">
            Let's Talk
          </a>
        </motion.div>

        <div className="hero-socials">
          <span>CONNECT WITH ME</span>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Code2 size={19} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Code2 size={19} />
          </a>
        </div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <motion.div
          className="identity-card"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="identity-top">
            <Sparkles size={17} />
            <span>DEVELOPER IDENTITY</span>
            <span className="online-indicator"></span>
          </div>

          <div className="identity-avatar">
            KI<span>.</span>
          </div>

          <h2>Kayiranga Innocent</h2>
          <p>Full-Stack Developer</p>

          <div className="identity-tags">
            <span>CREATIVE</span>
            <span>DEVELOPER</span>
            <span>INNOVATOR</span>
          </div>
        </motion.div>

        <motion.div
          className="terminal-card"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <i></i><i></i><i></i>
            </div>
            <span><Terminal size={15} /> developer.js</span>
          </div>

          <div className="terminal-code">
            <p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
            <p>&nbsp;&nbsp;name: <span className="code-green">'Kayiranga Innocent'</span>,</p>
            <p>&nbsp;&nbsp;role: <span className="code-yellow">'Full-Stack Developer'</span>,</p>
            <p>&nbsp;&nbsp;passion: <span className="code-green">'Building the future'</span>,</p>
            <p>&nbsp;&nbsp;status: <span className="code-yellow">'Always learning'</span></p>
            <p>{"}"}</p>
          </div>
        </motion.div>

        <div className="floating-tech tech-one">React.js</div>
        <div className="floating-tech tech-two">Node.js</div>
        <div className="floating-tech tech-three">MongoDB</div>
      </motion.div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={16} /> SCROLL TO EXPLORE
      </a>

      <div className="hero-index">01 / WELCOME TO MY WORLD</div>
    </section>
  );
}
