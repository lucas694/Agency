import "./GalleryCard.css"
import { Fade } from "react-awesome-reveal";


const GalleryCard = (props) => {
  return(
      <div className={"GalleryCardContainer"}>
        <div className={"GalleryCardImage"}>
          <img src={props.img} alt={"img"} />
        </div>
        <div className={"GalleryCardText"}>
          <span className={"GalleryCardTitle"}>{props.title}</span>
          <span className={"GalleryCardDescription"}>{props.description}</span>
        </div>
      </div>

  )
}; export default GalleryCard