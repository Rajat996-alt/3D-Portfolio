export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Prof. Meera Das",
    position: "Faculty Mentor, CSE Dept.",
    img: "/assets/review1.png",
    review:
      "Rajat consistently brings innovation and clarity to every project. His focus and creativity make him an outstanding team member.",
  },
  {
    id: 2,
    name: "Ankit Sharma",
    position: "Peer & Coding Partner",
    img: "/assets/review2.png",
    review:
      "Rajat’s dedication to learning and his curiosity in AI and web development are truly commendable. A promising future ahead.",
  },
  {
    id: 3,
    name: "Kunal Daiya",
    position: "Friend & Project Collaborator",
    img: "/assets/review3.png",
    review:
      "Working with Rajat on technical projects has been a great experience — he’s always ready to solve problems and help others grow.",
  },
  {
    id: 4,
    name: "Krishnan Iyer",
    position: "Batchmate & UI Designer",
    img: "/assets/review4.png",
    review:
      "Rajat blends technical skill with a strong design sense. His ability to collaborate and adapt makes him a great asset in team projects.",
  },
];

export const myProjects = [
  {
    title: "Pokémon Explorer App",
    desc: "The Pokémon App is an engaging web application that lets users explore detailed stats, images, and abilities of Pokémon using the PokéAPI. It's built to provide a smooth and dynamic user experience for all Pokémon fans.",
    subdesc:
      "Developed using React.js and styled with CSS, the app fetches data from PokéAPI, implements dynamic routing with React Router, and ensures responsive design for seamless viewing across devices.",
    href: "https://github.com/Rajat996-alt/Pokemon_App",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#1E2A38",
      border: "0.2px solid #2F3B50",
      boxShadow: "0px 0px 60px 0px #4F92FF4D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "CSS", path: "/assets/css.png" },
      { id: 3, name: "PokéAPI", path: "/assets/api.png" },
    ],
  },

  {
    title: "Wanderlust - Travel Listing Platform",
    desc: "Wanderlust is a feature-rich travel and accommodation platform, built to simplify the process of discovering and booking unique stays worldwide. It allows users to list properties, explore destinations, and make secure bookings with ease.",
    subdesc:
      "Developed using the MERN stack (JavaScript, Node.js, Express, MongoDB), it integrates Mapbox for interactive maps, Cloudinary for image uploads, and is deployed on Render for seamless scalability.",
    href: "https://github.com/Rajat996-alt/Wanderlust",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "JavaScript", path: "/assets/javascript.png" },
      { id: 2, name: "Node.js", path: "/assets/node.png" },
      { id: 3, name: "Express.js", path: "/assets/express.png" },
      { id: 4, name: "MongoDB", path: "/assets/mongodb.png" },
    ],
  },

  // ⭐ NEW PROJECT 1 — Mentora
  {
    title: "Mentora – AI-Powered Learning Management System",
    desc: "Mentora is a full-stack LMS with AI-powered semantic search, course management, payments, and rich dashboards for creators and students.",
    subdesc:
      "Built using React, Redux, Node.js, Express, MongoDB, and JWT. Integrated Google Gemini API for semantic search & voice queries, Razorpay for payments, and Cloudinary for video uploads.",
    href: "https://github.com/rajat7568/Mentora_LMS", // change if needed
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#162038",
      border: "0.2px solid #23314A",
      boxShadow: "0px 0px 60px 0px #3D6BFF4D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/node.png" },
      { id: 3, name: "Express", path: "/assets/express.png" },
      { id: 4, name: "MongoDB", path: "/assets/mongodb.png" },
    ],
  },

  // ⭐ NEW PROJECT 2 — DevSpark
  {
    title: "DevSpark – Developer Community Platform",
    desc: "DevSpark is a networking platform where developers can connect, send requests, chat in real time, and share work updates. It focuses on creating meaningful professional interactions in a clean and intuitive interface.",
    subdesc:
      "Developed using React, Redux, Node.js, Express, MongoDB, Socket.io, and JWT. Features include real-time messaging, feeds, profile management, and efficient REST APIs.",
    href: "https://github.com/rajat7568/DevSpark", // change if needed
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#1A1A1A",
      border: "0.2px solid #333333",
      boxShadow: "0px 0px 60px 0px #FF914D4D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/node.png" },
      { id: 3, name: "Express.js", path: "/assets/express.png" },
      { id: 4, name: "MongoDB", path: "/assets/mongodb.png" },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 4, 0]
      : isMobile
      ? [-7, 4, 0]
      : isTablet
      ? [-7, 4, 0]
      : [-12, 3.9, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-14, -10, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Code Spiral Technology, Lucknow",
    pos: "Software Development Intern",
    duration: "May 2025 - Nov 2025",
    title:
      "Working on real-world full-stack projects, including Wanderlust – a travel listing platform. Focused on backend development, REST APIs, and integrating Mapbox for dynamic maps.",
    icon: "/assets/webdev.jpeg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Summer Training - AI Prompt Engineering",
    pos: "Trainee (AI & Web)",
    duration: "May 2024 - June 2024",
    title:
      "Completed 60-day training in AI tools and prompt engineering. Built CARA, a static e-commerce site using AI-generated assets and prompts.",
    icon: "/assets/webdev.png",
    animation: "clapping",
  },
];
