import {Link} from "react-router-dom";
import {useState} from "react";


const MobileLink = (props) =>{
  const[toggle, setToggle] = useState(false);
  const[click, setClick] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }


  return(
    <li onMouseEnter={handleToggle}
        onMouseLeave={handleToggle} className={"LiMobileHeader"}>
      <Link to={props.Link} className={"LinkMobileHeader"}>
        {props.Icon}
        <span className={toggle ? "NameMobileHeader" : "hidden"}>{props.Name}</span>
      </Link>
    </li>
  )
};export default MobileLink