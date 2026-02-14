export const siteConfig = {
  name: "Alex Johnson",
  title: "Full-Stack Developer",
  tagline: "I build modern web experiences with clean code and thoughtful design.",
  email: "alex@example.com",
  location: "San Francisco, CA",
  resumeUrl: "#",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const aboutData = {
  bio: `I'm a passionate full-stack developer with 5+ years of experience building web applications. 
I specialize in React, Next.js, and Node.js ecosystems. I love turning complex problems into simple, 
beautiful, and intuitive solutions. When I'm not coding, you'll find me hiking, reading, or experimenting 
with new technologies.`,
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "GraphQL",
    "Git",
  ],
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/placeholder-project.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop, and team workspaces.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/placeholder-project.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    image: "/placeholder-project.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A modern chat application with end-to-end encryption, file sharing, and video calling capabilities.",
    tags: ["Next.js", "WebRTC", "Redis", "Docker"],
    image: "/placeholder-project.svg",
    githubUrl: "#",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experienceData: Experience[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2023 — Present",
    description:
      "Leading development of customer-facing web applications serving 100K+ users.",
    highlights: [
      "Architected a micro-frontend system reducing deployment time by 60%",
      "Mentored a team of 4 junior developers",
      "Implemented CI/CD pipelines with 95% test coverage",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2021 — 2023",
    description:
      "Built and maintained the core product from MVP to Series A.",
    highlights: [
      "Developed the real-time collaboration engine",
      "Reduced page load times by 40% through optimization",
      "Integrated third-party APIs for payments and analytics",
    ],
  },
  {
    role: "Frontend Developer",
    company: "WebAgency Co.",
    period: "2019 — 2021",
    description:
      "Created responsive web applications for diverse clients across industries.",
    highlights: [
      "Delivered 15+ client projects on time and within budget",
      "Built a reusable component library used across all projects",
      "Introduced automated testing, reducing bugs by 30%",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
