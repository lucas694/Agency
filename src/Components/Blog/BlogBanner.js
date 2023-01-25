import "./BlogBanner.css"
import { Fade } from "react-awesome-reveal";



const BlogBanner = () => {
  return(
    <div className={"BlogBannerContainer"}>
      <section className={"BlogBannerSides"}>
        <span className={"SideText"}>blog</span>
      </section>
        <div className={"BlogBannerContent"}>
          <Fade direction={"left"} cascade={true}  triggerOnce={false}>
            <h1 className={"BlogBannerTitle"}>articles</h1>
            <h1 className={"BlogBannerTitle"}>& resources</h1>
          </Fade>
        </div>

      <section className={"BlogBannerSides"}></section>
    </div>
  )
};export default BlogBanner