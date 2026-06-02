import profileImg from './assets/images/profile-pic.jpeg';
import todoapp from './assets/images/todo-app.png';
import registerapp from './assets/images/register-app.png';
import portfoliyoapp from './assets/images/portfolio-app.png';

import { Skill, Project, Service, ExperienceHighlight } from './types';
import { profile } from 'console';

export const developerDetails = {
  name: "Anjali Omble",
  title: "Student Developer | Open to Opportunities",
  intro: "I build robust, high-performance web  applications with pristine user interfaces. Armed with modern web technologies, I bridge the gap between complex engineering and elegant, fluid design.",
  profileImage: profileImg, // Placeholder or self-referential
  resumeUrl: "./assets/pdf/resume.pdf", // Placeholder or self-referential
  aboutText: "Hello! I am a passionate developer & Third Year Electronics And Computer Engineering student at the Vidyalankar Polytechnic. I specialize in crafting high-performance web  applications with a keen eye for design. My journey in software development has been driven by a love for solving complex problems and creating seamless user experiences. I am proficient in modern web technologies such as React, HTML, CSS, and JavaScript I am always eager to learn new tools and frameworks. I am currently seeking new opportunities to apply my skills and contribute to innovative projects.",
  socials: {
    github: "https://github.com/anjaloop",
    linkedin: "https://www.linkedin.com/in/anjali-omble-a566213b9",
    instagram: "https://www.instagram.com/anjali_omble?igsh=MXUzZGtkMmpqNWl5",
    email: "mailto:ombleanjali95@gmail.com",
  }
};

export const skillsData: Skill[] = [
  { id: "1", name: "HTML", percentage: 95, category: "frontend", color: "from-orange-500 to-amber-400" },
  { id: "2", name: "CSS", percentage: 90, category: "frontend", color: "from-blue-500 to-cyan-400" },
  { id: "3", name: "JavaScript", percentage: 95, category: "frontend", color: "from-yellow-400 to-amber-500" },
  { id: "4", name: "React", percentage: 93, category: "frontend", color: "from-cyan-500 to-blue-600" },
  { id: "5", name: "Bootstrap", percentage: 85, category: "frontend", color: "from-purple-500 to-indigo-600" },
  
];

export const projectsData: Project[] = [
   {
    id: "p1",
    title: "ToDo App",
    description:
      "A responsive task management application that allows users to add, delete, and organize daily tasks efficiently. Built with React and modern component-based architecture.",
    image: todoapp, // Placeholder or self-referential
    tags: ["React", "JavaScript", "CSS", "Vite"],
    liveUrl: "https://your-todo-app.vercel.app",
    githubUrl: "https://github.com/anjaloop/ToDo-App",
  },

  {
    id: "p2",
    title: "Basic React Forms",
    description:
      "A React-based form handling project demonstrating controlled components, state management, input validation, and dynamic user interactions.",
    image: registerapp, // Placeholder or self-referential
    tags: ["React", "JavaScript", "Forms", "State Management"],
    liveUrl: "https://your-basic-forms.vercel.app",
    githubUrl: "https://github.com/anjaloop/basic-react-form.git",
  },

  {
    id: "p3",
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio showcasing projects, skills, services, and contact information with a responsive design and smooth user experience.",
    image: portfoliyoapp, // Placeholder or self-referential
    tags: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
    liveUrl: "https://your-portfolio.vercel.app",
    githubUrl: "https://github.com/anjaloop/portfolio-app",
  },
];

export const servicesData: Service[] = [
 {
  id: "s1",
  title: "Web Development",
  description:
    "Building responsive and modern websites using HTML, CSS, JavaScript, React, and Bootstrap. Focused on performance, user experience, and mobile-friendly design.",
  iconName: "Globe"
},
{
  id: "s2",
  title: "React Development",
  description:
    "Creating dynamic single-page applications with React. Experienced in component-based architecture, state management, API integration, and reusable UI development.",
  iconName: "Code"
},
{
  id: "s3",
  title: "UI/UX Design",
  description:
    "Designing clean, intuitive, and user-friendly interfaces with a focus on usability, accessibility, and modern design principles.",
  iconName: "Palette"
},
{
  id: "s4",
  title: "Website Design",
  description:
    "Crafting visually appealing website layouts, landing pages, portfolios, and business websites that align with brand identity and user needs.",
  iconName: "Layout"
}
];

export const experienceHighlights: ExperienceHighlight[] = [
 {
  id: "exp1",
  role: "Diploma Student - Electronics & Computer Engineering",
  company: "Vidyalankar Polytechnic",
  period: "2024 - Present",
  description:
    "Pursuing a Diploma in Electronics & Computer Engineering. Building skills in web development, programming, embedded systems, and software development while actively working on personal and academic projects."
},
{
  id: "exp2",
  role: "Hackathon Participant",
  company: "Vide Coding Intercollege Hackathon",
  period: "2025",
  description:
    "Participated in the Vide Coding Intercollege Hackathon, collaborating with a team to develop innovative solutions under time constraints. Gained hands-on experience in problem-solving, teamwork, project development, and technical presentation."
}
];
