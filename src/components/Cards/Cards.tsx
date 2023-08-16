import React from 'react'
import './Cards.css'

const Cards = () => {
    return (
        <div className="card">
            <img
                src="https://avatars.githubusercontent.com/u/80826558?v=4"
                alt="item"
            />
            <h4>Marido de aluguel</h4>
            <div className="minorText">
                <p>282 km de distância</p>
                <p>20 - 25 agosto</p>
            </div>
            <p>R$139,70 por dia</p>
        </div>
    )
}

export default Cards
