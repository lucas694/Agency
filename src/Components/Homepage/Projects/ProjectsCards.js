import "./ProjectsCards.css"
import BtnDefault from "../../Buttons/BtnDefault";
import Fade from 'react-reveal/Fade';
const ProjectsCards = (props) => {
  return(
    <div className={"ProjectsCardsContainer"}>
      <Fade left cascade>
        <div className={"ProjectsCardsContent"}>
         <div className={"ProjectCardsLeft"}>
           <section className={"ProjectCardTextSec"}>
            <h1 className={"ProjectCardTitle"}>{props.projectName}</h1>
            <span className={"ProjectCardSpan"}>Branding, UIUX Design</span>
            <hr className={"ProjectCardHR"}/>

             <div>
               <p className={"ProjectCardDesc"}>{props.projectDesc}</p>
               <BtnDefault BtnText={"view project"}
                           BtnIcon={""}
                           className={"ProjectCardButton"} />
             </div>
           </section>
         </div>
         <div className={"ProjectCardsRight"}>
            <img src={props.ProjectBg} alt={""} className={"ProjectCardBG"}/>
           <div className={"ProjectCardsRightImgSec"}>
            <img src={props.projectImg} alt={""} className={"ProjectCardImg"}/>
           </div>
         </div>
        </div>
      </Fade>
    </div>
  )
}; export default ProjectsCards