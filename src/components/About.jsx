import { useState, useEffect } from 'react';
import Header from './Header';
import { FaLinkedin, FaDownload, FaGithub, FaJava, FaDocker, FaAws, FaDatabase, FaServer } from 'react-icons/fa';
import { SiKubernetes, SiSpring, SiReact, SiNodedotjs, SiTypescript } from 'react-icons/si';

export default function About() {
  // Default to 'recruiters' tab when About page loads
  // This state persists while on the About page until user navigates away
  const [activeTab, setActiveTab] = useState('recruiters');

  // Load Credly embed script
  useEffect(() => {
    if (activeTab === 'recruiters') {
      const existingScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        document.body.appendChild(script);
      }
    }
  }, [activeTab]);

  const tabs = [
    { id: 'recruiters', label: 'For Recruiters', mobileLabel: 'Recruiters' },
    { id: 'devs', label: 'For Fellow Devs', mobileLabel: 'Devs' },
    { id: 'others', label: 'For All Others', mobileLabel: 'Others' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      
      {/* Navigation - Segmented Control */}
      <div className="container mx-auto px-6 pt-8 pb-4">
        <div className="flex flex-row justify-center mb-8 max-w-6xl mx-auto">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 gap-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
                className={`font-geist-mono text-sm md:text-base font-medium px-4 py-2 rounded-md transition-all whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <span className="md:hidden">{tab.mobileLabel}</span>
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'recruiters' && (
            <div className="font-geist-mono text-gray-700 dark:text-gray-300 space-y-8 max-w-6xl mx-auto">
              {/* Headline */}
              <div className="text-center mb-2">
                <p className="text-2xl text-gray-900 dark:text-white">Backend Engineer & Kubernetes Practitioner</p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 py-6 max-w-5xl mx-auto">
                {/* Block 1: 3+ YRS */}
                <div className="flex flex-col items-center min-w-[160px] py-3">
                  <div className="font-geist-mono text-gray-900 dark:text-white text-6xl font-bold mb-2 text-center leading-tight">
                    3+ 
                  </div>
                  <div className="font-geist-mono text-gray-700 dark:text-gray-300 text-base text-center font-medium">
                    Years of Experience
                  </div>
                </div>

                {/* Block 2: CKAD Badge */}
                <div className="flex flex-col items-center min-w-[200px] py-3">
                  <a 
                    href="https://www.credly.com/earner/earned/badge/9db64e5f-b28c-4014-ba6e-7522e01f6d26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group cursor-pointer"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <img 
                        src="/ckad.png" 
                        alt="CKAD Certified" 
                        className="w-full h-auto object-contain transition-transform group-hover:scale-110 max-w-[200px]"
                      />
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-3 px-4 py-1.5 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                      91% Score
                    </div>
                  </a>
                </div>

                {/* Block 3: ORACLE CERT */}
                <div className="flex flex-col items-center min-w-[180px] py-3">
                  <div className="font-geist-mono text-gray-900 dark:text-white text-5xl font-semibold mb-3 text-center leading-tight">
                    ORACLE
                  </div>
                  <div className="font-geist-mono text-gray-700 dark:text-gray-300 text-sm text-center font-medium">
                    Certified Java SE 11 Developer
                  </div>
                </div>
              </div>

              {/* About Me / Elevator Pitch */}
              <div className="text-left max-w-3xl mx-auto">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I am a backend developer who refuses to treat infrastructure as a "black box."
                  <br /><br />
                  My strongest assets are Java, Kubernetes and distributed systems. I bridge the gap between application code and operational reliability, ensuring that what I build isn't just functional—it's scalable, observable, and resilient.
                </p>
              </div>

              {/* Deep Dive Section - Expandable Details */}
              <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                  {/* Education Section */}
                  <details className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <summary className="cursor-pointer font-medium text-base text-gray-900 dark:text-white list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      Education
                      <span className="text-gray-400 dark:text-gray-500 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="p-4 bg-white dark:bg-gray-900">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-800 dark:text-gray-200">
{`master_degree:
  - Master of Science in Computer Science
  - University: Purdue University
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
  - Final GPA: 8.7
  - Courses:
    - A-Z in Computer Science`}
                        </pre>
                      </div>
                    </div>
                  </details>

                  {/* Full Stack Development Section */}
                  <details className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <summary className="cursor-pointer font-medium text-base text-gray-900 dark:text-white list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      Full Stack Development
                      <span className="text-gray-400 dark:text-gray-500 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="p-4 bg-white dark:bg-gray-900">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-800 dark:text-gray-200">
{`Backend:
  - Java (Spring Boot)
  - Node.js (NestJS, TypeScript)
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
  - PostgreSQL
  - MySQL
  - MongoDB
  - `}
                        </pre>
                      </div>
                    </div>
                  </details>

                  {/* Cloud & DevOps Section */}
                  <details className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <summary className="cursor-pointer font-medium text-base text-gray-900 dark:text-white list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      Cloud & DevOps
                      <span className="text-gray-400 dark:text-gray-500 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="p-4 bg-white dark:bg-gray-900">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-gray-800 dark:text-gray-200">
{`Cloud:
  - AWS (EC2, S3, EKS, IAM, VPC, SQS, Lambda, DynamoDB, Gateway)
  - Cloud Infrastructure

Containerization:
  - Docker
  - Container Image Building & Optimization

Orchestration:
  - Kubernetes
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
                </div>
              </div>

              {/* Core Competencies */}
              <div className="border-t border-b border-gray-300 dark:border-gray-700 py-8 mt-10">
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl w-full">
                    <div className="text-left bg-blue-50 dark:bg-blue-900/10 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">CORE EXPERTISE</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <span className="text-blue-500 dark:text-blue-400 text-xl">★</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Java (Spring Boot)</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="text-blue-500 dark:text-blue-400 text-xl">★</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Kubernetes / Docker</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="text-blue-500 dark:text-blue-400 text-xl">★</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">React (Next.js/TypeScript)</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="text-blue-500 dark:text-blue-400 text-xl">★</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Microservices</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-left bg-green-50 dark:bg-green-900/10 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">EXTENTED TOOLKIT</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <span className="text-green-500 dark:text-green-400 text-xl">✔</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">System Design</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="text-green-500 dark:text-green-400 text-xl">✔</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">AWS</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="text-green-500 dark:text-green-400 text-xl">✔</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">SQL & NoSQL</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="text-green-500 dark:text-green-400 text-xl">✔</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Node.js</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Roles & CTA */}
              <div className="text-center space-y-6">
                <div>
                  <p className="text-base font-medium text-gray-900 dark:text-white mb-2">OPEN TO: Backend Engineer | Full Stack Engineer | Platform Engineer</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/Aravind_K_Resume.pdf"
                    download="Aravind_Kumar_Resume.pdf"
                    className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-gray-800 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors font-medium"
                  >
                    <FaDownload className="w-4 h-4" />
                    Download Resume
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aravindkumar3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    View LinkedIn
                  </a>
                  <a
                    href="https://github.com/aravind4799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                  >
                    <FaGithub className="w-4 h-4" />
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'devs' && (
            <div className="font-geist-mono space-y-6 max-w-6xl mx-auto">
              {/* YAML Format (Kubernetes-style) */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm">YAML</span>
                </div>
                <div className="p-6">
                    <div className="text-gray-500 text-base mb-2"># current-status.yaml</div>
                    <pre className="text-base leading-relaxed overflow-x-auto whitespace-pre">
                      <span className="text-cyan-400">apiVersion</span><span className="text-gray-300">: </span><span className="text-green-400">v1</span>{'\n'}
                      <span className="text-cyan-400">kind</span><span className="text-gray-300">: </span><span className="text-green-400">Developer</span>{'\n'}
                      <span className="text-cyan-400">metadata</span><span className="text-gray-300">:</span>{'\n'}
                      <span className="text-gray-300">  </span><span className="text-cyan-400">name</span><span className="text-gray-300">: </span><span className="text-green-400">aravind</span>{'\n'}
                      <span className="text-gray-300">  </span><span className="text-cyan-400">labels</span><span className="text-gray-300">:</span>{'\n'}
                      <span className="text-gray-300">    </span><span className="text-cyan-400">role</span><span className="text-gray-300">: </span><span className="text-green-400">Java Backend Engineer</span>{'\n'}
                      <span className="text-gray-300">    </span><span className="text-cyan-400">focus</span><span className="text-gray-300">: </span><span className="text-green-400">Distributed Systems | Kubernetes</span>{'\n'}
                      <span className="text-gray-300">    </span><span className="text-cyan-400">exp</span><span className="text-gray-300">: </span><span className="text-green-400">3+ Years</span>{'\n'}
                      <span className="text-cyan-400">spec</span><span className="text-gray-300">:</span>{'\n'}
                      <span className="text-gray-300">  </span><span className="text-cyan-400">certifications</span><span className="text-gray-300">:</span>{'\n'}
                      <span className="text-gray-300">    - </span><span className="text-green-400">CKAD (91%)</span>{'\n'}
                      <span className="text-gray-300">    - </span><span className="text-green-400">Oracle Certified Java SE 11</span>{'\n'}
                      <span className="text-gray-300">  </span><span className="text-cyan-400">skills</span><span className="text-gray-300">:</span>{'\n'}
                      <span className="text-gray-300">    </span><span className="text-cyan-400">primary</span><span className="text-gray-300">: </span><span className="text-green-400">[Java, Spring Boot, Spring Security, Microservices]</span>{'\n'}
                      <span className="text-gray-300">    </span><span className="text-cyan-400">orchestration</span><span className="text-gray-300">: </span><span className="text-green-400">[Kubernetes, Helm, Docker, AWS EKS]</span>{'\n'}
                      <span className="text-gray-300">    </span><span className="text-cyan-400">patterns</span><span className="text-gray-300">: </span><span className="text-green-400">[Circuit Breakers, Event-Driven, Fault Tolerance]</span>{'\n'}
                      <span className="text-gray-300">  </span><span className="text-cyan-400">superpower</span><span className="text-gray-300">: </span><span className="text-green-400">Turning "CrashLoopBackOff" into "Running 1/1"</span>{'\n'}
                      <span className="text-gray-300">  </span><span className="text-cyan-400">currentStatus</span><span className="text-gray-300">:</span>{'\n'}
                      <span className="text-gray-300">    - </span><span className="text-green-400">Building at Zentrais</span>{'\n'}
                      <span className="text-gray-300">    - </span><span className="text-green-400">Learning system design and new way of coding. </span>{'\n'}
                      <span className="text-gray-300">    - </span><span className="text-green-400">Breaking & fixing K8s clusters</span>{'\n'}
                      <span className="text-gray-300">  </span><span className="text-cyan-400">loading</span><span className="text-gray-300">: </span><span className="text-green-400">CKA Certification...</span>{'\n'}
                      <span className="text-gray-300">  </span><span className="text-cyan-400">philosophy</span><span className="text-gray-300">: |</span>{'\n'}
                      <span className="text-gray-300">    </span><span className="text-green-400">I believe in full-lifecycle ownership. A feature isn't complete when the code is written.</span>{'\n'}
                      <span className="text-gray-300">    </span><span className="text-green-400">it’s complete when it is securely deployed, easily observable,and delivering value in production.</span>{'\n'}
                      
                    </pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'others' && (
            <div className="font-geist-mono text-gray-700 dark:text-gray-300 space-y-8 max-w-6xl mx-auto">
              {/* Intro */}
              <p className="text-lg leading-relaxed">
                If you are reading this tab, you probably don't care about Kubernetes clusters or Java Heap memory. You want to know who I am.
              </p>

              {/* Life Philosophy */}
              <div className="space-y-4">
  
                <blockquote className="border-l-4 border-gray-400 dark:border-gray-600 pl-4 italic text-lg">
                  "True growth comes from stepping outside your comfort zone."
                </blockquote>
              </div>

              {/* My Reset Button */}
              <div className="space-y-3">
      
                <p className="text-base leading-relaxed">
                  Two years ago, I hit "Reset" on my life. I moved to the US for my Master's, leaving behind my friends & family, my food, and my comfort zone.
                </p>
              </div>

              {/* What I Learned */}
              <div className="space-y-4">
            
                <ul className="space-y-3 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                    <div>
                      <span className="font-medium">I am more resilient than I thought.</span> Whether it was figuring out how to cook a meal without burning the apartment or debugging a distributed system at 2 AM, I learned that everything is figure-out-able.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                    <div>
                      <span className="font-medium">Community is everything.</span> I found a tribe of friends who became family. We supported each other through the grind, teaching me that success is rarely a solo endeavor.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Professional Impact */}
              <div className="space-y-3">
           
                <p className="text-base leading-relaxed">
                  This journey pushed me to be a better developer in the last 2 years than I was in the previous years combined. The constraints forced me to be efficient, focused, and relentless.
                </p>
              </div>

              {/* Offline Mode */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Offline Mode</h3>
                <p className="text-base leading-relaxed">
                  You'll find me at the gym, playing soccer, sketching And watching movies more movies than I should.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

