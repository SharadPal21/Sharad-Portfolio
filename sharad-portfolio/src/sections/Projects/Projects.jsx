import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { useTilt } from "../../hooks/useTilt";
import { projects as PROJECTS } from "../../data/projects";
import { FiGithub, FiExternalLink, FiX, FiCpu, FiCode, FiGlobe, FiLayers } from "react-icons/fi";
import "./Projects.css";

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "systems", label: "Systems" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "AI/ML" },
];

function ProjectModal({ p, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-modal"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="p-modal__content glass-card"
        onClick={e => e.stopPropagation()}
        style={{ "--pc": p.color }}
      >
        <button className="p-modal__close" onClick={onClose} aria-label="Close">
          <FiX size={24} />
        </button>

        <div className="p-modal__body">
          <div className="p-modal__visual">
            <video autoPlay loop muted playsInline src={p.video} className="p-modal__video" />
            <div className="p-modal__visual-overlay" />
            <div className="p-modal__visual-info">
              <span className="p-modal__emoji">{p.emoji}</span>
              <h2 className="p-modal__title">{p.title}</h2>
            </div>
          </div>
          
          <div className="p-modal__main">
            <div className="p-modal__header">
              <div className="p-modal__tags">
                {p.tags.map(t => <span key={t} className="p-modal__tag">{t}</span>)}
              </div>
              <div className="p-modal__actions">
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <FiExternalLink size={18} /> Live Demo
                </a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-outline">
                  <FiGithub size={18} /> Code
                </a>
              </div>
            </div>

            <div className="p-modal__grid">
              <div className="p-modal__desc-col">
                <h3 className="p-modal__section-title"><FiLayers /> Overview</h3>
                <p className="p-modal__text">{p.longDesc || p.shortDesc}</p>
                
                {p.features && (
                  <>
                    <h3 className="p-modal__section-title"><FiCode /> Features</h3>
                    <ul className="p-modal__features">
                      {p.features.map((f, i) => (
                        <li key={i} className="p-modal__feature">
                          <span className="p-modal__feature-dot" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="p-modal__stats-col">
                <div className="p-modal__stack-card">
                  <h3 className="p-modal__sidebar-title">Architecture</h3>
                  <div className="p-modal__stack">
                    <div className="p-modal__stack-item">
                      <FiCode size={18} /> <span>Frontend: React, Tailwind</span>
                    </div>
                    <div className="p-modal__stack-item">
                      <FiCpu size={18} /> <span>Backend: {p.tags[0]}</span>
                    </div>
                    <div className="p-modal__stack-item">
                      <FiGlobe size={18} /> <span>Cloud: Docker, AWS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ p, onOpen, isLarge }) {
  const tiltRef = useTilt({ maxTilt: 5, scale: 1.01 });
  
  return (
    <motion.article 
      layout
      className={`p-card glass-card ${isLarge ? "p-card--large" : ""}`}
      ref={tiltRef}
      style={{ "--pc": p.color }}
      onClick={() => onOpen(p)}
    >
      <div className="p-card__visual">
        <video autoPlay loop muted playsInline className="p-card__video" src={p.video} />
        <div className="p-card__overlay" />
      </div>
      
      <div className="p-card__content">
        <div className="p-card__top">
          <span className="p-card__emoji">{p.emoji}</span>
          <div className="p-card__tags">
            {p.tags.slice(0, 2).map(t => <span key={t} className="p-card__tag">{t}</span>)}
          </div>
        </div>
        
        <div className="p-card__main">
          <h3 className="p-card__title">{p.title}</h3>
          <p className="p-card__desc">{p.shortDesc}</p>
        </div>

        <div className="p-card__footer">
          <span className="p-card__cta">Explore Case Study ↗</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();
  const [activeCat, setActiveCat] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCat === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCat);

  return (
    <section id="projects" ref={ref} className={`projects section ${inView ? "in-view" : ""}`}>
      <div className="section-header reveal" style={{ "--delay": "0s" }}>
        <span className="section-badge">Selected Works</span>
        <h2 className="section-title">Engineering Excellence</h2>
        <p className="section-subtitle">A showcase of scalable systems and intuitive interfaces</p>
      </div>

      <div className="projects__filter reveal" style={{ "--delay": "0.1s" }}>
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id} 
            className={`projects__filter-btn ${activeCat === cat.id ? "active" : ""}`}
            onClick={() => setActiveCat(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="projects__bento">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.div 
              key={p.id} 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05 }}
              className="p-bento-item"
            >
              <ProjectCard 
                p={p} 
                onOpen={setSelectedProject} 
                isLarge={i < 2 && activeCat === "all"}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal p={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
