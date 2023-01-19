import "./ContactBanner.css"

const ContactBanner = () => {
  return(
    <div className={"ContactBannerContainer"}>
      <section className={"ContactBannerSides"}>
        <span className={"SideText"}>Contact</span>
      </section>
      <div className={"ContactBannerContent"}>
        <h1 className={"ContactBannerTitle"}>get a free quote now</h1>
      </div>
      <section className={"ContactBannerSides"}></section>
    </div>
  )
}; export default ContactBanner