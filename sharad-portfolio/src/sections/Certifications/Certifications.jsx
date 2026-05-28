import { useInView } from "../../hooks/useInView";
import { certifications as CERTS } from "../../data/certifications";
import "./Certifications.css";

// Duplicate the items for seamless loop
const MARQUEE_ITEMS = [...CERTS, ...CERTS];

export default function Certifications() {
  const [ref, inView] = useInView();

  return (
    <section id="certifications" ref={ref} className={`certs section ${inView ? "in-view" : ""}`}>
      <div className="section-header reveal" style={{ "--delay": "0s" }}>
        <span className="section-badge">Certifications</span>
        <h2 className="section-title">Credentials</h2>
        <p className="section-subtitle">Professional certifications that validate my expertise</p>
      </div>

      <div className="certs__marquee-container reveal" style={{ "--delay": "0.1s" }}>
        <div className="certs__marquee-inner">
          {MARQUEE_ITEMS.map((c, i) => (
            <a 
              key={`${c.title}-${i}`} 
              href={c.url} 
              target="_blank" 
              rel="noreferrer" 
              className="cert__card glass-card" 
              style={{ "--cc": c.color }}
            >
              <div className="cert__icon-wrap">
                <span className="cert__icon">{c.icon}</span>
              </div>
              <div className="cert__info">
                <h3 className="cert__title">{c.title}</h3>
                <p className="cert__issuer">{c.issuer}</p>
                <div className="cert__skills">
                  {c.skills.map(s => <span key={s} className="cert__skill">{s}</span>)}
                </div>
                <span className="cert__date">{c.date}</span>
              </div>
              <svg className="cert__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          ))}
        </div>
      </div>

      <div className="certs__hint reveal" style={{ "--delay": "0.2s" }}>
        <span>Professional Recognition & Expertise</span>
      </div>
    </section>
  );
}
