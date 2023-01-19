import "./Header.css"
import {RxEnvelopeClosed} from "react-icons/rx";
import StarIcon from "../assets/StarIcon.png"
import {Link} from "react-router-dom";

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
              <Link to={"/"}>home</Link>
            </li>
            <li className={"LiHome"}>
              <Link to={"/Work"}>work</Link>
            </li>
            <li className={"LiHome"}>
              <Link to={"/About"}>About</Link>
            </li>
            <li className={"LiHome"}>
              <Link to={"/Blog"}>Blog</Link>
            </li>
            <li className={"LiHome"}>
              <Link to={"/Contact"}>Contact</Link>
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