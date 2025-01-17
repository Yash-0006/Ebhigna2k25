import "./Card2.css"

export default function Card2({sourc,nam,no}) {
  return (
    <div className="card2">
        <img src={sourc} />
        <div className="details">
        <h1>{nam}</h1>
        <p>{no}</p>
        </div>
    </div>
  )
}
