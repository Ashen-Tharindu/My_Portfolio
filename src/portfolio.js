/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashen Tharindu",
  title: "Hi all, I'm Ashen",
  subTitle: emoji(
    "Full-Stack Software Engineer | Custom Software (POS/ERP) | WordPress & SEO Expert. I specialize in building modern, scalable web applications using the MERN stack and crafting tailored digital solutions to help businesses succeed."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1loNI7V3ySTTdaeSVqT0e4UTSTnv5Z1Fg/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ashen-Tharindu",
  linkedin: "https://www.linkedin.com/in/ashen-tharindu-306b1631a/",
  gmail: "ashentharindu06@gmail.com",
  gitlab: "https://gitlab.com/ashentharindu06",
  facebook: "",
  medium: "https://medium.com/@ashentharindu06",
  stackoverflow: "https://stackoverflow.com/users/27785422/ashen-tharindu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL-STACK DEVELOPER & SERVER ADMINISTRATOR EXPLORING MODERN TECH STACKS",
  skills: [
    emoji("⚡ Building responsive, highly interactive Single-Page Applications (SPA) and PWAs using React.js and modern frontend technologies."),
    emoji("⚡ Developing scalable full-stack web applications, custom ERP solutions, and offline/online Point of Sale (POS) systems."),
    emoji("⚡ Crafting fully optimized, custom WordPress websites integrated with advanced technical SEO strategies for business growth."),
    emoji("⚡ Managing end-to-end deployments on dedicated servers, including WHM/cPanel configurations and third-party API integrations."),
    emoji("⚡ Handling seamless website migrations, domain routing, SSL configurations, and database restorations.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Frontend & UI
    { skillName: "HTML-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS-3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Electron.js", fontAwesomeClassname: "fas fa-desktop" },
    
    // Backend & Core
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    
    // Databases
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "SQLite", fontAwesomeClassname: "fas fa-hdd" },
    
    // CMS & Marketing
    { skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress" },
    { skillName: "SEO Optimization", fontAwesomeClassname: "fas fa-chart-line" },
    
    // Cloud & BaaS
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Microsoft Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "DigitalOcean", fontAwesomeClassname: "fab fa-digital-ocean" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    
    // Server Administration
    { skillName: "cPanel & WHM", fontAwesomeClassname: "fas fa-cogs" },
    
    // DevOps & Tools
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Vocational Technology",
      logo: require("./assets/images/UoVT.png"),
      subHeader: "B.Tech (Hons) in Software Technology",
      duration: "2023 - Present",
      desc: "Pursuing B.Tech (Hons) in Software Technology at UoVT. Studied Software Engineering, Web Security, Operating Systems, Database Management, AI/ML, and Cloud Computing.",
      descBullets: [
        "Hands-on projects in full-stack web and mobile app development",
  "Experience with cloud computing, AI/ML, and IoT applications",
  "Focused on practical industry-oriented skills and problem-solving"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern Software Engineer (Frontend & Sales Engineer)",
      company: "Syncraft PVT LTD",
      companylogo: require("./assets/images/syncraft.jfif"), 
      date: "Nov 2025 – Present",
      desc: "Worked as a Frontend and Sales Engineer, developing custom software solutions and bridging the gap between technical teams and clients.",
      descBullets: [
        "Developed and deployed a custom POS system (Physio Billing System) utilizing Java to streamline business operations",
        "Handled frontend development tasks to ensure user-friendly, responsive interfaces",
        "Bridged the gap between technical development and client requirements as a Sales Engineer, ensuring software solutions met exact business needs"
      ]
    },
    {
      role: "Freelance Web Developer & Server Administrator",
      company: "Project-Based / Freelance",
      companylogo: require("./assets/images/freelance.png"), 
      date: "Jan 2024 – Present",
      desc: "Developed custom WordPress websites, managed web hosting and server configurations, and implemented SEO strategies for various clients.",
      descBullets: [
        "Developed multiple custom WordPress websites across various niches, including E-Commerce, LMS, Tourism, and Corporate sites using custom coding",
        "Managed web hosting, domain migrations, and server configurations using Verpex cPanel and WHM panels for dedicated servers",
        "Implemented SEO best practices to improve website visibility and search engine rankings",
        "Mapped subdomains to real domains and handled end-to-end deployment based on client requirements"
      ]
    },
    {
      role: "Wordpress Web Developer - Intern",
      company: "Uva Wellassa University",
      companylogo: require("./assets/images/Uva.jpg"),
      date: "August 2024 – November 2024",
      desc: "Designed and developed the Technology Faculty website for Uva Wellassa University, and maintained the Applied Science Faculty and main university websites, including news updates, faculty modules, and staff details.",
      descBullets: [
        "Built responsive and user-friendly WordPress sites tailored to faculty needs",
        "Managed content updates for news, faculty modules, and staff profiles",
        "Optimized website performance and implemented SEO best practices"
      ]
    },
    {
      role: "Laptop & Mobile Device Technician",
      company: "ATL Technology",
      companylogo: require("./assets/images/ATL.png"),
      date: "May 2017 – Present",
      desc: "Diagnose and repair laptops, mobile phones, and motherboards, resolving hardware and software issues, unlocking devices, and optimizing performance.",
      descBullets: [
        "Repaired complex hardware issues such as no power, no display, and no signal faults",
        "Unlocked Android and iPhone devices, bypassing security locks when authorized",
        "Fixed OS-related issues and performed software upgrades on laptops and mobile devices"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A collection of learning projects I built to sharpen my skills and experiment with emerging tech",
  projects: [
    {
      image: require("./assets/images/OLMS.png"),
      projectName: "Online Library Management System",
      projectDesc: "Online Library Management System — a full-stack web application built with HTML, CSS, JavaScript, PHP (MVC), and MySQL. Users can search, borrow, and return books, while admins manage inventory, users, and transactions efficiently.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Ashen-Tharindu/OnlineLibrarySystem"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/OSMS.png"),
      projectName: "Online Shop System",
      projectDesc: "Online Shop System — a C# application with a MySQL database. Features include inventory management, order processing with automated receipts, customer & cashier registration, and streamlined daily sales operations. Built to improve retail efficiency with a simple, user-friendly interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Ashen-Tharindu/Online-Shop"
        }
      ]
    },
    {
      image: require("./assets/images/CMS.png"),
      projectName: "College Management System",
      projectDesc: "College Management System — a C# application developed in Visual Studio 2012 with a MySQL database. Features include managing student records, handling courses and faculty details, and streamlining administrative tasks to improve efficiency and organization in academic institutions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Ashen-Tharindu/College-Management-System"
        }
      ]
    },
    {
      image: require("./assets/images/DABS.png"),
      projectName: "Doctor Appointment Booking System",
      projectDesc: "A full-stack doctor appointment booking platform built with React.js, Node.js, Express, and MySQL. Includes role-based dashboards (Admin, Doctor, Patient), live queue management with real-time updates, booking tools (search, receipt download, resend confirmation), and refund request workflows.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Ashen-Tharindu/Doctor-Appointment-Booking-System"
        }
      ]
    },
    {
      image: require("./assets/images/pos.png"),
      projectName: "Mobile POS & ERP System",
      projectDesc: "A comprehensive Mobile POS & ERP System built for commercial use. Engineered with React.js, Node.js, Electron.js, and SQLite. Features include smart hardware integration for thermal printing, dual pricing state management, and full ERP modules for GRN and customer ledgers.",
      footerLink: [
        {
          name: "View Live Demo",
          url: "https://mobile-pos-demo2026.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/ceylontour.png"),
      projectName: "CeylonTour - Next-Gen Travel App",
      projectDesc: "A high-performance luxury travel SPA designed with React.js and Tailwind CSS v4. Features a cinematic video hero section, an SVG-based holographic map, a virtual 360° panoramic viewer, and an AI smart assistant for real-time travel inquiries.",
      footerLink: [
        {
          name: "View Live Site",
          url: "https://ceylontour-ashen-2026.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/ceyloniq.png"),
      projectName: "Ceylon'q Travels",
      projectDesc: "A custom-coded, highly responsive tourism website built from scratch using HTML5, CSS3, and JavaScript. Implemented advanced scroll animations, glassmorphism UI, and direct WhatsApp API integration for instant lead generation.",
      footerLink: [
        {
          name: "View Live Site",
          url: "https://ceyloniqtravels.com"
        }
      ]
    },
    {
      image: require("./assets/images/crowntours.png"),
      projectName: "Crown Tours Sri Lanka",
      projectDesc: "A WordPress-based travel platform where I developed a fully custom-coded tour booking system and executed a comprehensive technical SEO strategy. Optimized Core Web Vitals, improved page load speeds, and structured schema markups to boost organic traffic.",
      footerLink: [
        {
          name: "View Live Site",
          url: "https://crowntourssrilanka.com"
        }
      ]
    },
    {
      image: require("./assets/images/drtproperties.png"),
      projectName: "DRT Properties",
      projectDesc: "A real estate website built using WordPress, enhanced with custom code implementations and fundamental SEO strategies to improve search engine visibility and user experience.",
      footerLink: [
        {
          name: "View Live Site",
          url: "https://drtproperties.lk"
        }
      ]
    },
    {
      image: require("./assets/images/webspark.png"),
      projectName: "WebSpark",
      projectDesc: "A dynamic and responsive website developed on the WordPress platform, integrating custom-coded solutions to meet specific client requirements and ensure a tailored user interface.",
      footerLink: [
        {
          name: "View Live Site",
          url: "https://webspark.lk"
        }
      ]
    },
    {
      image: require("./assets/images/portfolio.png"),
      projectName: "Personal Portfolio",
      projectDesc: "A responsive developer portfolio designed and built using React.js, JavaScript, HTML, CSS, Bootstrap, and SCSS to showcase modern front-end techniques, web applications, and software projects.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ashen-tharindu.github.io/My_Portfolio/"
        }
      ]
    },
    {
      image: require("./assets/images/superpos_desktop.jfif"),
      projectName: "SuperPOS - Desktop Point of Sale",
      projectDesc: "A robust, cross-platform desktop POS application engineered for retail using Electron.js, React.js, Tailwind CSS, and SQLite with Prisma ORM. Features include efficient offline checkout with barcode integration, role-based security, interactive analytics dashboards, and custom thermal printer configurations.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Ashen-Tharindu/SPOS" 
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hacker Rank",
      subtitle:
        "Proudly Achieved Multiple HackerRank Certifications Across Software Development & Problem Solving",
      image: require("./assets/images/HackerRank.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/13fmG8DlCicUyE3sseUn1xlMqoXoLqUoA?usp=drive_link"
        }
      ]
    },
    {
      title: "Open Learning Platform - UOM",
      subtitle:
        "Successfully Completed 7 Certificates from the University of Moratuwa Open Learning Platform",
      image: require("./assets/images/Uom.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1OVwvdxW9KC55M-CTQVYjFLNdbQ9cgrS1?usp=drive_link"
        }
      ]
    },
    {
      title: "CoDeKu DevOps Academy",
      subtitle:
        "Certification from CoDeKu DevOps Academy: Cloud Computing for Absolute Beginners",
      image: require("./assets/images/Codeku.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1yXyE6sEHGIjX5JSYSvO8dMmjMbkzQH-C?usp=drive_link"
        }
      ]
    },
    {
      title: "Alison",
      subtitle:
        "Proudly Achieved Certifications from Alison: Digital Marketing & Introduction to DevOps",
      image: require("./assets/images/Alison.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1VL9NbZWJQp5Ek65J8NICPyHMyG2eL1aL?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to internships and innovative software projects. Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+94785811785",
  email_address: "ashentharindu06@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
