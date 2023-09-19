/* eslint-disable react/prop-types */
import '../styles/ProjectCard.css'

function ProjectCard({project}) {

  const technologies = project.technology || [];  // Set a default to an empty array
  console.log(technologies);
  
  return (
    <div className="project-card flex">
      <div className="project-data flex flex-col gap-5">
        <h2>{project.name}</h2>
        <div className = "tech-stack flex gap-1">
        {technologies.map((tech, index) => (
          <div key={index} className="technology-tag px-2 py-1">{tech}</div>
        ))}
        </div>
        <p className = "project-description">{project.description}</p>
        <a href={project.githubUrl} className="hero-button border-2 border-emerald-300 text-cyan-950 font-bold text-2xl py-2 px-4 flex-1">
        View Source Code
        </a>
      </div>
      <div className = "project-image"> 
        <img src={project.imageUrl} alt={project.name} />
      </div>
    </div>
  );
}

export default ProjectCard