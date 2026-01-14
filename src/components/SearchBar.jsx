import React from 'react';
import styled from 'styled-components';
import "../css/SearchBar.css"


export default function SearchBar({ search, setSearch }) {
    return (
        <div className='search-container'>
            <div className="search-wrapper">
                <input
                    type="text"
                    className="search-input"
                    placeholder="🔍Busca un servicio"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {search && (
                    <button
                        className="clear-btn"
                        onClick={() => setSearch("")}
                        aria-label="Limpiar búsqueda"
                    >
                        ✕
                    </button>
                )}
            </div>

        </div>
    )
}