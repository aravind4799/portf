import Header from './Header';
import { FaEnvelope, FaCheckCircle, FaCog } from 'react-icons/fa';

export default function GrindPal() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main>
        <article className="max-w-3xl mx-auto px-6 py-12 font-geist-mono">
          {/* Under Construction Banner */}
          <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm flex items-center gap-2">
              <FaCog className="animate-spin" />
              <span><strong>Under Construction</strong> — Building in public. Open to collaborators!</span>
            </p>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Why & How I Built GrindPal</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">A job search tool I actually use every day.</p>
          
          <hr className="border-gray-200 dark:border-gray-700 mb-8" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Problem</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Job searching is broken in two ways:
            </p>
            <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700 mb-4">
              <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>1. Generic platforms kill your edge.</strong></p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                LinkedIn Easy Apply, Indeed one-click — they optimize for volume, not fit. 
                I have 3+ years of backend engineering, a CKAD certification (91%), projects that reduced 
                processing times from 30 minutes to 60 seconds — but generic platforms couldn't showcase 
                the right experience for each specific role.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>2. The process is mentally draining.</strong></p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Let's be honest: job searching sucks. It's repetitive, demoralizing, and easy to burn out.
                I'd start strong on Monday, then skip days. No consistency. No system.
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
                  <tr><td className="py-2 text-gray-900 dark:text-white font-medium">LinkedIn Message Generator</td><td className="py-2 text-gray-500 dark:text-gray-400">Personalized connection request under 300 chars</td></tr>
                  <tr><td className="py-2 text-gray-900 dark:text-white font-medium">Cold Email Writer</td><td className="py-2 text-gray-500 dark:text-gray-400">Direct, metric-driven email with specific achievements</td></tr>
                  <tr><td className="py-2 text-gray-900 dark:text-white font-medium">"Why I'm a Good Fit"</td><td className="py-2 text-gray-500 dark:text-gray-400">3 concrete talking points for interviews</td></tr>
                  <tr><td className="py-2 text-gray-900 dark:text-white font-medium">Email Finder</td><td className="py-2 text-gray-500 dark:text-gray-400">Hunter.io integration — find emails without leaving</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Secret Sauce: Gamification</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              After reading <em>The Power of Habit</em> by Charles Duhigg, I realized why I kept burning out:
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 dark:bg-blue-900/20 rounded-r">
              <p className="text-gray-700 dark:text-gray-300 italic">"Habits work in a loop: Cue → Routine → Reward."</p>
            </blockquote>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Job searching had no reward. Just rejection emails (eventually). So I built one.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong>Meet Your Buddy:</strong> A virtual companion that evolves as you hit milestones.
              Log in daily (+5 coins), complete tasks (+5), send outreach (+10), 7-day streak (+50 bonus).
              Your buddy grows from Stage 1 → 2 → 3 as you progress.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm italic">
              Miss too many days? Your buddy notices.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Google Gemini API', 'Hunter.io', 'NextAuth'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">TL;DR</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I was frustrated with generic job platforms and burning out from the search process. So I built a tool that:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Personalizes every outreach</strong> with AI-powered analysis</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Keeps me consistent</strong> with a gamified buddy system</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span><strong>Removes friction</strong> by integrating everything in one place</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm italic">
                It's not a side project. It's how I'm actually running my job search.
              </p>
            </div>
          </section>

          <hr className="border-gray-200 dark:border-gray-700 mb-8" />

          <section className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Want to build this together? Always open to a pair of coding hands!
            </p>
            <a 
              href="mailto:aravind4799@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <FaEnvelope />
              Hit me up via email
            </a>
          </section>
        </article>
      </main>
    </div>
  );
}
