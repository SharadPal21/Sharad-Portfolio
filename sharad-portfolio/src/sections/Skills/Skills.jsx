import { useInView } from "../../hooks/useInView";
import { useTilt } from "../../hooks/useTilt";
import "./Skills.css";

const CATEGORIES = [
  {
    label: "Languages", icon: "💻",
    skills: ["Java", "Python", "JavaScript", "HTML", "CSS"],
    color: "#60a5fa",
  },
  {
    label: "Frameworks & Libs", icon: "⚛️",
    skills: ["React.js", "Flask", "Django", "REST APIs", "Node.js", "Express.js"],
    color: "#a78bfa",
  },
  {
    label: "Data & ML", icon: "🧠",
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Plotly"],
    color: "#f59e0b",
  },
  {
    label: "Database & Cloud", icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "Redis", "AWS", "Docker"],
    color: "#34d399",
  },
  {
    label: "Tools & Soft Skills", icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Problem-Solving", "Leadership", "Communication"],
    color: "#06b6d4",
  },
];

function SkillCard({ cat, index }) {
  const tiltRef = useTilt({ maxTilt: 15, scale: 1.05 });
  
  return (
    <div 
      ref={tiltRef}
      className="skills__card glass-card reveal" 
      style={{ "--delay": `${0.1 + index * 0.09}s`, "--cat-color": cat.color }}
    >
      <div className="skills__card-head">
        <span className="skills__card-icon">{cat.icon}</span>
        <h3 className="skills__card-label">{cat.label}</h3>
      </div>
      <div className="skills__pills">
        {cat.skills.map((s) => (
          <span key={s} className="skills__pill">{s}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" ref={ref} className={`skills section ${inView ? "in-view" : ""}`}>
      <div className="section-header reveal" style={{ "--delay": "0s" }}>
        <span className="section-badge">Skills</span>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Technologies I use to ship great products</p>
      </div>
      <div className="skills__grid">
        {CATEGORIES.map((cat, ci) => (
          <SkillCard key={cat.label} cat={cat} index={ci} />
        ))}
      </div>
    </section>
  );
}
