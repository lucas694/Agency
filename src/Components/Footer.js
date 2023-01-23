import "./Footer.css"
import StarIcon from "../assets/StarIcon.png"
import {BsTwitter, BsFacebook, BsInstagram, BsPinterest} from "react-icons/bs"
import BtnDefault from "./Buttons/BtnDefault";
import {useState} from "react";
import rocket from "../assets/Roket.svg"
import {FiArrowUpRight} from "react-icons/fi";
import {Link} from "react-router-dom";
import Slide from 'react-reveal/Slide';


const Footer = () => {
  const[email, setEmail] = useState("");
  const[error, setError] = useState(false);
  const handleSubmit = () =>{
    if(email === ""){
      setError(true)
    }else{
      setError(false)
    }
  }

  console.log(email);
  return(
    <div className={"FooterContainer"}>
      <section className={"FooterSides"}>
      </section>

      <Slide bottom cascade>
        <div className={"FooterContent"}>
          <div className={"FooterMain"}>
            <div className={"FooterLeft"}>
              <h1 className={"FooterTitle"}>
                <img src={StarIcon} alt={"StarIcon"} className={"FooterIcon"}/>
                workment
              </h1>
              <p className={"FooterDesc"}>It is a long established fact that reader will be distracted readable content of when looking.</p>

              <div className={"FooterSocialMedia"}>
                <h1 className={"FooterContact"}>agency@workment.com</h1>
                <span className={"FooterContact"}>+01 984 555 000</span>
                <section className={"FooterIconsSec"}>
                  <span className={"IconDivFooter"}> <BsTwitter/></span>
                  <span className={"IconDivFooter"}> <BsFacebook/></span>
                  <span className={"IconDivFooter"}> <BsInstagram/></span>
                  <span className={"IconDivFooter"}> <BsPinterest/></span>
                </section>
              </div>
            </div>
            <div className={"FooterRight"}>
              <h1 className={"FooterTitle"}>newsletter</h1>
              <div className={"FooterR-Content"}>
                <div className={"RocketDiv"}>
                  <img src={rocket} alt={"rocket"} className={"RocketImg"}/>
                </div>
                <input className={"InputFooter"}
                       type="text"
                        placeholder={"enter you email"}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <BtnDefault BtnText={"subscribe"}
                            className={"BtnBlackFooter"}
                            BtnIcon={<FiArrowUpRight className={"BtnIcon"}/>}
                            onClick={handleSubmit}
                />
                {error && <span className={"ErrorFooter"}>Digite um Email Válido</span>}
              </div>
            </div>
          </div>

          {/*NavBar*/}
          <div className={"FooterNavbar"}>
            <ul className={"FooterNavbar-Left"}>
              <li className={"LiFooter"}>
                <Link to={"/"}>home</Link>
              </li>
              <li className={"LiFooter"}>
                <Link to={"/About"}>about</Link>
              </li>
              <li className={"LiFooter"}>
                <Link to={"/Contact"}>contact</Link>
              </li>
            </ul>
            <ul className={"FooterNavbar-Right"}>
              <li className={"LiFooter"}>licenses</li>
              <li className={"LiFooter"}>work</li>
              <li className={"LiFooter"}>changelog</li>
            </ul>
          </div>
          <div className={"FooterCopy"}>
            <span>Copyright © workment | Developed by Lucas Cardoso </span>
          </div>
        </div>
      </Slide>
      <section className={"FooterSides"}>

      </section>
    </div>
  )
}; export default Footer