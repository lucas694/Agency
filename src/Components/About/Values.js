import "./Values.css"
import { useState } from "react";
import {AiOutlineArrowRight} from "react-icons/ai";

const Values = () => {

  const [description1, setdescription1] = useState(false);
  const [description2, setdescription2] = useState(false);
  const [description3, setdescription3] = useState(false);
  const [description4, setdescription4] = useState(false);

  const toggleDescription1 = () => {
    setdescription1(!description1);
  }
  const toggleDescription2 = () => {
    setdescription2(!description2);
  }
  const toggleDescription3 = () => {
    setdescription3(!description3);
  }
  const toggleDescription4 = () => {
    setdescription4(!description4);
  }

  return(
    <div className={"ValuesContainer"}>
      <section className={"ValuesSides"}>
        <span className={"SideText text-[#2E2E2E]"}>values</span>
      </section>
      <div className={"ValuesContent"}>
        <h1 className={"ValuesTitle"}>why should</h1>
        <h1 className={"ValuesTitle"}>you work with us?</h1>
        <hr className={"HrValues"}/>
        <div className={"TopicsContainer"}>
          <section className={"ValuesTopics"}>
            <div className={"flex flex-row"}>
              <span className={"ValuesTopicTitle mr-2"}>01.</span>
              <h1 className={"ValuesTopicTitle"}>creativity & quality</h1>
            </div>
            <button className={""} onClick={toggleDescription1}>
              <AiOutlineArrowRight className={description1 ? "ArrowBtnOpen": "ArrowBtn"}/>
            </button>
          </section>
          {description1 && <p className={"ValuesTopicDescription"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.</p>}
          <hr className={"HrValues"}/>
          <section className={"ValuesTopics"}>
            <div className={"flex flex-row"}>
              <span className={"ValuesTopicTitle mr-2"}>02.</span>
              <h1 className={"ValuesTopicTitle"}>teamwork & innovation</h1>
            </div>
            <button className={""} onClick={toggleDescription2}>
              <AiOutlineArrowRight className={description2 ? "ArrowBtnOpen": "ArrowBtn"}/>
            </button>
          </section>
          {description2 && <p className={"ValuesTopicDescription"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.</p>}
          <hr className={"HrValues"}/>
          <section className={"ValuesTopics"}>
            <div className={"flex flex-row"}>
              <span className={"ValuesTopicTitle mr-2"}>03.</span>
              <h1 className={"ValuesTopicTitle"}>agency experience</h1>
            </div>
            <button className={""} onClick={toggleDescription3}>
              <AiOutlineArrowRight className={description3 ? "ArrowBtnOpen": "ArrowBtn"}/>
            </button>
          </section>
          {description3 && <p className={"ValuesTopicDescription"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.</p>}
          <hr className={"HrValues"}/>
          <section className={"ValuesTopics"}>
            <div className={"flex flex-row"}>
              <span className={"ValuesTopicTitle mr-2"}>04.</span>
              <h1 className={"ValuesTopicTitle"}>empathy in action simplicity</h1>
            </div>
            <button className={""} onClick={toggleDescription4}>
              <AiOutlineArrowRight className={description4 ? "ArrowBtnOpen": "ArrowBtn"}/>
            </button>
          </section>
          {description4 && <p className={"ValuesTopicDescription"}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.</p>}
          <hr className={"HrValues"}/>
        </div>
      </div>
      <section className={"ValuesSides"}></section>

    </div>
  )
}; export default Values