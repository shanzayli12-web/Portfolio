export const projectsData = [
  {
    slug: 'hirewave',
    name: 'HireWave',
    tagline: 'Job Board & Hiring Platform',
    featured: true,
    stack: ['TypeScript', 'React', 'GraphQL', 'gRPC', 'Docker', 'Redis', 'PostgreSQL'],
    overview: 'HireWave is a modern, high-performance job board and hiring platform built on a containerized microservices architecture. It demonstrates a production-grade infrastructure capable of handling high-throughput job queries, stateful user applications, and automated notifications.',
    role: 'Lead Full Stack / Infrastructure Architect',
    timeline: 'Fall 2023',
    problem: 'Traditional monolith applications often struggle with scaling individual components—such as background notification workers or database-heavy job search queries. HireWave was engineered to decouple these concerns into independent microservices, ensuring that peak hiring traffic on job listings does not impact authentication or notification delivery.',
    architecture: 'The system uses an Apollo Server 4 GraphQL gateway that acts as the single entry point for the frontend web application. It orchestrates incoming queries and mutations, routing them to specialized Node.js backend services via high-performance gRPC protocols. High-frequency operations like retrieving job listings are optimized using an in-memory Redis caching layer, while all relational data is persisted in a PostgreSQL database.',
    highlights: [
      'Architected a full-stack, containerized job platform with 6 independent microservices orchestrated via Docker Compose — frontend, GraphQL gateway, Jobs REST API, User/Application/Notification gRPC services.',
      'Built an Apollo Server 4 GraphQL gateway routing requests to Node.js gRPC microservices (ports 50051–50053), with Redis caching for job listings and PostgreSQL for persistent data.',
      'Designed persistent schemas in PostgreSQL for relational user profiles, job postings, and applications.',
      'Containerized all services, making the entire complex infrastructure bootable with a single "docker-compose up --build" command.'
    ]
  },
  {
    slug: 'project-two-coming-soon',
    name: 'Project Two',
    tagline: 'Coming Soon',
    featured: false,
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    overview: 'A new full-stack endeavor is currently in design and prototyping stages. Check back soon for updates.',
    role: 'Software Engineer',
    timeline: 'In Progress',
    problem: 'Details about the engineering problem, user research, and technical challenges will be posted once the prototype is released.',
    architecture: 'Modern front-end tooling backed by cloud-native microservices.',
    highlights: [
      'Currently in prototyping phase.',
      'Architectural planning ongoing.'
    ]
  },
  {
    slug: 'project-three-coming-soon',
    name: 'Project Three',
    tagline: 'Coming Soon',
    featured: false,
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    overview: 'An exploration into distributed systems and API architectures. Full case study coming soon.',
    role: 'Backend Developer',
    timeline: 'In Progress',
    problem: 'Details on the backend service constraints, load testing, and database schema layouts will be shared soon.',
    architecture: 'Built using asynchronous Python APIs with background workers.',
    highlights: [
      'API definition and schemas under active development.',
      'Performance profiling planned.'
    ]
  }
];

export const identityData = {
  name: 'Shanzay Ali Khan',
  title: 'Software Engineer',
  valueProp: 'What makes me stand out is that I am a frontend-focused engineer who refuses to be boxed into a specific stack. I specialize in crafting seamless user interfaces using React, JavaScript, and modern CSS, but I treat languages as tools, not identities. Having worked with Python, I\'ve proven my ability to jump across the stack when a project demands it. Tech evolves rapidly, so my true strength lies in my core engineering fundamentals and my ability to rapidly learn, adapt, and ship high-quality code in whatever language the problem requires.',
  contact: {
    email: 'shanzayli12@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shanzay-aly',
    github: 'https://github.com/shanzayli12-web'
  }
};
