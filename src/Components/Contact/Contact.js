import "./Contact.css"
import ContactBanner from "./ContactBanner";
import ContactMain from "./ContactMain";
import Office from "./Office";
import FAQ from "./FAQ";
import {useEffect} from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className={"ContactContainer"}>
      <ContactBanner />
      <ContactMain />
      <Office />
      <FAQ />

    </div>
  )
}; export default Contact