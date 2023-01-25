import "./CardsOffice.css"
import{Slide} from "react-awesome-reveal";

const CardsOffice = (props) => {
  return(
    <div className={"CardOfficeContainer"}>
        <div className={"CardOfficeImg"}>
          <Slide direction={"up"} triggerOnce={true} duration={1000}>
            <img src={props.img} alt={props.title} className={"OfficeImg"}/>
          </Slide>
        </div>
      <div className={"CardOfficeInfs"}>
        <Slide direction={"up"} triggerOnce={true} duration={2000}>
          <h1 className={"CardOfficeTitle"}>{props.title}</h1>
          <p className={"CardOfficeDescription"}>{props.description}</p>
        </Slide>
      </div>
    </div>
  )
};export default CardsOffice