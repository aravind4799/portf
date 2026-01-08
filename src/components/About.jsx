import { useState, useEffect } from 'react';
import Header from './Header';
import { FaLinkedin, FaDownload, FaGithub } from 'react-icons/fa';

export default function About() {
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
      <main className="container mx-auto px-6 py-8">
        {/* Tabbed Navigation */}
        <div className="flex flex-row justify-center gap-2 md:gap-8 mb-8 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-geist-mono text-sm md:text-base font-medium pb-4 px-2 md:px-4 transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <span className="md:hidden">{tab.mobileLabel}</span>
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'recruiters' && (
            <div className="font-geist-mono text-gray-700 dark:text-gray-300 space-y-8">
              {/* Headline */}
              <div className="text-left mb-2">
                <p className="text-xl md:text-2xl text-gray-900 dark:text-white">Full Stack Engineer & Kubernetes Practitioner</p>
              </div>

              {/* Trust Badges - 3 Simple Blocks */}
              <div className="flex flex-nowrap justify-start items-center gap-3 md:gap-12 py-1 overflow-x-auto ">
                {/* Block 1: 3+ YRS */}
                <div className="flex flex-col items-center w-[100px] md:w-[150px] py-2 flex-shrink-0">
                  <div className="font-geist-mono text-gray-900 dark:text-white text-4xl md:text-5xl font-bold mb-1 text-center">
                    3+ 
                  </div>
                  <div className="font-geist-mono text-gray-700 dark:text-gray-300 text-sm md:text-base text-center">
                    Years of Experience
                  </div>
                </div>

                {/* Block 2: CKAD Badge */}
                <div className="flex flex-col items-center w-[120px] md:w-[180px] py-2 flex-shrink-0">
                  <a 
                    href="https://www.credly.com/earner/earned/badge/9db64e5f-b28c-4014-ba6e-7522e01f6d26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group cursor-pointer"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <img 
                        src="/ckad.png" 
                        alt="CKAD Certified" 
                        className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      91%
                    </div>
                  </a>
                </div>

                {/* Block 3: ORACLE CERT */}
                <div className="flex flex-col items-center w-[100px] md:w-[150px] py-2 flex-shrink-0">
                  <div className="font-geist-mono text-gray-900 dark:text-white text-2xl md:text-5xl font-semibold mb-1 md:mb-2 text-center">
                    ORACLE
                  </div>
                  <div className="font-geist-mono text-gray-700 dark:text-gray-300 text-sm md:text-base text-center">
                    Certified Java SE 11 Developer
                  </div>
                </div>
              </div>

              {/* About Me / Elevator Pitch */}
              <div className="text-left max-w-3xl">
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I am a Full Stack developer who refuses to treat infrastructure as a "black box."
                  <br /><br />
                  My strongest assets are Java and Kubernetes. I bridge the gap between application code and operational reliability, ensuring that what I build isn't just functional—it's scalable, observable, and resilient.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="border-t border-b border-gray-300 dark:border-gray-700 py-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Primary Power */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">CORE EXPERTISE</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-blue-500 dark:text-blue-400">★</span>
                        <span className="text-gray-700 dark:text-gray-300">Java (Spring Boot)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-500 dark:text-blue-400">★</span>
                        <span className="text-gray-700 dark:text-gray-300">Kubernetes / Docker </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-500 dark:text-blue-400">★</span>
                        <span className="text-gray-700 dark:text-gray-300">React (Next.js/TypeScript)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-500 dark:text-blue-400">★</span>
                        <span className="text-gray-700 dark:text-gray-300">Microservices</span>
                      </li>
                    </ul>
                  </div>

                  {/* Versatility */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">EXTENTED TOOLKIT</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500 dark:text-green-400">✔</span>
                        <span className="text-gray-700 dark:text-gray-300">System Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500 dark:text-green-400">✔</span>
                        <span className="text-gray-700 dark:text-gray-300">AWS</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500 dark:text-green-400">✔</span>
                        <span className="text-gray-700 dark:text-gray-300">SQL & NoSQL</span>
                      </li>
                      <li className="flex items-center gap-2">
                      <span className="text-green-500 dark:text-green-400">✔</span>
                        <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Target Roles & CTA */}
              <div className="text-left space-y-6">
                <div>
                  <p className="text-base font-medium text-gray-900 dark:text-white mb-2">OPEN TO:  Full Stack Engineer | Platform Engineer | Backend Developer | DevOps Engineer </p>
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
            <div className="font-geist-mono space-y-6">
              {/* JSON Code Block */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm">JSON</span>
                  <button className="text-gray-400 hover:text-gray-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-base mb-2">// current_status.json</div>
                  <pre className="text-base leading-relaxed overflow-x-auto whitespace-pre">
                    <span className="text-gray-300">{'{'}</span>{'\n'}
                    <span className="text-orange-400">  "role"</span><span className="text-gray-300">: </span><span className="text-green-400">"Full Stack Engineer + K8s Enthusiast"</span><span className="text-gray-300">,</span>{'\n'}
                    <span className="text-orange-400">  "exp"</span><span className="text-gray-300">: </span><span className="text-green-400">"3+ Years"</span><span className="text-gray-300">,</span>{'\n'}
                    <span className="text-orange-400">  "certifications"</span><span className="text-gray-300">: [</span><span className="text-green-400">"CKAD (91%)"</span><span className="text-gray-300">, </span><span className="text-green-400">"Oracle Certified Java Dev"</span><span className="text-gray-300">],</span>{'\n'}
                    <span className="text-orange-400">  "superpower"</span><span className="text-gray-300">: </span><span className="text-green-400">"Debugging 'CrashLoopBackOff' without panicking"</span><span className="text-gray-300">,</span>{'\n'}
                    <span className="text-orange-400">  "ide"</span><span className="text-gray-300">: </span><span className="text-green-400">"IntelliJ + Cursor"</span><span className="text-gray-300">,</span>{'\n'}
                    <span className="text-orange-400">  "coffee"</span><span className="text-gray-300">: </span><span className="text-green-400">"Required"</span><span className="text-gray-300">,</span>{'\n'}
                    <span className="text-orange-400">  "currentRoutine"</span><span className="text-gray-300">: </span><span className="text-green-400">"Job Search | Leetcode | Learning & Breaking K8s | Working at Zentrais - https://zentrais.com/"</span><span className="text-gray-300">,</span>{'\n'}
                    <span className="text-orange-400">  "loading"</span><span className="text-gray-300">: </span><span className="text-green-400">"CKA Certification..."</span><span className="text-gray-300">,</span>{'\n'}
                    <span className="text-orange-400">  "futureGoal"</span><span className="text-gray-300">: </span><span className="text-green-400">"sudo kill -9 job_search && allocate --all-resources k8s && backend systems"</span><span className="text-gray-300">,</span>{'\n'}
              
                    <span className="text-gray-300">{'}'}</span>
                  </pre>
                </div>
              </div>

              {/* Philosophy Terminal Block */}
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="text-gray-300 mb-4">
                  <span className="text-gray-500">$ </span>
                  <span>cat my-philosophy.txt</span>
                </div>
                <div className="border-l-4 border-gray-600 pl-4 text-gray-300 leading-relaxed">
                  I don't believe in "throwing code over the wall" to Ops. If I write the endpoint in{' '}
                  <span className="font-bold text-white">Java/Spring Boot</span>, I want to own the{' '}
                  <span className="font-bold text-white">Helm Chart</span> that deploys it and the{' '}
                  <span className="font-bold text-white">Prometheus</span> alert that monitors it.
                </div>
              </div>

              {/* Note for Fellow Devs */}
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="text-gray-300 mb-4 text-base">
                  <span className="text-gray-500">$ </span>
                  <span>cat note-on-job-search.txt</span>
                </div>
                <pre className="text-gray-300 leading-relaxed text-base font-mono whitespace-pre-wrap">
We don't control the market, the ghosting, or the final offer.
We only control the inputs:
1. When to wake up.
2. When to sleep.
3. Showing up.
I am practicing the art of obsessing over the routine, not the result.
Keep showing up. Put in the reps 👊
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'others' && (
            <div className="font-geist-mono text-gray-700 dark:text-gray-300 space-y-8">
              {/* Intro */}
              <p className="text-base md:text-lg leading-relaxed">
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
                  Two years ago, I hit "Reset" on my life. I moved to the US for my Master's, leaving behind my friends, my food, and my comfort zone.
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

