export const projects = [
  {
    id: "automation-as-a-service",
    emoji: "🤖",
    title: "Automation-as-a-Service",
    category: "systems",
    shortDesc: "Production-grade browser automation platform featuring AI-assisted scraping, parallel task queues, and a SaaS dashboard.",
    longDesc: "This project addresses the fragility of traditional web scraping by implementing an AI-assisted selector recovery system. Built with FastAPI and Celery, it can handle thousands of parallel tasks across multiple worker nodes.",
    tags: ["FastAPI", "Playwright", "React", "Redis", "Celery", "Docker"],
    color: "#ec4899",
    featured: true,
    repo: "https://github.com/SharadPal21",
    demo: "#",
    video: "https://assets.codepen.io/3364143/7btrrd.mp4",
    features: [
      "AI-driven selector healing using LLMs",
      "Distributed task queuing with Celery & Redis",
      "Real-time monitoring dashboard with WebSockets",
      "Multi-tenant authentication and rate limiting"
    ]
  },
  {
    id: "online-shop",
    emoji: "🛒",
    title: "Online Shop (E-commerce)",
    category: "fullstack",
    shortDesc: "Production-style full-stack platform featuring JWT auth, secure checkout, payment gateway, and Redis caching.",
    longDesc: "A comprehensive e-commerce solution focused on performance and security. It features a robust backend API and a highly responsive frontend with optimized state management.",
    tags: ["Python", "Flask", "JavaScript", "Redis", "Docker", "SQL"],
    color: "#8b5cf6",
    featured: true,
    repo: "https://github.com/SharadPal21/Online-Shop",
    demo: "#",
    video: "https://assets.codepen.io/3364143/7btrrd.mp4",
    features: [
      "Secure JWT-based authentication system",
      "Redis caching for high-speed product catalog",
      "Integrated payment gateway simulation",
      "Responsive admin dashboard for inventory management"
    ]
  },
  {
    id: "api-hub-analytics",
    emoji: "📊",
    title: "API-Hub Analytics",
    category: "fullstack",
    shortDesc: "Scalable API-driven platform aggregating multiple 3rd-party REST APIs with real-time websocket updates.",
    tags: ["Node.js", "React.js", "Redis", "PostgreSQL", "Socket.io"],
    color: "#10b981",
    featured: true,
    repo: "https://github.com/SharadPal21",
    demo: "#",
    video: "https://assets.codepen.io/3364143/7btrrd.mp4"
  },
  {
    id: "income-prediction",
    emoji: "📈",
    title: "Income Prediction Platform",
    category: "ai",
    shortDesc: "Full-stack ML platform deploying multivariable regression models (Random Forest, XGBoost) on real datasets.",
    tags: ["Python", "FastAPI", "React", "Scikit-learn", "Docker"],
    color: "#06b6d4",
    featured: true,
    repo: "https://github.com/SharadPal21",
    demo: "#",
    video: "https://assets.codepen.io/3364143/7btrrd.mp4"
  },
  {
    id: "cpu-scheduler",
    emoji: "⚡",
    title: "CPU Scheduling Simulator",
    category: "systems",
    shortDesc: "Comprehensive OS simulator demonstrating scheduling algorithms (FCFS, SJF, Priority, RR) via Python CLI and interactive web UI.",
    tags: ["Python", "JavaScript", "Chart.js", "Matplotlib"],
    color: "#f59e0b",
    repo: "https://github.com/SharadPal21/EnergyEfficientScheduler",
    demo: "https://SharadPal21.github.io/EnergyEfficientScheduler/cpu-scheduler-web/",
    video: "https://assets.codepen.io/3364143/7btrrd.mp4"
  }
];
