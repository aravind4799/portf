import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const { theme, toggleTheme } = useTheme();

  // Format time as "Jan 6, 5:06:36 pm cst"
  const formatTime = () => {
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const month = months[now.getMonth()];
    const day = now.getDate();
    
    // Get local time
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    return `${month} ${day}, ${hours}:${minutes}:${seconds} ${ampm} CST`;
  };

  useEffect(() => {
    // Set initial time
    setCurrentTime(formatTime());
    
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'GrindPal', path: '/grindpal' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Don't add padding to body as it affects header width
      // Use html element instead
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 min-h-[73px] max-h-[73px] h-[73px] w-full max-w-full overflow-hidden box-border">
        <div className="w-full max-w-full px-6 h-full flex items-center box-border">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 items-center w-full max-w-full h-full py-4 box-border">
            {/* Name on extreme left */}
            <Link 
              to="/" 
              className="font-geist-mono text-gray-600 dark:text-gray-300 text-base font-medium hover:text-gray-800 dark:hover:text-gray-100 transition-colors cursor-pointer"
            >
              Aravind
            </Link>

            {/* Navigation links centered with theme toggle */}
            <nav className="flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-geist-mono text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-base"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </button>
            </nav>

            {/* Timestamp on extreme right */}
            <div className="flex items-center justify-end">
              <div className="font-geist-mono text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap text-right">
                {currentTime}
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex items-center justify-between w-full max-w-full h-full py-4 box-border">
            {/* Name on left */}
            <Link 
              to="/" 
              className="font-geist-mono text-gray-600 dark:text-gray-300 text-base font-medium hover:text-gray-800 dark:hover:text-gray-100 transition-colors cursor-pointer"
            >
              Aravind
            </Link>

            {/* Theme toggle and Plus icon on right */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors focus:outline-none flex-shrink-0"
                aria-label="Toggle menu"
              >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={closeMenu}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-full bg-white dark:bg-gray-900 z-[60] md:hidden shadow-xl transform transition-transform duration-300 ease-in-out">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              {/* Name */}
              <Link 
                to="/" 
                onClick={closeMenu}
                className="font-geist-mono text-gray-600 dark:text-gray-300 text-base font-medium hover:text-gray-800 dark:hover:text-gray-100 transition-colors cursor-pointer"
              >
                Aravind
              </Link>

              {/* X icon */}
              <button
                onClick={closeMenu}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className="font-geist-mono text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-base py-2"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Timestamp at bottom right */}
            <div className="px-6 pb-6 flex justify-end font-geist-mono text-gray-500 dark:text-gray-400 text-xs text-right">
              {currentTime}
            </div>
          </div>
        </>
      )}
    </>
  );
}

