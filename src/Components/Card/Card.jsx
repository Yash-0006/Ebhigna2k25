import "./Card.css"

export default function Card({source,role,specs,na}) {
  return (
    <div className="caard">
        <img src={source} />
        <h1>{role}</h1>
        <p>{specs}</p>
        <p>{na}</p>
    </div>
  )
}
