import "./FaqCards.css"
import {AiOutlineArrowRight} from "react-icons/ai";
import {ImPlus,ImMinus} from "react-icons/im";
import Slide from 'react-reveal/Slide';
import {useState} from "react";

const FaqCards = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleDescription1 = () => {
    setToggle(!toggle);
  }
  return(
    <div>
      <Slide left cascade>
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