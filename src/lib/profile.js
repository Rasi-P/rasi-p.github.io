export const profile = {
  name: "Rasi P",
  role: "Software Engineer | Backend-Focused Full-Stack Developer",
  positioning: "Django, MERN, React + TypeScript, AI Integration | Cybersecurity Enthusiast",
  tagline:
    "Results-driven engineer focused on secure, scalable, and user-centric applications with strong backend architecture.",
  heroStatement: "Building Secure & Scalable Applications",
  heroLoopLines: [
    "Building Secure & Scalable Applications",
    "Designing Security-First Backend APIs",
    "Delivering Reliable Full-Stack Solutions",
    "Integrating AI Into Real-World Applications",
  ],
  githubUrl: "https://github.com/Rasi-P",
  linkedinUrl: "https://www.linkedin.com/in/rasi-p",
  resumePath: "/Rasi-P-Resume.pdf",
  address: "Kozhikode, Kerala, India",
  email: "razirasi10@gmail.com",
  phone: "+91 8590385375",
};

export const heroStats = [
  { label: "Years of Study", value: "2018-2026" },
  { label: "Key Domains", value: "Backend + AI + Security" },
  { label: "Major Internships", value: "2" },
  { label: "Focus", value: "Scalable APIs" },
];

export const professionalHighlights = [
  "Specialized in Python and Django with hands-on work in Django REST Framework, REST APIs, authentication and authorization.",
  "Built and tested secure authentication workflows for 100+ users with zero security breaches during internship execution.",
  "Conducted vulnerability assessments and identified 15+ critical security issues, contributing to a 25% risk reduction.",
  "Delivered backend components and real-world web application logic in remote collaborative workflows using Git and Agile practices.",
  "Built and deployed an AI-powered ATS resume optimizer using Django DRF, React + TypeScript, and OpenAI API — live on Vercel + Railway.",
];

export const aboutSkillBars = [
  { label: "Django + DRF", value: 92 },
  { label: "REST API Development", value: 90 },
  { label: "JWT + RBAC", value: 91 },
  { label: "MERN + Odoo", value: 85 },
];

export const services = [
  {
    title: "Backend API Development",
    description: "Building secure backend systems using Django and DRF with clean REST architecture and maintainable service layers.",
  },
  {
    title: "Full-Stack Web Development",
    description: "Delivering end-to-end applications using React, Node.js, Express, and database-driven backend integration.",
  },
  {
    title: "Cybersecurity-Focused Engineering",
    description: "Applying secure coding standards, vulnerability assessments, and OWASP-aligned implementation patterns.",
  },
  {
    title: "Authentication & Authorization",
    description: "Implementing JWT authentication and role-based access control for secure multi-user application flows.",
  },
  {
    title: "Database Design",
    description: "Designing and optimizing data models using MySQL, PostgreSQL, and MongoDB for reliability and performance.",
  },
  {
    title: "Odoo Customization",
    description: "Developing custom Odoo modules using Python-based models and XML-driven views for business workflows.",
  },
  {
    title: "AI-Powered Tool Development",
    description: "Building practical AI-integrated applications using OpenAI-compatible APIs with real-world deployment on cloud platforms.",
  },
];

export const featuredProjects = [
  {
    name: "ResumeMaker – AI ATS Resume Optimizer",
    category: "AI + DJANGO DRF + REACT",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL", "OpenAI API", "LaTeX"],
    summary:
      "AI-powered platform that generates a complete job application package — ATS-optimized resume, cover letter, and professional email — from a single LaTeX base resume. Deployed on Vercel + Railway.",
    problem:
      "Every job application required a tailored resume, cover letter, and email. Customizing these manually was repetitive and time-consuming, and PDF-based extraction caused formatting issues.",
    architecture: [
      "LaTeX-first pipeline — uploads .tex resume and modifies targeted sections, preserving original structure and formatting (switched from PDF after extraction issues).",
      "Django DRF backend with OpenAI-compatible API integration for keyword extraction, ATS scoring, and document generation (PDF + DOCX).",
      "React + TypeScript frontend with job detail input, ATS score display, matched/missing keywords, before vs after comparison, and downloadable outputs.",
    ],
    metrics:
      "Generates ATS-optimized resume (PDF), cover letter (PDF + DOCX), and application email in one flow. Supports technical and non-technical roles. Updated with faster processing, improved UI, and more reliable file handling.",
    repoUrl: "https://github.com/Rasi-P/resume-maker",
    demoUrl: "https://resume-maker-rho-three.vercel.app/",
  },
  {
    name: "Mediva - Smart Healthcare System",
    category: "MERN + SOCKET.IO",
    stack: ["React", "Vite", "Bootstrap", "Node.js", "Express.js", "MongoDB Atlas", "Socket.io", "jsPDF"],
    summary:
      "Smart healthcare management platform that streamlines doctor appointment booking, blood test scheduling, and medical equipment rental.",
    problem: "Healthcare workflows were fragmented across booking, lab processes, and resource allocation.",
    architecture: [
      "Modular MERN architecture with separate backend (`server`) and frontend (`front-end`) applications.",
      "Node.js/Express backend with MongoDB Atlas models for appointments, test requests, and equipment rentals.",
      "React + Vite frontend with secure auth flow, real-time updates via Socket.io, and PDF report generation for medical/billing outputs.",
    ],
    metrics: "Implemented doctor, blood test, and equipment modules with secure auth, live interactions, and downloadable report support.",
    repoUrl: "https://github.com/Rasi-P/Mediva",
    demoUrl: "",
  },
  {
    name: "Job Portal",
    category: "DJANGO DRF + REACT",
    stack: ["Django", "Django REST Framework", "React", "Vite", "PostgreSQL", "Pillow", "Axios", "CORS Headers"],
    summary:
      "Full-stack job portal built with Django REST Framework backend and React frontend, including authentication, profiles, jobs, and social interactions.",
    problem: "Needed a unified platform for hiring workflows plus social engagement with secure authentication and profile management.",
    architecture: [
      "Backend app separation: `authentication`, `home`, `jobs`, and `posts` with media upload handling for images and resumes.",
      "Authentication endpoints for register/login, OTP verification, forgot/reset password, and password change.",
      "React frontend with tab-based navigation (Home, Network, Jobs, Notifications, Posts), responsive UI, and API service layer integration.",
      "Core features include job posting/application flow, follow-unfollow network, and social posts with likes and comments.",
    ],
    metrics: "Completed end-to-end implementation covering auth, profile management, jobs, social posting, and responsive tab-based frontend navigation.",
    repoUrl: "https://github.com/Rasi-P/job-portal",
    demoUrl: "",
  },
  {
    name: "CredGuard - Secure Authentication System",
    category: "PHP + MYSQL SECURITY",
    stack: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "PDO", "Sessions"],
    summary:
      "Secure web application for authentication with user and admin roles, password reset flow, and security-first backend controls.",
    problem: "Needed a practical authentication system hardened against common web attacks while keeping admin management simple.",
    architecture: [
      "User system with signup/login, hashed passwords, forgot/reset support, session auth, and role-based access.",
      "Admin panel with protected routes to view, delete, and manage registered users.",
      "OWASP-aligned controls: input sanitization, PDO prepared statements, CSRF tokens, session regeneration/timeout, secure cookies, brute-force lockout, and safe error handling.",
    ],
    metrics: "Validated against SQL injection, XSS, CSRF token checks, and repeated failed login lockout scenarios.",
    repoUrl: "https://github.com/Rasi-P/CredGuard",
    demoUrl: "",
  },
];

