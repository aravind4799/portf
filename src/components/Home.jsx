import { useState} from 'react';
import Header from './Header';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaCopy, FaCheck } from "react-icons/fa";
import { useTheme } from '../ThemeContext';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const email = 'araviku04@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto px-6 py-4">
        <div className="flex flex-col items-center">
          <img 
            src={theme === 'dark' ? '/profile1.png' : '/profile.png'} 
            alt="Profile" 
            style={{ width: '288px', height: '340px' }} 
            className="object-contain"
          ></img>
          <hr className="w-[40%] border-t border-gray-500 dark:border-gray-600"></hr>
          <p className="font-geist-mono text-gray-600 dark:text-gray-300 text-lg font-medium mt-4">Hello, I'm</p>
          <p className="font-geist-mono text-gray-600 dark:text-white text-4xl md:text-6xl font-medium tracking-wide">Aravind</p>
        </div>
      </main>
      
      <div className="w-full  border-gray-200 dark:border-gray-700 py-2">
        <div className="container mx-auto px-6 text-center">
          <p className="font-geist-mono text-gray-500 dark:text-gray-400 text-base text-center">
            Backend Engineer | Java | SpringBoot | Kubernetes | AWS | Linux
          </p>
        </div>
      </div>

      <p className="font-geist-mono text-gray-600 dark:text-gray-300 text-base mt-2 text-center">
            Currently based in{' '}
            <span className="line-through">Chennai, India</span>
            {' - '}
            <span className="line-through">West Lafayette, IN, US</span>
            {' - '}
            <span>Spring, TX, US</span>
          </p>

      <main className="container mx-auto px-6 py-4 mt-10">
        <div className="flex flex-col items-center">
          {/* All blocks centered together with equal width and spacing | Mobile: Open to Work + Icons in row, Email below */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full md:max-w-4xl mx-auto">
            {/* Block 1: Open to Work */}
            <div className="flex items-center justify-center md:flex-1 w-full md:w-auto">
              <div 
                className="font-geist-mono bg-white dark:bg-gray-800 rounded-md px-4 py-2.5 flex items-center gap-2 text-base text-blue-600 dark:text-blue-400 border border-blue-500 dark:border-blue-500"
              >
                <span className="relative flex items-center justify-center w-2.5 h-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-fade-in-out"></span>
                </span>
                Open to Work
              </div>
            </div>
            
            {/* Block 2: Social Icons */}
            <div className="flex flex-row gap-4 items-center justify-center md:flex-1 w-full md:w-auto">
              <a href="https://github.com/aravind4799"><FaGithub className="w-7 h-7 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" /></a>
              <a href="https://www.linkedin.com/in/aravindkumar3/"><FaLinkedin className="w-7 h-7 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" /></a>
              <a href="https://leetcode.com/aravind4799/"><SiLeetcode className="w-7 h-7 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" /></a>
            </div>
            
            {/* Block 3: Email - Separate row on mobile, same row on desktop */}
            <div className="flex items-center justify-center md:flex-1 w-full md:w-auto">
              <button
                onClick={copyEmail}
                className="font-geist-mono text-gray-600 dark:text-gray-300 text-lg font-medium cursor-pointer hover:text-gray-800 dark:hover:text-gray-100 transition-all flex items-center gap-2 group px-4 py-2.5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                title="Click to copy email"
              >
                <span>{email}</span>
                {copied ? (
                  <FaCheck className="w-6 h-6 text-green-500" />
                ) : (
                  <FaCopy className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
