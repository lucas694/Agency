import "./Projects.css"
import ProjectsCards from "./ProjectsCards";
// imgs cards
import Webg from "../../../assets/homefront/projects/webBg.png";
import WebImg from "../../../assets/homefront/projects/webImg.png";
import CreativeAgencyImg from "../../../assets/homefront/projects/creativeAgencyImg.png";
import CreativeAgencyBg from "../../../assets/homefront/projects/creativeAgencyBg.png";
import DigitalAgencyImg from "../../../assets/homefront/projects/digitalAgencyImg.png";
import DigitalAgencyBg from "../../../assets/homefront/projects/digitalAgencyBg.png";
import TexasPortImg from "../../../assets/homefront/projects/texasPortImg.png";
import TexasPortBg from "../../../assets/homefront/projects/texasPortBg.png";
import {FiArrowUpRight} from "react-icons/fi";
import BtnDefault from "../../Buttons/BtnDefault";


const Projects = () => {
  const projects = [
    {id:1, projectName:"web application", projectDesc:"Lorem Ipsum is simply text of the printingand typesetting industry.", projectImg:WebImg, ProjectBg:Webg},
    {id:2, projectName:"creative agency", projectDesc:"Lorem Ipsum is simply text of the printingand typesetting industry.", projectImg:CreativeAgencyImg, ProjectBg:CreativeAgencyBg},
    {id:3, projectName:"digital agency", projectDesc:"Lorem Ipsum is simply text of the printingand typesetting industry.", projectImg:DigitalAgencyImg, ProjectBg:DigitalAgencyBg},
    {id:4, projectName:"texas portfolio", projectDesc:"Lorem Ipsum is simply text of the printingand typesetting industry.", projectImg:TexasPortImg, ProjectBg:TexasPortBg},
  ]
  return(
    <div className={"ProjectContainer"}>
      <section className={"ProjectSides"}>
        <span className={"SideText"}>some of our finest work</span>
      </section>

      <div className={"ProjectContent"}>
        {projects.map((project)=>{
          return(
            <ProjectsCards key={project.id}
                           projectName={project.projectName}
                           projectDesc={project.projectDesc}
                           projectImg={project.projectImg}
                           ProjectBg={project.ProjectBg}/>
          )
        })}
        <div className={"mt-16"}>
          <BtnDefault className={"BtnBlackBase"}
                      BtnText={"get started"}
                      BtnIcon={<FiArrowUpRight className={"BtnIcon"}/>}
          />
        </div>
      </div>

      <section className={"ProjectSides"}>

      </section>
    </div>
  )
}; export default Projects