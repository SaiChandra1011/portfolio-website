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
      title: "SkyScribbler",
      description: "A web app where users can share and explore flight experiences. Built with Firebase authentication and PostgreSQL for secure and efficient data handling, and hosted on Supabase for reliable cloud database management.",
      tech: [
        { name: "Postgres", class: "postgres" },
        { name: "Supabase", class: "supabase" },
        { name: "React", class: "React" },
        { name: "Node.js", class: "node.js" }
      ],
      github: "https://github.com/SaiChandra1011/SkyScribble-app",
      live: "https://sky-scribble-app.vercel.app/"
    },
    {
      title: "Data Warehouse Pipeline",
      description:"Built a modern data warehouse from CRM and ERP datasets using the Medallion Architecture. Designed ETL pipelines, modeled the Gold layer with a star schema, and developed Tableau dashboards for clear analytics and insights.",
      tech: [
        { name: "TSQL", class: "tsql" },
        { name: "Azure Data Studio", class: "azure data studio" },
        { name: "Docker", class: "docker" },
        { name: "Tableau", class: "tableau" }
      ],
      github: "https://github.com/SaiChandra1011/data-warehouse-project",
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
    "OOP", "DBMS", "C++", "Python", "Java", "Azure", "SQL", "PostgreSQL", 
"Linux", "Git/GitHub", "Databricks", "Tableau", "PySpark", "Docker", "Snowflake"

  ];

  const experiences = [
   
    {
      title: "Software Engineer Intern",
      company: "Zillion Technologies",
      date: "May 2025 – Present",
      technologies: [
        { name: "Pyspark", class: "pyspark" },
        { name: "Databricks", class: "databricks" },
        { name: "Azure", class: "azure" },

        { name: "Python", class: "python" }
      ],
      description: [
        "Worked on Python use cases during training, where I applied core concepts to solve practical problems and build small-scale solutions for the team.",
        "Underwent hands on training in Azure Cloud, PySpark, and Databricks, gaining exposure to cloud services, big data processing, and data engineering workflows.",
        "Collaborated with the team on an ELT task in Databricks, contributing to the processing and transformation of JSON data files into a structured format for analysis."
      ]
    }
  ];

  const certifications = [
    {
      title: "Azure Cloud Certification",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/BommenaSaiChandraVardhanRao-6356/C12168E0EA8EA40E?sharingId=450A5DB9CDA7E64E"
    },
    {
      title: "Probability and Statistics from IIT Kharagpur",
      url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23MA24S5333049104248487"
    },
    {
      title: "Discrete Maths from IIT Roppar",
      url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS123BS8466098810047652"
    },
    {
      title: "SQL Bootcamp from Udemy",
      url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-529a4c72-68aa-4215-8300-aed812c3bb71.pdf"
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
              Data-driven problem solver with a strong foundation in engineering robust 
              pipelines and database systems.
            </motion.p>
            <motion.a
              href="https://github.com/SaiChandra1011"
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
                I’m a developer who enjoys working with data and building reliable systems. 
                I have experience with databases, data pipelines, cloud technologies (Azure),
                 and modern tools that help turn data into useful insights.
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

      {/* Certifications Section */}
      <motion.section 
        id="certifications" 
        className="certifications"
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
            Certifications
          </motion.h2>
          <motion.div 
            className="certifications-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="certification-header">
                  <div className="certification-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className="certification-info">
                    <h3 className="certification-title">{cert.title}</h3>
                  </div>
                  <svg className="external-link-icon" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </div>
              </motion.a>
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
              { name: 'Email', href: 'mailto:saichandra1001@gmail.com' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sai-chandra10/' },
              { name: 'GitHub', href: 'https://github.com/SaiChandra1011' },
              { name: 'Twitter', href: 'https://x.com/titter1011' }
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