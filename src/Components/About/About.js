import "./About.css"
import AboutBanner from "./AboutBanner";
import WhoWeAre from "./WhoWeAre";
import Values from "./Values";
import Team from "./Team/Team";
import Awards from "../Homepage/Awards";
import {useEffect} from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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