import { useState } from 'react';
import Header from './Header';
import { FaEnvelope, FaCheckCircle, FaCog, FaEdit, FaTerminal } from 'react-icons/fa';

export default function GrindPal() {
  const [stoppedBuddies, setStoppedBuddies] = useState(new Set());

  const handleBuddyHover = (buddyName) => {
    setStoppedBuddies(prev => new Set([...prev, buddyName]));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main>
        <article className="max-w-3xl mx-auto px-6 py-12 font-geist-mono">
          
          <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm flex items-center gap-2">
              <FaCog className="animate-spin w-5 h-5 md:w-4 md:h-4 flex-shrink-0" />
              <span><strong>Under Construction</strong> — Open to collaborators!</span>
            </p>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Why I Built GrindPal</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">A job search tool I actually use every day.</p>
          
          {/* Bouncing Buddies - Header Section */}
          <div className="flex justify-center gap-4 mb-8 items-end">
            {[
              { name: 'kola', src: '/kola_1.png' },
              { name: 'penguin', src: '/penguin_pal.png' },
              { name: 'rabbit', src: '/rabbit_pal.png' },
              { name: 'redpanda', src: '/redpanda_pal.png' }
            ].map((buddy, index) => {
              const isStopped = stoppedBuddies.has(buddy.name);
              return (
                <div 
                  key={buddy.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 relative cursor-pointer"
                  onMouseEnter={() => handleBuddyHover(buddy.name)}
                >
                  <div 
                    className={`w-full h-full ${isStopped ? '' : 'animate-[jump_1s_ease-in-out_infinite]'}`}
                    style={!isStopped ? { animationDelay: `${index * 0.1}s` } : {}}
                  >
                    <img
                      src={buddy.src}
                      alt={buddy.name}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          
          <hr className="border-gray-200 dark:border-gray-700 mb-8" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Problem</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Job searching is broken in two ways:
            </p>
            <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700 mb-4">
              <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>1. Generic platforms kill your edge.</strong></p>
              <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>2. The process is mentally draining.</strong></p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Let's be honest: job searching sucks. It's repetitive, demoralizing, and easy to burn out.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Solution</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              An all-in-one outreach engine. One paste. Everything generated. No tab switching.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr><td className="py-2 text-gray-900 dark:text-white font-medium">ATS Resume Analyzer</td><td className="py-2 text-gray-500 dark:text-gray-400">Paste a JD → Get skill gaps, matches, and a fit score</td></tr>
                  <tr><td className="py-2 text-gray-900 dark:text-white font-medium">LinkedIn Message </td><td className="py-2 text-gray-500 dark:text-gray-400">Personalized connection request under 300 chars</td></tr>
                  <tr><td className="py-2 text-gray-900 dark:text-white font-medium">Cold Email Writer</td><td className="py-2 text-gray-500 dark:text-gray-400">Direct, metric-driven email with specific achievements</td></tr>
                  <tr><td className="py-2 text-gray-900 dark:text-white font-medium">"Why I'm a Good Fit"</td><td className="py-2 text-gray-500 dark:text-gray-400">3 concrete talking points for interviews</td></tr>
                  <tr><td className="py-2 text-gray-900 dark:text-white font-medium">Email Finder</td><td className="py-2 text-gray-500 dark:text-gray-400">Hunter.io integration — find emails without leaving</td></tr>
                </tbody>
              </table>
            </div>
          </section>

                     <section className="mb-12">
             <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
               <FaEdit className="text-blue-500" /> Custom Prompt Lab
             </h2>
             <div className="p-5 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/40 rounded-xl">
               <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                 Standard AI often sounds too "corporate-polite." The Prompt Lab lets you inject your personality. 
                 Whether you want to sound like a <em>Senior SRE</em> or a <em>Startup Founding Engineer</em>, you can tune the temperature and system instructions for every outreach.
               </p>
               <div className="flex items-center gap-2 text-xs font-mono bg-white dark:bg-black/40 p-3 rounded-lg border dark:border-gray-700 text-blue-600 dark:text-blue-400">
                 <FaTerminal />
                 <span>SET_PERSONA: "Kubernetes Expert / Backend Performance Focus"</span>
               </div>
             </div>
        </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Secret Sauce: Gamification</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              After reading <a href="https://charlesduhigg.com/the-power-of-habit/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline"><em>The Power of Habit</em></a> by Charles Duhigg, I realized why it’s so easy to lose momentum during a job search
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 dark:bg-blue-900/20 rounded-r">
              <p className="text-gray-700 dark:text-gray-300 italic">"Habits work in a loop: Cue → Routine → Reward."</p>
            </blockquote>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              The problem is that job searching often lacks an immediate reward. 
              the "Routine" is clear, but the "Reward" (the offer) is often weeks or months away. 
              I recently came across this great breakdown on <a href="https://medium.com/@cly11204/part-1-why-duolingo-feels-more-rewarding-than-learning-in-school-ed137db4e4f5" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              <em>why Duolingo feels more rewarding than traditional learning </em></a>- it’s all about immediate, bite-sized feedback.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong>Meet Your Buddy:</strong>Your companion that evolves as you hit milestones. You can drive their development by accumulating growth points through daily actions, earning +5 points for logging in, +5 for completing tasks, and +10 for sending outreach. Consistency is rewarded with a +50 point bonus for maintaining a 7-day streak, and as you progress, your buddy will grow from Stage 1 to Stage 2, ultimately reaching Stage 3.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm italic">
              Miss too many days? Your are starving for buddy.
            </p>
          </section>

          {/* Bouncing Buddies - Bottom Section */}
          <section className="mb-10">
            <div className="flex justify-center gap-4 mb-8 items-end">
              {[
                { name: 'panda', src: '/panda_pal.png' },
                { name: 'lion', src: '/lion_pal.png' },
                { name: 'squirrel', src: '/squirrel_pal.png' },
                { name: 'racoon', src: '/racoon_pal.png' }
              ].map((buddy, index) => {
                const isStopped = stoppedBuddies.has(buddy.name);
                return (
                  <div 
                    key={buddy.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 relative cursor-pointer"
                    onMouseEnter={() => handleBuddyHover(buddy.name)}
                  >
                    <div 
                      className={`w-full h-full ${isStopped ? '' : 'animate-[jump_1s_ease-in-out_infinite]'}`}
                      style={!isStopped ? { animationDelay: `${index * 0.1}s` } : {}}
                    >
                      <img
                        src={buddy.src}
                        alt={buddy.name}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-700 mb-8" />

          <section className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to build this together? I’m always open to an extra pair of hands!
            </p>
            <a 
              href="mailto:araviku04@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <FaEnvelope />
              Collaborate on GrindPal
            </a>
          </section>
        </article>
      </main>
    </div>
  );
}


