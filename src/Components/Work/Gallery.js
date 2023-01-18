import "./Gallery.css"
import GalleryCard from "./GalleryCard";
import WebApplication from "../../assets/work/webapplication.png"
import CreativeAgency from "../../assets/work/creativeagency.png"
import DigitalAgency from "../../assets/work/digitalagency.png"
import BusinessMarketing from "../../assets/work/business.png"
import PlanManagement from "../../assets/work/planmanagement.png"
import NewTechnology from "../../assets/work/newtechnology.png"

const Gallery = () => {
  const GalleryData =[
    {id:1, title:"web application", description:"Branding, UIUX Design", img:WebApplication,},
    {id:2, title:"creative agency", description:"Branding, UIUX Design", img:CreativeAgency,},
    {id:3, title:"digital agency", description:"Branding, UIUX Design", img:DigitalAgency,},
    {id:4, title:"business marketing", description:"Branding, UIUX Design", img:BusinessMarketing,},
    {id:5, title:"plan management", description:"Branding, UIUX Design", img:PlanManagement,},
    {id:6, title:"new technology", description:"Branding, UIUX Design", img:NewTechnology,},
  ]
  return(
    <div className={"GalleryContainer"}>
      <section className={"GallerySides"}>
        <span className={"SideText"}>Gallery</span>
      </section>
      <div className={"GalleryContent"}>
        {GalleryData.map((item) => {
          return(
            <GalleryCard id={item.id}
                         title={item.title}
                         description={item.description}
                         img={item.img}
            />
          )
        })}
      </div>
      <section className={"GallerySides"}></section>

    </div>
  )
};export default Gallery