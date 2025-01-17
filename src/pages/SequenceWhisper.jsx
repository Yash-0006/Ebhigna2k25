import Register from "../Components/Register/Register";
import poster from "../assets/sequence_whishper_poster.png"
import se1 from "../assets/sequence_whisper1.jpg"
import se2 from "../assets/sequence_whisper2.jpg"
import se3 from "../assets/sequence_whisper3.jpg"
import se4 from "../assets/sequence_whisper4.jpg"
import f3 from "../assets/fac3.jpg"

export default function SequenceWhisper() {
  return (
    <Register
      facsource={f3} facname={"Mrs Ch Sri Divya"} 
      sourc1={se1} nam1="B AKSHITA NEHA" no1="7997134497"
      sourc2={se2} nam2="N VEDAAKSHAYA" no2="9391601278"
      sourc3={se3} nam3="I PARVATHI DEVI" no3="9494226476"
      sourc4={se4} nam4="M S L P Lahari" no4="9346643353"
      form={"https://docs.google.com/forms/d/1Unzam7Y2DZlPgCT8cefiERLy7K_v_Dgk7Bml5HP6Fq8/edit"} source={poster} name={"Sequence Whisper"} summary={" Sequence Whisperer is an exciting and fast-paced team-based game where participants are tasked with decoding jumbled patterns within a limited time. The objective is to unscramble a series of mixed-up code sequences and use the corrected pattern to identify the provided objects. This game fosters collaboration, problem-solving, and quick thinking, making it both engaging and challenging."} description={"1. Team Formation: Players are divided into teams, with each team working together to solve the puzzle.\n2. Jumbled Code Delivery:Each team is given a scrambled sequence of codes that represent a pattern. The codes may involve numbers, symbols, or other elements that are out of order.\n3. Decoding the Pattern:Within the allotted time, teams need to unscramble the given code sequence. The goal is to identify the correct pattern by rearranging the jumbled elements.\n4. Pattern Identification:Once the correct sequence is formed, teams use it to guess the pattern and match it with the provided objects.\n5. Completion:The team that successfully decodes the code and identifies the correct pattern first wins the round.\n\n  This game requires a combination of analytical thinking, speed, and teamwork, making it both exhilarating and mentally stimulating."}/>
  )
}
