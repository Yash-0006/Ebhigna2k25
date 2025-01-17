import "./BackgroundVideo.css";
import bg from "/src/assets/bg.mp4";
export default function BackgruoundVideo() {
  return (
    <video autoPlay loop muted className="background-video" src={bg} />
  )
}
