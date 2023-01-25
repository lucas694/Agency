import "./Service.css"
import {HiOutlineCog8Tooth} from "react-icons/hi2";
import {RxEnvelopeClosed} from "react-icons/rx";
import {TbSpeakerphone} from "react-icons/tb";
import {IoPlanetOutline} from "react-icons/io5";
import ServiceCard from "./ServiceCard";
import {FiArrowUpRight} from "react-icons/fi";
import BtnDefault from "../../Buttons/BtnDefault";
import { Fade } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Service = () => {
  return(
    <div className={"ServiceContainer"}>


      <section className={"ServiceSides"}>
        <span className={"SideText"}>what we can do for you</span>
      </section>
        <div className={"ServiceContent"}>
          <section className={"ServiceTexts"}>
            <JackInTheBox triggerOnce={false} cascade={true}>
              <h1 className={"ServiceTittle"}>we can help you with
              <HiOutlineCog8Tooth className={"IconConfig"}/> </h1>
            </JackInTheBox>
              <p className={"ServicesDesc"}>Lorem Ipsum is simply dummy text of the printingand typesetting industry.</p>
          </section>

        <Fade direction={"left"} cascade={true}  triggerOnce={true}>
          <div className={"ServicesCardSection"}>
            <ServiceCard CardTitle={"online marketing"}
                         CardIcon={<TbSpeakerphone className={`ServIcon`}/>}
            />

            <ServiceCard CardTitle={"technology"}
                         CardBgDestaque={"ChangeBgColor"}
                         CardIcon={<RxEnvelopeClosed className={`ServIcon`}/>}
                         CardIconDestaque={"ChangeIconColor"}
            />

            <ServiceCard CardTitle={"business"}
                         CardIcon={<IoPlanetOutline className={`ServIcon`}/>}
            />
          </div>
        </Fade>
          <div className={"ServicesBtnSec"}>
            <BtnDefault className={"BtnBlackBaseServices"}
                        BtnText={"get started"}
                        BtnIcon={<FiArrowUpRight className={"BtnIcon"}/>}
            />
          </div>
        </div>
      <section className={"ServiceSides"}>

      </section>
    </div>
  )
}; export default Service