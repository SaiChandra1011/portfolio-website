import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);



  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      tech: [
        { name: "React", class: "react" },
        { name: "Node.js", class: "node" },
        { name: "MongoDB", class: "mongodb" },
        { name: "Stripe", class: "stripe" }
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: [
        { name: "React", class: "react" },
        { name: "Firebase", class: "firebase" },
        { name: "Material-UI", class: "" },
        { name: "Socket.io", class: "" }
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "A minimalistic portfolio website with smooth animations and responsive design, showcasing modern web development practices.",
      tech: [
        { name: "React", class: "react" },
        { name: "Framer Motion", class: "" },
        { name: "CSS3", class: "css" },
        { name: "Responsive Design", class: "" }
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with real-time data visualization and automated reporting features.",
      tech: [
        { name: "Vue.js", class: "vue" },
        { name: "D3.js", class: "" },
        { name: "Express.js", class: "express" },
        { name: "PostgreSQL", class: "" }
      ],
      github: "#",
      live: "#"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by OpenAI API with real-time messaging and context-aware responses.",
      tech: [
        { name: "React", class: "react" },
        { name: "OpenAI API", class: "api" },
        { name: "Socket.io", class: "" },
        { name: "Redis", class: "" }
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      tech: [
        { name: "React Native", class: "react" },
        { name: "Weather API", class: "api" },
        { name: "Maps SDK", class: "" },
        { name: "Push Notifications", class: "" }
      ],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    "React", "JavaScript", "TypeScript", "Node.js", "Python", "MongoDB", 
    "PostgreSQL", "AWS", "Docker", "Git", "Figma", "UI/UX Design"
  ];

  const experiences = [
    {
      title: "Software Development Intern",
      company: "XYZ Software Labs",
      date: "May 2025 – July 2025",
      technologies: [
        { name: "React", class: "react" },
        { name: "Node.js", class: "node" },
        { name: "MongoDB", class: "mongodb" }
      ],
      description: [
        "Built a dashboard to track user activity across 3 platforms.",
        "Integrated REST APIs and implemented real-time data updates.",
        "Optimized performance using React lazy loading.",
        "Collaborated using Git and deployed project on Netlify."
      ]
    },
    {
      title: "Backend Developer Trainee",
      company: "ABC Dev Bootcamp",
      date: "March 2025 – April 2025",
      technologies: [
        { name: "Express.js", class: "express" },
        { name: "MongoDB", class: "mongodb" },
        { name: "Postman", class: "postman" }
      ],
      description: [
        "Built and tested REST APIs for a blogging application.",
        "Handled authentication and CRUD operations.",
        "Used Postman for API testing and validation."
      ]
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';  // Path to your resume PDF in the public folder
    link.download = 'Sai_Chandra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <motion.nav 
        className="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
                <div className="nav-content">
          <motion.button
            className="nav-cv-button"
            onClick={handleDownloadCV}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            Download CV
          </motion.button>
           
           <ul className="nav-links">
             {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item, index) => (
               <motion.li 
                 key={item}
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
               >
                 <motion.a 
                   href={`#${item.toLowerCase()}`}
                   whileHover={{ y: -2 }}
                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
                 >
                   {item}
                 </motion.a>
               </motion.li>
             ))}
           </ul>
         </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="hero section"
        style={{ y }}
      >
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
                         <motion.h1
               variants={fadeInUp}
               initial="initial"
               animate="animate"
             >
               Hello, I'm <br />
               <motion.span
                 className="name-highlight"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.8, duration: 0.8 }}
               >
                 Sai Chandra
               </motion.span>
             </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              A passionate full-stack developer crafting digital experiences 
              with clean code and thoughtful design.
            </motion.p>
            <motion.a
              href="#projects"
              className="cta-button"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>About Me</h2>
              <p>
                I'm a passionate developer with a love for creating beautiful, 
                functional web applications. With expertise in modern technologies 
                and a keen eye for design, I bring ideas to life through code.
              </p>
                             <p>
                 When I'm not coding, you can find me exploring new technologies, 
                 contributing to open source projects, or enjoying a good cup of coffee 
                 while planning my next creative endeavor.
               </p>
            </motion.div>
                         <motion.div 
               className="about-image"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
             >
               <motion.img 
                 src="/profile.jpeg"
                 alt="Sai Chandra"
                 className="profile-image"
                 whileHover={{ scale: 1.05, rotate: 2 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
               />
             </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="skills-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            className="skills"
            style={{ justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="projects-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <motion.div 
                  className="experience-tech"
                  style={{ marginBottom: '24px' }}
                >
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech.name}
                      className={`tech-tag ${tech.class}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div className="timeline">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="experience-card"
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <div className="experience-header">
                    <h3 className="experience-title">{experience.title}</h3>
                    <span className="experience-date">{experience.date}</span>
                  </div>
                  <p className="experience-company">{experience.company}</p>
                  <motion.div 
                    className="experience-tech"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {experience.technologies.map((tech) => (
                      <motion.span
                        key={tech.name}
                        className={`tech-tag ${tech.class}`}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </motion.div>
                  <ul className="experience-description">
                    {experience.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate!
          </motion.p>
          <motion.div 
            className="contact-links"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Email', href: 'mailto:your.email@example.com' },
              { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
              { name: 'GitHub', href: 'https://github.com/yourusername' },
              { name: 'Twitter', href: 'https://twitter.com/yourusername' }
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="contact-link"
                variants={fadeInUp}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sai Chandra. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App; 