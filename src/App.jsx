/* eslint-disable react/no-unescaped-entities */
import './App.css';
import pandaLogo from './assets/Panda.png';
import bambooLogo from './assets/Bamboo.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Skills from './components/Skills';
import emailjs from '@emailjs/browser';
import { useRef, useCallback } from 'react';
import ProjectCarousel from './components/ProjectCarousel';



const projects = [
  {
    name: "Agilitek - Segmentation Tool",
    technology: ["React", "AWS", "TailwindCSS", "SST Serverless Stack", "PostgreSQL"],
    description: "This industry project acted as one of the milestone projects in the BCIT Certification Program.\
    It was based around the concept of segmentation - which was the categorization of a particular population based off of demographic definitions.\
    The ultimate goal was to provide a business analysis tool that would allow the end user to upload CSV files to create segments, and then analyze those segments\
    in the context of a defined product.",
    imageUrl: "https://i.imgur.com/rOFmbDx.png",
    githubUrl: "https://github.com/djk88/Agilitek-project2-bcit",
  },
  {
    name: "Pick and Go",
    technology: ["ASP.NET", "MySQL", "Bootstrap"],
    description:"Pick and Go was the a milestone internal project for the BCIT Certification Program. The concept was to provide the end user\
    (a resturant owner or business) a scalable platform that would allow them to create a menu, input and track ingredient status, and track orders.\
    A customer would then be able to utilize the guest or registered user functionality to create orders and pick up times.",    
    imageUrl: "https://i.imgur.com/IraHkP4.png",
    githubUrl: "https://github.com/kchong30/pick-and-go",
  },
  {
    name:  "MVDB Movie App",
    technology: ["React", "Bootstrap"],
    description:"MVDB Movie App was built as a solo project during the BCIT Certification Program - and its concept was simple. Draw relevant movie\
    data from the MVDB API - and present the information in a manner that was appealing and intuitive for the end user to browse. \n\n\n\n\
    After this base goal was implemented - the stretch goals of filtering the movies and allowing the user to save their favourite movies were set and reached\
    before the deadline.",
    imageUrl: "https://i.imgur.com/FHTtGWY.png",
    githubUrl: "https://github.com/kchong30/react-p01-movie-app",
  },
];




function App() {
  const form = useRef();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_q9s74sh', 'template_k7gwxx9', form.current, '6UQ_nFsDmadhwJzUD')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const setRefs = useCallback(
    (refObject, inViewRefFunction) => (node) => {
      refObject.current = node;
      inViewRefFunction(node);
    },
    []
  );

  const [refHero, inViewHero] = useInView({ threshold: 0.5, triggerOnce: true });

  const skillsRef = useRef();
  const { ref: inViewSkillsRef, inView: inViewSkills } = useInView({ threshold: 0.5, triggerOnce: true });

  const projectsRef = useRef();
  const { ref: inViewProjectsRef, inView: inViewProjects } = useInView({ threshold: 0.5, triggerOnce: true });
  
  const aboutRef = useRef();
  const { ref: inViewAboutRef, inView: inViewAbout } = useInView({ threshold: 0.5, triggerOnce: true });
  
  const contactRef = useRef();
  const { ref: inViewContactRef, inView: inViewContact } = useInView({ threshold: 0.5, triggerOnce: true });

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

