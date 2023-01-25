import "./FaqCards.css"
import {AiOutlineArrowRight} from "react-icons/ai";
import {ImPlus,ImMinus} from "react-icons/im";
import {useState} from "react";
import { Slide } from "react-awesome-reveal";


const FaqCards = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleDescription1 = () => {
    setToggle(!toggle);
  }
  return(
    <div>
      <Slide direction={"left"} duration={2000} cascade={true} triggerOnce={true}>
        <section className={"FaqTopics"}>
            <div className={"flex flex-row"}>
              <h1 className={"FaqTopicTitle"}>{props.title}</h1>
            </div>
            <button className={""} onClick={toggleDescription1}>
              {toggle ? <ImMinus className={"FaqIconClose"}/>: <ImPlus className={"FaqIconOpen"}/>}
            </button>
        </section>
      </Slide>
      {toggle && <p className={"FaqTopicDescription"}>{props.description}</p>}
      <hr className={"HrFaq"}/>
    </div>
  )
}; export default FaqCards