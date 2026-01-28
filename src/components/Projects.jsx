import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { FaGithub, FaStar, FaCodeBranch, FaBriefcase, FaSearch, FaTimes, FaProjectDiagram, FaCog, FaSearchPlus, FaSearchMinus, FaExpand } from 'react-icons/fa';
import { SiHelm } from 'react-icons/si';
import { experiences } from '../data/experiences';
import { projects, ossContributions, filterCategories } from '../data/projects';

// Tech aliases - maps search terms to related technologies
const techAliases = {
  // Languages & Runtimes
  'node': ['node.js', 'express', 'nestjs', 'npm'],
  'java': ['spring boot', 'spring', 'jpa', 'junit', 'hibernate', 'mockito'],
  'python': ['flask', 'django', 'fastapi'],
  'typescript': ['ts', 'tsx'],
  
  // Frontend
  'react': ['react.js', 'redux', 'material-ui', 'next.js'],
  'angular': ['ng', 'rxjs'],
  'frontend': ['react', 'angular', 'vue', 'tailwind', 'css', 'html'],
  
  // Backend
  'backend': ['spring boot', 'nestjs', 'express', 'flask', 'api'],
  'spring': ['spring boot', 'java', 'jpa', 'hibernate'],
  'api': ['rest', 'restful', 'graphql'],
  
  // DevOps
  'kubernetes': ['k8s', 'helm', 'eks', 'ckad', 'docker'],
  'docker': ['container', 'docker compose'],
  'aws': ['eks', 'lambda', 's3', 'sqs', 'codebuild'],
  'devops': ['kubernetes', 'docker', 'ci/cd', 'github actions'],
  
  // Databases
  'database': ['postgresql', 'mysql', 'mongodb', 'redis', 'prisma'],
  'sql': ['postgresql', 'mysql'],
  'nosql': ['mongodb', 'redis'],
};

