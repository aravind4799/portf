import Header from './Header';
import { experiences } from '../data/experiences';

export default function Work() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto px-6 py-8 pt-[73px]">
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
                      {exp.techStack.split(', ').map((tech, i) => (
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
