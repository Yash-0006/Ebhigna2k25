import Register from "../Components/Register/Register";
import poster from "../assets/hidden_fortunes_poster.png"
import he1 from "../assets/hiidden1.jpg"
import he2 from "../assets/hidden2.jpg"
import he3 from "../assets/hidden3.jpg"
import he4 from "../assets/hidden4.jpg"
import f2 from "../assets/fac2.jpg"

export default function HiddenFortunes() {
  return (
    <Register
    facsource={f2} facname={"Ms S Vijaya Durga"}    
    sourc1={he1} nam1="L APARNA" no1="8367223555"
    sourc2={he2} nam2="K AJAY KUMAR" no2="9391156421"
    sourc3={he3} nam3="A PARIMALA" no3="7382719333"
    sourc4={he4} nam4="SK TOWFIQ" no4="7993544882"
    form={"https://unstop.com/o/Wy2DP0n?lb=6ZriZkrP&utm_medium=Share&utm_source=shortUrl"} source={poster} name={"Hidden Fortunes"} summary="  Hidden Fortunes is an engaging AI-based treasure hunt that invites participants to decode clues and dive into the world of Artificial Intelligence! This challenge is designed to test your knowledge of AI concepts, applications, and history, as well as your ability to solve problems creatively. Compete with fellow enthusiasts as you uncover hidden treasures of knowledge through thought-provoking challenges." description={"  Join us in the quest for Hidden Fortunes! This unique treasure hunt will present AI-themed clues, each leading to questions that cover different aspects of Artificial Intelligence. It's a fun way to deepen your understanding of AI while challenging your mind.\n\n1. The treasure hunt will feature a series of AI-related questions, each based on a clue provided at the start.\n2. Each question carries points to earn, with quicker responses rewarded with higher points.\n3. Participants must solve each clue to progress through the treasure hunt and accumulate as many points as possible.\n4. ⏰ A fixed time limit will be set for the entire treasure hunt, so manage your time wisely to attempt all questions.\n5. You can only move to the next question after successfully answering the current one.\n6. Questions will span various AI topics, including machine learning, neural networks, real-world applications, and AI breakthroughs. \n7. The treasure hunt will automatically submit once the time limit is up, so stay sharp and focused!"} />
  )
}
