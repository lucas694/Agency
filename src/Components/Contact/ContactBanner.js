import "./ContactBanner.css"
import Fade from "react-reveal/Fade";

const ContactBanner = () => {
  return(
    <div className={"ContactBannerContainer"}>
      <section className={"ContactBannerSides"}>
        <span className={"SideText"}>Contact</span>
      </section>
      <Fade left cascade>
        <div className={"ContactBannerContent"}>
          <h1 className={"ContactBannerTitle"}>get a free quote now</h1>
        </div>
      </Fade>
      <section className={"ContactBannerSides"}></section>
    </div>

  )
}; export default ContactBanner