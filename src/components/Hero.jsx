import "../css/Hero.css"
import heroImg from "../assets/chichen.jpg"
import SearchBar from "./SearchBar"


export default function Hero({ search, setSearch }){
    return(
        <section className="hero" style={{backgroundImage: `url(${heroImg})`}}>
            <div className="hero-overlay">
                <h1>All in one place</h1>
                <SearchBar  search={search} setSearch={setSearch}/>
            </div>
        </section>
    )
}