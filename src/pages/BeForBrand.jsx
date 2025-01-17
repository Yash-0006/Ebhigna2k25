import Register from "../Components/Register/Register";
import poster from "../assets/be_for_brand._poster.png"
import be1 from "../assets/beforbrand1.jpg"
import be2 from "../assets/beforbrand2.jpg"
import be3 from "../assets/beforbrand3.jpg"
import be4 from "../assets/beforbrand4.jpg"
import f1 from "../assets/fac1.jpg"

export default function BeForBrand() {
  return (
    <Register   
    facsource={f1} facname={"Mr M S V V Ramesh"}    
    sourc1={be2} nam1="M RENU SRI" no1="6281713481"
    sourc2={be1} nam2="PATHAN" no2="7095783509"
    sourc3={be3} nam3="D Ravi Teja" no3="6304191781"
    sourc4={be4} nam4="K SRI MRUDULA" no4="8309353991"
    form={"https://forms.gle/WJKrcnAPotXecQR58"} source={poster} name={"Be for Brand"} summary={" Be for Brand is an innovative online event organized by the Department of CSE AI, designed to unleash your creativity and marketing prowess. This contest challenges participants to create captivating ads, promotional videos, or posters on AI tools and applications. Whether you’re a solo creator or part of a dynamic team, this is your chance to showcase your ingenuity and make a lasting impression."} description={" Be for Brand is an online event where you can use your creative skills to design promotional content like ads, videos, or posters that highlight the power and potential of AI tools and applications. It's the ultimate platform to exhibit your branding talents.\n\n1. Participants can compete individually or in teams of 2-3 members.\n2. Content must be submitted in the form of either videos or posters.\n3. All submissions must be sent to the official WhatsApp group before the deadline.\n4. The initial deadline is 07/01/2025 at 3:00 PM, with an extended deadline of 6:00 PM for late submissions.\n5. Submissions beyond the extended deadline will not be accepted under any circumstances.\n6. Creativity and originality are key criteria for evaluation.\n\n  Bring your ideas to life, let your imagination soar, and showcase your creativity to the world! Don't miss the chance to make your mark in Be for Brand!"}/>
  )
}
