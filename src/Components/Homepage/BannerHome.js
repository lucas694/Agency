import "./BannerHome.css"
import {BsPinterest, BsTwitter, BsFacebook,BsInstagram} from "react-icons/bs";
import {FiArrowUpRight} from "react-icons/fi";
import BannerHomeFront from "../../assets/homefront/BannerHomeFront.png"
import BtnDefault from "../Buttons/BtnDefault";
import { Fade } from "react-awesome-reveal";


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

      <div className={"BannerContent"} >
        <div className={"BannerLeft"} >
          <Fade direction={"left"} cascade={true}  triggerOnce={false}>
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
          </Fade>
        </div>

        <div className={"BannerRight"}>
          <Fade direction={"right"}  triggerOnce={false}>
          <img src={BannerHomeFront} alt={"BannerFront"} className={"BannerImg"}/>
          </Fade>
        </div>

      </div>
      <section className={"BannerSides"}>

      </section>
    </div>
  )
}; export default BannerHome