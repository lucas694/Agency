import {AiOutlineArrowRight} from "react-icons/ai";
import {useState} from "react";
import Slide from 'react-reveal/Slide';

const ValuesCard = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleDescription1 = () => {
    setToggle(!toggle);
  }
  return(
    <>
      <section className={"ValuesTopics"}>
        <Slide left cascade>
          <div className={"flex flex-row"}>
            <span className={"ValuesTopicTitle mr-2"}>{`0${props.CardNumber}.`}</span>
            <h1 className={"ValuesTopicTitle"}>{props.title}</h1>
          </div>
          <button className={""} onClick={toggleDescription1}>
            <AiOutlineArrowRight className={toggle ? "ArrowBtnOpen": "ArrowBtn"}/>
          </button>
        </Slide>
      </section>
      {toggle && <p className={"ValuesTopicDescription"}>{props.Name}{props.description}</p>}
      <hr className={"HrValues"}/>
    </>
  )
}; export default ValuesCard