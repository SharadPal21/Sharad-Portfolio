import { useInView } from "../../hooks/useInView";
import { caseStudies as CASES } from "../../data/caseStudies";
import "./CaseStudies.css";

// Double the items for seamless loop
const MARQUEE_CASES = [...CASES, ...CASES];

function CaseStudyCard({ c }) {
  return (
    <div className="cs__card glass-card" style={{ "--csc": c.color }}>
      <div className="cs__image-wrap">
        <img src={c.image} alt={c.title} className="cs__image" />
        <div className="cs__image-overlay" />
      </div>
      
      <div className="cs__content">
        <div className="cs__meta">
          <span className="cs__emoji">{c.emoji}</span>
          <span className="cs__tag">{c.tag}</span>
        </div>
        
        <h3 className="cs__title">{c.title}</h3>
        
        <div className="cs__info-grid">
          <div className="cs__info-block">
            <h4>Problem</h4>
            <p>{c.problem}</p>
          </div>
          <div className="cs__info-block">
            <h4>Solution</h4>
            <p>{c.solution}</p>
          </div>
        </div>

        <div className="cs__footer">
          <div className="cs__metrics">
            {Object.entries(c.metrics).map(([label, val]) => (
              <div key={label} className="cs__metric">
                <span className="cs__metric-val">{val}</span>
                <span className="cs__metric-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [ref, inView] = useInView();

  return (
    <section id="case-studies" ref={ref} className={`cs section ${inView ? "in-view" : ""}`}>
      <div className="section-header reveal" style={{ "--delay": "0s" }}>
        <span className="section-badge">Case Studies</span>
        <h2 className="section-title">Deep Dives</h2>
        <p className="section-subtitle">A detailed look into how I solve complex engineering problems</p>
      </div>

      <div className="cs__marquee-container reveal" style={{ "--delay": "0.1s" }}>
        <div className="cs__marquee-inner">
          {MARQUEE_CASES.map((c, i) => (
            <CaseStudyCard key={`${c.id}-${i}`} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
