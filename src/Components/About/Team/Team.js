import "./Team.css"
import TeamCard from "./TeamCard";
import John from "../../../assets/About/jacob.png"
import Kevin from "../../../assets/About/kevin.png"
import Dorothy from "../../../assets/About/dorothy.png"
import { Fade } from "react-awesome-reveal";


import {BsPinterest, BsTwitter, BsInstagram, BsFacebook} from "react-icons/bs";


const Team = () => {
  const TeamData = [
    {id: 1, name: "Jacob Hamilton", title: "Developer", img:John, FistIcon:<BsPinterest className={"TeamCardIcon"}/>, SecondIcon:<BsInstagram className={"TeamCardIcon"}/>},
    {id: 2, name: "Kevin Wells", title: "Developer", img:Kevin, FistIcon:<BsTwitter className={"TeamCardIcon"}/>,SecondIcon:<BsFacebook className={"TeamCardIcon"}/>},
    {id: 3, name: "Dorothy Hall", title: "Developer", img:Dorothy, FistIcon:<BsInstagram className={"TeamCardIcon"}/>, SecondIcon: <BsTwitter className={"TeamCardIcon"}/>},
    ]
  return(
    <div className={"TeamContainer"}>
      <section className={"TeamSides"}>
        <span className={"SideText"}>our team</span>
      </section>

      <div className={"TeamContent"}>
        <h1 className={"TeamTitle"}>the amazing team behind our agency</h1>
        <Fade triggerOnce={true} direction={"up"} duration={1000} delay={100} cascade={true}>
          <div className={"TeamCards"}>
            {TeamData.map((item) => {
              return(
                <TeamCard key={item.id}
                          name={item.name}
                          title={item.title}
                          img={item.img}
                          FistIcon={item.FistIcon}
                          SecondIcon={item.SecondIcon
                }/>
              )
            })}
          </div>
        </Fade>
      </div>
      <section className={"TeamSides"}></section>

    </div>
  )
}; export default Team