import "./FAQ.css"
import FaqCards from "./FaqCards";


const FAQ = () => {
  const FaqData=[
    {id:1, title:"how can i determine the value of my work of art?", description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator with a handful of model sentence to generate."},
    {id:2, title:"are photography and filming allowed at the marvin gallery", description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator with a handful of model sentence to generate."},
    {id:3, title:"how can i introduce the marvin gallery to my artwork?", description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator with a handful of model sentence to generate."},
    {id:4, title:"what are the public hours for the marvin gallery?", description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator with a handful of model sentence to generate."},
    {id:5, title:"do you offer discounts for nonprofit companies?", description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator with a handful of model sentence to generate."},
  ]
  return(
    <div className={"FaqContainer"}>
      <h1 className={"FaqTitle"}>frequently asked questions</h1>
      <hr className={"HrFaq"}/>
      <div className={"TopicsFaqContainer"}>
        {FaqData.map((item) => {
          return(
            <FaqCards CardNumber={item.id}
                      title={item.title}
                      description={item.description}
            />
          )
        })}
      </div>
    </div>
  )
};export default FAQ