import { useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "../css/Home.css"
import CardContainer from "../components/CardContainer";
import snorkelImg from "../assets/snorkel.jpg";
import rentImg from "../assets/rent.jpg";
import taxiImg from "../assets/taxi.jpg";
import transferImg from "../assets/transfer.jpg";
import yateImg from "../assets/yate.jpg";
import pescaImg from "../assets/pesca.jpg";
import Modal from "../components/Modal";



const cardsData = [
  { id: 1, title: "Snorkel", image: snorkelImg,descripcion: "Explora arrecifes y vida marina con guías expertos." },
  { id: 2, title: "Car rental", image: rentImg, descripcion: "Renta de autos económicos para toda la familia" },
  { id: 3, title: "Taxi", image: taxiImg, descripcion: "Servicio de taxi seguro y puntual." },
  { id: 4, title: "Transfer", image: transferImg, descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " },
  { id: 5, title: "Yate", image: yateImg, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " },
  { id: 6, title: "Pesca deportiva", image: pescaImg, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " }
];


export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCard,setSelectedCard] = useState(null);

  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Hero search={search} setSearch={setSearch} />
      <div className="servicios-container">
         <p className="servicios-text">Nuestros servicios</p>
      </div>
     
      <CardContainer>
        {filteredCards.length > 0 ? (
          filteredCards.map(card => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              onClick={()=>setSelectedCard(card)}
            />
          ))
        ) : (
          <p className="no-results">
            No hay resultados para "{search}"
          </p>
        )}
      </CardContainer>
{/* MODAL */}
      {selectedCard && (
        <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}

    </>
  );
}