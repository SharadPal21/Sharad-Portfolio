import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const ROLES = ["Software Engineer", "Full-Stack Developer", "Machine Learning Enthusiast", "Problem Solver"];
const PILLS = ["Java", "Python", "React.js", "Docker", "AWS", "MySQL", "Flask"];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [phase, setPhase] = useState("typing");
  useEffect(() => {
    const word = words[wi % words.length];
    if (phase === "typing") {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 85);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("deleting"), 1800);
      return () => clearTimeout(t);
    }
    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 50);
        return () => clearTimeout(t);
      }
      setWi(i => i + 1);
      setPhase("typing");
    }
  }, [text, phase, wi, words]);
  return text;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--1" aria-hidden />
      <div className="hero__glow hero__glow--2" aria-hidden />

      <div className="hero__content">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero__left"
        >
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to Work
          </div>

          <h1 className="hero__name">
            Hi, I'm{" "}
            <span className="gradient-text">Sharad Pal</span>
          </h1>

          <p className="hero__role">
            <span className="hero__role-text">{role}</span>
            <span className="hero__cursor" aria-hidden>|</span>
          </p>

          <p className="hero__desc">
            I craft fast, scalable, and impactful digital experiences — from robust back-end APIs to machine learning models and pixel-perfect UIs. 
          </p>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            <a href="/SharadFinal.pdf" className="btn btn-ghost" download>
              Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </a>
          </div>

          <div className="hero__socials">
            <a href="https://github.com/SharadPal21" target="_blank" rel="noreferrer" className="hero__social" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="https://linkedin.com/in/sharadpal21" target="_blank" rel="noreferrer" className="hero__social" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 11 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:sharadpal471@gmail.com" className="hero__social" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero__right"
        >
          <div className="hero__card-glow" aria-hidden />
          <div className="hero__card glass-card">
            <div className="hero__card-bar">
              <span className="hero__dot hero__dot--r" />
              <span className="hero__dot hero__dot--y" />
              <span className="hero__dot hero__dot--g" />
              <span className="hero__card-filename">portfolio.jsx</span>
            </div>
            <div className="hero__card-body">
              <div className="code-line"><span className="ck">const</span> <span className="cv">dev</span> = {"{"}</div>
              <div className="code-line indent"><span className="ckey">name</span><span className="cp">:</span> <span className="cs">'Sharad Pal'</span><span className="cp">,</span></div>
              <div className="code-line indent"><span className="ckey">role</span><span className="cp">:</span> <span className="cs">'Software Engineer'</span><span className="cp">,</span></div>
              <div className="code-line indent"><span className="ckey">status</span><span className="cp">:</span> <span className="cs">'🟢 Open to Work'</span><span className="cp">,</span></div>
              <div className="code-line indent"><span className="ckey">loves</span><span className="cp">:</span> <span className="cs">'Building Products'</span><span className="cp">,</span></div>
              <div className="code-line">{"}"}</div>
              <div className="code-line code-line--terminal">
                <span className="ct">$</span> <span className="ctn">npm run build</span>
                <span className="hero__cursor-sm" />
              </div>
            </div>
          </div>

          <div className="hero__pills">
            {PILLS.map((p, i) => (
              <span key={p} className="hero__pill" style={{ "--di": i }}>{p}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span className="hero__scroll-line" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </a>
    </section>
  );
}
