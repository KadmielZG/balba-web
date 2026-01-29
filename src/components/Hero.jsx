import { useEffect, useState } from "react"
import "../css/Hero.css"
import heroImg from "../assets/chichen.jpg"
import SearchBar from "./SearchBar"
import logo from "../assets/logo.png"


//Importando imágenes del hero
import taxiHero from "../assets/taxiHero.jpg";
import transferHero from "../assets/transferHero.jpg";
import rentHero from "../assets/rentalHero.jpg";
import snorkelHero from "../assets/snorkelHero.jpg"
import yateHero from "../assets/yateHero.jpg"
import pescaHero from "../assets/pescaHero.jpg"


//Arreglo con los datos del slide
const slides = [
    {
        image: taxiHero,
        title: "Taxi Service",
    },
    {
        image: transferHero,
        title: "Transfers",
    },
    {
        image: rentHero,
        title: "Car Rental",
    },
    {
        image: snorkelHero,
        title: "Snorkel"
    },
    {
        image: yateHero,
        title: "Yate"
    },
    {
        image: pescaHero,
        title: "Pesca deportiva"
    },
];


export default function Hero({ search, setSearch }) {
    const [active, setActive] = useState(0);


    useEffect(() => {
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(id);
    }, []);




    return (
        <section className="hero">
            {/* BACKGROUND LAYERS */}
            <div className="hero-bg">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-bg-img ${index === active ? "active" : ""}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>
            {/* CONTENT */}
            <div className="hero-overlay">
                <div className="logo-container">
                    <img src={logo} alt="Logo Balba" className="img-logo" />
                    <h1>{slides[active].title}</h1>
                </div>
                <SearchBar search={search} setSearch={setSearch} />
            </div>
        </section>
    )
}