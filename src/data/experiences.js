// Work Experience data - Edit this file to update your work experience for search
// Each experience should have: id, role, company, location, type, period, current (boolean), bullets (array), techStack (comma-separated string)
// Optional: client (for consulting roles)

export const experiences = [
  {
    id: 1,
    role: 'Founding Engineer',
    company: 'Zentrais',
    location: 'USA',
    type: 'Freelance',
    period: 'Oct 2025 - Present',
    current: true,
    bullets: [
      "Spearheaded the development of the company's initial digital presence, engineering the MVP web application from scratch.",
      "Developed RESTful voting API in NestJS with JWT authentication and Prisma ORM for a real-time debate platform.",
      "Implemented upvote/downvote toggle logic with soft-delete patterns for vote recovery.",
      "Built GitHub Actions CI/CD pipeline gating production deployments, reducing build-related failures to zero."
    ],
    techStack: 'Next.js, NestJS, TypeScript, Node.js, PostgreSQL, Tailwind CSS, Prisma ORM, GitHub Actions, Vercel, JWT, OAuth'
  },
  {
    id: 2,
    role: 'Java Backend Developer',
    company: 'MetLife',
    location: 'USA',
    type: 'Contract',
    period: 'Jan 2025 - Present',
    current: true,
    bullets: [
      "Reduced user wait times by 35% by engineering event-driven architecture with Spring Boot and RabbitMQ, decoupling monolithic services from synchronous external APIs into async background workers.",
      "Achieved 99.9% service availability during API outages by implementing Circuit Breaker patterns with Resilience4j, preventing cascading failures across 3+ dependent microservices.",
      "Owned notification microservice end-to-end from Spring Boot implementation to Kubernetes deployment on AWS EKS, creating Helm charts for reproducible deployments and configuring pod autoscaling.",
      "Modernized PHP customer portal by rebuilding the frontend in React and Tailwind CSS using mobile-first design, developing reusable Material-UI components with client-side validation."
    ],
    techStack: 'Spring Boot, Microservices, RabbitMQ, Resilience4j, React, Material-UI, Tailwind CSS, Docker, Kubernetes, AWS EKS, AWS SDK'
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'CERIAS at Purdue University',
    location: 'West Lafayette, IN, USA',
    type: 'Internship',
    period: 'May 2024 - Aug 2024',
    current: false,
    bullets: [
      "Built a fully responsive React/Tailwind CSS interface with protected routing and Redux, shrinking initial bundle size by ~30%.",
      "Enforced WCAG AA accessibility with semantic HTML, ARIA roles and 90%+ test coverage using Jest.",
      "Streamlined legacy backend by tuning MySQL indexes, cutting average page-load latency from 5s to 1s."
    ],
    techStack: 'React, Redux, Tailwind CSS, Protected Routing, React.lazy, Jest, MySQL, REST APIs'
  },
  {
    id: 4,
    role: 'Software Engineer',
    company: 'LTIMindtree',
    client: 'Citi Bank',
    location: 'Chennai, TN, India',
    type: 'Full-time',
    period: 'Aug 2021 - May 2023',
    current: false,
    bullets: [
      "Slashed document validation time from 30+ minutes to under 60 seconds by migrating legacy AbInitio pipeline to Spring Boot, implementing 35+ business rules with Java Streams and JPA.",
      "Improved data processing throughput by 50% by implementing multithreading with Java Executor Service.",
      "Achieved 80%+ code coverage with JUnit 5 and Mockito, reducing production defects by 30%.",
      "Reduced database migration planning from 2 days to 15 minutes by building RESTful APIs with OrientDB and delivering an interactive React dashboard for data lineage visualization."
    ],
    techStack: 'Java, Spring Boot, React.js, OrientDB, Multithreading, Hibernate/JPA, JUnit, Mockito, SonarQube'
  }
];
