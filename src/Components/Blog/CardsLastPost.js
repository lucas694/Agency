import "./CardsLastPost.css"
import DateIcon from "../../assets/blog/DateIcon.png"
import ChatIcon from "../../assets/blog/ChatIcon.png"
import  {FaArrowRight}  from  "react-icons/fa" ;


const CardsLastPost = (props) =>{
  return(
    <div className={"CardLastPostContainer"}>
      <div className={`CardLastPostImgContent bg-[${props.colorBase}]`}>
        <img src={props.img} className={"img"}/>
      </div>
      <div className={"CardLastPostInf"}>
        <section className={"CardInfsSec"}>
          <span className={"CardInfData border-r-2 border-gray-800"}>
            <img src={ChatIcon} className={"CardLastIcon"}/>
            <p>{props.CardName}</p>
          </span>
          <span className={"CardInfData"}>
            <img src={DateIcon} className={"CardLastIcon"}/>
            <p>{props.CardDate}</p>
          </span>
        </section>
        <div className={"CardLastDescription"}>
          <h1>{props.CardDescription}</h1>
          {/*Icon*/}
          <div className={"IconDiv"}>
            <FaArrowRight className={"CardLastArrowIcon"}/>
          </div>
        </div>

      </div>
    </div>
  )
};export default CardsLastPost