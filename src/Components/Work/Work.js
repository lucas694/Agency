import "./Work.css"
import WorkBanner from "./WorkBanner";
import Gallery from "./Gallery";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const Work = () => {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/Work" } };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className={"WorkContainer"}>
      <WorkBanner />
      <Gallery />
    </div>
  )
}; export default Work