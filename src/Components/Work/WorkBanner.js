import "./WorkBanner.css"
import { Fade } from "react-awesome-reveal";

const WorkBanner = () => {
  return(
    <div className={"WorkBannerContainer"}>
      <section className={"WorkBannerSides"}>
        <span className={"SideText"}>work</span>
      </section>
        <div className={"WorkBannerContent"}>
          <Fade direction={"left"} cascade={true}  triggerOnce={false}>
            <h1 className={"WorkTitle"}>some of our finest</h1>
            <h1 className={"WorkTitle"}>work</h1>
          </Fade>
        </div>
      <section className={"WorkBannerSides"}></section>
    </div>
  )
};export default WorkBanner