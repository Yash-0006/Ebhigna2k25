import g1 from "/src/assets/g1.jpg"
import g2 from "/src/assets/g2.jpg"
import g3 from "/src/assets/g3.jpg"
import g4 from "/src/assets/g4.jpg"
import g5 from "/src/assets/g5.jpg"
import g6 from "/src/assets/g6.jpg"
import g7 from "/src/assets/g7.jpg"
import g8 from "/src/assets/g8.jpg"
import g9 from "/src/assets/g9.jpg"
// import g10 from "/src/assets/g10.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./Gallery.css"
import { useEffect, useState } from "react";

export default function Gallery() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const isMobile = screenWidth < 768;

  return (
    <div className='gallery-container' id="gallery">
    <div className="heading">Gallery</div>
        <Carousel autoPlay="true" interval="5000" infiniteLoop="true" emulateTouch="true" thumbWidth={75} showThumbs={ isMobile ? false : true}>
                <div>
                    <img src={g1} />
                    <p className="legend">Ebhigna 2024</p>
                </div>
                <div>
                    <img src={g2} />
                    <p className="legend">Engineer's Day</p>
                </div>
                <div>
                    <img src={g3} />
                    <p className="legend">Engineer's Day Winners</p>
                </div>
                <div>
                    <img src={g4} />
                    <p className="legend">Strides 2024</p>
                </div>
                <div>
                    <img src={g5} />
                    <p className="legend">78th Independence Day </p>
                </div>
                <div>
                    <img src={g6} />
                    <p className="legend">Strides 2023</p>
                </div>
                <div>
                    <img src={g7} />
                    <p className="legend">Engineer's Day</p>
                </div>
                <div>
                    <img src={g8} />
                    <p className="legend">Cse-AI</p>
                </div>
                <div>
                    <img src={g9} />
                    <p className="legend">Festive Celebrations</p>
                </div>
            </Carousel>
  </div>
  )
}
