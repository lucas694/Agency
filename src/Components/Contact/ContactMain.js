import "./ContactMain.css"

const ContactMain = () => {
  return(
    <div className={"ContactMainContainer"}>
      <section className={"ContactMainSides"}>
        <span className={"SideText"}>contact</span>
      </section>
      <div className={"ContactMainContent"}>
        <div className={"ContactMainContact"}>
          <div className={"ContactLeft"}>
            <h1 className={"ContactTitle"}>Phone</h1>
            <p className={"ContactDescription"}>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
            <span className={"ContactType"}>(123) 456 7890</span>
          </div>
          <div className={"ContactRight"}>
            <h1 className={"ContactTitle"}>e-mail</h1>
            <p className={"ContactDescription"}>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
            <span className={"ContactType"}>info@example.com</span>
          </div>
        </div>
      </div>
      <section className={"ContactMainSides"}></section>

    </div>
  )
}; export default ContactMain