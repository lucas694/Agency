import "./Office.css"
import CardsOffice from "./CardsOffice";
import CardImg1 from "../../assets/contact/Card1.jpg"
import CardImg2 from "../../assets/contact/Card2.jpg"
import CardImg3 from "../../assets/contact/Card3.jpg"
import { Fade } from "react-awesome-reveal";

const Office = () =>{
  const CardsOfficeData = [
    {id:1, img:CardImg1, title:"san francisco, usa", description:"1680 page, San Francisco, California(CA), 94117"},
    {id:2, img:CardImg2, title:"new york, usa", description:"21 page est 21st street, New York, NY 10010"},
    {id:3, img:CardImg3, title:"los angeles, usa", description:"1680 page, San Francisco, California(CA), 94117"},
  ]
  return(
    <div className={"OfficesContainer"}>
      <section className={"OfficeSides"}>
        <span className={"SideText"}>office</span>
      </section>
        <div className={"OfficeContent"}>
          <h1 className={"OfficeTitle"}>our office</h1>
          <p className={"OfficeDescription"}>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem when printer.</p>
          <div className={"CardsOfficeSection"}>
            {CardsOfficeData.map((item) => {
            return(
              <CardsOffice img={item.img}
                           title={item.title}
                           description={item.description}
                           key={item.id}/>
            )})}
          </div>
        </div>
      <section className={"OfficeSides"}></section>
    </div>
  )
};export default Office