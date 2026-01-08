import Header from './Header';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto font-geist-mono text-gray-700 dark:text-gray-300 space-y-8">
          

          {/* Kubernetes and DevOps */}
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Kubernetes and DevOps</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <a
                  href="https://medium.com/@araviku04/ckad-2026-what-to-expect-how-i-passed-448f134ac8b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  CKAD 2026: What to Expect & How I Passed
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@araviku04/my-sqs-queue-was-blocked-by-a-poison-pill-heres-how-a-dlq-saved-it-a2f281323f9c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  My SQS Queue Was Blocked by a "Poison Pill." Here's How a DLQ Saved It.
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@araviku04/how-i-built-a-serverless-ci-cd-pipeline-on-aws-66f4e5a902c2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  How I Built a Serverless CI/CD Pipeline on AWS
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@araviku04/docker-compose-run-multiple-mysql-containers-on-port-3306-no-conflicts-796e72874a53"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Docker Compose: Run Multiple MySQL Containers on Port 3306 (No Conflicts) !?
                </a>
              </li>
            </ul>
          </section>

          {/* Spring Boot & Microservices */}
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Spring Boot & Microservices</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <a
                  href="https://medium.com/@araviku04/spring-boot-profiles-guide-seamless-env-config-live-refresh-d636eabc8305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Spring Boot Profiles Guide: Seamless Env Config & Live Refresh
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@araviku04/thread-per-request-vs-reactive-programming-in-spring-tomcats-200-threads-netty-s-event-loop-and-e0d32b8cb4d8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Thread-Per-Request vs Reactive Programming in Spring: Tomcat's 200 Threads, Netty's ...
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@araviku04/emergency-eureka-may-be-claiming-instances-are-up-when-theyre-not-here-s-why-e746b881b5a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  EMERGENCY! Eureka May Be Claiming Instances Are Up When They're Not, Here's Why
                </a>
              </li>
            </ul>
          </section>

          {/* Design Patterns & Resilience */}
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Design Patterns & Resilience</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <a
                  href="https://medium.com/@araviku04/bulkhead-pattern-in-microservices-with-spring-boot-resilience4j-7285e6e88a6f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Bulkhead Pattern in Microservices with Spring Boot & Resilience4j
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@araviku04/retry-pattern-in-microservices-with-spring-boot-and-resilience4j-bbb9fbd47438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Retry Pattern in Microservices with Spring Boot and Resilience4j
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@araviku04/rate-limiter-pattern-in-microservices-using-spring-cloud-gateway-and-resilience4j-478373e68d44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Rate Limiter Pattern in Microservices using Spring Cloud Gateway and Resilience4j
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@araviku04/circuit-breaker-pattern-in-spring-boot-with-resilience4j-and-spring-cloud-gateway-5b4a0d2c161f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Circuit Breaker Pattern in Spring Boot with Resilience4j and Spring Cloud Gateway
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}


