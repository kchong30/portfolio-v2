/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from './ProjectCard';

  
function ProjectCarousel({projects}) {
  const settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
    return (
            <Slider {...settings}>
                {projects.map(project => (
                <div key = {project.name} >
                    <ProjectCard  project={project} />
                </div>
                ))}
            </Slider>
    );
  }

export default ProjectCarousel
