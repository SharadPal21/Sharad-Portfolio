import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiExternalLink, FiCpu, FiCode, FiGlobe, FiGithub } from "react-icons/fi";
import { projects as PROJECTS } from "../data/projects";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];

  return (
    <div className="project-detail">
      <Helmet>
        <title>{project.title} | Sharad's Portfolio</title>
        <meta name="description" content={project.desc} />
      </Helmet>

      <Navbar />

      <main className="section">
        <div className="container">
          <Link to="/" className="detail__back reveal">
            <FiArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className="detail__hero reveal" style={{ "--pc": project.color }}>
            <div className="detail__hero-content">
              <span className="detail__emoji">{project.emoji}</span>
              <h1 className="detail__title">{project.title}</h1>
              <div className="detail__tags">
                {project.tags.map(t => <span key={t} className="detail__tag">{t}</span>)}
              </div>
              <div className="detail__links">
                <a href={project.demo} className="btn btn-primary">
                  <FiExternalLink size={18} /> Live Demo
                </a>
                <a href={project.repo} className="btn btn-ghost">
                  <FiGithub size={18} /> View Code
                </a>
              </div>
            </div>
            
            <div className="detail__video-wrap glass-card">
              <video src={project.video} autoPlay loop muted playsInline />
            </div>
          </div>

          <div className="detail__grid">
            <div className="detail__main reveal">
              <h2 className="detail__section-title">Overview</h2>
              <p className="detail__text">{project.longDesc}</p>
              
              <h2 className="detail__section-title">Key Features</h2>
              <ul className="detail__features">
                {project.features?.map((f, i) => (
                  <li key={i} className="detail__feature">
                    <div className="detail__feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="detail__sidebar reveal" style={{ "--delay": "0.1s" }}>
              <div className="detail__sidebar-card glass-card">
                <h3 className="detail__sidebar-title">Tech Stack</h3>
                <div className="detail__stack">
                  <div className="detail__stack-item">
                    <FiCode size={18} />
                    <span>Frontend: React, Tailwind</span>
                  </div>
                  <div className="detail__stack-item">
                    <FiCpu size={18} />
                    <span>Backend: {project.tags[0]}, {project.tags[1]}</span>
                  </div>
                  <div className="detail__stack-item">
                    <FiGlobe size={18} />
                    <span>Infrastructure: Docker, AWS</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
