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
    "A passionate Full Stack Software Developer 🚀 Building web applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks and learning cutting-edge technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XvREGUvAIB-7TqzcVZavCtTDBgbV3lkk/view?usp=drive_link", // Set to empty to hide the button
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
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fab fa-MySQL"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-C++"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-Java"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-C#"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "logos:php"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-Git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
