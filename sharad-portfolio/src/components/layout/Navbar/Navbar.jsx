import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check initial theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLight(true);
      document.documentElement.setAttribute("data-theme", "light");
    }

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = isLight ? "dark" : "light";
    setIsLight(!isLight);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLink = (label) => { setActive(label); setOpen(false); };

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#home" className="nav__logo" onClick={() => setActive("")}>
        <span className="nav__logo-bracket">&lt;</span>
        <span className="nav__logo-name gradient-text">Sharad</span>
        <span className="nav__logo-bracket">/&gt;</span>
      </a>

      <ul className={`nav__links ${open ? "nav__links--open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className={`nav__link ${active === l.label ? "nav__link--active" : ""}`}
              onClick={() => handleLink(l.label)}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <button onClick={toggleTheme} className="nav__theme-btn" aria-label="Toggle Theme">
            {isLight ? "🌙" : "☀️"}
          </button>
        </li>
        <li>
          <a href="/SharadFinal.pdf" className="btn btn-primary nav__resume" download>
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </li>
      </ul>

      <button className={`nav__burger ${open ? "nav__burger--open" : ""}`} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
