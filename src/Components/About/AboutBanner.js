import "./AboutBanner.css"
import Fade from 'react-reveal/Fade';

const AboutBanner = () => {
  return(
    <div className={"AboutUsContainer"}>
      <section className={"AboutUsSides"}>
        <span className={"SideText"}>about us</span>
      </section>
      <Fade left cascade>
        <div className={"AboutUsContent"}>
          <h1 className={"AboutUsTitle"}>one of the fastest</h1>
          <h1 className={"AboutUsTitle"}>growing agency</h1>
        </div>
      </Fade>
      <section className={"AboutUsSides"}></section>

    </div>
  )
}; export default AboutBanner