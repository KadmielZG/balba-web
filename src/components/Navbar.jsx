import "../css/Navbar.css"
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    //Variable del states del navbar responsivo
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    // Cerrar menú al hacer click fuera
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <button onClick={() => navigate("/")} >
                    <img src={logo} alt="Logo de la empresa" className="img-logo" />
                    <span className="logo-text">Balba</span>
                </button>
            </div>

            {/* Links Desktop*/}
            <ul className="navbar-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Acerca de</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>

            {/* Boton hamburguesa (mobile)*/}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            {menuOpen && <div className="menu-overlay" />}

            {/* Slide menu */}
            <div ref={menuRef} className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>Acerca de</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
            </div>

        </nav>
    )
}