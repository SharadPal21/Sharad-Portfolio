import { useInView } from "../../hooks/useInView";
import "./About.css";

const STATS = [
  { icon: "🚀", value: "10K+", label: "Monthly App Users" },
  { icon: "⚡", value: "15+", label: "Technologies" },
  { icon: "🏅", value: "4+", label: "Certifications" },
  { icon: "📜", value: "1", label: "Indian Patent Filed" },
];

const FOCUS = ["Java", "Python", "React", "Machine Learning", "Full-Stack Web"];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} className={`about section ${inView ? "in-view" : ""}`}>
      <div className="section-header reveal" style={{ "--delay": "0s" }}>
        <span className="section-badge">About Me</span>
        <h2 className="section-title">Professional Identity</h2>
        <p className="section-subtitle">Engineer, builder, and lifelong learner</p>
      </div>

      <div className="about__layout">
        <div className="about__left reveal" style={{ "--delay": "0.1s" }}>
          <div className="about__bio glass-card">
            <h3 className="about__bio-title">Who I Am</h3>
            <p className="about__bio-text">
              Hey! I'm <strong>Sharad Pal</strong>, a Software Engineer and Computer Science student at Lovely Professional University. I love
              building products that are fast, accessible, and genuinely useful, with a strong foundation in both traditional software engineering and modern web technologies.
            </p>
            <p className="about__bio-text">
              I specialise in <strong>Java</strong>, <strong>Python</strong>, and <strong>React.js</strong>. Whether it's developing a high-traffic web application (handling 10,000+ monthly users), architecting scalable backend APIs, or experimenting with Machine Learning models, I bring the
              same care and attention to every layer of the stack.
            </p>
            <p className="about__bio-text">
              I am also passionate about research and innovation, having filed an Indian Patent for a system analyzing dream content.
            </p>
          </div>

          <div className="about__edu glass-card">
            <div className="about__edu-icon">🎓</div>
            <div>
              <h3 className="about__edu-title">B.Tech — Computer Science</h3>
              <p className="about__edu-sub">Lovely Professional University · Aug 2023 – Jul 2027</p>
              <div className="about__focus">
                {FOCUS.map((f) => (
                  <span key={f} className="about__focus-chip">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about__stats">
          {STATS.map((s, i) => (
            <div key={s.label} className="about__stat glass-card reveal" style={{ "--delay": `${0.15 + i * 0.08}s` }}>
              <span className="about__stat-icon">{s.icon}</span>
              <span className="about__stat-value gradient-text">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
