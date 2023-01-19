import "./CardsOffice.css"

const CardsOffice = (props) => {
  return(
    <div className={"CardOfficeContainer"}>
        <div className={"CardOfficeImg"}>
          <img src={props.img} alt={props.title} className={"OfficeImg"}/>
        </div>
      <div className={"CardOfficeInfs"}>
        <h1 className={"CardOfficeTitle"}>{props.title}</h1>
        <p className={"CardOfficeDescription"}>{props.description}</p>
      </div>

    </div>
  )
};export default CardsOffice