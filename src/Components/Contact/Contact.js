import "./Contact.css"
import ContactBanner from "./ContactBanner";
import ContactMain from "./ContactMain";
import Office from "./Office";
import FAQ from "./FAQ";

const Contact = () => {
  return(
    <div className={"ContactContainer"}>
      <ContactBanner />
      <ContactMain />
      <Office />
      <FAQ />

    </div>
  )
}; export default Contact