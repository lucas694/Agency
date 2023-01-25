import "./WhoWeAre.css"
import BtnDefault from "../Buttons/BtnDefault";
import WWWImg from "../../assets/About/WWWImg.png"
import {FiArrowUpRight} from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";



const WhoWeAre = () => {
  return(
    <div className={"WWAContainer"}>
      <section className={"WWASides"}>
        <span className={"SideText"}>who we are</span>
      </section>
        <div className={"WWAContent"}>
            <div className={"WWALeft"}>
              <img src={WWWImg} alt={"Who We Are"} className={"WWWImg"}/>
            </div>
            <div className={"WWARight"}>
              <Fade direction={"up"} triggerOnce={true} cascade={true} >
                <h1 className={"WWWTitle"}>building software for world changers</h1>
                <p className={"WWWDesc"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.</p>
                <div className={"WWWBtnSec"}>
                  <BtnDefault BtnText={"About Agency"}
                              className={"BtnBlackWWW"} BtnIcon={<FiArrowUpRight className={"BtnIcon"}/>}/>
                </div>
              </Fade>
            </div>
        </div>
      <section className={"WWASides"}></section>
    </div>
  )
};export default WhoWeAre