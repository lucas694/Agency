import "./BlogLastPost.css"
import CardsLastPost from "./CardsLastPost";
import CardPhoto1 from "../../assets/blog/CardPhoto1.png"
import CardPhoto2 from "../../assets/blog/CardPhoto2.png"
import CardPhoto3 from "../../assets/blog/CardPhoto3.png"
import CardPhoto4 from "../../assets/blog/CardPhoto4.png"
import CardPhoto5 from "../../assets/blog/CardPhoto5.png"
import CardPhoto6 from "../../assets/blog/CardPhoto6.png"
import LightSpeed from 'react-reveal/LightSpeed';


const BlogLastPost = () => {
  const dataCards=[
    {id:1, CardPhoto:CardPhoto1,colorBase:"bg-[#88AF9A]", CardName:"Jacob Hamilton", CardDate:"June 15, 2022", CardDescription:"5 Web Design Blogs You Should Be Reading"},
    {id:2, CardPhoto:CardPhoto2,colorBase:"bg-[#63A2DC]", CardName:"Dorothy Hall", CardDate:"May 19, 2022", CardDescription:"Step-by-step guide to choosing great font pairs quick and easy"},
    {id:3, CardPhoto:CardPhoto3,colorBase:"bg-[#D7A9B4]", CardName:"Kevin Wells", CardDate:"July 27, 2022", CardDescription:"Practical design tutorials to become a professional web designer in 2022"},
    {id:4, CardPhoto:CardPhoto4,colorBase:"bg-[#78B8B6]", CardName:"John Smith", CardDate:"July 10, 2022", CardDescription:"8 design systems you can check out and download for free"},
    {id:5, CardPhoto:CardPhoto5,colorBase:"bg-[#93B2C0]", CardName:"Dorothy Hall", CardDate:"June 05, 2022", CardDescription:"5 great typographies you can download for free on Google Fonts"},
    {id:6, CardPhoto:CardPhoto6,colorBase:"bg-[#AEC4C2]", CardName:"Kevin Wells", CardDate:"April 22, 2022", CardDescription:"Range input with completely custom design styles"},
  ]
  return(
    <div className={"LastPostContainer"}>
      <section className={"LastPostSides"}>
        <span className={"SideText"}>lastest post</span>
      </section>
      <div className={"LastPostContent"}>
        <LightSpeed left cascade>
        <h1 className={"LastPostTitle"}>lastest post</h1>
        <p className={"LastPostDesc"}>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem when printer.</p>
        </LightSpeed>

        <div className={"LastPostCardContainer"}>
          {dataCards.map((item) => {
            return(
              <CardsLastPost img={item.CardPhoto}
                             colorBase={item.colorBase}
                             CardName={item.CardName}
                             CardDate={item.CardDate}
                             CardDescription={item.CardDescription}
                             key={item.id}
              />
            )
          })}
        </div>
      </div>
      <section className={"LastPostSides"}></section>
    </div>
  )
};export default BlogLastPost