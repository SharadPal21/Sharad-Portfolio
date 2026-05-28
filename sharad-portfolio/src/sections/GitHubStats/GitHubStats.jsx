import { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";
import "./GitHubStats.css";

const GH_USER = "SharadPal21";

export default function GitHubStats() {
  const [ref, inView] = useInView();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check initial theme
    setIsLight(document.documentElement.getAttribute("data-theme") === "light");

    // Watch for theme changes from the Navbar
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setIsLight(document.documentElement.getAttribute("data-theme") === "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Theme-specific URL parameters
  const statTheme = isLight ? "default" : "radical";
  
  // Streak stats custom colors (which work fine)
  const bg = isLight ? "ffffff" : "0a0a0f";
  const title = isLight ? "7c3aed" : "8b5cf6"; 
  const text = isLight ? "3f3f46" : "94a3b8";
  const icon = isLight ? "7c3aed" : "8b5cf6";

  return (
    <section id="github-stats" ref={ref} className={`gh section ${inView ? "in-view" : ""}`}>
      <div className="section-header reveal" style={{ "--delay": "0s" }}>
        <span className="section-badge">GitHub Stats</span>
        <h2 className="section-title">Coding Activity</h2>
        <p className="section-subtitle">Live snapshot of my open-source contributions</p>
      </div>
      
      <div className="gh__layout">
        {/* Left Side: Stats */}
        <div className="gh__stats-col">
          <div className="gh__grid reveal" style={{ "--delay": "0.1s" }}>
            <img className="gh__img" src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${GH_USER}&show_icons=true&hide_border=true&theme=${statTheme}`} alt="GitHub Stats" loading="lazy" />
            <img className="gh__img" src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${GH_USER}&layout=compact&hide_border=true&theme=${statTheme}&langs_count=8`} alt="Top Languages" loading="lazy" />
            <img className="gh__img gh__img--streak" src={`https://streak-stats.demolab.com/?user=${GH_USER}&hide_border=true&background=${bg}&ring=${title}&fire=${title}&currStreakLabel=${title}&sideLabels=${text}&dates=${text}&stroke=${bg}`} alt="GitHub Streak" loading="lazy" />
          </div>
          <div className="gh__contrib reveal" style={{ "--delay": "0.2s" }}>
            <img src={`https://ghchart.rshah.org/${title}/${GH_USER}`} alt="GitHub Contributions" loading="lazy" />
          </div>
        </div>

        {/* Right Side: Generated AI Image */}
        <div className="gh__art-col reveal" style={{ "--delay": "0.3s" }}>
          <div className="gh__art-wrapper glass-card">
            {/* The user will move the generated image into the public folder as github-art.png */}
            <img 
              src="/github_isometric_art_1778885372127.png" 
              alt="Futuristic Data Grid" 
              className="gh__art-image" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--text-muted);">Please copy the generated image to public/github-art.png</div>';
              }}
            />
            <div className="gh__art-overlay">
              <span>System Telemetry Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
