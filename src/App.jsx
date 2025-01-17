import About from "./Components/About/About";
import BackgruoundVideo from "./Components/BakgroundVideo/BackgruoundVideo";
import Coordintors from "./Components/Coordinators/Coordintors";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <div>
    <BackgruoundVideo/>
    <Navbar />
    <Hero />
    <About />
    <Events />
    <Gallery />
    <Coordintors />
    <Footer />
    </div>
  )
}
