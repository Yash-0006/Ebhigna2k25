import Register from "../Components/Register/Register";
import poster from "../assets/memetrix_poster.png";
import memetrix1 from "../assets/memetrix1.jpg";
import memetrix2 from "../assets/memetrix2.jpg";
import memetrix3 from "../assets/memetrix3.jpg"
import memetrix4 from "../assets/memetrix4.jpg"
import f4 from "../assets/f4.jpg"

export default function Memetrix() {
  return (
    <div>
      <Register 
      facsource={f4} facname={"Mr M Veera Babu"} 
      sourc1={memetrix1} nam1="M VINAY" no1="7093577944"
      sourc2={memetrix2} nam2="V SANJANA" no2="8686660705"
      sourc3={memetrix3} nam3="S HEMA SUNDAR" no3="8639574229"
      sourc4={memetrix4} nam4="R KEERTHANA" no4="7330793703"
      form={"https://forms.gle/F7hqbD9AJsYRrBALA"} source={poster} name={"Memetrix AI"} summary={"  Memetrix Ai is an exciting meme contest organized by Department of CSE AI, blending creativity with humor. The contest challenges participants to create unique, witty memes that can capture attention and evoke laughter, all while showcasing originality. Whether it's a play on college life, tech trends, or relatable everyday experiences, this event is the perfect stage for students to express their meme-making talents."} description={"  Memetrix Ai is an Instagram meme contest where you can test your creativity and popularity! It's the perfect way to showcase your Creativity.\n\n1. The event will be conducted on Instagram.\n2. Only one meme is allowed per participant.\n3. We will post your meme on our event page.\n4. Fake likes are strictly prohibited.\n5. Winners will be determined based on the creativity of the meme and the post's reach.\n6. The deadline to submit your meme to your respective coordinator is 07/01/2025 at 12:00 PM.\n7. Post reach will be considered up until 07/01/2025 at 9:00 PM.\n\n  Make your memes stand out and get ready to go viral!"}/>
    </div>
  )
}
