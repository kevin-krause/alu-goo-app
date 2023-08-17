import React from 'react'
import './Cards.css'

interface CardsProps {
    title: string
    address: string
    avaliable: string
    price: number | null
    image: string
}

const Cards: React.FC<CardsProps> = props => {
    return (
        <div className="card">
            <img src={props.image} alt="item" />
            <h4>{props.title}</h4>
            <div className="minorText">
                <p>{props.address}</p>
                <p>{props.avaliable}</p>
            </div>
            <p>R${props.price}</p>
        </div>
    )
}

export default Cards