export const securityFocus = [
  {
    title: "JWT Authentication",
    description: "Token-based authentication design with secure session handling and refresh flow strategy.",
  },
  {
    title: "Role-Based Access Control",
    description: "Role and permission modeling for safe multi-user access to APIs and system workflows.",
  },
  {
    title: "REST API Security",
    description: "Validation-first endpoint design with predictable access control and defensive request handling.",
  },
  {
    title: "Vulnerability Assessment",
    description: "Practical assessment workflows to identify critical issues and reduce operational security risk.",
  },
  {
    title: "Secure Coding Practices",
    description: "OWASP-aware development standards integrated into backend and full-stack implementation.",
  },
];

export const experience = [
  {
    title: "PYTHON Developer (Trainee)",
    organization: "Zecser Business LLP",
    duration: "November 2025 - January 2026 (3 months)",
    bullets: [
      "Built backend components using Python, Django, and Django REST Framework.",
      "Worked on real-world web applications, improving backend logic and API design.",
      "Collaborated in remote development workflows using version control and Agile practices.",
    ],
  },
  {
    title: "Cybersecurity Trainee & Intern",
    organization: "EdiGlobe (Remote)",
    duration: "June 2025 - August 2025 (3 months)",
    bullets: [
      "Conducted vulnerability assessments and identified 15+ critical issues, reducing security risks by 25%.",
      "Developed and tested secure authentication workflows for 100+ users with zero breaches.",
      "Collaborated in a remote Agile team and improved documentation plus security testing workflows.",
    ],
  },
];

export const education = [
  {
    title: "B.Tech in Computer Engineering",
    institution: "Government Engineering College Wayanad",
    duration: "September 2023 - April 2025",
    cgpa: "",
  },
  {
    title: "Diploma in Computer Engineering",
    institution: "Government Polytechnic College Meppadi",
    duration: "April 2020 - March 2022",
    cgpa: "",
  },
  {
    title: "High School Diploma (Computer Science)",
    institution: "SEVAMANDIR PBHSS Ramanattukara",
    duration: "June 2018 - March 2020",
    cgpa: "",
  },
];

export const timeline = [
  {
    year: "Jun 2018 - Mar 2020",
    title: "High School Diploma",
    description: "Computer Science foundation at SEVAMANDIR PBHSS Ramanattukara.",
  },
  {
    year: "Apr 2020 - Mar 2022",
    title: "Diploma in Computer Engineering",
    description: "Government Polytechnic College Meppadi.",
  },
  {
    year: "Sep 2023 - Apr 2025",
    title: "B.Tech in Computer Engineering",
    description: "Government Engineering College Wayanad.",
  },
  {
    year: "Jun 2025 - Aug 2025",
    title: "Cybersecurity Internship",
    description: "EdiGlobe remote internship focused on vulnerability assessment and secure auth workflows.",
  },
  {
    year: "Nov 2025 - Jan 2026",
    title: "Python Developer (Trainee)",
    description: "Zecser Business LLP internship focused on backend components and API development.",
  },
  {
    year: "2026 (Ongoing)",
    title: "Built ResumeMaker",
    description: "AI-powered ATS resume optimizer — deployed on Vercel + Railway.",
  },
];

export const skillsMatrix = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js", "Java", "C", "Odoo"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "Postman", "Linux", "Generative AI", "OpenAI API", "Vercel", "Railway", "OWASP", "Metasploit"],
  },
  {
    category: "Core Concepts",
    items: ["JWT Authentication", "Role-Based Access Control", "RESTful APIs", "API Integration", "AI Integration", "Web Security"],
  },
];

export const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
