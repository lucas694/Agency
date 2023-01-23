import "./BannerHome.css"
import {BsPinterest, BsTwitter, BsFacebook,BsInstagram} from "react-icons/bs";
import {FiArrowUpRight} from "react-icons/fi";
import BannerHomeFront from "../../assets/homefront/BannerHomeFront.png"
import BtnDefault from "../Buttons/BtnDefault";
import Fade from 'react-reveal/Fade';


const BannerHome = () => {
  return(
    <div className={"BannerContainer"}>
      <section className={"BannerSides"}>
        <a href={"#"} target={"_blank"}>
          <BsPinterest className={"BannerIconsSide"}/>
        </a>
        <a href={"#"} target={"_blank"}>
          <BsTwitter  className={"BannerIconsSide"}/>
        </a>
        <a href={"#"} target={"_blank"}>
          <BsFacebook className={"BannerIconsSide"}/>
        </a>
        <a href={"#"} target={"_blank"}>
          <BsInstagram className={"BannerIconsSide"}/>
        </a>
      </section>
      <Fade left cascade>
      <div className={"BannerContent"}>
        <div className={"BannerLeft"}>
          <h1 className={"BannerTitle"}>technology & design</h1>
          <section className={"BannerBtnSection"}>
            <BtnDefault className={"BannerBtn"} BtnText={"studio"}/>
          </section>

          <p className={"BannerDescript"}>Lorem Ipsum is simply dummy text of the printingand typesetting industry.</p>

          <section className={"BannerBtnSection"}>
            <BtnDefault className={"BtnBlackBase"}
                        BtnText={"get started"}
                        BtnIcon={<FiArrowUpRight className={"BtnIcon"}/>}
            />
          </section>

        </div>

        <div className={"BannerRight"}>
          <img src={BannerHomeFront} alt={"BannerFront"} className={"BannerImg"}/>
        </div>

      </div></Fade>
      <section className={"BannerSides"}>

      </section>
    </div>
  )
}; export default BannerHome