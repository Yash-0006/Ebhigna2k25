import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(true);
 
  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="bigcontainer">
    <div className="container">
        <div className="logo"><Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>EBHIGNA</Link></div>
        <div className={isOpen ? "items" : "items active"}>
            <div className="item"><Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></div>
            <div className="item"><Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={600}>About</Link></div>
            <div className="item"><Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={700}>Events</Link></div>
            <div className="item"><Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={700}>Gallery</Link></div>
            <div className="item contact"><Link style={isOpen ? {color:"black"} : {color : "rgb(237, 233, 233)"}} activeClass="active" to="/" spy={true} smooth={true} offset={-150} duration={800}>Contact us</Link></div>
        </div>
        <button className={isOpen ? "menu" : "menu active"} onClick={toggleMenu}>{isOpen ? <FaBars />: <FaTimes/>}</button>
    </div>
    </div>
  )
}
