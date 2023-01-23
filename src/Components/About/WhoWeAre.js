import "./WhoWeAre.css"
import BtnDefault from "../Buttons/BtnDefault";
import WWWImg from "../../assets/About/WWWImg.png"
import {FiArrowUpRight} from "react-icons/fi";
import Fade from 'react-reveal/Fade';


const WhoWeAre = () => {
  return(
    <div className={"WWAContainer"}>
      <section className={"WWASides"}>
        <span className={"SideText"}>who we are</span>
      </section>
        <div className={"WWAContent"}>
          <Fade left cascade>
            <div className={"WWALeft"}>
              <img src={WWWImg} alt={"Who We Are"} className={"WWWImg"}/>
            </div>
          </Fade>
          <Fade top cascade>
            <div className={"WWARight"}>
              <h1 className={"WWWTitle"}>building software for world changers</h1>
              <p className={"WWWDesc"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.</p>
              <div className={"WWWBtnSec"}>
                <BtnDefault BtnText={"About Agency"}
                            className={"BtnBlackWWW"} BtnIcon={<FiArrowUpRight className={"BtnIcon"}/>}/>
              </div>
            </div>
          </Fade>
        </div>
      <section className={"WWASides"}></section>
    </div>
  )
};export default WhoWeAre