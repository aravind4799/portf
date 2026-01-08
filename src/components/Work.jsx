import Header from './Header';

export default function Work() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="font-geist-mono text-gray-700 dark:text-gray-300 space-y-8">
            
            {/* Zentrais */}
            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-xl font-medium text-gray-900 dark:text-white">Founding Engineer</h2>
                  <p className="text-base text-gray-600 dark:text-gray-400">Zentrais ·USA</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  <span>Part-time</span> | <span>Oct 2025 - Present</span>
                </div>
              </div>
              <ul className="space-y-2 text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Spearheaded the development of the company's initial digital presence, engineering the MVP web application from scratch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Automated GitLab/Vercel CI/CD pipelines integrating code quality checks, achieving sub-2-minute production deployments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Architected secure data ingestion for 1,000+ users with client-side validations, capturing metrics vital for venture funding.</span>
                </li>
              </ul>
              <div className="mt-3">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Tech Stack: </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Next.js, Node.js, MongoDB, Tailwind CSS, Cursor, CodeRabbit, Resend, GitLab, Vercel</span>
              </div>
            </div>

            {/* MetLife */}
            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-xl font-medium text-gray-900 dark:text-white">Java Full Stack Developer</h2>
                  <p className="text-base text-gray-600 dark:text-gray-400">MetLife · USA</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  <span>Co-op</span> | <span>Jan 2025 - Sept 2025</span>
                </div>
              </div>
              <ul className="space-y-2 text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Engineered an event-driven architecture using RabbitMQ to decouple the monolith from synchronous external credit score APIs, reducing user wait time by <span className="font-medium">35%</span> by offloading blocking checks to asynchronous background workers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Enhanced fault tolerance by implementing Circuit Breaker patterns with exponential backoff retry policies, preventing cascading failures and preserving system stability during external service downtime.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Modernized PHP customer portal by rebuilding the frontend in React and Tailwind CSS using a mobile-first design pattern, developing reusable Material-UI components with client-side validation to enhance accessibility.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Actively participated in an Agile team to define project requirements and architecture, taking ownership of the notification microservice from design to deployment, ensuring on-time delivery.</span>
                </li>
              </ul>
              <div className="mt-3">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Tech Stack: </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Spring Boot, Microservices, RabbitMQ, Resilience4j, React, Material-UI, Tailwind CSS, Docker, AWS SDK</span>
              </div>
            </div>

            {/* CERIAS @ Purdue */}
            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-xl font-medium text-gray-900 dark:text-white">Frontend Developer</h2>
                  <p className="text-base text-gray-600 dark:text-gray-400">CERIAS at Purdue University · West Lafayette, IN, USA</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  <span>Internship</span> | <span>May 2024 - Aug 2024</span>
                </div>
              </div>
              <ul className="space-y-2 text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Built a fully responsive React/Tailwind CSS interface with protected routing and Redux, leveraging React.lazy code-splitting to shrink initial bundle size by <span className="font-medium">~30%</span>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Enforced WCAG AA accessibility with semantic HTML, ARIA roles and keyboard navigation, and bolstered quality with <span className="font-medium">90%+</span> unit and integration test coverage using Jest.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>
                    Streamlined legacy backend flow by tuning MySQL indexes and merging redundant REST endpoints, cutting average page-load latency from <span className="font-medium">5s to 1s</span>.
                  </span>
                </li>
              </ul>
              <div className="mt-3">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Tech Stack: </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">React, Redux, Tailwind CSS, Protected Routing, React.lazy, Jest, MySQL, REST APIs</span>
              </div>
            </div>

            {/* LTIMindtree */}
            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-xl font-medium text-gray-900 dark:text-white">Java Full Stack Developer</h2>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400">LTIMindtree | Client: Citi Bank · Chennai, TN, India</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  <span>Full-time</span> | <span>Aug 2021 - May 2023</span>
                </div>
              </div>
              <ul className="space-y-2 text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Built a React.js dashboard using OrientDB Graph APIs for interactive data lineage visualization, cutting database cluster migration planning from <span className="font-medium">2 days to 15 minutes</span> by revealing object dependencies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Optimized a large-scale data download process by implementing multithreading with Java's Executor Service, improving system efficiency and reducing total runtime by <span className="font-medium">50%</span>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                  <span>Migrated the validation pipeline causing bottlenecks in customer information processing to Spring Boot, implementing 35+ business rules with Java Streams and JPA, reducing validation time by <span className="font-medium">30 minutes</span>.</span>
                </li>
              </ul>
              <div className="mt-3">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Tech Stack: </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Java, Spring Boot, React.js, OrientDB, Multithreading, Hibernate/JPA, JUnit, Mockito, SonarQube</span>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

