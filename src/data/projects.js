// Projects data - Edit this file to update your projects for search
// Each project should have: id, name, url, tags (array), isTop (featured), description
// Optional: liveUrl, highlight (stars/tagline/vintage)

export const projects = [
  {
    id: 1,
    name: 'CKAD: Practice Questions',
    url: 'https://github.com/aravind4799/CKAD-Practice-Questions',
    tags: ['Kubernetes', 'CKAD', 'DevOps', 'Containers', 'YAML', 'kubectl'],
    isTop: true,
    description: 'Comprehensive practice questions and scenarios to help you prepare for the Certified Kubernetes Application Developer exam.',
    highlight: {
      stars: '30+',
      impact: '100+ users passed CKAD'
    }
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
    tags: [], // Tags removed for Reactor
    isTop: true,
    description: 'End-to-end serverless CI/CD pipeline on AWS using SQS, S3, and CodeBuild for secure, automated deployments.',
    highlight: {
      tagline: 'Is Vercel just a fancy layer on AWS?'
    },
    systemDesign: '/System_Design.png'
  },
  {
    id: 4,
    name: 'Covid Tracker',
    url: 'https://github.com/aravind4799/Covid_tracker',
    liveUrl: 'https://aravind4799.github.io/Covid_tracker/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Frontend', 'Chart.js', 'Material-UI'],
    isTop: true,
    description: 'Corona Virus tracker using covid-api.com, React.js, Chart.js and Material-UI'
  },
  {
    id: 5,
    name: 'DoveAI',
    url: 'https://github.com/aravind4799/DoveAI',
    tags: ['AI', 'Typescript', 'Frontend', 'Next.js', 'Flask', 'MongoDB', 'OpenAI', 'Tailwind CSS', 'React', 'Python'],
    isTop: true,
    description: 'DoveAI is a full-stack application utilizing Next.js, Flask, and MongoDB Atlas. It features a ChatGPT clone using the OpenAI API, allowing users to interact with an AI.'
  },
  {
    id: 19,
    name: 'GrindPal',
    url: null,
    isPrivate: true,
    tags: ['AI', 'Next.js', 'MongoDB', 'Gemini AI', 'Google OAuth', 'Full Stack', 'TypeScript'],
    isTop: true,
    description: 'AI-powered job search tracker with Google OAuth, Gemini AI for personalized LinkedIn messages & cold emails, plus real-time ATS resume scoring.',
    showcase: {
      featureChips: ['AI Outreach', 'ATS Scoring', 'Google OAuth', 'Pipeline View', 'Smart Reminders'],
      screenshots: ['ATS Match Score', 'AI Outreach Generator', 'Job Pipeline'],
      caseStudy: {
        problem: 'Manual outreach and resume tailoring slows down applications.',
        solution: 'Gemini-powered messaging + ATS scoring with a unified tracker.',
        impact: 'Cuts outreach time and keeps applications organized.'
      },
      quickPitch: 'Private — demo on request'
    },
    highlight: {
      tagline: 'Using it to land my next role!'
    }
  },
  {
    id: 6,
    name: 'Resiligate',
    url: 'https://github.com/aravind4799/resiligate',
    tags: ['Java', 'Spring Boot', 'Backend', 'Microservices', 'Resilience4j', 'Eureka', 'Spring Cloud Gateway', 'Docker', 'Docker Compose', 'DevOps'],
    isTop: true,
    description: 'Fault-tolerant microservice: Spring Boot services with Resilience4j safeguards, Eureka discovery, and a Spring Cloud Gateway front door.'
  },
  {
    id: 7,
    name: 'KeepApp',
    url: 'https://github.com/aravind4799/KeepApp',
    tags: ['React', 'Frontend','Backend', 'react dom', 'react hooks', 'css', 'MERN Stack', 'MongoDB', 'Express', 'Node.js'],
    isTop: false,
    liveUrl: 'https://rqudx.csb.app/',
    description: 'A notes keeping App build using MERN Stack'
  },
  {
    id: 8,
    name: 'DS & Algorithms',
    url: 'https://github.com/aravind4799/DS-Algorithms',
    tags: ['Java', 'C++', 'Data Structures', 'Algorithms'],
    isTop: false,
    description: 'Data Structures and Algorithms in C++ and Java'
  },
  {
    id: 9,
    name: 'Zentrais UI',
    url: 'https://github.com/aravind4799/zen-ui',
    tags: ['Next.js', 'Tailwind CSS','Frontend', 'React', 'TypeScript', 'Vercel'],
    liveUrl: 'https://zen-ui-umber.vercel.app/',
    isTop: false,
    description: 'Initial mockup for Zentrais UI'
  },
  {
    id: 10,
    name: 'Simon Game',
    url: 'https://github.com/aravind4799/Simon_Game',
    liveUrl: 'https://aravind4799.github.io/Simon_Game/',
    tags: ['JavaScript', 'HTML', 'CSS', 'Jquery', 'DOM Manipulation','Frontend'],
    isTop: false,
    description: 'A simple memory game implemented using HTML, CSS and JavaScript'
  },
  {
    id: 11,
    name: 'Outdoors',
    url: 'https://github.com/aravind4799/outdoors',
    tags: ['JavaScript', 'HTML', 'CSS', 'React','Frontend'],
    liveUrl: 'https://aravind4799.github.io/outdoors/',
    isTop: false,
    description: 'Landing page for a fictional tourism company build using html and sass'
  },
  {
    id: 12,
    name: 'Secrets',
    url: 'https://github.com/aravind4799/k8s-auth',
    tags: ['OAUTH', 'Form authentication', 'Javascript', 'CSS','Backend'],
    isTop: false,
    description: 'Implementation of authentication functionalities'
  },
  {
    id: 13,
    name: 'Backend_Web_Dev',
    url: 'https://github.com/aravind4799/social-media-app',
    tags: ['Node.js', 'Express', 'React', 'MongoDB','Backend'],
    isTop: false,
    description: 'Back when I first wrote my first node.js project',
    highlight: {
      tagline: '6 years ago!'
    }
  },
  {
    id: 14,
    name: 'Newsletter Signup',
    url: 'https://github.com/aravind4799/newsletter_signup_page',
    tags: ['Mailchimp', 'HTML', 'Javascript','Backend'],
    isTop: false,
    description: 'A web application to create a mailing list for the users, using mailchimp API'
  },
  {
    id: 15,
    name: 'TODO APP',
    url: 'https://github.com/aravind4799/TODO_LIST',
    tags: ['HTML', 'CSS', 'ejs', 'Javascript', 'heroku deployment', 'Express','Backend'],
    isTop: false,
    description: 'The infamous TODO list app built using HTML, CSS and JavaScript',
    highlight: {
      vintage: '6 years ago!'
    }
  },
  {
    id: 16,
    name: 'Daily Journal',
    url: 'https://github.com/aravind4799/Daily-Journal',
    tags: ['HTML', 'CSS', 'mongoose', 'Javascript', 'heroku deployment', 'Express','Backend'],
    isTop: false,
    description: 'Daily-Journal website, used to keep track your daily activities, using mongoose and express'
  },
  {
    id: 17,
    name: 'PhoneBook',
    url: 'https://github.com/aravind4799/PHONE-BOOK',
    tags: ['HTML', 'CSS', 'Angular', 'live','Frontend'],
    isTop: false,
    liveUrl: 'https://aravind4799.github.io/PHONE-BOOK/',
    description: 'Simple Angular app performing CRUD operations with localstorage - when I was learning Angular for my first job!'
  },
  {
    id: 18,
    name: 'BuyIt',
    url: 'https://github.com/aravind4799/BuyIt',
    tags: ['Java', 'Angular', 'Spring Boot', 'SCSS', 'E-commerce', 'Full Stack', 'Backend', 'Frontend'],
    isTop: false,
    description: 'Implemented No Cost EMI feature, as available in e-commerce websites'
  },
];

// Open Source Contributions
export const ossContributions = [
  {
    id: 'oss-1',
    project: 'Bitnami Helm Charts',
    prNumber: '36431',
    prUrl: 'https://github.com/bitnami/charts/pull/36431',
    title: 'Optimized PostgreSQL Chart',
  },
  {
    id: 'oss-2',
    project: 'Bitnami Helm Charts',
    prNumber: '36434',
    prUrl: 'https://github.com/bitnami/charts/pull/36434',
    title: 'Updated Keycloak Chart',
  }
];

// Filter categories for the UI
export const filterCategories = [
  { id: 'featured', label: 'Featured' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'kubernetes', label: 'Kubernetes' },
  { id: 'live', label: 'Live Demo' },
];
