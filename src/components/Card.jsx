import "../css/Card.css"

export default function Card({image,title, description}){
    return(
        <div className="card-item">
            <img src={image} alt="Card Image" className="card-img"/>
            <p>{title}</p>
            <p> {description}  </p>
        </div>
    )
}