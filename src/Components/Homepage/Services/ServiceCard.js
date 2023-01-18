import "./ServiceCard.css"
import {RxEnvelopeClosed} from "react-icons/rx";
import BtnDefault from "../../Buttons/BtnDefault";



const ServiceCard = (props) => {
  return(
    <div className={"ServicesCardContainer"}>
      <div className={`ServCardIconContainer-Relative`}>
        <div className={`ServCardIconContent-Absolute ${props.CardIconDestaque}`}>
          {props.CardIcon}
        </div>
      </div>

      <div className={`ServicesCardContent ${props.CardBgDestaque}`}>
        <h1 className={"ServicesCardTittle"}>{props.CardTitle}</h1>
        <p className={"ServiceCardDesc"}>Long established fact that a reader will be distracted by the readable design content layout.</p>
        <BtnDefault BtnText={"Read More"} className={"ServCardButton"}/>
      </div>
    </div>
  )
}; export default ServiceCard