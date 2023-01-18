import "./TeamCard.css"

const TeamCard = (props) =>{
  return(
    <div className={"TeamCardContainer"}>
      <div className={"relative flex-col"}>
        <a href={"#"}>
          <span className={"TeamFirstIcon"}>
            {props.FistIcon}
          </span>
        </a>
        <a href={"#"}>
          <span className={"TeamSecondIcon"}>
            {props.SecondIcon}
          </span>
        </a>

      </div>

      <div className={"TeamCardImg"}>
        <img src={props.img} alt={props.alt} className={"TeamCardImg"}/>
      </div>
      <div className={"TeamCardInfo"}>
        <h1 className={"TeamCardName"}>{props.name}</h1>
        <p className={"TeamCardTitle"}>{props.title}</p>
      </div>

    </div>
  )
}; export default TeamCard