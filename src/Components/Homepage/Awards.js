import "./Awards.css"
import AwardsImg from "../../assets/homefront/AwardsImg.jpg";
import { Fade } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";


const Awards = () => {
  return(
    <div className={"AwardsContainer"}>
      <section className={"AwardsSides"}>
        <span className={"SideText"}>awards</span>
      </section>
        <div className={"AwardsContent"}>
          <div className={"AwardsLeft"}>
            <Fade triggerOnce={true} direction={"left"} duration={1000} delay={500}>
              <div className={"AwardsCard"}>
                <span className={"AwardsSpan"}>2018</span>
                <h1 className={"AwardsTitle"}>designers meeting</h1>
                <p className={"AwardsDesc"}>It is a long established fact that reader will be distracted readable content of when looking.</p>
              </div>
              <div className={"AwardsCard"}>
                <span className={"AwardsSpan"}>2020</span>
                <h1 className={"AwardsTitle"}>service design</h1>
                <p className={"AwardsDesc"}>It is a long established fact that reader will be distracted readable content of when looking.</p>
              </div>
              <div className={"AwardsCard"}>
                <span className={"AwardsSpan"}>2021</span>
                <h1 className={"AwardsTitle"}>packaging</h1>
                <p className={"AwardsDesc"}>It is a long established fact that reader will be distracted readable content of when looking.</p>
              </div>
            </Fade>
          </div>

          <div className={"AwardsRight"}>
            <Fade triggerOnce={true} direction={"right"} duration={1000} delay={200}>
              <img src={AwardsImg} alt={"AwardsImg"} className={"AwardsImg"}/>
            </Fade>
          </div>

        </div>
      <section className={"AwardsSides"}></section>
    </div>
  )
};export default Awards