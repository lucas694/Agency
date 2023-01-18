import "./Values.css"
import ValuesCard from "./ValuesCard";

const Values = () => {
  const ValuesData=[
    {id:1, title:"creativity & quality", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English."},
    {id:2, title:"teamwork & innovation", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English."},
    {id:3, title:"agency experience", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English."},
    {id:4, title:"empathy in action simplicity", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English."},
  ]

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
          {ValuesData.map((item) => {
            return(
              <ValuesCard CardNumber={item.id}
                          title={item.title}
                          description={item.description}
              />
            )
          })}
        </div>
      </div>
      <section className={"ValuesSides"}></section>

    </div>
  )
}; export default Values