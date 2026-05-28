import { useInView } from "../../hooks/useInView";
import "./Experience.css";

const MILESTONES = [
  { year: "2020", icon: "🏫", title: "Matriculation", desc: "Vishwanath Academy. Scored 76%. Began exploring early interests in technology." },
  { year: "2022", icon: "📚", title: "Intermediate", desc: "Vishwanath Academy. Scored 71%. Deepened focus on science and logic." },
  { year: "2023", icon: "🎓", title: "B.Tech Computer Science", desc: "Started my engineering journey at Lovely Professional University. Expanding skills in CS fundamentals." },
  { year: "2024", icon: "🌐", title: "Web Development", desc: "Certified in Responsive Web Design and started building real-world applications using modern stacks." },
  { year: "2025", icon: "☕", title: "Java Bootcamp", desc: "Intensive training with Placement Ace. Strengthened OOP, DSA, and problem-solving on LeetCode." },
  { year: "2026", icon: "🚀", title: "Production Impact", desc: "Built scalable ML platforms and e-commerce systems. Filed a patent for dream analysis tech." },
];

export default function Experience() {
  const [ref, inView] = useInView();
  return (
    <section id="experience" ref={ref} className={`journey section ${inView ? "in-view" : ""}`}>
      <div className="section-header reveal" style={{ "--delay": "0s" }}>
        <span className="section-badge">Journey</span>
        <h2 className="section-title">My Story</h2>
        <p className="section-subtitle">Education, training, and professional milestones</p>
      </div>
      <div className="journey__line-wrap">
        <div className="journey__center-line" />
        {MILESTONES.map((m, i) => (
          <div key={i} className={`journey__item reveal ${i % 2 === 0 ? "journey__item--left" : "journey__item--right"}`} style={{ "--delay": `${0.08 + i * 0.08}s` }}>
            <div className="journey__card glass-card">
              <span className="journey__year">{m.year}</span>
              <h3 className="journey__title">{m.icon} {m.title}</h3>
              <p className="journey__desc">{m.desc}</p>
            </div>
            <div className="journey__dot" />
          </div>
        ))}
      </div>
    </section>
  );
}
