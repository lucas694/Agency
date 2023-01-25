import "./ContactMain.css"
import { Fade } from "react-awesome-reveal";


const ContactMain = () => {
  return(
    <div className={"ContactMainContainer"}>
      <section className={"ContactMainSides"}>
        <span className={"SideText"}>contact</span>
      </section>
        <div className={"ContactMainContent"}>
          <div className={"ContactMainContact"}>
            <div className={"ContactLeft"}>
              <Fade direction={"up"} triggerOnce={true} duration={2000}>
                <h1 className={"ContactTitle"}>Phone</h1>
                <p className={"ContactDescription"}>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
              </Fade>
              <span className={"ContactType"}>
                <Fade direction={"left"} triggerOnce={true} duration={2000}>(123) 456 7890</Fade>
              </span>

            </div>
            <div className={"ContactRight"}>
              <Fade direction={"up"} triggerOnce={true} duration={2000}>
                <h1 className={"ContactTitle"}>e-mail</h1>
                <p className={"ContactDescription"}>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
              </Fade>
                <span className={"ContactType"}>
                  <Fade direction={"right"} triggerOnce={true} duration={2000}>info@example.com</Fade>
                </span>
            </div>
          </div>
        </div>
      <section className={"ContactMainSides"}></section>

    </div>
  )
}; export default ContactMain