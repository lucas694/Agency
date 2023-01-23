import "./GalleryCard.css"
import Flip from 'react-reveal/Zoom';


const GalleryCard = (props) => {
  return(
    <Flip left cascade>
      <div className={"GalleryCardContainer"}>

        <div className={"GalleryCardImage"}>
          <img src={props.img} alt={"img"} />
        </div>
        <div className={"GalleryCardText"}>
          <span className={"GalleryCardTitle"}>{props.title}</span>
          <span className={"GalleryCardDescription"}>{props.description}</span>
        </div>
      </div>
    </Flip>

  )
}; export default GalleryCard