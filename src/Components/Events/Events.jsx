import "./Events.css"
import be from "/src/assets/be_for_brand.jpg"
import he from "/src/assets/hidden_features.jpg"
import se from "/src/assets/sequence_whisper.jpg"
import me from "/src/assets/memetrix.jpg"
import { Link } from "react-router-dom"

export default function Events() {
  return (
    <div className="container4" id="events">
        <div className="heading">Events</div>
        <div className="all-events">
          <div className="half-events half-events1">
            <div className="img left-img be-img"><img src={be}/></div>
            <div className="desc left-desc hid-desc">
              <h1 className="event-name">Hidden Fortunes</h1>
              <p className="description">AI-powered treasure hunt game that challenges players to solve clues and uncover hidden rewards using intelligent insights.</p>
              <div className="buttns"> 
              <a style={{color:'black'}} href="https://unstop.com/o/Wy2DP0n?lb=6ZriZkrP&utm_medium=Share&utm_source=shortUrl"><button className="buttn left-btn">Register</button></a>
              <Link to={"/hiddenfortunes"} ><button className="buttn knowmore" style={{color:'white'}}>Know More</button></Link>
              </div>
            </div> 
          </div>


          <div className="half-events half-events2 special-half">
            <div className="desc right-desc">
              <h1 className="event-name">Be for Brand</h1>
              <p className="description">a dynamic event focused on creating engaging video ads that showcase real-life applications of AI</p>
              <div className="buttns"> 
              <a style={{color:'black'}} href="https://forms.gle/WJKrcnAPotXecQR58"><button className="buttn left-btn">Register</button></a>
              <Link to={"/beforbrand"} ><button className="buttn knowmore" style={{color:'white'}}>Know More</button></Link>
              </div>
            </div>  
            <div className="img right-img"><img src={he}/></div>
          </div>

          <div className="half-events half-events1">
          <div className="img left-img seq-img"><img src={se}/></div>
            <div className="desc left-desc">
              <h1 className="event-name">Memetrix AI</h1>
              <p className="description">a tech-themed meme contest where participants unleash their creativity and humor to create the funniest AI and tech-related memes.</p>
              <div className="buttns"> 
              <a style={{color:'black'}} href="https://forms.gle/F7hqbD9AJsYRrBALA"><button className="buttn left-btn">Register</button></a>
              <Link to={"/memetrix"} ><button className="buttn knowmore" style={{color:'white'}}>Know More</button></Link>
              </div>
            </div>
            </div>
            <div className="half-events half-events2">
            <div className="desc right-desc seq-desc">
              <h1 className="event-name">Sequence whisper</h1>
              <p className="description">a code analysis challenge where participants decode hidden patterns in code snippets to reveal the correct output sequence, testing logic and programming skills.</p>
              <div className="buttns"> 
              <a style={{color:'black'}} href="https://docs.google.com/forms/d/1Unzam7Y2DZlPgCT8cefiERLy7K_v_Dgk7Bml5HP6Fq8/edit"><button className="buttn left-btn">Register</button></a>
              <Link to={"/sequencewhisper"} ><button className="buttn knowmore" style={{color:'white'}}>Know More</button></Link>
              </div>
            </div>
            <div className="img right-img"><img src={me} /></div>
            </div>
        </div>
    </div>
  )
}
