import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__bracket">&lt;</span>
            <span className="gradient-text">Sharad</span>
            <span className="footer__bracket">/&gt;</span>
          </span>
          <p className="footer__desc">
            Building fast, accessible, and dynamic digital experiences. Always learning, always building.
          </p>
        </div>
        
        <div className="footer__links-group">
          <h4 className="footer__heading">Navigation</h4>
          <ul className="footer__links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4 className="footer__heading">Connect</h4>
          <ul className="footer__links">
            <li><a href="https://github.com/SharadPal21" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/sharadpal21" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="mailto:sharadpal471@gmail.com">Email</a></li>
            <li><a href="/SharadFinal.pdf" download>Resume</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; {currentYear} Sharad Pal. All rights reserved.
        </p>
        <a href="#home" className="footer__up" aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>
        </a>
      </div>
    </footer>
  );
}
