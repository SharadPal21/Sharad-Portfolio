export const caseStudies = [
  {
    id: "automation-platform",
    emoji: "🤖", 
    title: "Automation-as-a-Service Platform", 
    tag: "SaaS Architecture", 
    color: "#ec4899",
    image: "https://images.unsplash.com/photo-1518433278988-2b2f197c9480?q=80&w=1000&auto=format&fit=crop", // Add real project screenshots here
    problem: "Scaling browser automation is fragile. Traditional scrapers break on dynamic DOM changes and lack centralized scheduling, queues, or monitoring.",
    solution: "Architected a highly scalable platform utilizing FastAPI and Celery workers for parallel execution, coupled with a React dashboard for monitoring analytics.",
    arch: "React, FastAPI, Playwright, Redis, PostgreSQL, Celery, Docker, AWS.",
    challenges: "Handling dynamic website structures that break standard CSS selectors. Overcame this by integrating an AI-assisted 'smart selector' system that auto-recovers broken scraping targets.",
    outcome: "Transformed basic scripts into a multi-tenant, cloud-deployed engineering platform capable of executing complex scheduled workflows, complete with JWT auth and rate limiting.",
    metrics: { users: "50+", tasks: "10K/mo", uptime: "99.9%" }
  },
  {
    id: "online-shop-case",
    emoji: "🛒", 
    title: "Online Shop (E-commerce)", 
    tag: "Full-Stack", 
    color: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    problem: "Developing a robust, production-ready e-commerce platform that handles authentication, cart management, and secure checkouts seamlessly.",
    solution: "Engineered a scalable RESTful backend with Flask and Python, paired with a dynamic React and JavaScript frontend. Integrated a secure payment gateway and optimized UI flow.",
    arch: "Python, Flask, React.js, Redis, Docker, MySQL, JWT Authentication.",
    challenges: "Handling rapid product search and category filtering efficiently. Solved by implementing Redis caching for frequently accessed product data.",
    outcome: "Created a highly responsive, secure platform showcasing advanced backend API development and frontend integration skills.",
    metrics: { users: "2K+", performance: "95/100", orders: "500+" }
  },
  {
    id: "cpu-scheduler-case",
    emoji: "⚡", 
    title: "CPU Scheduling Simulator", 
    tag: "System Simulator", 
    color: "#f59e0b",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    problem: "Visualizing abstract Operating System scheduling algorithms (like SJF, Round Robin) is difficult for students using only text-based output.",
    solution: "Developed a dual-interface simulator featuring a Python CLI for raw calculations and a modern web application for interactive Gantt chart visualizations.",
    arch: "Python, Matplotlib, JavaScript, HTML/CSS, Chart.js.",
    challenges: "Bridging the gap between a CLI tool and an interactive web UI. Solved by implementing modular algorithm scripts that translate to JavaScript logic for the browser.",
    outcome: "A comprehensive educational tool deployed on GitHub Pages, providing real-time calculation of Average Waiting Time (AWT) and Turnaround Time (ATAT).",
    metrics: { views: "1K+", accuracy: "100%", speed: "<10ms" }
  },
];
