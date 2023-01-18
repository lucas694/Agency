import "./BlogBanner.css"

const BlogBanner = () => {
  return(
    <div className={"BlogBannerContainer"}>
      <section className={"BlogBannerSides"}>
        <span className={"SideText"}>blog</span>
      </section>
      <div className={"BlogBannerContent"}>
        <h1 className={"BlogBannerTitle"}>articles</h1>
        <h1 className={"BlogBannerTitle"}>& resources</h1>
      </div>
      <section className={"BlogBannerSides"}></section>
    </div>
  )
};export default BlogBanner