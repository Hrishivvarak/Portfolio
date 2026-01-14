import resumeFile from '../assets/resume.pdf';

export const DATA = {
  profile: {
    name: "Hrishikesh Varak",
    role: "Computer Engineer & Flutter Developer",
    tagline: "Building scalable digital solutions with clean code and user-centric design.",
    about: "Aspiring Software Developer with a strong foundation in Mobile Application Development using Flutter and Dart. Experienced in building user-centric applications and solving real-world problems through technology. Currently leveraging academic knowledge in Computer Science to build scalable solutions for document management and productivity tools.",
    email: "hrishikeshvarak20@gmail.com",
    phone: "+91 9309198825",
    github: "https://github.com/Hrishivvarak", // Add your actual GitHub URL if available
    linkedin: "https://www.linkedin.com/in/hrishikesh-varak-8731b8305/", // Add your actual LinkedIn URL if available
    leetcode: "https://leetcode.com/u/hrishikeshvarak/", 
    location: "Kolhapur, India",
    resumeUrl: resumeFile 
  },
  skills: [
    { category: "Languages", items: ["Java", "C", "C++", "Dart", "JavaScript", "SQL"] },
    { category: "Mobile & Frontend", items: ["Flutter", "React", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend & Cloud", items: ["Firebase", "Node.js", "PostgreSQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Android Studio"] }
  ],
  projects: [
    {
      title: "Xeroguard",
      desc: "Hyperlocal Printing Ecosystem connecting customers with print shops. Features an engineering breakthrough: Offline P2P file transfer via WiFi/Bluetooth (QR code) and privacy-first auto-delete protocols.",
      tech: ["Flutter", "Dart", "P2P Transfer", "Privacy Security"],
      link: "#",
      github: "#"
    },
    {
      title: "Notebook",
      desc: "Secure cloud-synced note-taking application. Features real-time data storage via Firestore, robust CRUD functionality, and secure authentication.",
      tech: ["Flutter", "Firebase Firestore", "Firebase Auth"],
      link: "#",
      github: "#"
    }
  ],
  education: [
    {
      school: "Shivaji University, Kolhapur",
      degree: "B.E. Computer Science and Technology",
      year: "2022 - 2026",
      gpa: "CGPA: 7.12/10.0"
    },
    {
      school: "New Model English School and Junior College",
      degree: "Higher Secondary Certificate (HSC)",
      year: "2022",
      gpa: "74%"
    },
    {
      school: "Chhatrapati Shahu Vidyalaya",
      degree: "Secondary School Certificate (SSC)",
      year: "2020",
      gpa: "84.60%"
    }
  ]
};