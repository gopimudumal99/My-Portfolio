import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "./ProjectsData";
import { themeContext } from "../../Context";
import { useContext } from "react";
function Projects() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="projects">
      {/* Hedings  */}
      <span  style={{ color: darkMode ? "white" : "" }}>
        Solo and Team
      </span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        // spaceBetween={30}
        // grabCursor={true}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
        className="projects-slider"
        
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="p-card">
              <img src={project.img} alt="" />
              <span style={{ color: darkMode ? "white" : "" }}>
                {project.title}
              </span>
              <span>{project.desc}</span>
              <span>TechStack: {project.techStack}</span>
              <span>Project members & duration: {project.type}</span>
              <div className="buttonsDiv">
                <a href={project.gitLInk} >
                  <button className="button git-btn">Gitub</button>
                </a>
                <a href={project.liveLink} >
                  <button className="button live-btn">Live</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
