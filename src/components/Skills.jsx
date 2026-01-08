import { useState } from 'react';
import Header from './Header';
import { FaGithub } from 'react-icons/fa';

export default function Skills() {
  // Projects data structure
  const [projects] = useState([
    {
      id: 1,
      name: 'CKAD: Practice Questions',
      url: 'https://github.com/aravind4799/CKAD-Practice-Questions',
      tags: ['Kubernetes', 'CKAD'],
      isTop: true,
      description: 'Practice Questions for CKAD Certification'
    },
    {
      id: 2,
      name: 'K8',
      url: 'https://github.com/aravind4799/kubernetes-deployments',
      tags: ['Kubernetes', 'Docker', 'DevOps'],
      isTop: false,
      description: 'Kubernetes & Docker Learning Notes'
    },
    {
      id: 3,
      name: 'Reactor Deployer',
      url: 'https://github.com/aravind4799/Reactor-Deployer',
      tags: ['TypeScript', 'JavaScript', 'Node.js', 'AWS', 'Serverless Framework', 'Lambda' , 'System Design' , 'Websockets' , 'RESTful API'],
      isTop: true,
      description: 'End-to-end serverless CI/CD pipeline on AWS using SQS, S3, and CodeBuild for secure, automated deployments.'
    },
    {
      id: 4,
      name: 'Covid Tracker',
      url: 'https://github.com/aravind4799/Covid_tracker',
      liveUrl: 'https://aravind4799.github.io/Covid_tracker/',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Frontend','Chart.js', 'Material-UI'],
      isTop: true,
      description: 'Corona Virus tracker using covid-api.com , React js ,chart js and material-ui'
    },
    {
      id: 5,
      name: 'DoveAI',
      url: 'https://github.com/aravind4799/DoveAI',
      tags: ['Typescript', 'Next.js', 'Flask', 'MongoDB', 'OpenAI', 'Tailwind CSS' , 'React', 'Python'],
      isTop: true,
      description: 'DoveAI is a full-stack application utilizing Next.js, Flask, and MongoDB Atlas. It features a ChatGPT clone using the OpenAI API, allowing users to interact with an AI.'
    },
    {
      id: 6,
      name: 'Resiligate',
      url: 'https://github.com/aravind4799/resiligate',
      tags: ['Spring Boot', 'Microservices', 'Resilience4j', 'Eureka', 'Spring Cloud Gateway', 'Docker', 'Docker Compose', 'DevOps'],
      isTop: false,
      description: 'Fault-tolerant microservice: Spring Boot services with Resilience4j safeguards, Eureka discovery, and a Spring Cloud Gateway front door.'
    },
    {    
      id: 7,
      name: 'KeepApp',
      url: 'https://github.com/aravind4799/KeepApp',
      tags: ['React', 'react dom', 'react hooks', 'css', 'MERN Stack','MongoDB', 'Express', 'Node.js'],
      isTop: false,
      liveUrl: 'https://rqudx.csb.app/',
      description: 'A notes keeping App build using  MERN Stack'
    },
    {
      id: 8,
      name: 'DS & Algorithms',
      url: 'https://github.com/aravind4799/DS-Algorithms',
      tags: ['C++', 'Java', 'Data Structures', 'Algorithms'],
      isTop: false,
      description: 'Data Structures and Algorithms in C++ and Java'
    },
    {
      id: 9,
      name: 'Zentrais UI',
      url: 'https://github.com/aravind4799/zen-ui',
      tags: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript','Vercel'],
      liveUrl: 'https://zen-ui-umber.vercel.app/',
      isTop: false,
      description: 'Initial mockup for Zentrais UI'
    },
    {
      id: 10,
      name: 'Simon Game',
      url: 'https://github.com/aravind4799/Simon_Game',
      liveUrl: 'https://aravind4799.github.io/Simon_Game/',
      tags: ['JavaScript', 'HTML', 'CSS', 'Jquery','DOM Manipulation'],
      isTop: false,
      description: 'A simple memory game implemented using HTML,CSS and JavaScript'
    },
    {
      id: 11,
      name: 'Outdoors',
      url: 'https://github.com/aravind4799/outdoors',
      tags: ['JavaScript', 'HTML', 'CSS', 'React'],
      liveUrl: 'https://aravind4799.github.io/outdoors/',
      isTop: false,
      description: 'Landing page for a fictional tourism company build using html and sass'
    },
    {
      id: 12,
      name: 'Secrets',
      url: 'https://github.com/aravind4799/k8s-auth',
      tags: ['OAUTH', 'Form authentication', 'Javascript', 'CSS'],
      isTop: false,
      description: 'Implementation of authentication functionalities'
    },
    {
      id: 13,
      name: 'Backend_Web_Dev',
      url: 'https://github.com/aravind4799/social-media-app',
      tags: ['Node.js', 'Express', 'React', 'MongoDB'],
      isTop: false,
      description: '6 years back when I first wrote my first node.js project!'
    },
    {
      id: 14,
      name: 'Newsletter Signup',
      url: 'https://github.com/aravind4799/newsletter_signup_page',
      tags: ['Mailchimp', 'HTML', 'Javascript'],
      isTop: false,
      description: 'A web application to create a mailing list for the users, using mailchimp API'
    },
    {
      id: 15,
      name: 'TODO APP',
      url: 'https://github.com/aravind4799/TODO_LIST',
      tags: ['HTML', 'CSS', 'ejs', 'Javascript', 'heroku deployment','Express'],
      isTop: false,
      description: 'The infamous TODO list app built using HTML, CSS and JavaScript 6 YEARS AGO!'
    },
    {
      id: 16,
      name: 'Daily Journal',
      url: 'https://github.com/aravind4799/Daily-Journal',
      tags: ['HTML', 'CSS', 'mongoose', 'Javascript', 'heroku deployment','Express'],
      isTop: false,
      description: 'Daily-Journal website , used to keep track your daily activities, using mongoose and express'
    },
    {
      id: 17,
      name: 'PhoneBook',
      url: 'https://github.com/aravind4799/PHONE-BOOK',
      tags: ['HTML', 'CSS', 'Angular','live'],
      isTop: false,
      liveUrl: 'https://aravind4799.github.io/PHONE-BOOK/',
      description: 'Simple Angular app performing CRUD operations with localstorage - when I was learning Angular for my first job!'
    },
  ]);

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) => {
    if (!searchTerm.trim()) {
      return project.isTop; // Show only top projects when no search
    }
    const searchLower = searchTerm.toLowerCase();
    // Search in tags (case-insensitive)
    const tagMatch = project.tags.some((tag) =>
      tag.toLowerCase().includes(searchLower)
    );
    // If searching for "live", also match projects with liveUrl
    if (searchLower === 'live' && project.liveUrl) {
      return true;
    }
    return tagMatch;
  });

  // Get top 4 projects
  const topProjects = projects.filter((p) => p.isTop).slice(0, 4);
  const displayProjects = searchTerm.trim() ? filteredProjects : topProjects;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="font-geist-mono text-gray-700 dark:text-gray-300 space-y-6">
            {/* Education Section */}
            <details className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <summary className="cursor-pointer font-medium text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                Education
                <span className="text-gray-900 dark:text-white">▼</span>
              </summary>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-800 dark:text-gray-200">
{`master_degree:
  - Master of Science in Computer Science
  - University: Purdue University
  - Major Concentration: Information & Cybersecurity
  - Campus: West Lafayette
  - Status: Completed
  - GPA: 3.77

  courses:
    summer_2023:
      - CS 50010: Fundamental Principles of Information Security
      - CS 50011: Introduction to Systems for Information Security
    
    fall_2023:
      - CS 52600: Information Security
      - CS 52900: Security Analytics
      - CS 55500: Cryptography
    
    spring_2024:
      - CS 52300: Social Economic Legal Aspects of Security
      - CS 52700: Software Security
      - CS 59100: CERIAS Security Seminar
    
    fall_2024:
      - CS 39000: Web Application Development
      - CS 54100: Database Systems
      - CS 58000: Algorithm Design Analysis & Implementation
    
    spring_2025:
      - CS 52800: Network Security

bachelor_degree:
  - Bachelor of Engineering in Computer Science
  - University: Anna University Chennai
  - Location: Chennai, India
  - Status: Completed
  - Final GPA: 8.7`}
                  </pre>
                </div>
              </div>
            </details>

            {/* Cloud & DevOps Section */}
            <details className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <summary className="cursor-pointer font-medium text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                Cloud & DevOps
                <span className="text-gray-900 dark:text-white">▼</span>
              </summary>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-800 dark:text-gray-200">
{`Cloud:
  - AWS (EC2, S3, EKS, IAM, VPC, SQS, Lambda, DynamoDB, Gateway)
  - Cloud Infrastructure

Containerization:
  - Docker
  - Container Image Building & Optimization

Orchestration:
  - Kubernetes (CKAD Certified - 91% Score)
  - Helm Charts
  - ArgoCD (GitOps)
  - Deployment Strategies (Rolling, Canary, Blue-Green)

Kubernetes_core:
  - Deployments, ReplicaSets, Pods
  - Services (ClusterIP, NodePort, LoadBalancer)
  - Ingress Controllers & Routing
  - ConfigMaps & Secrets
  - ServiceAccounts, RBAC (Roles & RoleBindings)
  - Network Policies
  - Resource Management (Requests/Limits)
  - Health Probes (Liveness, Readiness, Startup)
  - Jobs & CronJobs
  - Init Containers & Multi-Container Pods
  - PersistentVolumes & PersistentVolumeClaims
  - StatefulSets & DaemonSets

Devops:
  - CI/CD Pipelines
  - GitOps
  - Monitoring & Logging
  - Observability`}
                  </pre>
                </div>
              </div>
            </details>

            {/* Full Stack Development Section */}
            <details className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <summary className="cursor-pointer font-medium text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                Full Stack Development
                <span className="text-gray-900 dark:text-white">▼</span>
              </summary>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-800 dark:text-gray-200">
{`Backend:
  - Java (Spring Boot)
  - Node.js
  - Python (Flask)
  - RESTful APIs
  - Microservices Architecture
  - Message Queues (RabbitMQ)

Frontend:
  - React
  - Next.js
  - Redux
  - TypeScript/JavaScript
  - Tailwind CSS

Databases:
  - MySQL
  - MongoDB
  - SQL`}
                  </pre>
                </div>
              </div>
            </details>

            {/* Projects Section */}
            <details open className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <summary className="cursor-pointer font-medium text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                Projects
                <span className="text-gray-900 dark:text-white">▼</span>
              </summary>
              <div className="mt-4 space-y-4">
                {/* Search Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search by tags (e.g., Java, Kubernetes, React...) or type 'live' to search for live demos"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 font-geist-mono text-sm"
                  />
                </div>

                {/* Display Message */}
                {!searchTerm.trim() && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Showing top 4 projects
                  </p>
                )}

                {/* Projects List */}
                {displayProjects.length > 0 ? (
                  <div className="space-y-3">
                    {displayProjects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-start gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group cursor-pointer"
                        onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                      >
                        <div className="flex items-center flex-shrink-0 pt-1">
                          <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.name}
                            </div>
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1 px-2 py-0.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                              >
                                <span className="relative flex items-center justify-center">
                                  <span className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></span>
                                  <span className="relative w-2 h-2 bg-green-500 rounded-full"></span>
                                </span>
                                Live
                              </a>
                            )}
                          </div>
                          {project.description && (
                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {project.description}
                            </div>
                          )}
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    No projects found matching "{searchTerm}"
                  </div>
                )}
              </div>
            </details>
          </div>
        </div>
      </main>
    </div>
  );
}

