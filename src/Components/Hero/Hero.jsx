import "./Hero.css"
import { Link } from "react-scroll";
import strides from "/src/assets/strides.png";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export default function Hero() {
  return (
    <div className="container2" id="hero">  
        <div className="logo1"><img src={strides  } /></div>
        <div className="logo2">EBHIGNA 2K25</div>
        <div className="para">Ebhigna, hosted by the Department of Computer Science (Artificial Intelligence), is a platform for innovation, where students can showcase their technical prowess in AI and computing.</div>
        <p className="da">&quot;The countdown is on! See you on 8<sup>th</sup> Jan 2025&quot;</p>
        <FlipClockCountdown className="timer" to={"2025/01/08"} />
        <div className="buttons">
          <Link activeClass="active" to="events" spy={true} smooth={true} offset={-100} duration={700}><button className="register">Register</button></Link>
          <a href="https://drive.google.com/file/d/1fk5RdYmVam1QkPqYtehEZQrhBtBEnSO4/view?usp=drive_link"><button className="poster">View Poster</button></a>
        </div>
    </div>
  )
}