export default function Projects() {
  const navigate = useNavigate();
  // State
  const [activeFilter, setActiveFilter] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSystemDesign, setActiveSystemDesign] = useState(null); // For modal
  const tagDisplayMode = 'compact'; // Always use compact mode

  // Fixed color for Reactor Deployer (blue)
  const reactorColor = { from: 'from-blue-500', to: 'to-cyan-500', border: 'border-blue-400 dark:border-blue-500' };

  // Fixed color for CKAD (golden orange)
  const ckadColor = { from: 'from-orange-500', to: 'to-amber-500', border: 'border-orange-400 dark:border-amber-500' };

  // Fixed color for GrindPal (orange-red)
  const grindpalColor = { from: 'from-orange-500', to: 'to-red-500', border: 'border-orange-400 dark:border-orange-500' };

  // Get top 6 featured projects in specific order
  const featuredProjects = useMemo(() => {
    const featured = projects.filter((p) => p.isTop);
    // Order: GrindPal, CKAD, Reactor Deployer, DoveAI, Resiligate
    const order = [19, 1, 3, 5, 6]; // Project IDs in desired order
    const ordered = order.map(id => featured.find(p => p.id === id)).filter(Boolean);
    // Add any other featured projects that aren't in the order list
    const remaining = featured.filter(p => !order.includes(p.id));
    return [...ordered, ...remaining].slice(0, 6);
  }, []);

  // Get expanded search terms from aliases
  const getExpandedTerms = (search) => {
    const terms = [search];
    // Add aliases if search matches a key exactly
    if (techAliases[search]) {
      terms.push(...techAliases[search]);
    }
    // Also check if search is an alias of something
    Object.entries(techAliases).forEach(([key, aliases]) => {
      if (aliases.includes(search)) {
        terms.push(key);
      }
    });
    return [...new Set(terms)];
  };

  // Filter projects based on active filter and search
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // When searching, ignore the filter and search ALL projects
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      const expandedTerms = getExpandedTerms(search);
      
      filtered = filtered.filter((p) =>
        expandedTerms.some(term =>
          p.tags.some((tag) => tag.toLowerCase().includes(term))
        )
      );
    } else {
      // Only apply filter when NOT searching
      if (activeFilter === 'featured') {
        filtered = filtered.filter((p) => p.isTop);
      } else if (activeFilter === 'live') {
        filtered = filtered.filter((p) => p.liveUrl);
      } else {
        filtered = filtered.filter((p) =>
          p.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase()))
        );
      }
    }

    return filtered;
  }, [activeFilter, searchTerm]);

  // Search work experiences with alias expansion
  const matchingExperiences = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const search = searchTerm.toLowerCase().trim();
    const expandedTerms = getExpandedTerms(search);
    
    return experiences.map(exp => {
      // Check if tech stack contains any expanded term
      const techMatches = expandedTerms.some(term => 
        exp.techStack.toLowerCase().includes(term)
      );
      
      // Find bullets that mention any expanded term
      const matchingBullets = exp.bullets.filter(bullet => 
        expandedTerms.some(term => bullet.toLowerCase().includes(term))
      );
      
      if (techMatches || matchingBullets.length > 0) {
        return { ...exp, matchingBullets: matchingBullets.length > 0 ? matchingBullets : exp.bullets.slice(0, 2) };
      }
      return null;
    }).filter(Boolean);
  }, [searchTerm]);

  const showFeatured = activeFilter === 'featured' && !searchTerm.trim();
  const expandedSearchTerms = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return getExpandedTerms(searchTerm.toLowerCase().trim());
  }, [searchTerm]);
  const hasNoResults = searchTerm.trim() && filteredProjects.length === 0 && matchingExperiences.length === 0;

  // OSS Project Card - Styled same as regular project cards
  const OSSProjectCard = () => (
    <div className="relative">
      <div
        className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full border-2 border-green-400 dark:border-green-500 mt-4"
        onClick={() => window.open('https://github.com/bitnami/charts', '_blank', 'noopener,noreferrer')}
      >
        <div className="p-5 flex flex-col h-full min-h-[180px]">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 min-w-0">
              <SiHelm className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Bitnami Helm Charts
              </h3>
            </div>
            <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium flex-shrink-0">
              Open Source
            </span>
          </div>

          <div className="space-y-2 mb-4 flex-grow">
            {ossContributions.map((pr) => (
              <a
                key={pr.id}
                href={pr.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaCodeBranch className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{pr.title}</span>
                <span className="text-xs text-gray-400 dark:text-gray-500">#{pr.prNumber}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 min-h-[52px] content-start">
            {['Kubernetes', 'Helm', 'PostgreSQL', 'Keycloak'].map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </div>
  );
  // Project Card with Spotlight Callout
  const ProjectCard = ({ project, highlightTerms }) => {
    const isStarsHighlight = project.highlight?.stars;
    const isTaglineHighlight = project.highlight?.tagline;
    const isVintageHighlight = project.highlight?.vintage;
    const isGrindPal = project.name === 'GrindPal';
    const maxVisibleTags = 6;
    const hasMoreTags = project.tags.length > maxVisibleTags;
    const visibleTags = tagDisplayMode === 'compact' ? project.tags.slice(0, maxVisibleTags) : project.tags;
    const hasSystemDesign = !!project.systemDesign;

    const tagMatches = (tag) => {
      if (!highlightTerms?.length) return false;
      return highlightTerms.some((term) => tag.toLowerCase().includes(term));
    };

    const highlightTagText = (tag) => {
      if (!highlightTerms?.length) return tag;
      const term = highlightTerms.find((t) => tag.toLowerCase().includes(t));
      if (!term) return tag;
      const regex = new RegExp(`(${term})`, 'gi');
      const parts = tag.split(regex);
      return parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-yellow-100 px-0.5 rounded">
            {part}
          </mark>
        ) : (
          part
        )
      );
    };

    const handleSystemDesignClick = (e) => {
      e.stopPropagation();
      setActiveSystemDesign(project);
    };

    return (
      <div className="relative">
        {project.highlight && (
          <div className="absolute -top-3 left-4 z-10">
            <div className="relative">
              {isStarsHighlight ? (
                <>
                  <div className={`bg-gradient-to-r ${ckadColor.from} ${ckadColor.to} text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5`}>
                    <FaStar className="w-3 h-3" />
                    <span>{project.highlight.stars} stars</span>
                    <span className="mx-1">·</span>
                    <span>{project.highlight.impact}</span>
                  </div>
                  <div className={`absolute -bottom-1.5 left-6 w-3 h-3 bg-gradient-to-br ${ckadColor.from} ${ckadColor.to} rotate-45`}></div>
                </>
              ) : isTaglineHighlight ? (
                <>
                  <div className={`bg-gradient-to-r ${isGrindPal ? grindpalColor.from : reactorColor.from} ${isGrindPal ? grindpalColor.to : reactorColor.to} text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg`}>
                    <span>{project.highlight.tagline}</span>
                  </div>
                  <div className={`absolute -bottom-1.5 left-6 w-3 h-3 bg-gradient-to-br ${isGrindPal ? grindpalColor.from : reactorColor.from} ${isGrindPal ? grindpalColor.to : reactorColor.to} rotate-45`}></div>
                </>
              ) : isVintageHighlight ? (
                <>
                  <div className="bg-gradient-to-r from-gray-500 to-slate-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    <span>{project.highlight.vintage}</span>
                  </div>
                  <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-gradient-to-br from-gray-500 to-slate-600 rotate-45"></div>
                </>
              ) : null}
            </div>
          </div>
        )}

        <div
          className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full mt-4 ${
            isGrindPal
              ? 'border-2 border-red-500 dark:border-red-400'
              : project.highlight 
                ? isTaglineHighlight
                  ? `border-2 ${reactorColor.border}`
                  : isVintageHighlight
                    ? 'border-2 border-gray-400 dark:border-slate-500'
                    : `border-2 ${ckadColor.border}` 
                : 'border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
          onClick={() => {
            if (isGrindPal) {
              navigate('/grindpal');
            } else if (project.url) {
              window.open(project.url, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          <div className="p-5 relative flex flex-col h-full min-h-[180px]">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2 min-w-0">
                <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
              </div>
              {isGrindPal ? (
                <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full font-medium flex-shrink-0">
                  <FaCog className="w-3 h-3 animate-spin" />
                  Under Construction
                </span>
              ) : project.isPrivate ? (
                <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full font-medium flex-shrink-0">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Private
                </span>
              ) : project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors flex-shrink-0"
                >
                  <span className="relative flex items-center justify-center">
                    <span className="absolute w-1.5 h-1.5 bg-green-500 rounded-full animate-ping opacity-75"></span>
                    <span className="relative w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  </span>
                  Live
                </a>
              ) : (
                <span className="px-2.5 py-1 text-xs text-transparent">_</span>
              )}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>

            {/* Show System Design button instead of tags for projects with system design */}
            {hasSystemDesign ? (
              <button
                onClick={handleSystemDesignClick}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all w-full bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-700 dark:text-blue-400 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 border border-blue-200 dark:border-blue-800"
              >
                <FaProjectDiagram className="w-4 h-4" />
                <span>View System Design</span>
              </button>
            ) : (
              <div className="flex flex-wrap gap-1.5 min-h-[26px] content-start items-center">
                {visibleTags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-2 py-0.5 text-xs rounded-md ${
                      tagMatches(tag)
                        ? 'bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 font-medium ring-1 ring-yellow-400 dark:ring-yellow-600'
                        : project.tagColor === 'orange'
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {highlightTagText(tag)}
                  </span>
                ))}
                {tagDisplayMode === 'compact' && hasMoreTags && (
                  <span className="px-2 py-0.5 text-xs text-gray-400 dark:text-gray-500">
                    +{project.tags.length - maxVisibleTags} more
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
      </div>
    );
  };

  // Work Experience Result Card - for displaying matching work experience
  // Work Experience Result - styled same as Work section
  const WorkExperienceResult = ({ experience, highlightTerm }) => {
    // Function to highlight matching terms in text
    const highlightText = (text) => {
      if (!highlightTerm) return text;
      const regex = new RegExp(`(${highlightTerm})`, 'gi');
      const parts = text.split(regex);
      return parts.map((part, i) => 
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-yellow-100 px-0.5 rounded">
            {part}
          </mark>
        ) : part
      );
    };

    return (
      <div className="py-8 first:pt-0 last:pb-0">
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
          <div className="md:w-36 flex-shrink-0">
            <p className="text-base font-mono text-gray-500 dark:text-gray-400">{experience.period.split(' - ')[0]}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">{experience.period.split(' - ')[1]}</p>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.role}</h3>
              {experience.current && <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded">NOW</span>}
            </div>
            <p className="text-blue-600 dark:text-blue-400 mb-1">{experience.company}{experience.client && ` | Client: ${experience.client}`}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{experience.location} · {experience.type}</p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {experience.matchingBullets.map((bullet, i) => (
                <li key={i} className="relative pl-4 text-sm leading-relaxed">
                  <span className="absolute left-0 top-[0.45rem] w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                  <span>{highlightText(bullet)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1">
              {experience.techStack.split(', ').map((tech, i) => (
                <span 
                  key={i} 
                  className={`text-sm after:content-['·'] after:mx-1 last:after:content-none ${
                    tech.toLowerCase().includes(highlightTerm?.toLowerCase() || '')
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // No Results / Willing to Learn Message
  const NoResultsMessage = ({ term }) => (
    <div className="max-w-md mx-auto text-center py-12">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-blue-100 dark:border-gray-700">
        <h3 className="font-geist-mono text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Haven't explored <span className="text-blue-600 dark:text-blue-400">"{term}"</span> yet!
        </h3>
        <p className="font-geist-mono text-sm text-gray-600 dark:text-gray-400 italic">
          "I am not bounded by my tech-stack!"
        </p>
      </div>
    </div>
  );

  // Modal Component for System Design with Zoom and Pan
  const SystemDesignModal = ({ project, onClose }) => {
    const [zoomLevel, setZoomLevel] = useState(100); // Percentage
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Pan position
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleZoomIn = (e) => {
      e.stopPropagation();
      setZoomLevel(prev => Math.min(prev + 25, 300)); // Max 300%
    };

    const handleZoomOut = (e) => {
      e.stopPropagation();
      setZoomLevel(prev => Math.max(prev - 25, 50)); // Min 50%
    };

    const handleResetZoom = (e) => {
      e.stopPropagation();
      setZoomLevel(100);
      setPosition({ x: 0, y: 0 });
    };

    const handleMouseDown = (e) => {
      if (e.button !== 0) return; // Only left mouse button
      e.preventDefault();
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Handle touch events for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      });
    };

    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      e.preventDefault();
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        {/* Close button - fixed position */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <FaTimes className="w-6 h-6 text-white" />
        </button>
        
        {/* Title overlay */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-3 bg-black/50 px-4 py-2 rounded-full">
          <FaProjectDiagram className="w-4 h-4 text-blue-400" />
          <h3 className="text-sm font-medium text-white">{project.name} - System Design</h3>
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-4 right-20 z-10 flex items-center gap-2 bg-black/50 px-3 py-2 rounded-full">
          <button
            onClick={handleZoomOut}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            title="Zoom Out"
          >
            <FaSearchMinus className="w-4 h-4 text-white" />
          </button>
          <span className="text-white text-xs font-medium min-w-[3rem] text-center">{zoomLevel}%</span>
          <button
            onClick={handleZoomIn}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            title="Zoom In"
          >
            <FaSearchPlus className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={handleResetZoom}
            className="p-2 hover:bg-white/20 rounded-full transition-colors ml-1"
            title="Reset Zoom"
          >
            <FaExpand className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Full-width scrollable image container with drag support */}
        <div 
          className="w-full h-full overflow-hidden py-16 px-4 flex items-start justify-center"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <img 
            src={project.systemDesign} 
            alt={`${project.name} System Design`}
            className="rounded-lg shadow-2xl select-none"
            draggable={false}
            style={{ 
              width: `${zoomLevel}%`,
              height: 'auto',
              maxWidth: 'none',
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: isDragging ? 'none' : 'transform 0.1s ease-out'
            }}
          />
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto px-6 py-8 pt-[73px]">
        <div className="max-w-6xl mx-auto">
          {/* Search Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for the stack you came for — try react, java, kubernetes, aws..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                className="w-full px-5 py-4 pl-12 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent font-geist-mono text-sm transition-all"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveFilter(category.id);
                  if (category.id !== 'all') setSearchTerm('');
                }}
                className={`font-geist-mono px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>




          {/* Featured Section */}
          {showFeatured && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Order: GrindPal, CKAD, Reactor, Bitnami, DoveAI, Resiligate */}
              {featuredProjects.find(p => p.id === 19) && (
                <ProjectCard
                  key={19}
                  project={featuredProjects.find(p => p.id === 19)}
                  highlightTerms={expandedSearchTerms}
                />
              )}
              {featuredProjects.find(p => p.id === 1) && (
                <ProjectCard
                  key={1}
                  project={featuredProjects.find(p => p.id === 1)}
                  highlightTerms={expandedSearchTerms}
                />
              )}
              {featuredProjects.find(p => p.id === 3) && (
                <ProjectCard
                  key={3}
                  project={featuredProjects.find(p => p.id === 3)}
                  highlightTerms={expandedSearchTerms}
                />
              )}
              <OSSProjectCard />
              {featuredProjects.find(p => p.id === 5) && (
                <ProjectCard
                  key={5}
                  project={featuredProjects.find(p => p.id === 5)}
                  highlightTerms={expandedSearchTerms}
                />
              )}
              {featuredProjects.find(p => p.id === 6) && (
                <ProjectCard
                  key={6}
                  project={featuredProjects.find(p => p.id === 6)}
                  highlightTerms={expandedSearchTerms}
                />
              )}
            </div>
          )}

          {/* Filtered Results (when searching or filtering) */}
          {!showFeatured && (
            <>
              {/* Show "willing to learn" message if no results at all */}
              {hasNoResults ? (
                <NoResultsMessage term={searchTerm} />
              ) : (
                <>
                  {/* Work Experience Section - shown first when searching and there are matches */}
                  {searchTerm.trim() && matchingExperiences.length > 0 && (
                    <div className="mb-12">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                        <h2 className="font-geist-mono text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <FaBriefcase className="w-4 h-4" />
                          Work Experience
                        </h2>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                      </div>
                      <p className="font-geist-mono text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
                        {matchingExperiences.length} role{matchingExperiences.length !== 1 ? 's' : ''} where I used "{searchTerm}"
                      </p>
                      <div className="max-w-3xl mx-auto font-geist-mono">
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                          {matchingExperiences.map((exp) => (
                            <WorkExperienceResult 
                              key={exp.id} 
                              experience={exp} 
                              highlightTerm={searchTerm}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Projects Section */}
                  {filteredProjects.length > 0 && (
                    <>
                      {searchTerm.trim() && (
                        <div className="flex items-center gap-3 mb-6">
                          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                          <h2 className="font-geist-mono text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                            <FaGithub className="w-4 h-4" />
                            Projects
                          </h2>
                          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                      )}
                      <p className="font-geist-mono text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
                        {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                        {activeFilter !== 'featured' && ` in "${filterCategories.find(c => c.id === activeFilter)?.label}"`}
                        {searchTerm && ` matching "${searchTerm}"`}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            highlightTerms={expandedSearchTerms}
                          />
                        ))}
                      </div>
                    </>
                  )}

                </>
              )}
            </>
          )}
        </div>
      </main>

      {/* System Design Modal */}
      {activeSystemDesign && (
        <SystemDesignModal 
          project={activeSystemDesign} 
          onClose={() => setActiveSystemDesign(null)} 
        />
      )}
    </div>
  );
}
