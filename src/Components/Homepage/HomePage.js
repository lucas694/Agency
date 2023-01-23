import "./HomePage.css"
import BannerHome from "./BannerHome";
import Service from "./Services/Service";
import Projects from "./Projects/Projects";
import Awards from "./Awards";
import Fade from 'react-reveal/Slide';


const HomePage = () => {
  return(
    <div className={"HomepageContainer"}>
        <BannerHome/>
        <Service/>
        <Projects/>
        <Awards />

    </div>
  )
};export default HomePage