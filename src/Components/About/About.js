import "./About.css"
import AboutBanner from "./AboutBanner";
import WhoWeAre from "./WhoWeAre";
import Values from "./Values";
import Team from "./Team/Team";
import Awards from "../Homepage/Awards";

const About = () => {
  return(
    <div className={"AboutContainer"}>
      <AboutBanner />
      <WhoWeAre />
      <Values />
      <Team />
      <Awards />
    </div>
  )
}; export default About