import"./HeaderMobile.css"
import{Link} from "react-router-dom";
import {ImHome3} from "react-icons/im";
import {MdWork} from "react-icons/md";
import {SiMicrodotblog} from "react-icons/si";
import {BsInfoCircleFill, BsPersonCircle} from "react-icons/bs";
import {useState} from "react";
import MobileLink from "./MobileLink";

const HeaderMobile = () => {

  return(
    <div className={"HeaderMobileContainer"}>
      <ul className={"UlMobileHeader"}>
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

    </div>
  )
};export default HeaderMobile