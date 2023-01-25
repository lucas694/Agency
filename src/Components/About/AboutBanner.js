import "./AboutBanner.css"
import { Fade } from "react-awesome-reveal";

const AboutBanner = () => {
  return(
    <div className={"AboutUsContainer"}>
      <section className={"AboutUsSides"}>
        <span className={"SideText"}>about us</span>
      </section>
        <div className={"AboutUsContent"}>
          <Fade direction={"left"} cascade={true}  triggerOnce={false}>
            <h1 className={"AboutUsTitle"}>one of the fastest</h1>
            <h1 className={"AboutUsTitle"}>growing agency</h1>
          </Fade>
        </div>

      <section className={"AboutUsSides"}></section>

    </div>
  )
}; export default AboutBanner