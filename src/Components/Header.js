import "./Header.css"
import {RxEnvelopeClosed} from "react-icons/rx";
import StarIcon from "../assets/StarIcon.png"
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        {/*Lateral Esquerda*/}
        <section className={"HeaderSides"}>
          <img src={StarIcon} alt={"StarIcon"} className={"HeaderIcons"}/>
        </section>

        <div className={"HeaderWorkment"}>
          workment
        </div>

        {/*Lista*/}
        <div className={"HeaderList"}>
          <ul className={"UlHome"}>
            <li className={"LiHome"}>
              <NavLink to={"/"}>home</NavLink>
            </li>
            <li className={"LiHome"}>
              <NavLink to={"/Work"}>work</NavLink>
            </li>
            <li className={"LiHome"}>
              <NavLink to={"/About"}>About</NavLink>
            </li>
            <li className={"LiHome"}>
              <NavLink to={"/Blog"}>Blog</NavLink>
            </li>
            <li className={"LiHome"}>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        {/*Lateral Direita*/}
        <section className={"HeaderSides"}>
          <RxEnvelopeClosed className={"HeaderIcons"}/>
        </section>
      </div>
    </div>
  )
}; export default Header