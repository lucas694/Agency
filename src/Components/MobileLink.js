import {Link} from "react-router-dom";
import {useState} from "react";
import { motion } from "framer-motion"



const MobileLink = (props) =>{
  const[toggle, setToggle] = useState(false);
  const[click, setClick] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  const handleClick = () => {
    setClick(!click);
  }

  return(
    <li onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
        className={"LiMobileHeader"}
        onClick={handleClick}
    >
      <Link to={props.Link} className={"LinkMobileHeader"}>
        {props.Icon}
        <motion.span className={toggle ? "NameMobileHeader" : "hidden"}
                     animate={toggle ? { x: -2 } : { x: 15 }}
                     transition={{duration: 0.2}}>{props.Name}</motion.span>
      </Link>
    </li>
  )
};export default MobileLink