console.log("Is skills section in view?", inViewSkills);


  return (
    <div className="home-page flex flex-col ">
      <div className="fixed top-5 right-5 z-50 space-x-4 flex gap-10">
        <a href="https://www.linkedin.com/in/kevin-c-803818137/" className="text-emerald-300 hover:text-cyan-950 text-4xl">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/kchong30" className="text-emerald-300 hover:text-cyan-950 text-4xl">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://drive.google.com/file/d/1zoOGVsITfmPSH4M6f3_jmDzL2VYH_5rr/view?usp=sharing" className="text-emerald-300 hover:text-cyan-950 text-4xl">
          <i className="fas fa-file-alt"></i>
        </a>
      </div>
      <motion.section className="hero flex items-center justify-center h-screen"
        ref={refHero}
        variants={fadeIn}
        initial="hidden"
        animate={inViewHero ? 'visible' : 'hidden'}
      >

        <motion.div className="hero-left flex-col justify-center"
          variants={slideInFromLeft}
        >
          <div className="hero-text">
            <h1 className="text-6xl font-bold text-cyan-950 tracking-normal">
              Hi, I'm <span className="text-emerald-300 tracking-wide">Kevin<span className="text-cyan-950">.</span></span>
            </h1>
            <h1 className="text-6xl font-bold text-cyan-950 tracking-normal">
              I'm a full stack developer.
            </h1>
          </div>
          <div className="hero-buttons flex mt-10 w-1/3 gap-5">
            <button onClick={scrollToSkills}className="hero-button border-2 border-emerald-300 text-cyan-950 font-bold text-2xl py-2 px-4 flex-1">              
              <p>Skills</p>
            </button>
            <button onClick={scrollToProjects} className="hero-button border-2 border-emerald-300 text-cyan-950 font-bold text-2xl py-2 px-4 flex-1">
              <p>Projects</p>
            </button>
            <button onClick={scrollToAbout} className="hero-button border-2 border-emerald-300 text-cyan-950 font-bold text-2xl py-2 px-4 flex-1">
              <p>About</p>
            </button>
            <button onClick={scrollToContact} className="hero-button border-2 border-emerald-300 text-cyan-950 font-bold text-2xl py-2 px-4 flex-1">
              <p>Contact</p>
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromRight}>
          <img className="bamboo-img" src={bambooLogo} alt="bamboo-logo" />
        </motion.div>
        <motion.div
          variants={slideInFromRight}
        >
          <img className="hero-img" src={pandaLogo} alt="panda-logo" />
        </motion.div>
      </motion.section>

      <motion.section className="skills flex flex-col justify-center items-center"
        ref={setRefs(skillsRef, inViewSkillsRef)}
        variants={fadeIn}
        initial="hidden"
        animate={inViewSkills ? 'visible' : 'hidden'}
      >
          <motion.h1 variants = {slideInFromRight} className="text-6xl font-bold text-white mb-10">Skills and Proficiencies</motion.h1>
          <motion.div variants = {slideInFromLeft}><Skills /></motion.div>
      </motion.section>

      <motion.section className="projects flex flex-col items-center justify-center"
        ref={setRefs(projectsRef, inViewProjectsRef)}
        variants={fadeIn}
        initial="hidden"
        animate={inViewProjects ? 'visible' : 'hidden'}
      >
        <h1 className="text-6xl font-bold text-cyan-950 mb-8">Projects</h1>
        <div className = "carousel-container">
          <ProjectCarousel projects={projects} />
        </div>
      </motion.section>



      <motion.section className="about flex flex-col items-center justify-center"
        ref={setRefs(aboutRef, inViewAboutRef)}
        variants={fadeIn}
        initial="hidden"
        animate={inViewAbout ? 'visible' : 'hidden'}
      >
          <motion.h1 className="text-6xl font-bold text-white mb-10" variants={slideInFromRight}>About</motion.h1>
          <motion.div className = "about-content flex items-center justify-center" variants={slideInFromLeft}>
            <div className = "profile-picture"></div>
            <div className = "biography ml-20 w-1/3">
              <p className = "mb-3">My original career path rewarded me with a joint Bachelor Degree in Biochemistry and Computer Sciences at Simon Fraser University.
              </p>
              <p className = "mb-3">After spending a few years on the lab bench -  I took the leap to and enrolled at BCIT to complete their Software Systems Development Program
              to polish and refine my skills as a developer.
              </p>
              <p className = "mb-3">Bespoke, custom, tailored products and solutions are what drive and excite me as a professional.
              </p>
              <p className = "mb-3">When I'm not coding - I'm usually trying out new recipes in the kitchen, or talking hoops with anyone who will listen.
              </p>
            </div>
          </motion.div>
      </motion.section>

      <motion.section className="contact flex flex-col pt-28 items-center "
        ref={setRefs(contactRef, inViewContactRef)}
        variants={fadeIn}
        initial="hidden"
        animate={inViewContact ? 'visible' : 'hidden'}
      >
        <h1 className="text-6xl font-bold text-cyan-950 mb-8">Let's Connect</h1>
        <form ref = {form} className="w-3/4 md:w-1/2 flex flex-col" onSubmit={sendEmail}>
          <div className="mb-6">
            <label className="block mb-2">Your Name</label>
            <input type="text" name="user_name" required className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Your Email Address</label>
            <input type="email" name="user_email" required className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Your Message</label>
            <textarea name="message" required className="w-full p-2 border rounded-md" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-cyan-950 text-white py-2 px-4 rounded w-1/3 mx-auto">Submit</button>
        </form>
      </motion.section>

      <footer className="footer flex items-center justify-center py-10 bg-gray-800 mt-auto flex-col">
      <button onClick={scrollToTop} className="mb-10 rounded-full">
        <i className="fas fa-angle-double-up bg-emerald-300 p-3 w-10 rounded-full text-white"></i>
      </button>
      <div className="links flex space-x-8">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/kevin-c-803818137/" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-300 text-2xl">
          <i className="fab fa-linkedin-in"></i>
        </a>
        
        {/* Github */}
        <a href="https://github.com/kchong30" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-300 text-2xl">
          <i className="fab fa-github"></i>
        </a>
        
        {/* Resume */}
        <a href="https://drive.google.com/file/d/1zoOGVsITfmPSH4M6f3_jmDzL2VYH_5rr/view?usp=sharing" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-300 text-2xl">
          <i className="fas fa-file-alt"></i>
        </a>
      </div>
      
    </footer>
    </div>
  );
}

export default App
