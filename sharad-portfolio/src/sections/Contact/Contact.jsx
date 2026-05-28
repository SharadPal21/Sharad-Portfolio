import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import "./Contact.css";

export default function Contact() {
  const [ref, inView] = useInView();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    // Replace this string with your actual Formspree endpoint (e.g. "https://formspree.io/f/xyzababc")
    const formspreeEndpoint = "https://formspree.io/f/PLACEHOLDER";
    
    const formData = new FormData(e.target);
    
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      
      if (res.ok || formspreeEndpoint.includes("PLACEHOLDER")) {
        // If placeholder, we just simulate success so the UI works
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("idle");
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" ref={ref} className={`contact section ${inView ? "in-view" : ""}`}>
      <div className="section-header reveal" style={{ "--delay": "0s" }}>
        <span className="section-badge">Contact</span>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Open to opportunities, freelance projects, and tech conversations</p>
      </div>

      <div className="contact__layout">
        {/* Info Cards */}
        <div className="contact__info reveal" style={{ "--delay": "0.1s" }}>
          <a href="mailto:sharadpal471@gmail.com" className="contact__card glass-card">
            <span className="contact__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </span>
            <div>
              <h3 className="contact__label">Email</h3>
              <p className="contact__val">sharadpal471@gmail.com</p>
            </div>
          </a>

          <a href="tel:+919026104017" className="contact__card glass-card">
            <span className="contact__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            <div>
              <h3 className="contact__label">Phone</h3>
              <p className="contact__val">+91 90261 04017</p>
            </div>
          </a>

          <div className="contact__card glass-card">
            <span className="contact__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <div>
              <h3 className="contact__label">Location</h3>
              <p className="contact__val">India</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="contact__form glass-card reveal" onSubmit={handleSubmit} style={{ "--delay": "0.2s" }}>
          <div className="form__group">
            <label htmlFor="name" className="form__label">Name</label>
            <input type="text" id="name" name="name" required className="form__input" placeholder="John Doe" />
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">Email</label>
            <input type="email" id="email" name="email" required className="form__input" placeholder="john@example.com" />
          </div>
          <div className="form__group">
            <label htmlFor="msg" className="form__label">Message</label>
            <textarea id="msg" name="message" required rows="5" className="form__input" placeholder="How can I help you?" />
          </div>
          
          <button type="submit" disabled={status === "loading" || status === "success"} className="btn btn-primary form__btn">
            {status === "idle" && "Send Message"}
            {status === "loading" && "Sending..."}
            {status === "success" && "Message Sent!"}
          </button>
        </form>
      </div>
    </section>
  );
}
