import "./WorkBanner.css"
import Fade from 'react-reveal/Fade';


const WorkBanner = () => {
  return(
    <div className={"WorkBannerContainer"}>
      <section className={"WorkBannerSides"}>
        <span className={"SideText"}>work</span>
      </section>
      <Fade left cascade>
        <div className={"WorkBannerContent"}>
          <h1 className={"WorkTitle"}>some of our finest</h1>
          <h1 className={"WorkTitle"}>work</h1>
        </div>
      </Fade>
      <section className={"WorkBannerSides"}></section>
    </div>
  )
};export default WorkBanner