import "./BlogBanner.css"
import Fade from 'react-reveal/Fade';


const BlogBanner = () => {
  return(
    <div className={"BlogBannerContainer"}>
      <section className={"BlogBannerSides"}>
        <span className={"SideText"}>blog</span>
      </section>
      <Fade left cascade>
        <div className={"BlogBannerContent"}>
          <h1 className={"BlogBannerTitle"}>articles</h1>
          <h1 className={"BlogBannerTitle"}>& resources</h1>
        </div>
      </Fade>
      <section className={"BlogBannerSides"}></section>
    </div>
  )
};export default BlogBanner