import "./Awards.css"
import AwardsImg from "../../assets/homefront/AwardsImg.jpg";

const Awards = () => {
  return(
    <div className={"AwardsContainer"}>
      <section className={"AwardsSides"}>
        <span className={"SideText"}>awards</span>

      </section>
      <div className={"AwardsContent"}>
        <div className={"AwardsLeft"}>
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
        </div>

        <div className={"AwardsRight"}>
          <img src={AwardsImg} alt={"AwardsImg"} className={"AwardsImg"}/>
        </div>
      </div>
      <section className={"AwardsSides"}></section>


    </div>
  )
};export default Awards