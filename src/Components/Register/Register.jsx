import './Register.css'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar2";
import BackgruoundVideo from "../BakgroundVideo/BackgruoundVideo"
import Card2 from '../Card/Card2';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';

export default function Register({source,name,summary,description,form,sourc1,nam1,no1,sourc2,nam2,no2,sourc3,nam3,no3,sourc4,nam4,no4,facsource,facname}) {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <div className="container7">
    <BackgruoundVideo />
        <Navbar />
        <div className="inner-container">
            <div className="event-hero">
              <img src={source}/>
              <h1 className='heading'>{name}</h1>
            </div>
            <div className="event-desc">
                <h1>Summary:</h1>
                <p>{summary}</p>
                <h1>Description:</h1>
                <p>{description}</p>
            </div>
            <div className='heading co'>Co-ordinators</div>
            <div className='fac-pics'>
              <Card2 sourc={facsource} nam={"Faculty Co-ordinator"} no={facname} />
            </div>
            <div className='pics'>
              <Card2 sourc={sourc1} nam={nam1} no={no1} />
              <Card2 sourc={sourc2} nam={nam2} no={no2} />
              <Card2 sourc={sourc3} nam={nam3} no={no3} />
              <Card2 sourc={sourc4} nam={nam4} no={no4} />
            </div>
            <div className='btn'><a style={{color:'black'}} href={form}><button className='register bttn'>Register</button></a></div>
        </div>
        <Footer />
    </div>
  )
}
