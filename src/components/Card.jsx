import "../css/Card.css"

export default function Card({image,title, onClick}){
    return(
        <div className="card-item" onClick={onClick}>
            <img src={image} alt="Card Image" className="card-img"/>
            <p className="titulo">{title}</p>
        </div>
    )
}