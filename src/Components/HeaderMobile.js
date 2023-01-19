import"./HeaderMobile.css"
import{Link} from "react-router-dom";
import {ImHome3} from "react-icons/im";
import {MdWork} from "react-icons/md";
import {SiMicrodotblog} from "react-icons/si";
import {BsInfoCircleFill, BsPersonCircle} from "react-icons/bs";
import {useState} from "react";
import MobileLink from "./MobileLink";
import {VscChromeClose} from "react-icons/vsc";
import {GrMenu} from "react-icons/gr";
import { motion } from "framer-motion"



const HeaderMobile = () => {
  const[toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return(
    <div className={"HeaderMobileContainer"}>
      <motion.div className={toggle ? 'hidden' : "HeaderMobileContent"}
           animate={ toggle ? { x: 200 } : { x: 0 }}
           transition={{duration: 0.4}}>
        <div className={"HeaderWorkmentMobile"}>
          workment
        </div>

        <div className={toggle ? "hidden" : "relative"}>
          <button onClick={handleToggle}>
            <GrMenu className={"MenuIconMobile"}/>
          </button>
        </div>
      </motion.div>

      <motion.div className={toggle ? "ContentMobileMenu" : "hidden"}
                  animate={ toggle ? { y: 0 } : { y: -100 }}
                  transition={{duration: 0.2}}>
        <button onClick={handleToggle} className={"BtnClose"}>
          <VscChromeClose className={"CloseIconMobile"}/>
        </button>
        <ul className={toggle ? "UlMobileHeader" : "hidden"}>
          <MobileLink Icon={<ImHome3 className={"IconMobile"}/>}
                      Name={"home"}
                      Link={"/"}
          />
          <MobileLink Icon={<MdWork className={"IconMobile"}/>}
                      Name={"work"}
                      Link={"/Work"}
          />
          <MobileLink Icon={<BsInfoCircleFill className={"IconMobile"}/>}
                      Name={"about"}
                      Link={"/About"}
          />
          <MobileLink Icon={<SiMicrodotblog className={"IconMobile"}/>}
                      Name={"blog"}
                      Link={"/Blog"}
          />
          <MobileLink Icon={<BsPersonCircle className={"IconMobile"}/>}
                      Name={"contact"}
                      Link={"/Contact"}
          />
        </ul>
      </motion.div>

    </div>
  )
};export default HeaderMobile