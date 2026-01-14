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


const cardsData = [
  { id: 1, title: "Snorkel", image: snorkelImg, description: "Lorem ipsum xdxdxd" },
  { id: 2, title: "Car rental", image: rentImg, description: "Lorem ipsum xdxdxd" },
  { id: 3, title: "Taxi", image: taxiImg, description: "Lorem ipsum xdxdxd" },
  { id: 4, title: "Transfer", image: transferImg, description: "Lorem ipsum xdxdxd" },
  { id: 5, title: "Yate", image: yateImg, description: "Lorem ipsum xdxdxd" },
  { id: 6, title: "Pesca deportiva", image: pescaImg, description: "Lorem ipsum xdxdxd" }
];


export default function Home() {
  const [search, setSearch] = useState("");

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
              description={card.description}
            />
          ))
        ) : (
          <p className="no-results">
            No hay resultados para "{search}"
          </p>
        )}
      </CardContainer>
    </>
  );
}