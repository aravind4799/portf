import Header from './Header';

const experiences = [
  {
    id: 1,
    role: 'Founding Engineer',
    company: 'Zentrais',
    location: 'USA',
    type: 'Part-time',
    period: 'Oct 2025 - Present',
    current: true,
    bullets: [
      "Spearheaded the development of the company's initial digital presence, engineering the MVP web application from scratch.",
      "Established development infrastructure from scratch configured CI/CD pipelines with GitLab, integrated CodeRabbit for automated code reviews, and containerized applications with Docker.",
      "Architected secure data ingestion for 1,000+ users with client-side validations, capturing metrics vital for venture funding."
    ],
    techStack: 'Next.js, Node.js, MongoDB, Tailwind CSS, Cursor, CodeRabbit, Resend, GitLab, Vercel'
  },
  {
    id: 2,
    role: 'Java Backend Developer',
    company: 'MetLife',
    location: 'USA',
    type: 'Co-op',
    period: 'Jan 2025 - Sept 2025',
    current: false,
    bullets: [
      "Reduced user wait times by 35% by engineering event-driven architecture with Spring Boot and RabbitMQ, decoupling monolithic services from synchronous external APIs into async background workers.",
      "Achieved 99.9% service availability during API outages by implementing Circuit Breaker patterns with Resilience4j, preventing cascading failures across 3+ dependent microservices.",
      "Owned notification microservice end-to-end from Spring Boot implementation to Kubernetes deployment on AWS EKS, creating Helm charts for reproducible deployments and configuring pod autoscaling.",
      "Modernized PHP customer portal by rebuilding the frontend in React and Tailwind CSS using mobile-first design, developing reusable Material-UI components with client-side validation."
    ],
    techStack: 'Spring Boot, Microservices, RabbitMQ, Resilience4j, React, Material-UI, Tailwind CSS, Docker, AWS SDK'
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

export default function Work() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto font-geist-mono">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {experiences.map((exp) => (
              <div key={exp.id} className="py-8 first:pt-0 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <div className="md:w-36 flex-shrink-0">
                    <p className="text-base font-mono text-gray-500 dark:text-gray-400">{exp.period.split(' - ')[0]}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">{exp.period.split(' - ')[1]}</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                      {exp.current && <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded">NOW</span>}
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 mb-1">{exp.company}{exp.client && ` | Client: ${exp.client}`}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.location} · {exp.type}</p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 dark:text-blue-400">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {exp.techStack.split(', ').slice(0, 5).map((tech, i) => (
                        <span key={i} className="text-sm text-gray-500 dark:text-gray-400 after:content-['·'] after:mx-1 last:after:content-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
