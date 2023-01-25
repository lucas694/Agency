import "./ContactBanner.css"
import { Fade } from "react-awesome-reveal";


const ContactBanner = () => {
  return(
    <div className={"ContactBannerContainer"}>
      <section className={"ContactBannerSides"}>
        <span className={"SideText"}>Contact</span>
      </section>
        <div className={"ContactBannerContent"}>
          <Fade direction={"left"} cascade={true}  triggerOnce={false}>
            <h1 className={"ContactBannerTitle"}>get a free quote now</h1>
          </Fade>
        </div>
      <section className={"ContactBannerSides"}></section>
    </div>

  )
}; export default ContactBanner