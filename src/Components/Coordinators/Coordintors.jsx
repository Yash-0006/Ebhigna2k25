import Card from "../Card/Card"
import "./Coordinators.css"
import hod from "/src/assets/hod.jpg"
import faculty from "/src/assets/faculty.jpg"
import std1 from "/src/assets/std1.jpg"
import std2 from "/src/assets/std2.jpg"

export default function Coordintors() {
  return (
    <div className="big-container2">
    <div className="heading">Contact Us</div>
    <div className="container5" id="coordinators">
      <div className="small-cont"><Card source={hod} role="Head of the Department (CSE-AI)" specs="Mrs.K.Lakshmi Viveka" na="Associate Professor"/>
      <Card source={faculty} role="Faculty Coordinator" specs="Mrs.T.Tejasvi" na="Assistant Professor" /></div>
      <div className="small">
      <div className="heading coo">Student Co-ordinators</div>
      <div className="small-cont">
      <Card source={std1} role="P.Sashank Rao" specs="7993341023"/>
      <Card source={std2} role="V.Alokhya" specs="9182284070"/>
      </div>
      </div>
    </div>
    </div>
  )
}
