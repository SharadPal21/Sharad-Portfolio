import { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";
import "./Blogs.css";

export default function Blogs() {
  const [ref, inView] = useInView();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch top 3 articles from Dev.to API
    // Replace "tag=machinelearning" with "username=YOUR_DEVTO_USERNAME" to fetch your own articles!
    fetch("https://dev.to/api/articles?tag=machinelearning&per_page=3")
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts = data.map(post => ({
          title: post.title,
          desc: post.description || "Read more about this topic...",
          date: new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          readTime: `${post.reading_time_minutes} min read`,
          tag: post.tag_list.length > 0 ? post.tag_list[0] : "Tech",
          url: post.url
        }));
        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch dev.to articles", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog" ref={ref} className={`blog section ${inView ? "in-view" : ""}`}>
      <div className="section-header reveal" style={{ "--delay": "0s" }}>
        <span className="section-badge">Blog</span>
        <h2 className="section-title">Latest Writing</h2>
        <p className="section-subtitle">Thoughts on software engineering, ML, and building products</p>
      </div>
      <div className="blog__grid">
        {loading ? (
          <p style={{ textAlign: "center", color: "var(--text-muted)", gridColumn: "1 / -1" }}>Loading articles from Dev.to...</p>
        ) : (
          posts.map((p, i) => (
            <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="blog__card glass-card reveal" style={{ "--delay": `${0.1 + i * 0.1}s` }}>
              <div className="blog__meta">
                <span className="blog__tag">{p.tag}</span>
                <span className="blog__time">{p.readTime}</span>
              </div>
              <h3 className="blog__title">{p.title}</h3>
              <p className="blog__desc">{p.desc}</p>
              <div className="blog__footer">
                <span className="blog__date">{p.date}</span>
                <span className="blog__read">Read Article →</span>
              </div>
            </a>
          ))
        )}
      </div>
      <div className="blog__more reveal" style={{ "--delay": "0.4s" }}>
        <a href="https://dev.to/t/machinelearning" target="_blank" rel="noreferrer" className="btn btn-outline">View All Posts</a>
      </div>
    </section>
  );
}
