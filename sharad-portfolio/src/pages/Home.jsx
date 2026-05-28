import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import Experience from "../sections/Experience/Experience";
import Achievements from "../sections/Achievements/Achievements";
import Certifications from "../sections/Certifications/Certifications";
import CaseStudies from "../sections/CaseStudies/CaseStudies";
import GitHubStats from "../sections/GitHubStats/GitHubStats";
import Blogs from "../sections/Blogs/Blogs";
import Contact from "../sections/Contact/Contact";
import CustomCursor from "../components/ui/CustomCursor/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      
      <div className="global-bg">
        <div className="global-bg__overlay" />
        <video autoPlay loop muted playsInline className="global-bg__video" src="https://assets.codepen.io/3364143/7btrrd.mp4" />
      </div>

      <div className="app-content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Certifications />
          <CaseStudies />
          <GitHubStats />
          <Blogs />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
