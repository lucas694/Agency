import "./Work.css"
import WorkBanner from "./WorkBanner";
import Gallery from "./Gallery";
import {useLocation} from "react-router-dom";

const Work = () => {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/Work" } };

  return(
    <div className={"WorkContainer"}>
      <WorkBanner />
      <Gallery />
    </div>
  )
}; export default Work